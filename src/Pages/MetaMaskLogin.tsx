

import unityContext from './UnityContext';

//sotres metamask accounts
var MetaMaskAccounts: any;

//connect to metamask
async function MetaLogin()
{
    if ((window as any).ethereum)
    {
        MetaMaskAccounts = await (window as any).ethereum.
            request({ method: "eth_requestAccounts", });
        console.log(MetaMaskAccounts[0]);

        //send connected address back to engine
        MetamaskComfirmed(MetaMaskAccounts[0]);
    }
}

function MetamaskComfirmed(addr: string)
{
    unityContext.send("BlockchainManager", "MetamaskAccepted", addr);
}

export { MetaLogin,MetaMaskAccounts};
