import { ethers, BigNumber } from "ethers";
import unityContext from './UnityContext';

import BobotGenesisABI from '../ABI/BobotGenesis.json'
import BobotCoreChamberABI from '../ABI/CoreChamber.json'
import Magic20ABI from '../ABI/Magic20.json'
import {coreChamberAddress,contractAddress } from './ContractAddress';
//mint bobot
async function MintBobot()
{
    console.log("received: ");
    if ((window as any).ethereum)
    {

        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            contractAddress,
            BobotGenesisABI.abi,
            signer
        );
        console.log(contract);
        try
        {
            console.log("await contract");

            const response = await contract.mintBobot("0xCdEae8E41E953570B54D02f063A23E41e812f16e", BigNumber.from(1));
            console.log("response: ", response);

            //send response back to game engine
            MintComfirmed(1);


        }
        catch {
            //error detection


        }
    }
}

export default MintBobot;

function MintComfirmed(id: number)
{
    unityContext.send("BlockchainManager", "MintAccepted", id);
}