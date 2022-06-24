import React from 'react';
import { Grid } from '@mui/material';
import '../../Theme/Theme';
import '../../Pages/Home.css';
import '../../Pages/Page.css';
import Typography from '@mui/material/Typography';
import 'motion-pointer/dist/index.css';
import 'motion-pointer/dist/index.js';
import '../../indexweb3.js';

interface ErrorMessageProps {
  message: string;
  isLoaded: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
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
      <div className="ui-text-long" style={{ zIndex: props.isLoaded ? -2 : 21 }}>
        <Typography
          paddingBottom={'50px'}
          paddingTop={'25px'}
          fontFamily="Dongle"
          letterSpacing={'3px'}
          lineHeight={0}
          color="#ffffffff"
          fontWeight="bold"
          variant="subtitle1"
          fontSize="1.5rem"
        >
          {props.message}
        </Typography>
      </div>
    </Grid>
  );
};

export default ErrorMessage;
