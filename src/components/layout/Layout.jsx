import Footer from '../footer/Footer'
import React from 'react'
// import Navbar from './src/components/navbar/Navbar';
import Navbar from '..//navbar/Navbar';

function Layout({children}) {
  return (
    <div>
      <Navbar/>
        <div className="main-content min-h-screen">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout
