import React from "react"


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { FaDiscord, FaTwitter, FaHome } from "react-icons/fa";
import { Button } from "@mui/material";

import { useHistory } from "react-router-dom";

const Header: React.FC = () =>
{
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() =>
  {
      
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () =>
  {
      setWidth(window.innerWidth);

  }
  const history = useHistory();

  function handleHome()
  {
    history.push("/");
  }

  function handleDiscord()
  {
    window.open('https://discord.gg/jbBzyemqk7');
  }
  function handleTwitter()
  {
    window.open('https://twitter.com/BobotsNFT');
  }

  const RenderIcons = (
    <>
      <Button variant="contained" style={{ height: '40px', width: '210px', fontFamily: 'Dongle', fontSize: '1.5rem', backgroundColor: '#000000aa', borderRadius: '20px', boxShadow: 'none', margin: '5px' }}>
        MINT COMING SOON
      </Button>
      <Button onClick={handleDiscord} variant="contained" style={{ height: '40px', width: '40px', fontFamily: 'Dongle', fontSize: '1.5rem', backgroundColor: '#00000055', borderRadius: '20px', boxShadow: 'none', margin: '5px' }} >
        <FaDiscord />
      </Button>
      <Button onClick={handleTwitter} variant="contained" style={{ height: '40px', width: '40px', fontFamily: 'Dongle', fontSize: '1.5rem', backgroundColor: '#00000055', borderRadius: '20px', boxShadow: 'none', margin: '5px' }} >
        <FaTwitter />
      </Button>


      <Button onClick={handleHome} variant="contained" style={{ height: '40px', width: '40px', fontFamily: 'Dongle', fontSize: '1.5rem', backgroundColor: '#00000055', borderRadius: '20px', boxShadow: 'none', margin: '5px' }} >
        <FaHome />
      </Button>

    </>);
  const Desk = (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{ boxShadow: 'none', backgroundColor: 'transparent' }} >
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Box >
              {RenderIcons}
            </Box>
          </Toolbar>
        </AppBar>

      </Box>

    </>);
 const Mobile = (
  <>
  
        <AppBar position="fixed" style={{ boxShadow: 'none', backgroundColor: 'transparent' }} >
          <Toolbar>
            <Box sx={{  flexGrow: 0.5 }}>
            </Box>
              {RenderIcons}
           
          </Toolbar>
        </AppBar>
      
     

  </>);
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

}





export default Header;