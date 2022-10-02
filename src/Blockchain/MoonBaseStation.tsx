import axios from 'axios';

export const SaveMoonbase = async (moonbaseData: string) => {
  const jsonData = JSON.parse(moonbaseData);
  axios
    .put(
      `${process.env.NEXT_PUBLIC_MOONBASE_ENDPOINT}`,
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
    })
    .catch((error) => console.log(error));
};
