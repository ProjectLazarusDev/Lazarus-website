/*****************************************************************************/
/*!
\file Multiplayer.js
\date 2022
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import "../Theme/Theme";
import Unity from "react-unity-webgl";
import "./Home.css";
import "./Page.css";
import Typography from "@mui/material/Typography";
import Header from "../Components/Header";
import { Button } from "@mui/material";
import "motion-pointer/dist/index.css";
import "motion-pointer/dist/index.js";
import { isMobile } from "react-device-detect";
import "../indexweb3.js";
import GameScreen from "../Components/GameScreen";

import * as blockchain from "../Blockchain/BlockchainFunctions";

import unityContext from "../Context/UnityContext";
//abi import

const Multiplayer: React.FC = () => {
  //react hooks
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [progression, setProgression] = React.useState<number>(0);
  const [scrollValue, setScrollValue] = React.useState<number>(0.0);

  //store eth addresses

  React.useEffect(() => {
    const scrollFun = () => {
      setScrollValue(
        -document.body.getBoundingClientRect().top /
          document.body.getBoundingClientRect().height
      );
      unityContext.send("MainMenuControl", "SetScrollBarValue", scrollValue);
    };
    window.addEventListener("scroll", scrollFun);

    return () => {
      window.removeEventListener("scroll", scrollFun);
    };
  }, [scrollValue]);

  // Built-in event invoked when the Unity app's progress has changed.
  function handleOnUnityProgress(progression: number) {
    setProgression(progression);
  }

  // Built-in event invoked when the Unity app is loaded.
  function handleOnUnityLoaded() {
    document.body.style.overflowY = "scroll";
    document.documentElement.scrollTop = 0;
    setIsLoaded(true);
    setScrollValue(
      -document.body.getBoundingClientRect().top /
        document.body.getBoundingClientRect().height
    );
    unityContext.setFullscreen(true);
  }

  const updateDimensions = () => {};

  React.useEffect(() => {
    unityContext.on("progress", handleOnUnityProgress);
    unityContext.on("loaded", handleOnUnityLoaded);
    unityContext.on("quitted", function () {});
    document.body.style.overflowY = "hidden";
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // When the component is mounted, we'll register some event listener.
  React.useEffect(() => {
    blockchain.BindToContext();
    return function () {
      // handleOnClickUnMountUnity();
      unityContext.removeAllEventListeners();
    };
  }, []);

  return (
    <>
      <script src="../indexweb3.js"> </script>
      <div className="pageGlobal">
        <Header></Header>

        <Card
          style={{
            zIndex: isLoaded ? -2 : 20,
            position: "fixed",
            width: "100vw",
            height: "100vh",
            background: "linear-gradient(to right bottom, #444444ff,#000000ff)",
            borderRadius: "0px",
            alignItems: " center",
            justifyContent: " center",
          }}
        ></Card>
        <Card
          style={{
            boxShadow: "none",
            zIndex: -2,
            width: "100vw",
            height: "90vh",
            borderRadius: "0px",
            background:
              "linear-gradient(to right bottom, #12121200, #05050500)",
          }}
        >
          {isMobile === false ? (
            <GameScreen isLoaded={isLoaded} progression={progression}>
              {" "}
            </GameScreen>
          ) : (
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{
                borderRadius: "0px",
                height: "100vh",
                boxShadow: "none",
              }}
            >
              <div className="ui-text" style={{ zIndex: isLoaded ? -2 : 21 }}>
                <Typography
                  paddingBottom={"50px"}
                  paddingTop={"25px"}
                  fontFamily="Dongle"
                  letterSpacing={"5px"}
                  lineHeight={0}
                  color="#ffffffff"
                  fontWeight="bold"
                  variant="subtitle1"
                  fontSize="1.25rem"
                >
                  Game is not available on mobile!
                </Typography>
              </div>
            </Grid>
          )}
        </Card>
      </div>
    </>
  );
};
export default Multiplayer;
