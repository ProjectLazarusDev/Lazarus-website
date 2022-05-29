import { ethers } from 'ethers';

import BobotGenesisABI from '../ABI/BobotGenesis.json';

import { contractAddress } from './ContractAddress';

import axios from 'axios';

import * as blockchain from './BlockchainFunctions';
import { MetaMaskAccounts } from './MetaMaskLogin';

const guardiansBaseCID: string = 'QmWZKWRoktdtmUsFL1V85mk4mMqGhbZAAzvGtC197LLiYT';
const lunarsBaseCID: string = 'QmWZKWRoktdtmUsFL1V85mk4mMqGhbZAAzvGtC197LLiYT';

export async function StakeBobot(bobotID: any) {
  if ((window as any).ethereum) {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, BobotGenesisABI.abi, signer);
    console.log(contract);

    //TODO: check if user is at arbitrum network

    console.log('bobot id is: ', bobotID);

    //TODO: when passing number from contract to react need convert from BigNumber to number
    // can see Magic20.tsx
    try {
      if (contract.getStakingState() === true) {
        console.log('b4 unstake', contract.getStakingState());
        contract
          .unstakeInCoreChamber(bobotID, contract.getBobotType(bobotID))
          .then((response: any) => {
            console.log('response:', response);
            console.log('aft unstake', contract.getStakingState());
          })
          .catch((error: any) => {
            console.log(error);
          });
      } else {
        console.log('b4 stake', contract.getStakingState());
        await contract
          .stakeInCoreChamber(bobotID, contract.getBobotType(bobotID))
          .then((response: any) => {
            console.log('response:', response);
            console.log('aft stake', contract.getStakingState());
          })
          .catch((error: any) => {
            console.log(error);
          });
      }
    } catch {
      console.log("An error has occured when staking!");
    }
  }
}

//mint bobot
export async function MintBobotTest() {
  if ((window as any).ethereum) {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, BobotGenesisABI.abi, signer);
    console.log(contract);

    //TODO: check if user is at arbitrum network

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

//mint bobot
export async function MintBobot() {
  console.log('received: ');
  if ((window as any).ethereum) {
    //merkle proof axios
    const requestBodyGuardians = {
      whitelist: 'https://gateway.pinata.cloud/ipfs/' + guardiansBaseCID,
      leafToVerify: MetaMaskAccounts[0],
    };

    const responseGuardians = await axios.post(
      'https://merklemeapi.vincanger.repl.co/verify/proof',
      requestBodyGuardians
    );

    console.log(responseGuardians);

    const requestBodyLunars = {
      whitelist: 'https://gateway.pinata.cloud/ipfs/' + lunarsBaseCID,
      leafToVerify: MetaMaskAccounts[0],
    };

    const responseLunar = await axios.post('https://merklemeapi.vincanger.repl.co/verify/proof', requestBodyLunars);

    console.log(responseLunar);

    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, BobotGenesisABI.abi, signer);
    console.log(contract);
    try {
      console.log('await contract');

      const response = await contract.mintBobot((responseGuardians as any).proof, (responseLunar as any).proof);
      console.log('response: ', response);

      //send response back to game engine
      blockchain.Mint_Callback(blockchain.BlockchainError.NoError);
    } catch {
      //error detection
      blockchain.Mint_Callback(blockchain.BlockchainError.NetworkBusy);
    }
  }
}
