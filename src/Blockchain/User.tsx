import unityContext from '../Context/UnityContext';
import { MagicGetBalance } from './Magic20';
import { MetaMaskAccounts } from './MetaMaskLogin';

//core chamber stake status callback
export function UpdatePlayerAddress(str: string) {
  unityContext.send('BlockchainManager', 'ReceivePlayerAddress', str);
}

//////////////////////////////////////////////////////////////////////////////////////////////

export function GetUserData() {
  MagicGetBalance();
  UpdatePlayerAddress(MetaMaskAccounts[0]);
}
