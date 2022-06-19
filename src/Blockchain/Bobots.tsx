import { ethers, BigNumber } from 'ethers';

import { bobotGenesisAddress, installationCoreChamberAddress } from './ContractAddress';

import BobotGenesisABI from '../ABI/BobotGenesis.json';
import installationCoreChamberABI from '../ABI/CoreChamber.json';

import { MetaMaskAccounts } from './MetaMaskLogin';
import * as blockchain from './BlockchainFunctions';
import * as blockchainSender from './BlockchainSender';

export async function GetBobotsAllURI() {
  console.log('GetBobotsAllID: ');
  if ((window as any).ethereum) {
    var t: number[] = [];
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(bobotGenesisAddress, BobotGenesisABI.output.abi, signer);
    console.log(contract);

    try {
      const response = await contract.getTokenIds(MetaMaskAccounts[0]);
      console.log('response: ', response);

      for (var _i = 0; _i < response.length; _i++) {
        t.push(response[_i].toNumber());
      }

      console.log('passed');

      //send response back to game engine
    } catch (err) {
      console.log('error: ', err);

      //callback to engine
      blockchainSender.GetAllTokenURIs_Callback(blockchain.BlockchainError.NetworkBusy);
    }

    //get all tokenURI
    for (var index = 0; index < t.length; index++) {
      try {
        const response = await contract.getTokenURI(t[index]);
        console.log('response: ', response);
        blockchainSender.RecieveTokenURI_Callback(response as string);
        //send response back to game engine
      } catch (err) {
        console.log('error: ', err);

        //callback to engine
        blockchainSender.GetAllTokenURIs_Callback(blockchain.BlockchainError.NetworkBusy);
      }
    }

    blockchainSender.CompletedTokenURI_Callback();

    blockchainSender.LoadingScreenToggle_Callback(false);
  }
}

export async function GetBobotsAllStakeStatus() {
  if ((window as any).ethereum) {
    var t: number[] = [];
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const bobotGenesis_contract = new ethers.Contract(bobotGenesisAddress, BobotGenesisABI.output.abi, signer);
    const installationCC_contract = new ethers.Contract(
      installationCoreChamberAddress,
      installationCoreChamberABI.output.abi,
      signer
    );
    console.log(bobotGenesis_contract);

    try {
      const response = await bobotGenesis_contract.getTokenIds(MetaMaskAccounts[0]);
      console.log('response: ', response);

      for (var _i = 0; _i < response.length; _i++) {
        t.push(response[_i].toNumber());
      }

      console.log('passed');

      //send response back to game engine
    } catch (err) {
      console.log('error: ', err);
      //callback to engine
      blockchainSender.GetAllTokenStakeStatus_Callback(blockchain.BlockchainError.NetworkBusy);
    }

    for (var index = 0; index < t.length; index++) {
      try {
        const tokenID = t[index];
        console.log('tokenID', tokenID);
        const stakeStatus = await installationCC_contract.isAtCoreChamberGenesis(tokenID);
        // get core points value and convert from big number to number
        const corePointsResponse = await installationCC_contract.corePointsEarnedGenesis(tokenID);
        const corePoints = BigNumber.from(corePointsResponse?._hex).toNumber();
        console.log(tokenID, stakeStatus, corePoints);
        blockchainSender.ReceiveTokenStakeStatus_Callback(tokenID, stakeStatus, corePoints);
      } catch (err) {
        console.log(err);
        blockchainSender.GetAllTokenStakeStatus_Callback(blockchain.BlockchainError.NetworkBusy);
      }
    }

    blockchainSender.CompletedTokenStakeStatus_Callback();
    blockchainSender.LoadingScreenToggle_Callback(false);
  }
}

export function SendBobotsAllID(tokenIDs: number[]) {
  blockchainSender.GetAllTokenURIs_Callback(blockchain.BlockchainError.NoError);

  //send all tokenIDs to engine
  tokenIDs.forEach((element) => {
    console.log('Send: ', element);

    //change to uri next time
    blockchainSender.RecieveTokenURI_Callback(element.toString());
  });
  blockchainSender.CompletedTokenURI_Callback();
}
