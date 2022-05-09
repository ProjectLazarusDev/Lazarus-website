/*****************************************************************************/
/*!
\file Multiplayer.js
\date 2022
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';
import Card from '@mui/material/Card';
import '../Theme/Theme';

import './Home.css';
import './Page.css';
import Header from '../Components/Header';

import 'motion-pointer/dist/index.css';
import 'motion-pointer/dist/index.js';
import { isMobile } from 'react-device-detect';
import GameScreen from '../Components/GameScreen';

import * as blockchain from '../Blockchain/BlockchainFunctions';
import { onNetworkChange, switchNetwork, isMetaMaskLocked, isMetaMaskInstalled } from '../indexweb3.js';
import { unityContextSeason0 } from '../Context/UnityContext';
import ErrorMessage from '../Components/Multiplayer/ErrorMessage';
//abi import

import { ethers } from 'ethers';

const Multiplayer: React.FC = () => {
  //react hooks
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [progression, setProgression] = React.useState<number>(0);
  const [scrollValue, setScrollValue] = React.useState<number>(0.0);
  // using Abitrium One network as default
  const [chainID, setChainID] = React.useState<number>(42161);
  const [isLocked, setIsLocked] = React.useState<boolean>(true);

  const unityLoad = () => {
    unityContextSeason0.on('progress', handleOnUnityProgress);
    unityContextSeason0.on('loaded', handleOnUnityLoaded);
    unityContextSeason0.on('quitted', function () {});
    document.body.style.overflowY = 'hidden';
    window.addEventListener('resize', updateDimensions);
  };

  // player must be on Arbitrum One's network, else initiate request to change to it for user
  // only then we load the game
  const verifyNetwork = async (correctChainID: number) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    provider.getNetwork().then((response) => {
      if (response.chainId !== correctChainID) {
        switchNetwork(correctChainID).then(() => {
          window.location.reload();
        });
      } else {
        unityLoad();
      }
    });
  };

  const isAccountLocked = async () => {
    if (await isMetaMaskLocked()) {
      console.log('lockeeddd');
      setIsLocked(true);
    } else {
      console.log('not lockeeddd');
      setIsLocked(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('load', onNetworkChange);
  });

  React.useEffect(() => {
    const scrollFun = () => {
      setScrollValue(-document.body.getBoundingClientRect().top / document.body.getBoundingClientRect().height);
      //unityContextSeason0.send("MainMenuControl", "SetScrollBarValue", scrollValue);
    };
    window.addEventListener('scroll', scrollFun);

    return () => {
      window.removeEventListener('scroll', scrollFun);
    };
  }, [scrollValue]);

  // Built-in event invoked when the Unity app's progress has changed.
  function handleOnUnityProgress(progression: number) {
    setProgression(progression);
  }

  // Built-in event invoked when the Unity app is loaded.
  function handleOnUnityLoaded() {
    document.body.style.overflowY = 'scroll';
    document.documentElement.scrollTop = 0;
    setIsLoaded(true);
    setScrollValue(-document.body.getBoundingClientRect().top / document.body.getBoundingClientRect().height);
    unityContextSeason0.setFullscreen(true);
  }

  const updateDimensions = () => {};

  React.useEffect(() => {
    isAccountLocked();
    verifyNetwork(chainID);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // When the component is mounted, we'll register some event listener.
  React.useEffect(() => {
    blockchain.BindToContext();
    return function () {
      // handleOnClickUnMountUnity();
      unityContextSeason0.removeAllEventListeners();
    };
  }, []);

  function render() {
    let currentRender;
    if (isMobile === true) {
      currentRender = <ErrorMessage message="Game is not available on mobile!" isLoaded={isLoaded}></ErrorMessage>;
    } else if (isMetaMaskInstalled() === false) {
      currentRender = <ErrorMessage message="Please install MetaMask first!" isLoaded={isLoaded}></ErrorMessage>;
    } else if (isLocked === true) {
      currentRender = <ErrorMessage message="Please login to MetaMask first!" isLoaded={isLoaded}></ErrorMessage>;
    } else {
      currentRender = (
        <GameScreen isLoaded={isLoaded} progression={progression} currUnityContext={unityContextSeason0}>
          {' '}
        </GameScreen>
      );
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
            zIndex: isLoaded ? -2 : 20,
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
            height: '90vh',
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
export default Multiplayer;
