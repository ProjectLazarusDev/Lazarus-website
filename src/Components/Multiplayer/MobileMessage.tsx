import React from 'react';
import { Grid } from '@mui/material';
import '../../Theme/Theme';
import '../../Pages/Home.css';
import '../../Pages/Page.css';
import Typography from '@mui/material/Typography';
import 'motion-pointer/dist/index.css';
import 'motion-pointer/dist/index.js';
import '../../indexweb3.js';

interface MobileMessageProps {
  isLoaded: boolean;
}

const MobileMessage: React.FC<MobileMessageProps> = (props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        borderRadius: '0px',
        height: '100vh',
        boxShadow: 'none',
      }}
    >
      <div className="ui-text" style={{ zIndex: props.isLoaded ? -2 : 21 }}>
        <Typography
          paddingBottom={'50px'}
          paddingTop={'25px'}
          fontFamily="Dongle"
          letterSpacing={'5px'}
          lineHeight={0}
          color="#ffffffff"
          fontWeight="bold"
          variant="subtitle1"
          fontSize="1.25rem"
        >
          Game is not available on mobile!
        </Typography>
      </div>
    </Grid>
  );
};

export default MobileMessage;
