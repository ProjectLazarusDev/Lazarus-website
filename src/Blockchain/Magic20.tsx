import { ethers, BigNumber } from "ethers";

import {  MetaMaskAccounts } from './MetaMaskLogin';
import Magic20ABI from '../ABI/Magic20.json'

import * as blockchain from './BlockchainFunctions';
//erc20 magic 
export async function MagicGetBalance()
{
    console.log("received: ");
    if ((window as any).ethereum)
    {

        const magicContractAddress = '0x539bdE0d7Dbd336b79148AA742883198BBF60342';
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const contract = new ethers.Contract("0x4E47624aDE3dF0AD9974f98Be4608301f73185EE", Magic20ABI.abi, provider);
        console.log(contract);
        console.log(MetaMaskAccounts[0]);
        try
        {
            const balance = await contract.checkBalance(magicContractAddress, MetaMaskAccounts[0]);
            const magicAmount = BigNumber.from(balance).toNumber();
            console.log(magicAmount);
            blockchain.GetAllTokenURIs_Callback(magicAmount);

        }
        catch (err)
        {
            console.log("error: ", err);
            blockchain.GetAllTokenURIs_Callback(0);
        }
    }
}
