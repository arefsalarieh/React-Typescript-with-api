import useQueryGet from "../../hooks/useQueryGet"
import { courseAndBlogsType } from "../../types/courseAndBlogs"
import CourseCard from "../common/CourseCard"

const CourseList = () => {
    const {data} = useQueryGet<courseAndBlogsType[]>('https://671d123d09103098807c2afb.mockapi.io/arefsalarieh/courseandblogs' , ['courseList'])
  return (
    <div className='border-2 border-green-400 mt-8'>
        <h2  className='font-bold text-2xl mt-8 text-center'>Course list</h2>
        <div>
        </div>
        <div className='flex justify-around'>
            <div className='border-2 border-red-400 w-[25%] '>
                filter
            </div>
            <div className='flex flex-wrap gap-y-4 justify-around w-[70%] '>
                {data?.map(item=>{
                    if(item.type === true){
                        return(
                            <CourseCard {...item}/>
    
                        )
                    }

                })}
            </div>
        </div>
    </div>
  )
}

export default CourseList