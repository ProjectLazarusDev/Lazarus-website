import {unityContext} from '../Context/UnityContext';
import { ethers, BigNumber } from "ethers";
import {installationCoreChamberAddress,bobotGenesisAddress } from './ContractAddress';
import BobotGenesisABI from '../ABI/BobotGenesis.json'
import installationCoreChamber from '../ABI/CoreChamber.json'
import { MetaMaskAccounts } from './MetaMaskLogin';
import * as blockchainSender from './BlockchainSender';

export async function CoreChamberGetAllBobotPoints(tokenIDs: number)
{
    var allLevels = 0;

    console.log("GetAllPoints: ");
    if ((window as any).ethereum)
    {

        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(bobotGenesisAddress, BobotGenesisABI.abi, signer);
        console.log(contract);
        
        try
        {
            console.log("await contract");
            const allIDs = await contract.getTokenIds(MetaMaskAccounts[0]);
            
            for (var i = 0;i < allIDs.length;++i)
            {
                const level = await contract.getCurrentBobotLevel(allIDs[i]);
                console.log("level: ", level);
                allLevels += level;
            }
           
            blockchainSender.GetAllLevels_Callback(allLevels);
          
        }
        catch {
            //error detection
        }
    }
}


