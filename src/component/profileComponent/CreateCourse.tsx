import { Formik } from 'formik'
import React from 'react'
import { createCourseAndBlogsType } from '../../types/courseAndBlogs';
import http from '../../core/services/interceptor'

const CreateCourse = () => {

    // const {mutate} = useMutationPost<void,createCourseAndBlogsType>('/courseandblogs' , '')

    const handleCreateCourse =async (values:createCourseAndBlogsType) => {
        const res = await http.post('/courseandblogs' , values)
        console.log(res);


    }
  return (
    <div>
        <h2 className='font-bold text-2xl mt-16 text-center'>
        <Formik
          initialValues={{ courseName: "" , describe:'' , type:true , cost:'' , likeCount:0 , rate:0 , rateCount:0 }}
          onSubmit={handleCreateCourse}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit} >
                <div  className='flex flex-wrap justify-around gap-6'>
                    <div className='w-1/3'>
                         <input type="text" name='courseName' value={values.courseName} onChange={handleChange} placeholder="courseName" className="input input-bordered w-full" />
                    </div>

                    <div className='w-1/3'>
                        <input type="text" name='cost' value={values.cost} onChange={handleChange} placeholder="cost" className="input input-bordered w-full " />
                    </div>

                    <div className='w-1/3'>
                        <textarea name='describe' value={values.describe} onChange={handleChange} className="textarea textarea-bordered w-full" placeholder="describe"></textarea>
                    </div>

                    <div className='w-1/3'>

                    </div>

                </div>


              <div className=" w-24 mx-auto mt-8">
                <button type="submit" className="btn btn-primary mx-auto ">
                  create
                </button>
              </div>

            </form>
          )}
        </Formik>
        </h2>
    </div>
  )
}

export default CreateCourse