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
import '../Theme/Theme';
import Unity, { UnityContext } from "react-unity-webgl";
import './Home.css'
import './Page.css'
import Header from '../Components/Header';

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

                    <Typography>
                        Minting 
                    </Typography>
                </Grid>
            </Card>
           
            </div>
        </>
    );
}
export default MintPage;