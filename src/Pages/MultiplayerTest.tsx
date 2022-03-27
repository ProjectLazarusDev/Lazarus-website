/*****************************************************************************/
/*!
\file MultiplayerTest.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import '../Theme/Theme';
import Unity, { UnityContext } from "react-unity-webgl";
import './Home.css'
import './Page.css'
import Typography from '@mui/material/Typography';
import Header from '../Components/Header';
import { Button } from "@mui/material";
import 'motion-pointer/dist/index.css';
import 'motion-pointer/dist/index.js';
import { isMobile } from 'react-device-detect';
import '../indexweb3.js'

import Web3 from 'web3';
import { ethers, BigNumber } from "ethers";

//abi import
import MintAbi from '../ABI/BobotGenesis.json'


const unityContext = new UnityContext({
    loaderUrl: "dev_multiplayer/dev_multiplayer.loader.js",
    dataUrl: "dev_multiplayer/dev_multiplayer.data",
    frameworkUrl: "dev_multiplayer/dev_multiplayer.framework.js",
    codeUrl: "dev_multiplayer/dev_multiplayer.wasm",
});





const MultiplayerTest: React.FC = () =>
{
    //react hooks
    var web3: Web3;
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
    const [progression, setProgression] = React.useState<number>(0);
    const [scrollValue, setScrollValue] = React.useState<number>(0.0);

    //store eth addresses
    var accounts:any;
    React.useEffect(() =>
    {

        const scrollFun = () =>
        {

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
    function RenderFullScreenButton()
    {

        return (
            <>
                <Button style={{ color: 'white', height: '40px', fontFamily: 'Dongle', letterSpacing: '1px', fontSize: '1.5rem', backgroundColor: '#000000ff', width: '300px' }} onClick={() => { ToggleFullScreen(true) }} >
                    Click to focus game
                </Button>
            </>
        );
    }

    const updateDimensions = () =>
    {



    }
    //get web3 started
    // const [account, setAccount] = React.useState<string>("");




    //toggle full-screen control
    function ToggleFullScreen(toggle: boolean)
    {
        unityContext.setFullscreen(toggle);
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
        unityContext.on("progress", handleOnUnityProgress);
        unityContext.on("loaded", handleOnUnityLoaded);
        unityContext.on("quitted", function () { });
        document.body.style.overflowY = "hidden";
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    //////////////////////////////////////////////////////////////////////////////////////////////

    function MetamaskComfirmed(addr: string)
    {

        unityContext.send("BlockchainManager", "MetamaskAccepted", addr);
    }

    function MintComfirmed(id: number)
    {

        unityContext.send("BlockchainManager", "MintAccepted", id);
    }
    function SendBobotsAllID(tokenIDs: number[])
    {
        unityContext.send("BlockchainManager", "BobotsClearID");
        
        //send all tokenIDs to engine
        tokenIDs.forEach(element =>
        {
            unityContext.send("BlockchainManager", "BobotsReceiveID", element);
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////

    //put contract addr here - localhost or remix
    const contractAddress: string = "0x5fbdb2315678afecb367f032d93f642f64180aa3";


    //connect to metamask
    async function MetaLogin()
    {
        if ((window as any).ethereum)
        {
            accounts = await (window as any).ethereum.
                request({ method: "eth_requestAccounts", });
            console.log(accounts[0]);

            //send connected address back to engine
            MetamaskComfirmed(accounts[0]);
        }
    }

    //mint bobot
    async function MintBobot()
    {
        console.log("received: ");
        if ((window as any).ethereum)
        {

            const provider = new ethers.providers.Web3Provider((window as any).ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                contractAddress,
                MintAbi.abi,
                signer
            );
            console.log(contract);
            try
            {

                console.log("await contract");

                const response = await contract.mintBobot("0xCdEae8E41E953570B54D02f063A23E41e812f16e", BigNumber.from(1));
                console.log("response: ", response);

                //send response back to game engine
                MintComfirmed(1);

               
            }
            catch {
                //error detection


            }

        }
      
    }

    async function GetBobotsAllID()
    {
        console.log("GetBobotsAllID: ");
        if ((window as any).ethereum)
        {

            const provider = new ethers.providers.Web3Provider((window as any).ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                contractAddress,
                MintAbi.abi,
                signer
            );
            console.log(contract);
            var t:number[] = [];
            try
            {
                console.log("await contract");
                console.log(accounts[0]);
                const response = await contract.getTokenIds("0xCdEae8E41E953570B54D02f063A23E41e812f16e");
                console.log("response: ", response);
               // const allIDs = response.value;
                
     
            

                for (var _i = 0; _i < response.length; _i++) {
                    t.push(  response[_i].toNumber()) ;
                }
                
               // console.log(allIDs);
                SendBobotsAllID(t);

               
                //send response back to game engine

            }
            catch (err)
            {
                console.log("error: ", err);
            }
        }
    }

    // When the component is mounted, we'll register some event listener.
    React.useEffect(() =>
    {
        unityContext.on("MetamaskLogin", MetaLogin);
        unityContext.on("Mint", MintBobot);
        unityContext.on("GetAllTokenIDs", GetBobotsAllID);

        /////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////
        return function ()
        {

            // handleOnClickUnMountUnity();
            unityContext.removeAllEventListeners();
        };

    }, []);

    return (
        <>
            <script src="../indexweb3.js">  </script>
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

                                devicePixelRatio={isMobile ? 0.85 : 0.9}
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
                    </Grid>
                </Card>

            </div>

        </>
    );
}
export default MultiplayerTest;
