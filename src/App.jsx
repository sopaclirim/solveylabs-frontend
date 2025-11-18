import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="relative min-h-screen overflow-hidden">
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
