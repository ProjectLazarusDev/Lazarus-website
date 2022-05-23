import { ethers } from "ethers";

import BobotGenesisABI from '../ABI/BobotGenesis.json'

import { contractAddress } from './ContractAddress';

import axios from 'axios';

import * as blockchain from './BlockchainFunctions';
import { MetaMaskAccounts } from "./MetaMaskLogin";


const guardiansBaseCID: string = "QmWZKWRoktdtmUsFL1V85mk4mMqGhbZAAzvGtC197LLiYT";
const lunarsBaseCID: string = "QmWZKWRoktdtmUsFL1V85mk4mMqGhbZAAzvGtC197LLiYT";



//mint bobot
export async function MintBobotTest()
{
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
            const response = await contract.mintBobotTest();
            console.log("response: ", response);
            blockchain.Mint_Callback(blockchain.BlockchainError.NoError);

        }
        catch {
            //error detection
            blockchain.Mint_Callback(blockchain.BlockchainError.NetworkBusy);

        }
    }
}



//mint bobot
export async function MintBobot()
{
    console.log("received: ");
    if ((window as any).ethereum)
    {
        //merkle proof axios
        const requestBodyGuardians = {
            "whitelist": "https://gateway.pinata.cloud/ipfs/" + guardiansBaseCID,
            "leafToVerify": MetaMaskAccounts[0]
        }

        const responseGuardians = await axios.post('https://merklemeapi.vincanger.repl.co/verify/proof', requestBodyGuardians);


        console.log(responseGuardians);

        const requestBodyLunars = {
            "whitelist": "https://gateway.pinata.cloud/ipfs/" + lunarsBaseCID,
            "leafToVerify": MetaMaskAccounts[0]
        }

        const responseLunar = await axios.post('https://merklemeapi.vincanger.repl.co/verify/proof', requestBodyLunars);


        console.log(responseLunar);

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

            const response = await contract.mintBobot((responseGuardians as any).proof, (responseLunar as any).proof);
            console.log("response: ", response);
 
            //send response back to game engine
            blockchain.Mint_Callback(blockchain.BlockchainError.NoError);

        }
        catch {
            //error detection
            blockchain.Mint_Callback(blockchain.BlockchainError.NetworkBusy);

        }
    }
}