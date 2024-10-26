import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../pages/mainLayout/MainLayout"
import Landing from "../pages/landing/Landing"


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'',
                element:<Landing/>
            }
        ]
    }
])

export default router