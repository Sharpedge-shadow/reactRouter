// import Header from './components/Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

function Layout() {
  return (
    <>
   {/* <Header/> */}
   <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout