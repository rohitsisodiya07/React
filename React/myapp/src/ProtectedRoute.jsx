import { Navigate } from "react-router-dom";

function ProtectedRoute ({children}) {
  

    const isLogin = localStorage.getItem('token')
    // const isSignUp = localStorage.getItem('user')

        // console.log(`>>>>>>>>>>>isLogin`, isLogin);
        // if(isSignUp && isLogin){
        //     return children ;
        // }
        // else if(isSignUp == null){
        //     return (<Navigate to = '/Signup'/>)
        // }
        // else{
        //     return (<Navigate to = '/Login'/>)
        // }
        
        if(isLogin){
            return children ;
        }
        else{
             
            alert("Please Login !!!")
            return (<Navigate to = '/Login'/>)
        }
        

        // return isLogin ? children : (<Navigate to = '/Login'/>)
}

export default ProtectedRoute