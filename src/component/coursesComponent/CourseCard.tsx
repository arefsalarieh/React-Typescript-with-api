import React from 'react'
import CustomRate from '../ui/Rate'
import like from '../../assets/images/like.png'
import { courseAndBlogsType } from '../../types/courseAndBlogs'

const CourseCard = (item:courseAndBlogsType) => {
  return (
    <div className='  w-[28%] shadow-2xl rounded-2xl pb-4'>
    <div>
        <img src="./img1.png" alt="" className='mx-auto h-1/2'/>
    </div>
    <div className='px-4'>
        <h2 className='font-bold text-2xl mt-4'>{item.courseName}</h2>

        <div className='flex justify-between mt-6 '>
            <h2 className='font-bold text-lg '>cost : <span className='text-green-400'>{item.cost}</span></h2>
            <div className='mt-1 cursor-pointer'><img src={like} alt="" /></div>
        </div>

        <div className='flex justify-between mt-6'>
            <div className="badge badge-primary p-4 cursor-pointer">Detail</div>
            <div>
                <CustomRate/>
            </div>
        </div>

    </div>
</div>
  )
}

export default CourseCard