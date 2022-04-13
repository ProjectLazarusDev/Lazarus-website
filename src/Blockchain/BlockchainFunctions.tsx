import unityContext from '../Context/UnityContext';


import { coreChamberAddress, contractAddress } from './ContractAddress';

//abi data
import BobotGenesisABI from '../ABI/BobotGenesis.json';
import BobotCoreChamberABI from '../ABI/CoreChamber.json';
import Magic20ABI from '../ABI/Magic20.json';


import { MetaLogin } from './MetaMaskLogin';
import { MintBobot } from './BootUpStation';
import { GetBobotsAllID } from './Bobots';
import { GetUserData } from './User';

function BindToContext()
{
    //metamask functions
    unityContext.on("MetaMaskLogin_Request", MetaLogin);

    //mint
    unityContext.on("Mint_Request", MintBobot);

    //uri request
    unityContext.on("GetAllTokenURIs_Request", GetBobotsAllID);


    unityContext.on("GetUserData", GetUserData);

}

export function MetaMaskLogin_Callback( _address:string)
{
    unityContext.send("BlockchainManager", "MetaMaskLogin_Callback", _address);
}

export { BindToContext};