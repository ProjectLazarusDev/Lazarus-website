import { UnityContext } from 'react-unity-webgl';

export const unityContext = new UnityContext({
  loaderUrl: 'dev_multiplayer/dev_multiplayer.loader.js',
  dataUrl: 'dev_multiplayer/dev_multiplayer.data',
  frameworkUrl: 'dev_multiplayer/dev_multiplayer.framework.js',
  codeUrl: 'dev_multiplayer/dev_multiplayer.wasm',
});

export const unityContextSeason0 = new UnityContext({
  loaderUrl: 'dev_season0/dev_season0.loader.js',
  dataUrl: 'dev_season0/dev_season0.data',
  frameworkUrl: 'dev_season0/dev_season0.framework.js',
  codeUrl: 'dev_season0/dev_season0.wasm',
});

const unityContextMobileString = 'dev_bootup_mobile';
export const unityContextMobile = new UnityContext({
//   loaderUrl: `${unityContextMobileString}/${unityContextMobileString}.loader.js`,
//   dataUrl: `${unityContextMobileString}/${unityContextMobileString}.data`,
//   frameworkUrl: `${unityContextMobileString}/${unityContextMobileString}.framework.js`,
//   codeUrl: `${unityContextMobileString}/${unityContextMobileString}.wasm`,
loaderUrl: 'dev_bootup_mobile/dev_bootup_mobile.loader.js',
dataUrl: 'dev_bootup_mobile/dev_bootup_mobile.data',
frameworkUrl: 'dev_bootup_mobile/dev_bootup_mobile.framework.js',
codeUrl: 'dev_bootup_mobile/dev_bootup_mobile.wasm',
});
