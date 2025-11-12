import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app-skin px-4 lg:px-16 xl:px-36" >
      <Navbar />
      <main className=" py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
