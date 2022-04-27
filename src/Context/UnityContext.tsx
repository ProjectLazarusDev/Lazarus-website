import { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
  loaderUrl: 'dev_multiplayer/dev_multiplayer.loader.js',
  dataUrl: 'dev_multiplayer/dev_multiplayer.data',
  frameworkUrl: 'dev_multiplayer/dev_multiplayer.framework.js',
  codeUrl: 'dev_multiplayer/dev_multiplayer.wasm',
});

export default unityContext;
