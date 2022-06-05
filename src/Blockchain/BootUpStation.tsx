import { ethers } from 'ethers';

import installationCoreChamberABI from '../ABI/CoreChamber.json';
import BobotGenesisABI from '../ABI/BobotGenesis.json';

import { bobotGenesisAddress, installationCoreChamberAddress } from './ContractAddress';

import axios from 'axios';

import * as blockchain from './BlockchainFunctions';
import { MetaMaskAccounts } from './MetaMaskLogin';

import { chainID } from '../Pages/Multiplayer';
import { testChainID } from '../Pages/MultiplayerTest';

// by right guardian should be able to mint 1 and lunar is 2
const guardiansBaseCID: string = 'QmXMbZ9NhQHJsRvhctNftsGzGNiNP1k4urGVfJ5E6yv9Bt';
const lunarsBaseCID: string = 'QmPo25VQeRpkLrxDRSCjpdsmg3hbA19FuiB1apwdShoE3F';

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
  console.log('contract.isAtCoreChamberGenesis(tokenID)', isStaked);
  try {
    if (isStaked === true) {
      contract
        .unstakeGenesis(tokenID)
        .then(async (response: any) => {
          console.log('unstake response:', response);
          //TODO: pass bobot id + whether successfully staked to ylen
        })
        .catch((error: any) => {
          console.log(error);
        });
    } else {
      await contract
        .stakeGenesis(tokenID)
        .then(async (response: any) => {
          console.log('stake response:', response);
          //TODO: pass bobot id + whether successfully staked to ylen
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
              blockchain.Mint_Callback(blockchain.BlockchainError.NoError);
            }
          })
          .catch((error: any) => console.log(error));
      });
    } catch {
      //error detection
      blockchain.Mint_Callback(blockchain.BlockchainError.NetworkBusy);
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
    const requestBodyGuardians = {
      whitelist: 'https://gateway.pinata.cloud/ipfs/' + guardiansBaseCID,
      leafToVerify: MetaMaskAccounts[0],
    };
    responseGuardians = await axios.post('https://merklemeapi.vincanger.repl.co/verify/proof', requestBodyGuardians);
    console.log(responseGuardians);
  } catch {
    console.log('responseGuardians is not found!');
  }

  try {
    const requestBodyLunars = {
      whitelist: 'https://gateway.pinata.cloud/ipfs/' + lunarsBaseCID,
      leafToVerify: MetaMaskAccounts[0],
    };
    responseLunar = await axios.post('https://merklemeapi.vincanger.repl.co/verify/proof', requestBodyLunars);
    console.log(responseLunar);
  } catch {
    console.log('responseLunar is not found!');
  }

  return[responseGuardians, responseLunar];
};

const mintGenesis = async (
  contract: ethers.Contract,
  responseGuardians: MerkleResponseProps,
  responseLunar: MerkleResponseProps
) => {
  try {
    contract
      .mintBobot(responseGuardians?.data?.proof, responseLunar?.data?.proof)
      .then((response: any) => {
        console.log('mint response: ', response);

        response
          .wait()
          .then((waitResponse: any) => {
            if (waitResponse.status === 1) {
              blockchain.Mint_Callback(blockchain.BlockchainError.NoError);
            }
          })
          .catch((error: any) => console.log(error));
      })
      .catch((error: any) => console.log(error));
  } catch {
    //error detection
    blockchain.Mint_Callback(blockchain.BlockchainError.NetworkBusy);
  }
};

//mint bobot
export async function MintBobot() {
  const [responseGuardians, responseLunar] = await generateMerkle();

  if ((window as any).ethereum) {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(bobotGenesisAddress, BobotGenesisABI.output.abi, signer);
    console.log(contract);

    provider
      .getNetwork()
      .then((response) => {
        if (verifyNetwork(response) === true) {
          mintGenesis(contract, responseGuardians, responseLunar);
        } else {
          console.log('Cannot mint due to incorrect network!');
        }
      })
      .catch((error) => console.log(error));
  }
}
