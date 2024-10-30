// import Swiper core and required modules

import { useEffect, useState } from "react";
import { courseAndBlogsType } from "../../types/courseAndBlogs";
import CourseCardAndBlog from "./CourseAndBlogsCard";


const CustomSlider = ({data}:{data : courseAndBlogsType[]}) => {
    const [SliderPosition, setSliderPosition] = useState(0);

    const goRight = () =>{
        if(SliderPosition > -50){
            setSliderPosition(SliderPosition-25)
        }
        else{
            setSliderPosition(0)
        }
    }

    const goLeft = () =>{
        if(SliderPosition < 0){
            setSliderPosition(SliderPosition+25)
        }
    }




    

  return (
    <div className="relative border-2 border-red-400 h-96 " >
        {SliderPosition}
        <div className={`relative transition-[left] ease-in-out  duration-300 flex flex-wrap  border-2 border-blue-400 h-96 w-[200%] left-[${SliderPosition}%]` }>
            {data?.map((item , index)=>{
               if (index<8) {
                return(<CourseCardAndBlog item={item} width="w-[12.5%]"/>)
               }
            })}
        </div>

        <div className="absolute bg-green-400 w-10 top-44 cursor-pointer" onClick={goLeft}>left</div>
        <div className="absolute bg-red-400 w-10 right-0 top-44 cursor-pointer" onClick={goRight}>right</div>
    </div>
  );
};

export default CustomSlider;
