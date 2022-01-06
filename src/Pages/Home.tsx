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
import { Button } from '@mui/material';
import '../Theme/Theme';
import { themeLight } from '../Theme/Theme';
import Unity, { UnityContext } from "react-unity-webgl";
import './Home.css'
import './Page.css'
import Header from '../Components/Header';
import BlockChain from '../Components/BlockChain';
import Lore from  '../Pages/Lore';

const unityContext = new UnityContext({
    loaderUrl: "devbuild/devbuild.loader.js",
    dataUrl: "devbuild/devbuild.data",
    frameworkUrl: "devbuild/devbuild.framework.js",
    codeUrl: "devbuild/devbuild.wasm",
});


const Home: React.FC = () =>
{
    //react hooks
    //const [isUnityMounted, setIsUnityMounted] = React.useState<boolean>(true);
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
    const [isFullscreen, setFullscreen] = React.useState<boolean>(false);
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

    //toggle full-screen control
    function ToggleFullScreen(toggle:boolean)
    {
        unityContext.setFullscreen(toggle);
    }


    //send data from react to unity
    function spawnStuff()
    {
        //                GameObject name   function name   parameter
        unityContext.send("GameController", "SpawnEnemies", 100);
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

        //code to receive from unity
        unityContext.on("GameOver", function (userName, score) 
        {
           //setIsGameOver(true);
            
        });



    }, []);


    return (
        <>
        <div className ="pageGlobal">
        <Header></Header>
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
                    {isLoaded === false && (
                        <div className="progress-bar">
                            <div
                                className="progress-bar-fill"
                                style={{  width: progression * 100 + "%" }}
                            />
                        </div>
                    )}

                    <Unity className="unityWindow"
                        unityContext={unityContext}
                       
                        style={{ 
                         borderRadius: '20px', width: "80vw", height: "400px" }}
                    />
                    {/*Full-screen button*/}
                    <Button onClick={()=>{ ToggleFullScreen(!isFullscreen)}} >
                        Toggle fullScreen
                    </Button>
                    
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
                        gutterBottom fontFamily='Varela Round' fontWeight='bold' color='black'>
                        BOBOTS.
                    </Typography>
                    <Typography style={{ width: '400px' }} align="center" variant="body1" component="h1"
                        gutterBottom fontFamily='Varela Round' fontWeight='light' color='black'>
                        Engine Generated Collection with a collection of 10,000 bobots.
                        Keep hyping,keep vibing.
                    </Typography>
                    <BlockChain></BlockChain>
                </Grid>

                <Lore></Lore>
            </ThemeProvider>
            </div>
        </>
    );
}
export default Home;