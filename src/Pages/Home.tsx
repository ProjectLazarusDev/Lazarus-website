/*****************************************************************************/
/*!
\file Home.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';

import '../Theme/Theme';
import Unity, { UnityContext } from "react-unity-webgl";
import './Home.css'

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
    //const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
    //const [progression, setProgression] = React.useState<number>(0);

    // Built-in event invoked when the Unity app's progress has changed.
    function handleOnUnityProgress(progression: number)
    {
       // setProgression(progression);
    }

    // Built-in event invoked when the Unity app is loaded.
    function handleOnUnityLoaded()
    {

       // setIsLoaded(true);
    }
    // Event invoked when the user clicks the button, the unity container will be
    // mounted or unmounted depending on the current mounting state.
    //function handleOnClickUnMountUnity()
    //{
        //if (isLoaded === true)
        //{
         //   setIsLoaded(false);
       // }
       // setIsUnityMounted(isUnityMounted === false);
    //}


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
           
                    <Unity 
                        unityContext={unityContext}
                        style={{ 
                         borderRadius: '20px', width: "300px", height: "300px" }}
                    />

               
        </>
    );
}
export default Home;