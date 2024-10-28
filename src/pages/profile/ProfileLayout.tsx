import React from 'react'
import Sidebar from '../../component/profileComponent/Sidebar'
import { Outlet } from 'react-router-dom'

const ProfileLayout = () => {
  return (
    <div className='bg-gray-300 h-lvh border-2 border-t'>
        <div className='flex bg-white h-[80%] w-10/12 mx-auto mt-10 rounded-3xl overflow-hidden'>
            <div className='w-[20%] bg-[#01CEC9]'>
                <Sidebar/>
            </div>
            <div  className='w-[80%]'>
               <Outlet/>
            </div>
        </div> 
    </div>
  )
}

export default ProfileLayout