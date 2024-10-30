import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { courseAndBlogsType } from "../../types/courseAndBlogs";
import CourseCardAndBlog from "./CourseAndBlogsCard";

const CustomSwiper = ({data} : {data:courseAndBlogsType[]}) => {
    const topCourse = data.sort((a,b)=>{
        return b.rate - a.rate;
    })

    console.log(topCourse);
  return (
    <div className="p-10">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
        {topCourse?.map((item , index)=>{
            if(index < 5){
                return(
                    <SwiperSlide>
                        <CourseCardAndBlog item={item} width="w-full"/>
                    </SwiperSlide>                
                )                
            }

        })}

    </Swiper>
  </div>
  )
}

export default CustomSwiper