import { ethers, BigNumber } from 'ethers';

import installationCoreChamberABI from '../ABI/CoreChamber.json';
import BobotGenesisABI from '../ABI/BobotGenesis.json';

import { bobotGenesisAddress, installationCoreChamberAddress } from './ContractAddress';

import * as blockchain from './BlockchainFunctions';
import * as blockchainSender from './BlockchainSender';
import { MetaMaskAccounts } from './MetaMaskLogin';

import { chainID } from '../Pages/Multiplayer';
import { testChainID } from '../Pages/MultiplayerTest';

import MerkleWallets from "../merkleWallets.json";

const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

export const verifyNetwork = (response: ethers.providers.Network): boolean => {
  if (
    (response.chainId === chainID && (window.location.pathname === '/play' || window.location.pathname === '/mintgenesis')) ||
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
          blockchainSender.ReceiveTokenStakeStatus_Callback(tokenID, false, corePoints);
          blockchainSender.Log_Callback(`Bobot ${tokenID} is now being unstaked!`);
        })
        .catch((error: any) => {
          console.log(error);
          blockchainSender.Log_Callback(`An error has occured when staking!`);
        });
    } else {
      await contract
        .stakeGenesis(tokenID)
        .then(async (response: any) => {
          console.log('stake response:', response);
          blockchainSender.ReceiveTokenStakeStatus_Callback(bobotID, true, corePoints);
          blockchainSender.Log_Callback(`Bobot ${tokenID} is now staked!`);
        })
        .catch((error: any) => {
          console.log(error);
          blockchainSender.Log_Callback(`An error has occured when staking!`);
        });
    }
  } catch {
    console.log('An error has occured when staking!');
    blockchainSender.Log_Callback(`An error has occured when staking!`);
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
    const contract = new ethers.Contract(bobotGenesisAddress, BobotGenesisABI.abi, signer);
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


const mintGenesis = async (contract: ethers.Contract) => {

  //const whitelistAddresses = MerkleWallets.wallets;
  //const addrUserLogged = MetaMaskAccounts[4];
  //const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
  //const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  //const merkleProof = merkleTree.getHexProof(keccak256(addrUserLogged))
  //merkleProof.map((addr: any) => proofTobeSended.push(addr));

  const whitelistAddresses = MerkleWallets.wallets;
  const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
  //const rootHash = merkleTree.getRoot();
  //const rootHashBytes32 = '0x' + merkleTree.getRoot().toString('hex');
  
  //console.log("First Root Hash32 for the contract: ", rootHashBytes32);
  
  //after here is just to get a proof to test, change the wallet bellow to get the proof from =)
  
  //const claimingAddress = keccak256(MetaMaskAccounts[0]);
  const claimingAddress = keccak256(MetaMaskAccounts[0]);

  const hexProof = merkleTree.getHexProof(claimingAddress);

  if(hexProof.length > 0)
    blockchainSender.Log_Callback("Your address is whitelisted!");

    try {
      contract
        .mintBobot(hexProof)
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
          blockchainSender.LoadingScreenToggle_Callback(false);

          const errorMessage: String = error?.data?.message === undefined ? '' : error?.data?.message;
          if (errorMessage !== '') {
            blockchainSender.Log_Callback(error?.data?.message);
          }else{
            blockchainSender.Log_Callback("Mint call not executed!");
          }
        });
    } catch {
  
      blockchainSender.Log_Callback("Mint call not executed!");

      //error detection
      blockchainSender.Mint_Callback(blockchain.BlockchainError.NetworkBusy);
    }
  
};

//mint bobot
export async function MintBobot() {
  blockchainSender.LoadingScreenToggle_Callback(true);
  //const responseMerkle = await generateMerkle();

  if ((window as any).ethereum) {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(bobotGenesisAddress, BobotGenesisABI.abi, signer);
    console.log(contract);

    provider
      .getNetwork()
      .then((response) => {
        if (verifyNetwork(response) === true) {
          mintGenesis(contract);
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