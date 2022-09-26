import * as blockchainSender from './BlockchainSender';
import axios from 'axios';

// sotres metamask accounts
var MetaMaskAccounts: any;

// Given a cookie key `name`, returns the value of
// the cookie or `null`, if the key is not found.
function getCookie(name: string): string | null {
  const nameLenPlus = name.length + 1;
  return (
    document.cookie
      .split(';')
      .map((c) => c.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null
  );
}

// connect to metamask
async function MetaLogin() {
  if ((window as any).ethereum) {
    MetaMaskAccounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    console.log(MetaMaskAccounts[0]);

    // send connected address back to engine
    blockchainSender.MetaMaskLogin_Callback(MetaMaskAccounts[0]);

    console.log('process.env.NEXT_PUBLIC_NONCE_ENDPOINT', process.env.NEXT_PUBLIC_NONCE_ENDPOINT, MetaMaskAccounts[0]);
    // nonce retrieval
    axios
      .get(`${process.env.NEXT_PUBLIC_NONCE_ENDPOINT}`, { params: { metamaskAddress: MetaMaskAccounts[0] } })
      .then((response) => {
        console.log('response', response);
        const nonce = getCookie('nonce');
        console.log('nonce', nonce, document.cookie);

        // jwt authentication to get access token with backend server
        axios
          .post(`${process.env.NEXT_PUBLIC_LOGIN_ENDPOINT}`, { metamaskAddress: MetaMaskAccounts[0] })
          .then((response) => {
            console.log('log in successful!', response);
            const access_token = getCookie('access_token');
            console.log('access_token', access_token);
            //blockchainSender.GetCookieHeader_Callback();
          })
          //TODO: check why failing here
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }
}

export { MetaLogin, MetaMaskAccounts };
