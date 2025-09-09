
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setBannerData, setImageUrl } from './store/movieSlice'

const App = () => {
  const dispatch = useDispatch()
  const fetchMovie =async()=>{
    try {
      const response = await axios.get('/trending/all/week')
      dispatch(setBannerData(response.data.results));
      
    } catch (error) {
      console.log(error)
    }
  }
  const fetchConfigaration =async()=>{
      try {
        const response = await axios.get('/configuration')
        dispatch(setImageUrl(response.data.images.secure_base_url +'original'))
      } catch (error) {
        console.log(error)
      }

  }
useEffect(()=>{
  fetchMovie()
  fetchConfigaration()
},[])
  return (
    <main className='min-h-screen'>
      <Header/>
      <div className=''>
        <Outlet/>
      </div>
      <Footer/>
      <MobileNav/>
    </main>
  )
}

export default App
