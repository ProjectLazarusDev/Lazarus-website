import { unityContext } from '../Context/UnityContext';

import * as metaLogin from './MetaMaskLogin';
import * as bootUpStation from './BootUpStation';
import * as bobots from './Bobots';
import * as user from './User';

const blockchainManager: string = 'BlockchainManager';

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

  unityContext.on('GetAllTokenStakeStatus_Request', bobots.GetBobotsAllStakeStatus);

  //address and magic
  unityContext.on('GetUserData', user.GetUserData);

  //open an external link
  unityContext.on('OpenURL_Request', function (url: string) {
    window.open(url);
  });
}

//TODO: abstract to a BlockchainSender?
// Communication from React to Unity with unityContext.send(...)
export function Log_Callback(_message: string) {
  unityContext.send(blockchainManager, 'Log_Callback', _message);
}

export function LoadingScreenToggle_Callback(_b: any) {
  unityContext.send(blockchainManager, 'LoadingScreenToggle_Callback', _b);
}

export function MetaMaskLogin_Callback(_address: string) {
  unityContext.send(blockchainManager, 'MetaMaskLogin_Callback', _address);
}

export function GetMagic_Callback(_magic: number) {
  unityContext.send(blockchainManager, 'GetMagic_Callback', _magic);
}

export function Mint_Callback(_errorCode: number) {
  unityContext.send(blockchainManager, 'Mint_Callback', _errorCode);
}

export function GetAllTokenURIs_Callback(_errorCode: number) {
  unityContext.send(blockchainManager, 'GetAllTokenURIs_Callback', _errorCode);
}

export function RecieveTokenURI_Callback(_tokenURI: string) {
  unityContext.send(blockchainManager, 'RecieveTokenURI_Callback', _tokenURI);
}

export function CompletedTokenURI_Callback() {
  unityContext.send(blockchainManager, 'CompletedTokenURI_Callback');
}

export function GetAllTokenStakeStatus_Callback(_errorCode: number) {
  unityContext.send(blockchainManager, 'GetAllTokenStakeStatus_Callback', _errorCode);
}

export function ReceiveTokenStakeStatus_Callback(tokenId: number, stakeStatus: boolean, currentCorePoints: number) {
  const stakeStatusData = {
    _tokenId: tokenId,
    _stakeStatus: stakeStatus,
    _currentCorePoints: currentCorePoints,
  };
  const jsonData = JSON.stringify(stakeStatusData);
  //TODO: fix spelling error here and on unity side
  unityContext.send(blockchainManager, 'RecieveTokenStakeStatus_Callback', jsonData);
}

export function CompletedTokenStakeStatus_Callback() {
  unityContext.send(blockchainManager, 'CompletedTokenStakeStatus_Callback');
}
