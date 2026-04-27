import { Navigate } from "react-router-dom";

function ProtectedRoute ({children}){

    const isLogin = localStorage.getItem('token') ;
    if(isLogin){
        return children
    }
    else{
        alert("Please Login First!!!") ;
        return <Navigate to={'/Login'}/>
        
    }
}

export default ProtectedRoute