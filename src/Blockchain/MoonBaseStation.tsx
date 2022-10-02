import axios from 'axios';
import * as blockchainSender from './BlockchainSender';

export const SaveMoonbase = async (moonbaseData: string) => {
  const jsonData = JSON.parse(moonbaseData);
  axios
    .put(
      `${process.env.REACT_APP_PUBLIC_MOONBASE_ENDPOINT}`,
      {
        metamaskAddress: jsonData.metamaskAddress,
        data: jsonData.data,
      },
      {
        //AxiosRequestConfig parameter
        withCredentials: true,
      }
    )
    .then((response) => {
      console.log('saving successful!', response);
      blockchainSender.Log_Callback(`Base setup is saved!`);
    })
    .catch((error) => {
      console.log(error);
      blockchainSender.Log_Callback(`An error occurred during base saving`);
    });
};
