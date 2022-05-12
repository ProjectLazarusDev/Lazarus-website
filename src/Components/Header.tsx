import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { FaDiscord, FaTwitter, FaHome, FaPlay } from 'react-icons/fa';
import { Button } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { useHistory, useLocation } from 'react-router-dom';

import { unityContext, unityContextSeason0 } from '../Context/UnityContext';
import { unityContextHomePage } from '../Pages/Home';

const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  const history = useHistory();
  const location = useLocation();
  // placeholder code to fix the popup error caused by unity 2021.2 ver with react-unity-webgl
  // https://github.com/jeffreylanters/react-unity-webgl/issues/250
  const unityUnload = async () => {
    await unityContext.quitUnityInstance();
    await unityContextSeason0.quitUnityInstance();
  };

  const unityHomeUnload = async () => {
    await unityContextHomePage.quitUnityInstance();
  };

  async function handleHome() {
    unityUnload()
      .then(() => {
        history.push('/');
      })
      .catch(console.error);
  }

  function handleDiscord() {
    window.open('https://discord.gg/jbBzyemqk7');
  }
  function handleTwitter() {
    window.open('https://twitter.com/BobotsNFT');
  }

  async function handlePlay() {
    unityHomeUnload()
      .then(() => {
        history.push('/play');
      })
      .catch(console.error);
  }

  const RenderIcons = (
    <>
      <Button
        onClick={handleDiscord}
        variant="contained"
        style={{
          height: '40px',
          width: '40px',
          fontFamily: 'Dongle',
          fontSize: '1.5rem',
          backgroundColor: '#00000055',
          borderRadius: '20px',
          boxShadow: 'none',
          margin: '5px',
        }}
      >
        <FaDiscord />
      </Button>
      <Button
        onClick={handleTwitter}
        variant="contained"
        style={{
          height: '40px',
          width: '40px',
          fontFamily: 'Dongle',
          fontSize: '1.5rem',
          backgroundColor: '#00000055',
          borderRadius: '20px',
          boxShadow: 'none',
          margin: '5px',
        }}
      >
        <FaTwitter />
      </Button>

      <Button
        onClick={handleHome}
        variant="contained"
        style={{
          height: '40px',
          width: '40px',
          fontFamily: 'Dongle',
          fontSize: '1.5rem',
          backgroundColor: '#00000055',
          borderRadius: '20px',
          boxShadow: 'none',
          margin: '5px',
        }}
      >
        <FaHome />
      </Button>

      {isMobile === false && location.pathname !== '/play' ? (
        <Button
          onClick={handlePlay}
          variant="contained"
          style={{
            height: '100px',
            width: '100px',
            fontFamily: 'Dongle',
            fontSize: '1.5rem',
            backgroundColor: '#000000aa',
            borderRadius: '20px',
            boxShadow: 'none',
            margin: '5px',
          }}
        >
          <FaPlay />
        </Button>
      ) : null}
    </>
  );
  const RenderIconsMobile = (
    <>
      <Button
        onClick={handleDiscord}
        variant="contained"
        style={{
          height: '40px',
          width: '40px',
          fontFamily: 'Dongle',
          fontSize: '1.5rem',
          backgroundColor: '#00000055',
          borderRadius: '20px',
          boxShadow: 'none',
          margin: '5px',
        }}
      >
        <FaDiscord />
      </Button>
      <Button
        onClick={handleTwitter}
        variant="contained"
        style={{
          height: '40px',
          width: '40px',
          fontFamily: 'Dongle',
          fontSize: '1.5rem',
          backgroundColor: '#00000055',
          borderRadius: '20px',
          boxShadow: 'none',
          margin: '5px',
        }}
      >
        <FaTwitter />
      </Button>

      <Button
        onClick={handleHome}
        variant="contained"
        style={{
          height: '40px',
          width: '40px',
          fontFamily: 'Dongle',
          fontSize: '1.5rem',
          backgroundColor: '#00000055',
          borderRadius: '20px',
          boxShadow: 'none',
          margin: '5px',
        }}
      >
        <FaHome />
      </Button>
    </>
  );
  const Desk = (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{ paddingTop: '20px', boxShadow: 'none', backgroundColor: 'transparent' }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Box>{RenderIcons}</Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
  const Mobile = (
    <>
      <AppBar position="fixed" style={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 0.5 }}></Box>
          {RenderIconsMobile}
        </Toolbar>
      </AppBar>
    </>
  );
  return (
    <>
      {
        <div>
          {width >= 960 && Desk}
          {width < 960 && Mobile}
        </div>
      }
    </>
  );
};

export default Header;
