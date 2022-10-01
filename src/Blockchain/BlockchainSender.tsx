
import { unityContext } from '../Context/UnityContext';


const blockchainManager: string = 'BlockchainManager';

// Communication from React to Unity with unityContext.send(...)
// the single parameter can be a string, a number, or can be empty.
// https://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html
export function Log_Callback(_message: string) {
  unityContext.send(blockchainManager, 'Log_Callback', _message);
}

export function LoadingScreenToggle_Callback(_b: boolean) {
  let flag = _b ? 1 : 0;
  unityContext.send(blockchainManager, 'LoadingScreenToggle_Callback', flag);
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

export function GetAllTokenStakeStatus_Callback(_levels: number) {
  unityContext.send(blockchainManager, 'GetAllTokenStakeStatus_Callback',_levels);
}

export function GetAllLevels_Callback(_levels: number) {
  unityContext.send(blockchainManager, 'GetAllLevels_Callback', _levels);
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