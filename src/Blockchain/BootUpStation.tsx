import { ethers, BigNumber } from 'ethers';

import installationCoreChamberABI from '../ABI/CoreChamber.json';
import BobotGenesisABI from '../ABI/BobotGenesis.json';

import { bobotGenesisAddress, installationCoreChamberAddress } from './ContractAddress';

import axios from 'axios';

import * as blockchain from './BlockchainFunctions';
import * as blockchainSender from './BlockchainSender';
import { MetaMaskAccounts } from './MetaMaskLogin';

import { chainID } from '../Pages/Multiplayer';
import { testChainID } from '../Pages/MultiplayerTest';

// guardian should be able to mint 1 and lunar is 2
const guardiansWhitelists: Array<String> = ['QmYAHbU5mCgYzv3kqSraVTNEVShCmCjt6QteyRJsNAxKCi', 'QmZgEpatUuwZjzjTxgkiYiAAY3GFsxzaqcR9eWRbL6e2d6']; //'QmVn9wwUb6aeEshc82DfV8c2VMK4fKk1picFBfDXeBYLiC';
const lunarsWhitelist: string = 'Qme8KXJyc9rJV71X5PfzQR7qrmqdHZkBwB8bctaXRiJCjF';

const verifyNetwork = (response: ethers.providers.Network): boolean => {
  if (
    (response.chainId === chainID && window.location.pathname === '/play') ||
    (response.chainId === testChainID && window.location.pathname === '/operationdarkarts')
  ) {
    return true;
  }

  return false;
};

const stakeGenesis = async (contract: ethers.Contract, bobotID: any) => {
  // convert from string to number
  const tokenID = parseInt(bobotID);

  const isStaked = await contract.isAtCoreChamberGenesis(tokenID);
  // get core points value and convert from big number to number
  const corePointsResponse = await contract.corePointsEarnedGenesis(tokenID);
  const corePoints = BigNumber.from(corePointsResponse?._hex).toNumber();

  try {
    if (isStaked === true) {
      contract
        .unstakeGenesis(tokenID)
        .then(async (response: any) => {
          console.log('unstake response:', response);
          blockchainSender.ReceiveTokenStakeStatus_Callback(tokenID, true, corePoints);
        })
        .catch((error: any) => {
          console.log(error);
        });
    } else {
      await contract
        .stakeGenesis(tokenID)
        .then(async (response: any) => {
          console.log('stake response:', response);
          blockchainSender.ReceiveTokenStakeStatus_Callback(bobotID, true, corePoints);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  } catch {
    console.log('An error has occured when staking!');
  }
};

// currently bobotID is passed as a string from unity
export async function StakeBobot(bobotID: any) {
  if ((window as any).ethereum) {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(installationCoreChamberAddress, installationCoreChamberABI.output.abi, signer);
    console.log(contract);

    provider
      .getNetwork()
      .then((response) => {
        if (verifyNetwork(response) === true) {
          stakeGenesis(contract, bobotID);
        } else {
          console.log('Cannot stake due to incorrect network!');
        }
      })
      .catch((error) => console.log(error));
  }
}

//mint bobot
export async function MintBobotTest() {
  if ((window as any).ethereum) {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(bobotGenesisAddress, BobotGenesisABI.output.abi, signer);
    console.log(contract);

    // 1) call the mintBobotTest() inside the solidity contract
    // 2) response is of type TransactionResponse, we use wait() to check if
    // transaction has successfully gone through
    // 3) The status of a transaction is 1 is successful or 0 if it was reverted.
    // https://docs.ethers.io/v5/api/contract/contract/#contract-functionsSend
    // https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse
    // docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt
    try {
      contract.mintBobotTest().then((response: any) => {
        console.log('mint response: ', response);

        response
          .wait()
          .then((waitResponse: any) => {
            if (waitResponse.status === 1) {
              blockchainSender.Mint_Callback(blockchain.BlockchainError.NoError);
            }
          })
          .catch((error: any) => console.log(error));
      });
    } catch {
      //error detection
      blockchainSender.Mint_Callback(blockchain.BlockchainError.NetworkBusy);
    }
  }
}

interface MerkleResponseProps {
  data: {
    leafValue: String;
    leafHex: String;
    leafHash: String;
    proof: Array<String>;
  };
}

// refer to https://www.merkleme.io/documentation
const generateMerkle = async () => {
  let responseGuardians = {} as MerkleResponseProps;
  let responseLunar = {} as MerkleResponseProps;
  //merkle proof axios
  try {
    const requestBodyLunars = {
      whitelist: 'https://gateway.pinata.cloud/ipfs/' + lunarsWhitelist,
      leafToVerify: MetaMaskAccounts[0],
    };
    responseLunar = await axios.post('https://merklemeapi.vincanger.repl.co/verify/proof', requestBodyLunars);
    console.log(responseLunar);

    return responseLunar;
  } catch {
    console.log('responseLunar is not found!');
  }

  for (let i = 0; i < guardiansWhitelists.length; ++i) {
    try {
      const requestBodyGuardians = {
        whitelist: 'https://gateway.pinata.cloud/ipfs/' + guardiansWhitelists[i],
        leafToVerify: MetaMaskAccounts[0],
      };
      responseGuardians = await axios.post('https://merklemeapi.vincanger.repl.co/verify/proof', requestBodyGuardians);
      console.log(responseGuardians);

      return responseGuardians;
    } catch {
      console.log('responseGuardians is not found!');
    }
  }

  return {} as MerkleResponseProps;
};

const mintGenesis = async (contract: ethers.Contract, responseMerkle: MerkleResponseProps) => {
  const proofMerkle: String[] = responseMerkle?.data?.proof === undefined ? [] : responseMerkle?.data?.proof;

  if (proofMerkle.length === 0) {
    blockchainSender.Log_Callback('You are not whitelisted to mint!');
    blockchainSender.LoadingScreenToggle_Callback(false);
  } else {
    try {
      contract
        .mintBobot(proofMerkle)
        .then((response: any) => {
          console.log('mint response: ', response);

          response
            .wait()
            .then((waitResponse: any) => {
              if (waitResponse.status === 1) {
                blockchainSender.Mint_Callback(blockchain.BlockchainError.NoError);
                blockchainSender.LoadingScreenToggle_Callback(false);
              }
            })
            .catch((error: any) => {
              blockchainSender.LoadingScreenToggle_Callback(false);
              console.log(error);
            });
        })
        .catch((error: any) => {
          console.log(error);
          blockchainSender.LoadingScreenToggle_Callback(false);
          blockchainSender.Log_Callback(error?.data?.message);
        });
    } catch {
      //error detection
      blockchainSender.Mint_Callback(blockchain.BlockchainError.NetworkBusy);
    }
  }
};

//mint bobot
export async function MintBobot() {
  blockchainSender.LoadingScreenToggle_Callback(true);
  const responseMerkle = await generateMerkle();

  if ((window as any).ethereum) {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(bobotGenesisAddress, BobotGenesisABI.output.abi, signer);
    console.log(contract);

    provider
      .getNetwork()
      .then((response) => {
        if (verifyNetwork(response) === true) {
          mintGenesis(contract, responseMerkle);
        } else {
          blockchainSender.LoadingScreenToggle_Callback(false);
          blockchainSender.Log_Callback('Cannot mint due to incorrect network!');
        }
      })
      .catch((error) => {
        blockchainSender.LoadingScreenToggle_Callback(false);
        console.log(error);
      });
  }
}
