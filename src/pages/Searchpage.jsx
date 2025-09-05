import React from 'react'
import { useLocation } from 'react-router-dom'

const Searchpage = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>Searchpage</div>
  )
}

export default Searchpage