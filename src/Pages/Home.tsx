/*****************************************************************************/
/*!
\file Home.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import { ThemeProvider } from '@mui/material/styles';
import '../Theme/Theme';
import { themeLight } from '../Theme/Theme';
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "devbuild/devbuild.loader.js",
    dataUrl: "devbuild/devbuild.data",
    frameworkUrl: "devbuild/devbuild.framework.js",
    codeUrl: "devbuild/devbuild.wasm",
});



const Home: React.FC = () =>
{
    return (
        <>
            <Card style={{
                zIndex: -2, width: '100vw', height: '100%',
                 borderRadius: '0px',
                background: 'linear-gradient(to right bottom, #121212, #050505)'
            }}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ height: '100vh' }}
                >
                    <Unity
                        unityContext={unityContext}
                        matchWebGLToCanvasSize={true}
                        style={{ borderRadius: '20px', width: "90vw", height: "400px", }}
                    />
                </Grid>
            </Card>
            <ThemeProvider theme={themeLight}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ height: '100vh' }}
                >
                    <Typography align="center" variant="h1" component="h1"
                        gutterBottom  fontFamily='Varela Round' fontWeight='bold' color='black'>
                        BOBOTS.
                    </Typography>
                    <Typography style={{ width :'20vw' }} align="center" variant="body1" component="h1"
                        gutterBottom  fontFamily='Varela Round' fontWeight='light' color='black'>
                       Engine Generated Collection with a collection of 10,000 bobots. 
Keep hyping,keep vibing.
                    </Typography>

                </Grid>
            </ThemeProvider>
        </>
    );
}
export default Home;