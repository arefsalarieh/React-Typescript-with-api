import CourseList from "../../component/coursesComponent/CourseList"
import CoursesHeroSection from "../../component/coursesComponent/CoursesHeroSection"

const Courses = () => {
  return (
    <div className="w-[90%] mx-auto">
        <CoursesHeroSection/>
        <CourseList/>
    </div>
  )
}

export default Courses