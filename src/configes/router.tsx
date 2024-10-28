import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../pages/mainLayout/MainLayout"
import Landing from "../pages/landing/Landing"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import Courses from "../pages/courses/Courses"
import ProfileLayout from "../pages/profile/ProfileLayout"
import Dashboard from "../component/profileComponent/Dashboard"
import CreateCourse from "../component/profileComponent/CreateCourse"
import Blogs from "../pages/blogs/Blogs"
import CreateBlog from "../component/profileComponent/CreateBlog"


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'',
                element:<Landing/>
            },
            {
                path:'/courses',
                element:<Courses/>
            },  
           {
                path:'/Blogs',
                element:<Blogs/>
            },                        
        ]
    },

    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    
    {
        path:'/ProfileLayout',
        element:<ProfileLayout/>,
        children:[
            {
                path:'',
                element:<Dashboard/>
            },
            {
                path:'CreateCourse',
                element:<CreateCourse/>
            },
            {
                path:'CreateBlog',
                element:<CreateBlog/>
            },            

            
        ]
    },    
])

export default router