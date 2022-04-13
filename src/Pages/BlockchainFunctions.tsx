import unityContext from './UnityContext';


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
    unityContext.on("MetamaskLogin", MetaLogin);
    unityContext.on("Mint", MintBobot);
    unityContext.on("GetAllTokenIDs", GetBobotsAllID);
    unityContext.on("GetUserData", GetUserData);

}

export {BindToContext};