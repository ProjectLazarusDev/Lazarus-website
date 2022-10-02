import * as blockchainSender from './BlockchainSender';
import axios from 'axios';

// sotres metamask accounts
var MetaMaskAccounts: any;

// connect to metamask
async function MetaLogin() {
  if ((window as any).ethereum) {
    MetaMaskAccounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    console.log(MetaMaskAccounts[0]);

    // send connected address back to engine
    blockchainSender.MetaMaskLogin_Callback(MetaMaskAccounts[0]);

    console.log(
      'process.env.REACT_APP_PUBLIC_NONCE_ENDPOINT',
      process.env.REACT_APP_PUBLIC_NONCE_ENDPOINT,
      process.env.REACT_APP_PUBLIC_LOGIN_ENDPOINT,
      MetaMaskAccounts[0]
    );
    // nonce retrieval
    axios
      .get(`${process.env.REACT_APP_PUBLIC_NONCE_ENDPOINT}`, {
        params: { metamaskAddress: MetaMaskAccounts[0] },
        withCredentials: true,
      })
      .then((response) => {
        console.log('response', response);

        // jwt authentication to get access token with backend server
        axios
          .post(
            `${process.env.REACT_APP_PUBLIC_LOGIN_ENDPOINT}`,
            {
              metamaskAddress: MetaMaskAccounts[0],
            },
            {
              //AxiosRequestConfig parameter
              withCredentials: true,
            }
          )
          .then((response) => {
            console.log('log in successful!', response);
            //blockchainSender.GetCookieHeader_Callback();
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }
}

export { MetaLogin, MetaMaskAccounts };
