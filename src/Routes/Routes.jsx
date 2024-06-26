import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Booking from "../Pages/Booking/Booking";
import PrivateRoutes from "../Private/PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/checkout/:id',
                element:<CheckOut/>,
                loader:({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/booking',
                element:<PrivateRoutes><Booking/></PrivateRoutes>
            }
        ]
    }
])

export default router