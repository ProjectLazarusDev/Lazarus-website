import React from 'react';
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

interface MobileMint {
  message: string;
  isLoaded: boolean;
}

const MobileMint: React.FC<MobileMint> = (props) => {
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
          onClick={bootUpStation.MintBobot}
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
