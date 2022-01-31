/*****************************************************************************/
/*!
\file Home.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import { ThemeProvider } from '@mui/material/styles';
import '../Theme/Theme';
import { themeDark } from '../Theme/Theme';
import Unity, { UnityContext } from "react-unity-webgl";
import './Home.css'
import './Page.css'
import Typography from '@mui/material/Typography';
import Header from '../Components/Header';
import { FaArrowCircleLeft,  FaArrowCircleRight } from "react-icons/fa";
import { Button } from "@mui/material";
import {  Slide } from "@mui/material";
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
    function SelectCharacterLeft()
    {
        unityContext.send("MainMenuControl", "ChangeCharacterLeft");
    }
    function SelectCharacterRight()
    {
        unityContext.send("MainMenuControl",  "ChangeCharacterRight");
    }
    const [width, setWidth] = React.useState(window.innerWidth);

    const updateDimensions = () =>
    {

        setWidth(window.innerWidth);

    }
    React.useEffect(() =>
    {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);


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
                   

                <Grid
                container
                spacing={3}
                direction="column"
                alignItems="center"
                justifyContent="center"

            >
                <Grid container item direction="row" style={{ boxShadow: 'none' }} >
                    <Grid item xs={12} md={6} style={{ boxShadow: 'none' }} >

                        <Card style={{
                            zIndex: -2,
                            boxShadow: 'none',
                            height: '100%',
                            background: 'linear-gradient(to right bottom, #00000000,#00000000)',
                            borderRadius: '0px',
                            alignItems: ' center',
                            justifyContent: ' center'
                        }}>

                            <Grid container
                                spacing={0}
                                height='100%'
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                minHeight={width < 960 ? '125vh' : '100%'}
                            >

                                <Slide in={true} direction='up' timeout={2000}>
                                    <div className='PageContainer'>

                                        <Typography paddingBottom={'25px'} paddingTop={'25px'} fontFamily='Dongle' letterSpacing={'10px'} align={(width < 960) ? "center" : "left"} lineHeight={0} color='#fcba0366' fontWeight='bold' variant='subtitle1' fontSize='1.25rem'>
                                            .//DISCOVERING
                                        </Typography>
                                        <div className="glow">
                                            <Typography fontFamily='Dongle' align={width < 960 ? "center" : "left"} color={'#ffffffFF'} variant='h3' lineHeight={'2.5rem'} fontSize='7.5rem' fontWeight='900'>THE BOBOTS.</Typography>
                                        </div>
                                        <div className="glowWhite">
                                            <Typography paddingTop={'25px'} fontFamily='Dongle' align={width < 960 ? "center" : "left"} color={'white'} fontWeight='light' variant='subtitle1' fontSize='1.6rem'>
                                                <b>In the year 4040,</b>
                                                Robots have dominantly replace humans with cute robots being stationed on the moon.
                                                Together, 4040 bobots rule the moon colony.These bobots lives on the ethereum network using the  <b>ERC-721 blockchain.</b>
                                            </Typography>
                                            <Grid xs
                                                width={'100%'}
                                                paddingTop={'25px'}
                                                container
                                                spacing={3}
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="center" >
                                            <Button onClick={SelectCharacterLeft} variant="contained" style={{ height: '40px', width: '80px', fontFamily: 'Dongle', fontSize: '1.5rem', backgroundColor: '#ffffffaa', borderRadius: '20px', boxShadow: 'none', margin: '5px' }}>
                                               <FaArrowCircleLeft/> 
                                            </Button>

                                            <Button  onClick={SelectCharacterRight} variant="contained" style={{ height: '40px', width: '80px', fontFamily: 'Dongle', fontSize: '1.5rem', backgroundColor: '#ffffffaa', borderRadius: '20px', boxShadow: 'none', margin: '5px' }}>
                                            <FaArrowCircleRight/>
                                            </Button>
                                            </Grid>
                                            <Grid xs
                                                width={'100%'}
                                                paddingTop={'25px'}
                                                container
                                                spacing={3}
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="center" >
                                                <Grid item >
                                                    <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='2.8rem' fontWeight='900'>4040</Typography>
                                                    <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='1rem' fontWeight='light'>Avatars</Typography>
                                                </Grid>
                                                <Grid item
                                                >
                                                    <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='2.8rem' fontWeight='900'>100+</Typography>
                                                    <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='1rem' fontWeight='light'>Unique traits</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='2.8rem' fontWeight='900'>11</Typography>
                                                    <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='1rem' fontWeight='light'>Properties</Typography>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </div>
                                </Slide>


                            </Grid>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={6} height={'100vh'} style={{ boxShadow: '0px' }}>


                    </Grid>
                </Grid>
            </Grid>
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