import { ethers, BigNumber } from "ethers";

import { MetaLogin, MetaMaskAccounts } from './MetaMaskLogin';
import unityContext from './UnityContext';
import Magic20ABI from '../ABI/Magic20.json'
//erc20 magic 
async function MagicGetBalance()
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
            UpdatePlayerMagic(magicAmount);

            //print magic balance
            console.log(magicAmount);
        }
        catch (err)
        {
            console.log("error: ", err);
        }
    }
}
function UpdatePlayerMagic(value: number)
{
    unityContext.send("BlockchainManager", "ReceivePlayerMagic", value);
}

