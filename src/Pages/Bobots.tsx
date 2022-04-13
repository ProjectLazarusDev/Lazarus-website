import { ethers, BigNumber } from "ethers";

import { coreChamberAddress, contractAddress } from './ContractAddress';

import BobotGenesisABI from '../ABI/BobotGenesis.json'
import BobotCoreChamberABI from '../ABI/CoreChamber.json'

import { MetaLogin, MetaMaskAccounts } from './MetaMaskLogin';
import unityContext from './UnityContext';
async function GetBobotsAllID()
{
    console.log("GetBobotsAllID: ");
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
        var t: number[] = [];
        try
        {
            console.log("await contract");
            console.log(MetaMaskAccounts[0]);
            const response = await contract.getTokenIds("0xCdEae8E41E953570B54D02f063A23E41e812f16e");
            console.log("response: ", response);
            // const allIDs = response.value;




            for (var _i = 0; _i < response.length; _i++)
            {
                t.push(response[_i].toNumber());
            }

            // console.log(allIDs);
            SendBobotsAllID(t);


            //send response back to game engine

        }
        catch (err)
        {
            console.log("error: ", err);
        }
    }
}

function SendBobotsAllID(tokenIDs: number[])
{
    unityContext.send("BlockchainManager", "BobotsClearID");

    //send all tokenIDs to engine
    tokenIDs.forEach(element =>
    {
        console.log("Send: ", element);
        unityContext.send("BlockchainManager", "BobotsReceiveID", element);
    });
}


