/*****************************************************************************/
/*!
\file Home.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';
import { themeDark } from '../Theme/Theme';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import '../Theme/Theme';
import Unity, { UnityContext } from "react-unity-webgl";
import './Home.css'
import './Page.css'
import Header from '../Components/Header';
import { TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
const unityContext = new UnityContext({
    loaderUrl: "devbuild/devbuild.loader.js",
    dataUrl: "devbuild/devbuild.data",
    frameworkUrl: "devbuild/devbuild.framework.js",
    codeUrl: "devbuild/devbuild.wasm",
});


const MintPage: React.FC = () =>
{
    //react hooks
    //const [isUnityMounted, setIsUnityMounted] = React.useState<boolean>(true);
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
    const [progression, setProgression] = React.useState<number>(0);

    // Built-in event invoked when the Unity app's progress has changed.
    function handleOnUnityProgress(progression: number)
    {
        setProgression(progression);
    }

    // Built-in event invoked when the Unity app is loaded.
    function handleOnUnityLoaded()
    {

        setIsLoaded(true);
    }

    // When the component is mounted, we'll register some event listener.
    React.useEffect(() =>
    {
        unityContext.on("progress", handleOnUnityProgress);
        unityContext.on("loaded", handleOnUnityLoaded);

        return function ()
        {
            unityContext.removeAllEventListeners();
        };
        
    }, []);

    function MintNumber()
    {

    }


    return (
        <>
        <div className ="pageGlobal">
        <Header></Header>
        <ThemeProvider theme={themeDark}>
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
                      <Typography>
                        Select how much you want to mint
                    </Typography>
                   <TextField defaultValue={'0'} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                    {/*Full-screen button*/}

                  
                    <Button style={{ marginTop:'30px'}} variant='contained' onClick={() => { MintNumber() }} >
                          Mint!
                        </Button>
                </Grid>
            </Card>
            </ThemeProvider >
            </div>
        </>
    );
}
export default MintPage;