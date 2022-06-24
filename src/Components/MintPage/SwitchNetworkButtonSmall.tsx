import React from 'react';
import { Button } from '@mui/material';
import '../../Theme/Theme';
import '../../Pages/Home.css';
import '../../Pages/Page.css';
import 'motion-pointer/dist/index.css';
import 'motion-pointer/dist/index.js';
import { switchNetwork } from '../../indexweb3.js';
import { Grid } from '@mui/material';

interface SwitchNetworkSmallProps {
  chainID: number;
}

const SwitchNetworkButtonSmall: React.FC<SwitchNetworkSmallProps> = (props) => {
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
        height: '50vh',
        boxShadow: 'none',
      }}
    >
      <div className="mint" style={{ zIndex: 21 }}>
        <Button
          sx={{
            opacity: [0.75, 0.75, 0.75],
          }}
          style={{
            color: 'white',
            fontFamily: 'Dongle',
            letterSpacing: '1px',
            fontSize: '2rem',
            backgroundColor: '#000000ff',
            height: '100vh',
            width: '100vw',
            paddingTop: '0%',
          }}
          onClick={() => switchNetwork(props.chainID)}
        >
          Click on screen to switch metamask network!
        </Button>
      </div>
    </Grid>
  );
};

export default SwitchNetworkButtonSmall;
