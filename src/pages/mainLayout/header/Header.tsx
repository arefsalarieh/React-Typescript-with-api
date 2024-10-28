import React from 'react'
import { NavLink } from 'react-router-dom'
import brain from '../../../assets/images/brain.png'

const Header = () => {
  return (
    <div className='flex justify-between  h-20 w-[90%] mx-auto'>
      <div className='h-20 w-20 rounded-full overflow-hidden'>
        <img src={brain}  className='h-20 w-30' />
      </div>
      <div className='mt-6 flex gap-10'>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/courses'>courses</NavLink>
        <NavLink to='/'>blogs</NavLink>
      </div>
      <div className='px-3 py-3 h-14 mt-4 rounded-full bg-[#01CEC9] cursor-pointer'>
        <NavLink to='/register'>register / login</NavLink>
      </div>

      <div className='px-3 py-3 h-14 mt-4 rounded-full bg-[#01CEC9] cursor-pointer'>
        <NavLink to='/ProfileLayout'>profile</NavLink>
      </div>    
    </div>
  )
}

export default Header