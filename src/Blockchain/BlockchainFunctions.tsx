import {unityContext} from '../Context/UnityContext';

import * as metaLogin from './MetaMaskLogin';
import * as bootUpStation from './BootUpStation';
import * as bobots from './Bobots';
import * as user from './User';

const blockchainManager: string = "BlockchainManager";

export enum BlockchainError
{
    NoError = 0,
    NetworkBusy
}


export function BindToContext()
{
    //metamask functions
    unityContext.on("MetaMaskLogin_Request", metaLogin.MetaLogin);

    //mint
    unityContext.on("Mint_Request", bootUpStation.MintBobotTest);

    //uri request
    unityContext.on("GetAllTokenURIs_Request", bobots.GetBobotsAllURI);

    //address and magic
    unityContext.on("GetUserData", user.GetUserData);

    //open an external link
    unityContext.on("OpenURL_Request",function(url:string){
        window.open(url);
    });

}
export function OpenURL_Callback(_address: string)
{
    unityContext.send(blockchainManager, "OpenURL_Callback", _address);
}

export function MetaMaskLogin_Callback(_address: string)
{
    unityContext.send(blockchainManager, "MetaMaskLogin_Callback", _address);
}

export function Mint_Callback(_errorCode: number)
{
    unityContext.send(blockchainManager, "Mint_Callback", _errorCode);
}

export function GetMagic_Callback(_magic: number)
{
    unityContext.send(blockchainManager, "GetMagic_Callback", _magic);
}

export function GetAllTokenURIs_Callback(_errorCode: number)
{
    unityContext.send(blockchainManager, "GetAllTokenURIs_Callback", _errorCode);
}

export function RecieveTokenURI_Callback(_tokenURI: string)
{
    unityContext.send(blockchainManager, "RecieveTokenURI_Callback", _tokenURI);
}

export function CompletedTokenURI_Callback()
{
    unityContext.send(blockchainManager, "CompletedTokenURI_Callback");
}

