


import * as blockchain from './BlockchainFunctions';
//sotres metamask accounts
var MetaMaskAccounts: any;

//connect to metamask
async function MetaLogin()
{
    if ((window as any).ethereum)
    {
        MetaMaskAccounts = await (window as any).ethereum.request({ method: "eth_requestAccounts", });
        console.log(MetaMaskAccounts[0]);

        //send connected address back to engine
        blockchain.MetaMaskLogin_Callback(MetaMaskAccounts[0]);
    }
}

export { MetaLogin, MetaMaskAccounts };
