import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../pages/mainLayout/MainLayout"
import Landing from "../pages/landing/Landing"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import Courses from "../pages/courses/Courses"
import ProfileLayout from "../pages/profile/ProfileLayout"


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
        element:<ProfileLayout/>
    },    
])

export default router