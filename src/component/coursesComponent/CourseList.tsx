import { useEffect, useState } from "react";
import useQueryGet from "../../hooks/useQueryGet"
import { courseAndBlogsType } from "../../types/courseAndBlogs"
import CourseCardAndBlog from "../common/CourseAndBlogsCard"
import CustomSearch from "../ui/Search";
import CoursesAndBlogsFilter from "../common/CoursesAndBlogsFilter";

const CourseList = () => {
    const [changeRate , setChangeRate] = useState(0)
    const [query, setQuery] = useState< string >('');
    const [TechFilter, setTechFilter] = useState< string >('clear');
    const {data} = useQueryGet<courseAndBlogsType[]>('https://671d123d09103098807c2afb.mockapi.io/arefsalarieh/courseandblogs' , ['courseList'])

  
  return (
    <div className='mt-8'>
        
        {TechFilter}
        <div className='flex justify-around '>
            <div className='border-2 border-red-400 w-[25%] '>
                <CoursesAndBlogsFilter setTechFilter={setTechFilter}/>
            </div>

            <div className=" w-[70%] text-center ">
                <h2  className='font-bold text-2xl mb-8 text-center'>Course list</h2>
                <CustomSearch setQuery={setQuery}/>

                <div className='flex flex-wrap gap-y-4 justify-around mt-6'>

                    {data?.map(item=>{
                         if(item.type === 'course' && item.courseOrBlogName.indexOf(query) !== -1 && (TechFilter !== 'clear' ? item.tech === TechFilter : true)){
                            return(
                                <CourseCardAndBlog item={item} setChangeRate={setChangeRate}/>
        
                            )
                        }


                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseList