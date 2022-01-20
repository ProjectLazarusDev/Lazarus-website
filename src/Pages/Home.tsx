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
import { themeDark } from '../Theme/Theme';
import Unity, { UnityContext } from "react-unity-webgl";
import './Home.css'
import './Page.css'
import { CardMedia } from "@mui/material";
import Header from '../Components/Header';
import Lore from '../Components/Lore';
import BuildingNft from '../Components/BuildingNft';

import FAQ from '../Components/FAQ'
import Teams from '../Components/Teams';
import Seasons from '../Components/Seasons';

const unityContext = new UnityContext({
    loaderUrl: "devbuild/devbuild.loader.js",
    dataUrl: "devbuild/devbuild.data",
    frameworkUrl: "devbuild/devbuild.framework.js",
    codeUrl: "devbuild/devbuild.wasm",
});

const Home: React.FC = () =>
{
    //react hooks

    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
    var isFullscreen = false;
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
    function ToggleFullScreen(toggle: boolean)
    {
        unityContext.setFullscreen(toggle);
    }
    // When the component is mounted, we'll register some event listener.
    React.useEffect(() =>
    {

        unityContext.on("progress", handleOnUnityProgress);
        unityContext.on("loaded", handleOnUnityLoaded);
        unityContext.on("quitted", function () { });

        return function ()
        {
            // handleOnClickUnMountUnity();
            unityContext.removeAllEventListeners();
        };

    }, []);

    return (
        <>

            <div className="pageGlobal">
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
                                    style={{ width: progression * 100 + "%" }}
                                />
                            </div>
                        )}

                        <Unity className="unityWindow"
                            unityContext={unityContext}


                            style={{
                                borderRadius: '20px', width: "100vw", height: "100vh"
                            }}
                        />
                        {/*Full-screen button*/}
                        <Button onClick={() => { ToggleFullScreen(!isFullscreen) }} >
                            Toggle fullScreen
                        </Button>

                    </Grid>
                </Card>
                <ThemeProvider theme={themeDark}>
                    <Card style={{ borderRadius: '0' }} >
                        <div className="pagePosWrap">
                            <CardMedia
                                component='video'
                                muted={true}
                                image={"title.mp4"}
                                autoPlay
                                loop
                                style={{}} />
                            <div className="pagePosOverlay">
                                <Card style={{
                                    zIndex: 2,
                                    borderRadius: '0px',
                                    background: 'linear-gradient(to right bottom, #05050555, #000000FF)',
                                    width: '100vw', height: '120vh',
                                    alignItems: ' center',
                                    justifyContent: ' center'
                                }} />
                            </div>
                            <div className="pagePos">
                                <div className="pagePosWidth">
                                    <Typography paddingTop={'25px'} fontFamily='Dongle' letterSpacing={'10px'} lineHeight={'2rem'} align="center" paddingBottom={'2rem'} color={'#FFFFFFF99'} fontWeight='bold' variant='subtitle1' fontSize='1rem'>
                                        BOBOTS SEASON 1
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Lore></Lore>
                    <BuildingNft></BuildingNft>
                    <Seasons></Seasons>
                    <Teams></Teams>
                    <FAQ></FAQ>
                </ThemeProvider>
            </div>
        </>
    );
}
export default Home;