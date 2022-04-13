import context from '../Context/UnityContext';


import { coreChamberAddress, contractAddress } from './ContractAddress';

//abi data
import BobotGenesisABI from '../ABI/BobotGenesis.json';
import BobotCoreChamberABI from '../ABI/CoreChamber.json';
import Magic20ABI from '../ABI/Magic20.json';


import { MetaLogin } from './MetaMaskLogin';
import { MintBobot } from './BootUpStation';
import { GetBobotsAllID } from './Bobots';
import { GetUserData } from './User';

const blockchainManager: string = "BlockchainManager";

//

export function BindToContext()
{
    //metamask functions
    context.on("MetaMaskLogin_Request", MetaLogin);

    //mint
    context.on("Mint_Request", MintBobot);

    //uri request
    context.on("GetAllTokenURIs_Request", GetBobotsAllID);


    context.on("GetUserData", GetUserData);

}

export function MetaMaskLogin_Callback(_address: string)
{
    context.send(blockchainManager, "MetaMaskLogin_Callback", _address);
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

