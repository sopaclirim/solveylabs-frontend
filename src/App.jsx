import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import bgVideo from './assets/animation-background.mp4';

export default function App(){
  return (
    <div className="relative min-h-screen overflow-hidden">

       {/* Video background */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Qe header te kete width 100% */}
      <Navbar />

     {/* Overlay + përmbajtja e app-it */}
      <div className="app-skin relative z-10">
        
        <main className="py-6">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
