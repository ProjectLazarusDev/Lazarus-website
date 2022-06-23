import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import '../../Theme/Theme';
import '../../Pages/Home.css';
import '../../Pages/Page.css';
import Typography from '@mui/material/Typography';
import 'motion-pointer/dist/index.css';
import 'motion-pointer/dist/index.js';
import { Button } from '@mui/material';
import { CardMedia } from '@mui/material';
import { MetaLogin } from '../../Blockchain/MetaMaskLogin';
import * as bootUpStation from '../../Blockchain/BootUpStation';
import { mintMessageString } from '../../Blockchain/BootUpStation';

interface MobileMintProps {
  message: string;
  isLoaded: boolean;
}

const MobileMint: React.FC<MobileMintProps> = (props) => {
  const [errorMessage, setErrorMessage] = useState<String>();
  const [isPressed, setIsPressed] = useState<Boolean>(false);

  const handleClick = async () => {
    // prevent user from spamming the mint button
    if (isPressed === false) {
      setIsPressed(true);
      await bootUpStation.MintBobot();
      setErrorMessage(mintMessageString);
      setIsPressed(false);
    }
  };

  useEffect(() => {
    setErrorMessage(mintMessageString);
  }, [mintMessageString]);

  // log in manually first as we need to access the
  // metamask account wallet for minting verification later on
  MetaLogin();

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '0px',
        height: '100vh',
        boxShadow: 'none',
      }}
    >
      <div className="mint" style={{ zIndex: 21 }}>
        <Typography
          paddingBottom={'50px'}
          paddingTop={'25px'}
          fontFamily="Dongle"
          letterSpacing={'1px'}
          lineHeight={0}
          color="#ffffffff"
          fontWeight="bold"
          variant="subtitle1"
          fontSize="1.25rem"
        >
          {errorMessage}
        </Typography>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderRadius: '0px',
            boxShadow: 'none',
          }}
        >
          <CardMedia
            component="video"
            muted={true}
            image={'mint/video_unrevealed.mp4'}
            autoPlay
            loop
            style={{
              zIndex: 10,
              margin: '5px',
              width: '250px',
              height: '250px',
              borderRadius: '50px',
            }}
          />
        </Grid>
        <Typography
          paddingBottom={'50px'}
          paddingTop={'25px'}
          fontFamily="Dongle"
          letterSpacing={'5px'}
          lineHeight={0}
          color="#ffffffff"
          fontWeight="bold"
          variant="subtitle1"
          fontSize="1.5rem"
        >
          BOBOTS GENESIS
        </Typography>
        <Button
          onClick={handleClick}
          variant="contained"
          style={{
            height: '40px',
            width: '80px',
            fontFamily: 'Dongle',
            fontSize: '1.5rem',
            backgroundColor: '#ebbd34cc',
            borderRadius: '20px',
            boxShadow: 'none',
            margin: '5px',
          }}
        >
          MINT
        </Button>
      </div>
    </Grid>
  );
};

export default MobileMint;
