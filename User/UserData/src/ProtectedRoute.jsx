import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {
 
    const isLogin = localStorage.getItem('NewUser') ;

    return isLogin ? children : (<Navigate to = '/Login' />)
}

export default ProtectedRoute