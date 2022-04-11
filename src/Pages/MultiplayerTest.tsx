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


import BobotGenesisABI from '../ABI/BobotGenesis.json'
import BobotCoreChamberABI from '../ABI/CoreChamber.json'
import Magic20ABI from '../ABI/Magic20.json'


const unityContext = new UnityContext({
    loaderUrl: "dev_multiplayer/dev_multiplayer.loader.js",
    dataUrl: "dev_multiplayer/dev_multiplayer.data",
    frameworkUrl: "dev_multiplayer/dev_multiplayer.framework.js",
    codeUrl: "dev_multiplayer/dev_multiplayer.wasm",
});


//put contract addr here - localhost or remix
const contractAddress: string = "0xc5a5C42992dECbae36851359345FE25997F5C42d";
const coreChamberAddress: string = "0x67d269191c92Caf3cD7723F116c85e6E9bf55933";
const magicAddress: string = "0xE6E340D132b5f46d1e472DebcD681B2aBc16e57E";


const MultiplayerTest: React.FC = () =>
{
    //react hooks
    var web3: Web3;
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
    const [progression, setProgression] = React.useState<number>(0);
    const [scrollValue, setScrollValue] = React.useState<number>(0.0);
    const [magicAmount, setMagicAmount] = React.useState<number>(0.0);

    //store eth addresses
    var accounts: any;
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
            console.log("Send: ", element);
            unityContext.send("BlockchainManager", "BobotsReceiveID", element);
        });
    }

    //connect to erc20 magic



    //core chamber stake status callback
    function UpdatePlayerAddress(str: string)
    {
        unityContext.send("BlockchainManager", "ReceivePlayerAddress", str);
    }
    function UpdatePlayerMagic(value: number)
    {
        unityContext.send("BlockchainManager", "ReceivePlayerMagic", value);
    }




    //core chamber stake status callback
    function CoreChamberStakeStatusAccepted(status: number)
    {
        unityContext.send("BlockchainManager", "CoreChamberStakeStatus", status);
    }

    //core chamber stake callback
    function CoreChamberStakeAccepted(id: number)
    {
        unityContext.send("BlockchainManager", "CoreChamberStake", id);
    }
    //core chamber unstake callback
    function CoreChamberUnstakeAccepted(id: number)
    {
        unityContext.send("BlockchainManager", "CoreChamberUnstake", id);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////

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
    function GetUserData()
    {
        MagicGetBalance();
        UpdatePlayerAddress(accounts[0]);
    }

    //erc20 magic 
    async function MagicGetBalance()
    {
        console.log("received: ");
        if ((window as any).ethereum)
        {

            const magicContractAddress = '0x539bdE0d7Dbd336b79148AA742883198BBF60342';
            const provider = new ethers.providers.Web3Provider((window as any).ethereum);
            const contract = new ethers.Contract("0x4E47624aDE3dF0AD9974f98Be4608301f73185EE", Magic20ABI.abi, provider);
            console.log(contract);
            console.log(accounts[0]);
            try
            {
                const balance = await contract.checkBalance(magicContractAddress,accounts[0]);
                const magicAmount = BigNumber.from(balance).toNumber();
                console.log(magicAmount);
                UpdatePlayerMagic(magicAmount);

                //print magic balance
                console.log(magicAmount);
            }
            catch (err)
            {
                console.log("error: ", err);
            }
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
                BobotGenesisABI.abi,
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

    async function CoreChamberGetBobotStakeStatus(tokenIDs: number)
    {
        console.log("received: ");
        if ((window as any).ethereum)
        {

            const provider = new ethers.providers.Web3Provider((window as any).ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(coreChamberAddress, BobotCoreChamberABI.abi, signer);
            console.log(contract);
            try
            {
                console.log("await contract");
                const response = await contract.checkStakeStatus(tokenIDs);
                console.log("response: ", response);

                //0 if unstaked
                var res = response[0].toNumber();
                //send response back to game engine
                CoreChamberStakeStatusAccepted(res);
            }
            catch {
                //error detection
            }
        }
    }

    async function CoreChamberGetBobotLevel(tokenIDs: number)
    {

    }


    async function CoreChamberStakeBobot(tokenIDs: number)
    {
        console.log("received: ");
        if ((window as any).ethereum)
        {

            const provider = new ethers.providers.Web3Provider((window as any).ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(coreChamberAddress, BobotCoreChamberABI.abi, signer);
            console.log(contract);
            try
            {
                console.log("await contract");
                const response = await contract.stake(tokenIDs);
                console.log("response: ", response);

                //send response back to game engine
                // MintComfirmed(1);
            }
            catch {
                //error detection
            }
        }
    }

    async function CoreChamberUnstakeBobot(tokenIDs: number)
    {
        console.log("received: ");
        if ((window as any).ethereum)
        {

            const provider = new ethers.providers.Web3Provider((window as any).ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(coreChamberAddress, BobotCoreChamberABI.abi, signer);
            console.log(contract);
            try
            {
                console.log("await contract");
                const response = await contract.unstake(tokenIDs);
                console.log("response: ", response);

                //send response back to game engine
                // MintComfirmed(1);
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
                BobotGenesisABI.abi,
                signer
            );
            console.log(contract);
            var t: number[] = [];
            try
            {
                console.log("await contract");
                console.log(accounts[0]);
                const response = await contract.getTokenIds("0xCdEae8E41E953570B54D02f063A23E41e812f16e");
                console.log("response: ", response);
                // const allIDs = response.value;




                for (var _i = 0; _i < response.length; _i++)
                {
                    t.push(response[_i].toNumber());
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
        unityContext.on("GetUserData", GetUserData);

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
