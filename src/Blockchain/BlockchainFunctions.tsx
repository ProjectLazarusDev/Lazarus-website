import { unityContext } from '../Context/UnityContext';

import * as metaLogin from './MetaMaskLogin';
import * as bootUpStation from './BootUpStation';
import * as coreChamber from './CoreChamber';
import * as bobots from './Bobots';
import * as user from './User';


export enum BlockchainError {
  NoError = 0,
  NetworkBusy,
}

// Communication from Unity to React with unityContext.on(...)
export function BindToContext() {
  //metamask functions
  unityContext.on('MetaMaskLogin_Request', metaLogin.MetaLogin);

  //mint
  unityContext.on('Mint_Request', bootUpStation.MintBobot);

  //uri request
  unityContext.on('GetAllTokenURIs_Request', bobots.GetBobotsAllURI);

  //stake
  unityContext.on('Stake_Request', bootUpStation.StakeBobot);

  //token status
  unityContext.on('GetAllTokenStakeStatus_Request', bobots.GetBobotsAllStakeStatus);

  //get bobots all levels
  unityContext.on('GetAllLevels_Request', coreChamber.CoreChamberGetAllBobotPoints);


  //address and magic
  unityContext.on('GetUserData', user.GetUserData);

  //open an external link
  unityContext.on('OpenURL_Request', function (url: string) {
    window.open(url);
  });
}
