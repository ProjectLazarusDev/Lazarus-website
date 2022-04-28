import unityContext from '../Context/UnityContext';
import { ethers, BigNumber } from 'ethers';
import { coreChamberAddress, contractAddress } from './ContractAddress';
import BobotGenesisABI from '../ABI/BobotGenesis.json';
import BobotCoreChamberABI from '../ABI/CoreChamber.json';
//core chamber stake status callback
function CoreChamberStakeStatusAccepted(status: number) {
  unityContext.send('BlockchainManager', 'CoreChamberStakeStatus', status);
}

//core chamber stake callback
function CoreChamberStakeAccepted(id: number) {
  unityContext.send('BlockchainManager', 'CoreChamberStake', id);
}
//core chamber unstake callback
function CoreChamberUnstakeAccepted(id: number) {
  unityContext.send('BlockchainManager', 'CoreChamberUnstake', id);
}

async function CoreChamberGetBobotStakeStatus(tokenIDs: number) {
  console.log('received: ');
  if ((window as any).ethereum) {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(coreChamberAddress, BobotCoreChamberABI.abi, signer);
    console.log(contract);
    try {
      console.log('await contract');
      const response = await contract.checkStakeStatus(tokenIDs);
      console.log('response: ', response);

      //0 if unstaked
      var res = response[0].toNumber();
      //send response back to game engine
      CoreChamberStakeStatusAccepted(res);
    } catch {
      //error detection
    }
  }
}

async function CoreChamberGetBobotLevel(tokenIDs: number) {}

async function CoreChamberStakeBobot(tokenIDs: number) {
  console.log('received: ');
  if ((window as any).ethereum) {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(coreChamberAddress, BobotCoreChamberABI.abi, signer);
    console.log(contract);
    try {
      console.log('await contract');
      const response = await contract.stake(tokenIDs);
      console.log('response: ', response);

      //send response back to game engine
      // MintComfirmed(1);
    } catch {
      //error detection
    }
  }
}

async function CoreChamberUnstakeBobot(tokenIDs: number) {
  console.log('received: ');
  if ((window as any).ethereum) {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(coreChamberAddress, BobotCoreChamberABI.abi, signer);
    console.log(contract);
    try {
      console.log('await contract');
      const response = await contract.unstake(tokenIDs);
      console.log('response: ', response);

      //send response back to game engine
      // MintComfirmed(1);
    } catch {
      //error detection
    }
  }
}

export {};
