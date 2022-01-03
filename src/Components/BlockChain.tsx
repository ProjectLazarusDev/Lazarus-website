
import React from "react";
import Web3 from 'web3';

//material ui styling
import { Button } from "@mui/material";


export const BlockChain: React.FC = () =>
{
    //get web3 started
    const [account, setAccount] = React.useState<string>("");

    //open metamask wallet
    const openWallet = async function () 
    {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
        const accounts = await web3.eth.requestAccounts();

        setAccount(accounts[0]);
    };

    return (
        <>
            <Button onClick={openWallet}>
                Connect to block chain wallet
            </Button>
            <div>
                Your account is: {account}
            </div>
        </>
    );
}
export default BlockChain;