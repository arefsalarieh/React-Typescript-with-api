import { Flex, Rate } from 'antd';
import http from '../../core/services/interceptor'
import useMutationPut from './../../hooks/useMutationPut';
import { users } from '../../types/usersType';
import { getItem } from '../../core/services/common/storage.services';


const CustomRate= ({rate , rateCount , coursesAndBlogsId }:{rate:number , rateCount:number ,coursesAndBlogsId:string }) => {
  const userId = getItem('id')
  

  const {mutate} = useMutationPut(`/users/${userId}`,'')
  const {mutate:mutate2} = useMutationPut(`/courseandblogs/${coursesAndBlogsId}`,'courseList')

  const sendRate = async (myRate:number) =>{
    const res = await http.get(`/users/${userId}` )
    const courseRes = await http.get(`/courseandblogs/${coursesAndBlogsId}` )

    const userObj:users = res.data
    const courseObj = courseRes.data


    const hasRated = userObj.coursesAndBlogsRated.some(item=>{
      return item.coursesAndBlogsId === coursesAndBlogsId
    })

    if(hasRated){
        const newArr = userObj.coursesAndBlogsRated.filter(item=>{
          return item.coursesAndBlogsId !== coursesAndBlogsId
        })
        userObj.coursesAndBlogsRated = [...newArr , {coursesAndBlogsId:coursesAndBlogsId , rateCount:myRate}]  
        
        const oldTotal = rateCount * rate
        const newTotal = oldTotal - rate + myRate

        const newRate = rateCount>0 ? newTotal / rateCount : myRate

        courseObj.rate = newRate      
    }
    else{
      userObj.coursesAndBlogsRated = [...userObj.coursesAndBlogsRated , {coursesAndBlogsId:coursesAndBlogsId , rateCount:myRate}]

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
      {rate}
    </Flex>
  );
};

export default CustomRate;