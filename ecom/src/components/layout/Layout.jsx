import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className='main-content'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
