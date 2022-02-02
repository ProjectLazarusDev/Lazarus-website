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
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Button } from "@mui/material";
import { Slide } from "@mui/material";
import BuildingNft from '../Components/BuildingNft';
import FAQ from '../Components/FAQ'
import Teams from '../Components/Teams';
import Seasons from '../Components/Seasons';
import 'motion-pointer/dist/index.css';
import 'motion-pointer/dist/index.js';
import { isMobile } from 'react-device-detect';
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
    const [scrollValue, setScrollValue] = React.useState<number>(0.0);

    React.useEffect(() =>
    {

        const scrollFun = () =>
        {
            // console.log((-document.body.getBoundingClientRect().top) / document.body.getBoundingClientRect().height);
            setScrollValue((-document.body.getBoundingClientRect().top) / document.body.getBoundingClientRect().height);
            unityContext.send("MainMenuControl", "SetScrollBarValue", scrollValue);
        }
        window.addEventListener("scroll", scrollFun);

        return () =>
        {
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
        document.body.style.overflowY = "scroll";
        document.documentElement.scrollTop = 0;
        setIsLoaded(true);
        setScrollValue((-document.body.getBoundingClientRect().top) / document.body.getBoundingClientRect().height);
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
        return (
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
        unityContext.send("MainMenuControl", "ChangeCharacterRight");
    }
    const [width, setWidth] = React.useState(window.innerWidth);

    const updateDimensions = () =>
    {

        setWidth(window.innerWidth);

    }


    const GetLoadingString = (load: Number) =>
    {
        if (load < 0.5)
            return "CHARGING UP...";

        if (load < 0.8)
            return "BOBOTS ROLLING IN...";

        return "INITIALIZING...";
    }


    React.useEffect(() =>
    {
        document.body.style.overflowY = "hidden";
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);


    // When the component is mounted, we'll register some event listener.
    React.useEffect(() =>
    {
        setScrollValue((-document.body.getBoundingClientRect().top) / document.body.getBoundingClientRect().height);
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
                    zIndex: isLoaded ? -2 : 20,
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    background: 'linear-gradient(to right bottom, #444444ff,#000000ff)',
                    borderRadius: '0px',
                    alignItems: ' center',
                    justifyContent: ' center'
                }}></Card>
                <Card style={{
                    boxShadow: 'none',
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
                        style={{ borderRadius: '0px', height: '100vh', boxShadow: 'none' }}
                    >
                        <div className="progress-bar" style={{ zIndex: isLoaded ? -2 : 21 }}>
                            <div className="progress-bar-title" >
                                <Typography paddingBottom={'50px'} paddingTop={'25px'} fontFamily='Dongle' letterSpacing={'5px'} lineHeight={0} color='#ffffffff' fontWeight='bold' variant='subtitle1' fontSize='1.25rem'>
                                    {GetLoadingString(progression)}
                                </Typography>
                            </div>
                        </div>
                        {isLoaded === false && (

                            <div className="progress-bar" style={{ zIndex: isLoaded ? -2 : 21 }}>
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: progression * 100 + "%" }}
                                />
                            </div>
                        )}
                        <div className="pageUnity">
                            <Unity className="unityWindow"
                                unityContext={unityContext}

                                devicePixelRatio={isMobile ? 0.7 : 0.9}
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

                                                <Typography paddingBottom={'50px'} paddingTop={'25px'} fontFamily='Dongle' letterSpacing={'10px'} align={(width < 960) ? "center" : "left"} lineHeight={0} color='#ffffff66' fontWeight='bold' variant='subtitle1' fontSize='1.25rem'>
                                                    .//DISCOVERING
                                                </Typography>
                                                <div className="glow">
                                                    <Typography fontFamily='Dongle' align={width < 960 ? "center" : "left"} color={'#ffffffFF'} variant='h3' lineHeight={'3.5rem'} fontSize='7.5rem' fontWeight='900'>THE BOBOTS.</Typography>
                                                </div>
                                                <div className="glowWhite">
                                                    <Typography paddingTop={'25px'} paddingBottom={'0px'} fontFamily='Dongle' align={width < 960 ? "center" : "left"} color={'white'} fontWeight='light' variant='subtitle1' fontSize='1.6rem'>
                                                        <b>In the year 4040,</b>
                                                        Robots have dominantly replace humans with cute robots being stationed on the moon.
                                                        These bobots lives on the ethereum network using the  <b>ERC-721 blockchain.</b>
                                                    </Typography>

                                                    <Typography paddingTop={'75px'} fontFamily='Dongle' align={width < 960 ? "center" : "left"} color={'#ffffff77'} fontWeight='light' variant='subtitle1' fontSize='1.6rem'>
                                                        Click to change preview characters
                                                    </Typography>
                                                    <Grid xs
                                                        width={'100%'}

                                                        container

                                                        direction="row"
                                                        alignItems={width < 960 ? "center" : "left"}
                                                        justifyContent={width < 960 ? "center" : "left"} >

                                                        <Button onClick={SelectCharacterLeft} variant="contained" style={{ height: '40px', width: '80px', fontFamily: 'Dongle', fontSize: '1.5rem', backgroundColor: '#ffffffaa', borderRadius: '20px', boxShadow: 'none', margin: '5px' }}>

                                                            <FaArrowCircleLeft />
                                                        </Button>
                                                        <Button onClick={SelectCharacterRight} variant="contained" style={{ height: '40px', width: '80px', fontFamily: 'Dongle', fontSize: '1.5rem', backgroundColor: '#ffffffaa', borderRadius: '20px', boxShadow: 'none', margin: '5px' }}>
                                                            <FaArrowCircleRight />
                                                        </Button>
                                                    </Grid>

                                                </div>
                                            </div>
                                        </Slide>


                                    </Grid>
                                </Card>
                            </Grid>
                            {width > 960 && (
                                <Grid xs={12} md={6} height={'100vh'} style={{ boxShadow: '0px' }}>


                                </Grid>)}
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
*/

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