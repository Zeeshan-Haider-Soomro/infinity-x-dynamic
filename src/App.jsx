import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <div>
        <Navbar/>
      </div>
      <div className='pt-10'>
        <Outlet/>
      </div>
      <div className='pt-16'>
        <Footer/>
      </div>
    </div>
  )
}

export default App