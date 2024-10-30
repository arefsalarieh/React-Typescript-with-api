
import LandingHeroSection from "../../component/landingComponent/LandingHeroSection"
import TopCourses from "../../component/landingComponent/TopCourses"
import useQueryGet from "../../hooks/useQueryGet"
import { users } from "../../types/usersType"



const Landing = () => {


  return (
    <div>
      <LandingHeroSection/>
      <TopCourses/>
    </div>
  )
}

export default Landing