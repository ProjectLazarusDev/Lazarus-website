import * as blockchainSender from './BlockchainSender';
import axios from 'axios';
//sotres metamask accounts
var MetaMaskAccounts: any;

//connect to metamask
async function MetaLogin() {
  if ((window as any).ethereum) {
    MetaMaskAccounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    console.log(MetaMaskAccounts[0]);

    //send connected address back to engine
    blockchainSender.MetaMaskLogin_Callback(MetaMaskAccounts[0]);

    //jwt authentication to get access token with backend server
    //this accesToken will be passed to frontend to be stored in session storage
    //an optimization will be to store in httpOnly cookies which is a better approach
    axios
      .post('localhost:3001/users/login', MetaMaskAccounts[0])
      .then((response) => {
        console.log('hello');
        sessionStorage.setItem('accessToken', response.data.token);
      })
      .catch((error) => console.log(error));
  }
}

export { MetaLogin, MetaMaskAccounts };
