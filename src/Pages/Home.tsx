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
import 'motion-pointer/dist/index.css';
import 'motion-pointer/dist/index.js';

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
    const [progression, setProgression] = React.useState<number>(0);
    const [ scrollValue, setScrollValue] = React.useState<number>(0.0);
  
    React.useEffect(() => {
      
        const scrollFun = () => {
        
            console.log(document.body.getBoundingClientRect().top);
            setScrollValue((-document.body.getBoundingClientRect().top)/document.body.getBoundingClientRect().height);
            unityContext.send("MainMenuControl", "SetScrollBarValue", scrollValue);
        }
        window.addEventListener("scroll", scrollFun);
      
        return () => {
          window.removeEventListener("scroll", scrollFun);
        };
      }, [scrollValue]);


    // Built-in event invoked when the Unity app's progress has changed.
    function handleOnUnityProgress(progression: number)
    {
        setProgression(progression);
    }

    // Built-in event invoked when the Unity app is loaded.
    function handleOnUnityLoaded()
    {

        setIsLoaded(true);
        unityContext.setFullscreen(true);
    }

    //toggle full-screen control
    //function ToggleFullScreen(toggle: boolean)
    //{
    //    unityContext.setFullscreen(toggle);
    //}

    function RenderFullScreenButton()
    {
        //<Button style={{ color: 'white', height: '40px', fontFamily: 'Dongle', letterSpacing: '1px', fontSize: '1.5rem', backgroundColor: '#000000ff', width: '300px' }} onClick={() => { ToggleFullScreen(!isFullscreen) }} >
        //                            Click to focus game
        //                        </Button>
        return(
        <>
         
        </>
        );
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
                   boxShadow:'none',
                    zIndex: -2, width: '100vw', height: '90vh',
                    borderRadius: '0px',
                    background: 'linear-gradient(to right bottom, #12121200, #05050500)'
                }}>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ borderRadius: '0px', height: '100vh', boxShadow:'none' }}
                    >
                        {isLoaded === false && (
                            <div className="progress-bar">
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: progression * 100 + "%" }}
                                />
                            </div>
                        )}
                        <div className="pageUnity">
                            <Unity className="unityWindow"
                                unityContext={unityContext}
                                style={{
                                    borderRadius: '0px', width: "100vw", height: "101vh"
                                }}
                            />
                        </div>
                        <div className="pagePos">
                            <div className="pagePosAlign">
                                {RenderFullScreenButton()}
                               
                            </div>
                        </div>
                        {/*Full-screen button*/}


                    </Grid>
                </Card>
                <ThemeProvider theme={themeDark}>
                   

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


/*
<Card style={{ borderRadius: '0' }} >
                        <div className="pagePosWrap">
                            <CardMedia
                                component='video'
                                muted={true}
                                image={"title2.mp4"}
                                autoPlay
                                loop
                                style={{}} />
                            <div className="pagePosOverlay">
                                <Card style={{
                                    zIndex: 2,
                                    borderRadius: '0px',
                                    background: 'linear-gradient(to right bottom, #05050500, #00000055)',
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
*/