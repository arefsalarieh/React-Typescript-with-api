import React from 'react'
import { NavLink } from 'react-router-dom'
import brain from '../../../assets/images/brain.png'

const Header = () => {
  return (
    <div className='flex justify-between border-2 h-20 w-[90%] mx-auto'>
      <div className='h-20 w-20 rounded-full overflow-hidden'>
        <img src={brain}  className='h-20 w-30' />
      </div>
      <div className='mt-10 flex gap-5'>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/'>courses</NavLink>
        <NavLink to='/'>blogs</NavLink>
      </div>
    </div>
  )
}

export default Header