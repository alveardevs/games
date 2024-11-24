import './App.css';
import React, { useState, useEffect } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { Icon } from '@iconify/react';

function App() {
  const URL = "https://byalvear.com/game-builds/sebasdices/Build/";
  const { unityProvider, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: URL + "ICP-BUILD.loader.js",
    dataUrl: URL + "ICP-BUILD.data.br",
    frameworkUrl: URL + "ICP-BUILD.framework.js.br",
    codeUrl: URL + "ICP-BUILD.wasm.br",
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onUnityLoaded = () => setIsLoaded(true);
    addEventListener("loaded", onUnityLoaded);

    return () => removeEventListener("loaded", onUnityLoaded);
  }, [addEventListener, removeEventListener]);

  return (
    <main className="select-none relative h-full w-full text-foreground max-w-[100vw] min-h-screen flex flex-col overflow-x-hidden z-20">
      <div className="flex flex-col md:w-[50%] w-[80%] mx-auto items-center gap-4 justify-center h-[60dvh] z-20">
        <div className="bg-search-g-light rounded-full p-[2px] mx-auto w-full max-w-[15rem] flex z-40 mt-10">
          <div className="bg-background border rounded-full font-semibold text-center px-2 py-1 w-full z-20 flex items-center justify-center gap-1">
            Preparate para jugar <Icon icon="tabler:device-gamepad" className="size-6" />
          </div>
        </div>
        <h1 className="text-7xl font-bold text-center tracking-tight leading-[4rem]">Diceborn Heroes</h1>
        <p className="text-center">
          "🎲✨ ¡El poder está en tus dados! Personalizá sus caras con habilidades únicas, lanzalos estratégicamente y enfrentate a enemigos mientras explorás mundos generados al azar. 🌌 Cada partida es una aventura irrepetible. ¿Estás listo para dominar el azar? 🔥"
        </p>
      </div>
      <section className="max-w-6xl xl:w-full md:w-[95%] w-[95%] mx-auto rounded-xl shadow-2xl bg-background border-2 h-[90dvh] my-10 flex items-center justify-center z-20">
        {/* Wrapper to maintain the aspect ratio */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px', // Optional: Limit max width
            paddingTop: '177.78%', // 16:9 ratio (100 / (9/16))
          }}
        >
          {isLoaded === false ? (
            <div className="loader"></div>
          ) : (
            <Unity
              unityProvider={unityProvider}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                visibility: isLoaded ? 'visible' : 'hidden',
              }}
            />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
