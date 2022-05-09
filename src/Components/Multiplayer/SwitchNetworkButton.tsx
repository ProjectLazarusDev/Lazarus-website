import React from 'react';
import { Button } from '@mui/material';
import '../../Theme/Theme';
import '../../Pages/Home.css';
import '../../Pages/Page.css';
import 'motion-pointer/dist/index.css';
import 'motion-pointer/dist/index.js';
import { switchNetwork } from '../../indexweb3.js';

interface SwitchNetworkProps {
  chainID: number;
}

const SwitchNetworkButton: React.FC<SwitchNetworkProps> = (props) => {
  return (
    <div className="ui-text" style={{ zIndex: 21 }}>
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
          paddingTop: '40%',
        }}
        onClick={() => switchNetwork(props.chainID)}
      >
        Click on screen to switch metamask network!
      </Button>
    </div>
  );
};

export default SwitchNetworkButton;
