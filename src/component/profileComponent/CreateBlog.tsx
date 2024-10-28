import { Formik } from 'formik'
import { createCourseAndBlogsType } from '../../types/courseAndBlogs';
import http from '../../core/services/interceptor'

const CreateBlog = () => {
    const handleCreateBlog =async (values:createCourseAndBlogsType) => {
        const res = await http.post('/courseandblogs' , values)
        console.log(res);


    }

  return (
    <div>
        <div>
            <h2 className='font-bold text-2xl mt-16 text-center'>      CreateBlog      </h2>
            <Formik
        
            initialValues={{ courseOrBlogName: "" , describe:'' , type:'blog' , cost:'' , likeCount:0 , rate:0 , rateCount:0 , tech:'' }}
            onSubmit={handleCreateBlog}
            >
            {({ values, handleChange, handleSubmit }) => {
                return (
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-wrap justify-around gap-6'>
                    <div className='w-1/3'>
                        <input type="text" name='courseOrBlogName' value={values.courseOrBlogName} onChange={handleChange} placeholder="courseName" className="input input-bordered w-full" />
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
                );
            }}
            </Formik>

        </div>
    </div>
  )
}

export default CreateBlog