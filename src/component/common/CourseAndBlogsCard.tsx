import CustomRate from '../ui/Rate'
import like from '../../assets/images/like.png'
import dislike from '../../assets/images/dislike.png'
import { courseAndBlogsType } from '../../types/courseAndBlogs'
import { getItem } from '../../core/services/common/storage.services'
import useQueryGet from '../../hooks/useQueryGet'
import useMutationPut from '../../hooks/useMutationPut'
import { users } from '../../types/usersType'

const CourseCardAndBlog = ( {item  , width='w-[28%]'}:{item:courseAndBlogsType , width?:string}) => {
    const userId = getItem('id')
    const newItemId = item.id

    const {data} = useQueryGet<users>(`/users/${userId}` ,  ['userInfoForCoursList'])
    const {mutate} =  useMutationPut(`/users/${userId}` , 'courseList')

    
    const handleLike = async (id:string)=>{
        if(data){
            const obj  = data;
            const newId = id
            obj.favoriteCoursesAndBlogs = [...obj.favoriteCoursesAndBlogs , newId]           
            mutate(obj)
        }

    }

    const deleteLike = async (id:string)=>{
        if(data){
            const obj  = data;
            const newId = id
            const newArr = data.favoriteCoursesAndBlogs.filter(item=>{
                return item !== newId
            });
            obj.favoriteCoursesAndBlogs = [...newArr]           
            mutate(obj)
        }

    }    
    return (
        <div className={`shadow-2xl rounded-2xl pb-4 ${width}`}>
            <div>
                <img src="./img1.png" alt="" className='mx-auto h-1/2'/>
            </div>
            <div className='px-4'>
                <h2 className='font-bold text-2xl mt-4'>{item.courseOrBlogName}</h2>

                <div className='flex justify-between mt-6 '>
                    {item.type === 'course' && <h2 className='font-bold text-lg '>cost : <span className='text-green-400'>{item.cost}</span></h2> }
                    {item.type === 'blog' && <h2 className='font-bold text-lg '>{item.describe}</h2> }
                    
                    {!data?.favoriteCoursesAndBlogs.includes(newItemId) && <div className='mt-1 cursor-pointer w-6'><img src={like} alt="" onClick={()=>handleLike(item.id)}/></div>}
                    {data?.favoriteCoursesAndBlogs.includes(newItemId) && <div className='mt-1 cursor-pointer w-6'><img src={dislike} alt="" onClick={()=>deleteLike(item.id)}/></div>}
                    
                </div>

                <div className='my-1'>
                    <h2 className='font-bold text-lg '>technology : <span className='text-red-400'>{item.tech}</span></h2>
                </div>

                <div className='flex justify-between mt-6'>
                    <div className="badge badge-primary p-4 cursor-pointer">Detail</div>
                    <div>
                        <CustomRate rate={item.rate} rateCount={item.rateCount} coursesAndBlogsId={item.id} />
                    </div>
                </div>

            </div>
        </div>
  )
}

export default CourseCardAndBlog