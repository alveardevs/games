import './App.css';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { Icon } from '@iconify/react';

function App() {
  // const URL = "https://byalvear.com/game-builds/sebasdices/Build/";
  const URL = "https://w2gs2-7aaaa-aaaam-qcbaq-cai.icp0.io/";
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: URL + "Build.loader.js",
    dataUrl: URL + "Build.data",
    frameworkUrl: URL + "Build.framework.js",
    codeUrl: URL + "Build.wasm",
  });

  // const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
  //   loaderUrl: URL + "unity-webgl-build.loader.js",
  //   dataUrl: URL + "unity-webgl-build.data",
  //   frameworkUrl: URL + "unity-webgl-build.framework.js",
  //   codeUrl: URL + "unity-webgl-build.wasm",
  // });

  return (
    <main className="select-none relative h-full w-full text-foreground max-w-[100vw] min-h-screen flex flex-col overflow-x-hidden z-20">
      <div className="flex flex-col md:w-[50%] w-[80%] mx-auto items-center gap-4 justify-center h-[60dvh] z-20">
        <div className="bg-search-g-light rounded-full p-[2px] mx-auto w-full max-w-[15rem] flex z-40 mt-10">
          <div className="bg-background border rounded-full font-semibold text-center px-2 py-1 w-full z-20 flex items-center justify-center gap-1">
            Preparate para jugar <Icon icon="tabler:device-gamepad" className="size-6" />
          </div>
        </div>
        <h1 className="text-7xl font-bold text-center tracking-tight leading-[4rem]">Rollcraft</h1>
        <p className="text-center">
          "🎲✨ ¡El poder está en tus dados! Personalizá sus caras con habilidades únicas, lanzalos estratégicamente y enfrentate a enemigos mientras explorás mundos generados al azar. 🌌 Cada partida es una aventura irrepetible. ¿Estás listo para dominar el azar? 🔥"
        </p>
      </div>
      <section className="w-full sm:max-w-[500px] mx-auto rounded-xl shadow-2xl bg-background border-2 h-[90vh] my-10 flex items-center justify-center z-20">
        <div
          style={{
            position: 'relative',
            aspectRatio: '9 / 16', 
            width: '100%', 
            maxHeight: '90vh', 
          }}
        >
          {!isLoaded && (
            <div className="loader w-full h-full">
              <h2 className="text-xl font-bold text-center">{Math.round(loadingProgression * 100)}%</h2>
            </div>
          )}
          <Unity
            unityProvider={unityProvider}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
