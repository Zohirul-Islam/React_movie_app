import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <Header/>
      <div className='pt-16'>
        <Outlet/>
      </div>
      <Footer/>
    </main>
  )
}

export default App
