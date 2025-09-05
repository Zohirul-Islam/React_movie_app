
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'

const App = () => {
  return (
    <main>
      <Header/>
      <div className='pt-16'>
        <Outlet/>
      </div>
      <Footer/>
      <MobileNav/>
    </main>
  )
}

export default App
