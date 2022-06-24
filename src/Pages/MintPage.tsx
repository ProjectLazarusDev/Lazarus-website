import React from 'react';
import Card from '@mui/material/Card';
import '../Theme/Theme';

import './Home.css';
import './Page.css';
import Header from '../Components/Header';

import 'motion-pointer/dist/index.css';
import 'motion-pointer/dist/index.js';

import { onNetworkChange, isMetaMaskLocked, isMetaMaskInstalled } from '../indexweb3.js';
import ErrorMessage from '../Components/Multiplayer/ErrorMessage';
import SwitchNetworkButtonSmall from '../Components/MintPage/SwitchNetworkButtonSmall';
import MobileMint from '../Components/Multiplayer/MobileMint';
//abi import

import { ethers } from 'ethers';

// using Abitrium One network as default
const chainID = 42161;
const MintPage: React.FC = () => {
  //react hooks
  // check to see if meta mask account is locked
  const [isLocked, setIsLocked] = React.useState<boolean>(true);
  // check on whether the correct network is used
  const [isCorrectNetwork, setIsCorrectNetwork] = React.useState<boolean>(false);

  // player must be on Arbitrum One's network, else initiate request to change to it for user
  // only then we load the game
  const verifyNetwork = async (correctChainID: number) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    provider.getNetwork().then((response) => {
      if (response.chainId !== correctChainID) {
        setIsCorrectNetwork(false);
      } else {
        setIsCorrectNetwork(true);
      }
    });
  };

  const isAccountLocked = async () => {
    if (await isMetaMaskLocked()) {
      setIsLocked(true);
    } else {
      setIsLocked(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('load', onNetworkChange);
  });

  React.useEffect(() => {
    isAccountLocked();
    verifyNetwork(chainID);
  });

  function render() {
    let currentRender;
    if (isMetaMaskInstalled() === false) {
      currentRender = <ErrorMessage message="PLEASE INSTALL METAMASK FIRST!" isLoaded={false}></ErrorMessage>;
    } else if (isLocked === true) {
      currentRender = <ErrorMessage message="PLEASE LOGIN TO METAMASK FIRST!" isLoaded={false}></ErrorMessage>;
    } else if (isCorrectNetwork === false) {
      currentRender = <SwitchNetworkButtonSmall chainID={chainID}></SwitchNetworkButtonSmall>;
    } else {
      currentRender = <MobileMint></MobileMint>;
    }
    return currentRender;
  }

  return (
    <>
      <script src="../indexweb3.js"> </script>
      <div className="pageGlobal">
        <Header></Header>

        <Card
          style={{
            zIndex: 20,
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(to right bottom, #444444ff,#000000ff)',
            borderRadius: '0px',
            alignItems: ' center',
            justifyContent: ' center',
          }}
        ></Card>
        <Card
          style={{
            boxShadow: 'none',
            zIndex: -2,
            width: '100vw',
            height: '100vh',
            borderRadius: '0px',
            background: 'linear-gradient(to right bottom, #12121200, #05050500)',
          }}
        >
          {render()}
        </Card>
      </div>
    </>
  );
};

export default MintPage;

// const MintPage: React.FC = () => {
//   function MintNumber() {}

//   return (
//     <>
//       <div className="pageGlobal">
//         <Header></Header>
//         <ThemeProvider theme={themeDark}>
//           <Card
//             style={{
//               zIndex: -2,
//               width: '100vw',
//               height: '100%',
//               borderRadius: '0px',
//               background: 'linear-gradient(to right bottom, #121212, #050505)',
//             }}
//           >
//             <Grid
//               container
//               spacing={0}
//               direction="column"
//               alignItems="center"
//               justifyContent="center"
//               style={{ height: '100vh' }}
//             >
//               <Typography>Select how much you want to mint</Typography>
//               <TextField defaultValue={'0'} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
//               {/*Full-screen button*/}

//               <Button
//                 style={{ marginTop: '30px' }}
//                 variant="contained"
//                 onClick={() => {
//                   MintNumber();
//                 }}
//               >
//                 Mint!
//               </Button>
//             </Grid>
//           </Card>
//         </ThemeProvider>
//       </div>
//     </>
//   );
// };
