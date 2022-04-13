import unityContext from './UnityContext';
import {MagicGetBalance} from './Magic20';
import { MetaLogin, MetaMaskAccounts } from './MetaMaskLogin';
    //core chamber stake status callback
    function UpdatePlayerAddress(str: string)
    {
        unityContext.send("BlockchainManager", "ReceivePlayerAddress", str);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////

    function GetUserData()
    {
        MagicGetBalance();
        UpdatePlayerAddress(MetaMaskAccounts[0]);
    }


