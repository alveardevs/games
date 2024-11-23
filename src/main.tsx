import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import '@fontsource-variable/open-sans';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='select-none relative h-full w-full text-foreground  max-w-[100vw] min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-t from-slate-300 via-slate-50 to-slate-50'>

      <div className="fixed left-0 top-0 h-full w-full z-0">
        <div className="relative h-full w-full "><div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div></div>

      </div>
      <Header />
      <App />
      <Footer />
    </div>
  </StrictMode>,
)
