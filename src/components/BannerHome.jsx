import React from 'react'
import { useSelector } from 'react-redux'

const BannerHome = () => {
    const bannerData = useSelector((state)=>state.movieData.bannerData)
    console.log(bannerData)
  return (
    <div>BannerHome</div>
  )
}

export default BannerHome