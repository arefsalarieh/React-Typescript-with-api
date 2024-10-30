import React, { useState } from "react";
import useQueryGet from "../../hooks/useQueryGet";
import { courseAndBlogsType } from "../../types/courseAndBlogs";
import CourseCardAndBlog from "../common/CourseAndBlogsCard";
import CustomSlider from "../common/CustomSlider";
import CustomSwiper from "../common/CustomSwiper";

const TopCourses = () => {
  const [changeRate , setChangeRate] = useState(0)

  const { data } = useQueryGet<courseAndBlogsType[]>("https://671d123d09103098807c2afb.mockapi.io/arefsalarieh/courseandblogs",["courseList"]);
    const bgc = 'bg-[aqua]'
  return (
    <div className="mt-20 p-4 shadow-2xl w-[85%] mx-auto">
        <h1 className={`font-bold text-2xl my-4 ms-8  w-fit p-2 ${bgc}`}>Top courses</h1>
      <div className=" mt-6">
        {data && <CustomSwiper data={data}/>}
      </div>
    </div>
  );
};

export default TopCourses;
