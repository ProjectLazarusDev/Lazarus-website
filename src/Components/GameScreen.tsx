import React from 'react';
import { Grid } from '@mui/material';
import '../Theme/Theme';
import Unity, { UnityContext } from 'react-unity-webgl';
import '../Pages/Home.css';
import '../Pages/Page.css';
import Typography from '@mui/material/Typography';
import { isMobile } from 'react-device-detect';
import '../indexweb3.js';
import { MetaLogin } from '../Blockchain/MetaMaskLogin';

interface GameScreenProps {
  isLoaded: boolean;
  progression: number;
  currUnityContext: UnityContext;
}

const GameScreen: React.FC<GameScreenProps> = (props) => {



  const GetLoadingString = (load: Number) => {
    if (load < 0.5) return 'CHARGING UP...';

    if (load < 0.8) return 'BOBOTS ROLLING IN...';

    return 'DOWNLOADED...LOADING GAME';
  };

  if(isMobile === true){
    MetaLogin();
  }

  return (
    <>
      {
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{pointerEvents:'none', borderRadius: '0px',  height: props.isLoaded === true ?'0vh': '100vh', boxShadow: 'none' }}
        >
          <div className="progress-bar" style={{ zIndex: props.isLoaded ? -2 : 21 }}>
            <div className="progress-bar-title">
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
                {GetLoadingString(props.progression)}
              </Typography>
            </div>
          </div>
          {props.isLoaded === false && (
            <div className="progress-bar" style={{ zIndex: props.isLoaded ? -2 : 21 }}>
              <div className="progress-bar-fill" style={{ width: props.progression * 100 + '%' }} />
            </div>
          )}
         
         </Grid>
      }
            <Unity
              className="unityWindow"
              unityContext={props.currUnityContext}
              devicePixelRatio={isMobile ? 0.85 : 0.9}
              style={{
                borderRadius: '0px',
                width: '100vw',
                height: '101vh',
              }}
            />
       
        
    </>
  );
};

export default GameScreen;
