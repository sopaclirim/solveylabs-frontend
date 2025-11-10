import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app-skin">
      <Navbar />
      <main className="container-page py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
