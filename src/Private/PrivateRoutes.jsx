import { Children, useContext } from "react";
import { AuthContext } from "../Context/ContextComponent";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const location = useLocation()
    console.log(location);
    const {user,loading} = useContext(AuthContext)
    if(user?.email)return children
    if(loading)return <progress className="progress w-56"></progress>
    return <Navigate to='/login'></Navigate> 
};

export default PrivateRoutes;