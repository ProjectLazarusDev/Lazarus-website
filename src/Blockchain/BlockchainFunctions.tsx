import context from '../Context/UnityContext';


import { coreChamberAddress, contractAddress } from './ContractAddress';

//abi data
import BobotGenesisABI from '../ABI/BobotGenesis.json';
import BobotCoreChamberABI from '../ABI/CoreChamber.json';
import Magic20ABI from '../ABI/Magic20.json';


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
    context.on("MetaMaskLogin_Request", metaLogin.MetaLogin);

    //mint
    context.on("Mint_Request", bootUpStation.MintBobotTest);

    //uri request
    context.on("GetAllTokenURIs_Request", bobots.GetBobotsAllID);

    //address and magic
    context.on("GetUserData", user.GetUserData);

}

export function MetaMaskLogin_Callback(_address: string)
{
    context.send(blockchainManager, "MetaMaskLogin_Callback", _address);
}

export function Mint_Callback(_errorCode: number)
{
    context.send(blockchainManager, "Mint_Callback", _errorCode);
}

export function GetMagic_Callback(_magic: number)
{
    context.send(blockchainManager, "GetMagic_Callback", _magic);
}

export function GetAllTokenURIs_Callback(_errorCode: number)
{
    context.send(blockchainManager, "GetAllTokenURIs_Callback", _errorCode);
}

export function RecieveTokenURI_Callback(_tokenURI: string)
{
    context.send(blockchainManager, "RecieveTokenURI_Callback", _tokenURI);
}

export function CompletedTokenURI_Callback()
{
    context.send(blockchainManager, "Mint_Callback");
}

