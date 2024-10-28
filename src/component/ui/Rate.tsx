import { Flex, Rate } from 'antd';
import http from '../../core/services/interceptor'
import useMutationPut from './../../hooks/useMutationPut';
import useQueryGet from '../../hooks/useQueryGet';
import { courseAndBlogsType } from '../../types/courseAndBlogs';
import { users } from '../../types/usersType';
import { getItem } from '../../core/services/common/storage.services';


const CustomRate= ({rate , rateCount , courseId}:{rate:number , rateCount:number ,courseId:string}) => {
  const userId = getItem('id')
  

  const {mutate} = useMutationPut(`/users/${userId}`,'')
  const {mutate:mutate2} = useMutationPut(`/courseandblogs/${courseId}`,'courseList')

  const sendRate = async (myRate:number) =>{
    const res = await http.get(`/users/${userId}` )
    const courseRes = await http.get(`/courseandblogs/${courseId}` )

    const userObj:users = res.data
    const courseObj = courseRes.data


    const hasRated = userObj.courseRated.some(item=>{
      return item.courseId === courseId
    })

    if(hasRated){
      console.log(1);
        const newArr = userObj.courseRated.filter(item=>{
          return item.courseId !== courseId
        })
        userObj.courseRated = [...newArr , {courseId:courseId , rateCount:myRate}]  
        
        const oldTotal = rateCount * rate
        const newTotal = oldTotal - rate + myRate

        const newRate = rateCount>0 ? newTotal / rateCount : myRate

        courseObj.rate = newRate      
    }
    else{
      console.log(2);
      userObj.courseRated = [...userObj.courseRated , {courseId:courseId , rateCount:myRate}]

      const oldTotal = rateCount * rate
      const newTotal = oldTotal  + myRate
      const newRateCount = rateCount + 1

      const newRate = rateCount>0 ? newTotal/newRateCount : myRate

      courseObj.rate = newRate
      courseObj.rateCount = newRateCount
    }
    

  

    mutate(userObj)
    mutate2(courseObj)


  }
  return (
    <Flex gap="" vertical>
      <Rate  onChange={sendRate} value={rate} />
      
    </Flex>
  );
};

export default CustomRate;