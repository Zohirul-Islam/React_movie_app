import React from 'react'

import { NavLink } from 'react-router-dom'
import { mobileNavigation } from './Header'
const MobileNav = () => {
  return (
    <div className='lg:hidden h-16 bg-neutral-600 opacity-40 fixed bottom-0 w-full'>
      <div className='flex items-center justify-between h-full text-white-900'>
        {
          mobileNavigation.map((nav,index)=>{
            return (
              <NavLink to={nav.href} key={nav.label +'mobilenav'} className={({isActive})=>`px-3 flex h-full items-center flex-col cursor-pointer justify-center ${isActive && 'text-white'}`}>
                <div className='text-2xl'>
                  {nav.icon}
                </div>
                <p>{nav.label}</p>
              </NavLink>
            )
          })
        }
      </div>
    </div>
  )
}

export default MobileNav