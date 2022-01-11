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

        return function ()
        {
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
                                <Typography paddingTop={'25px'} fontFamily='Source Sans Pro' letterSpacing={'10px'} align="center" color={'#FFFFFFFF'} fontWeight='bold' variant='subtitle1' fontSize='0.75rem'>
                                            - BOBOTS SEASON 1 -
                                        </Typography>
                                        <Card style={{
                                            background: 'linear-gradient(to right bottom, #FFFFFF44,#FFFFFF00)', borderRadius: '200px', padding: '10px', alignItems: ' center',
                                            justifyContent: ' center'
                                        }}>
                                            <Typography fontFamily='Source Sans Pro' align="center" color={'#FFFFFFFF'} variant='h3' fontStyle={'italic'} fontSize='2.5rem' fontWeight='900'>THE BLAST OFF</Typography>
                                        </Card>
                                        <Typography paddingTop={'25px'} fontFamily='Source Sans Pro' align="left" color={'white'} fontWeight='light' variant='subtitle1' fontSize='0.9rem'>
                                            <b>In the year 4040,</b> Robots have dominantly replace humans. Cute robots are then stationed on the moon. Together, the bobots rule the moon colony. -Write more here....
                                        </Typography>

                                        <Grid xs
                                            paddingTop={'30px'}
                                            container
                                            spacing={6}
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="center" >
                                            <Grid item >
                                                <Typography fontFamily='Source Sans Pro' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='1.8rem' fontWeight='900'>4040</Typography>
                                                <Typography fontFamily='Source Sans Pro' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='0.8rem' fontWeight='light'>Avatars</Typography>
                                            </Grid>
                                            <Grid item   
                                            >
                                                <Typography fontFamily='Source Sans Pro' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='1.8rem' fontWeight='900'>100+</Typography>
                                                <Typography fontFamily='Source Sans Pro' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='0.8rem' fontWeight='light'>Unique traits</Typography>
                                            </Grid>
                                            <Grid item

                                               
                                            >
                                                <Typography fontFamily='Source Sans Pro' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='1.8rem' fontWeight='900'>11</Typography>
                                                <Typography fontFamily='Source Sans Pro' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='0.8rem' fontWeight='light'>Properties</Typography>
                                            </Grid>
                                        </Grid>
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