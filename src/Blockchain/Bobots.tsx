import { ethers, BigNumber } from "ethers";

import { coreChamberAddress, contractAddress } from './ContractAddress';

import BobotGenesisABI from '../ABI/BobotGenesis.json'
import BobotCoreChamberABI from '../ABI/CoreChamber.json'

import { MetaLogin, MetaMaskAccounts } from './MetaMaskLogin';
import unityContext from '../Context/UnityContext';
import * as blockchain from './BlockchainFunctions';

export async function GetBobotsAllURI()
{
    console.log("GetBobotsAllID: ");
    if ((window as any).ethereum)
    {
        var t: number[] = [];
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
   
            const response = await contract.getTokenIds(MetaMaskAccounts[0]);
            console.log("response: ", response);

            for (var _i = 0; _i < response.length; _i++)
            {
                t.push(response[_i].toNumber());
            }

             console.log("passed");
           


            //send response back to game engine

        }
        catch (err)
        {
            console.log("error: ", err);

            //callback to engine
            blockchain.GetAllTokenURIs_Callback( blockchain.BlockchainError.NetworkBusy);
        }


        //get all tokenURI
        for (var _i = 0; _i < t.length; _i++)
        {
            try
        {
   
            const response = await contract.tokenURI(t[_i]);
            console.log("response: ", response);
            blockchain.RecieveTokenURI_Callback(response as string);
            //send response back to game engine

        }
        catch (err)
        {
            console.log("error: ", err);

            //callback to engine
            blockchain.GetAllTokenURIs_Callback( blockchain.BlockchainError.NetworkBusy);
        }

        }


        blockchain.CompletedTokenURI_Callback();






    }
}

export function SendBobotsAllID(tokenIDs: number[])
{
    blockchain.GetAllTokenURIs_Callback(blockchain.BlockchainError.NoError);

    //send all tokenIDs to engine
    tokenIDs.forEach(element =>
    {
        console.log("Send: ", element);

        //change to uri next time
        blockchain.RecieveTokenURI_Callback(element.toString());      
    });
    blockchain.CompletedTokenURI_Callback();
}

