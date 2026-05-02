import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLogin = localStorage.getItem("currentUser");

  if (isLogin) {
    return children;
  } else {

      alert("Please!!! Login First");
      return <Navigate to="/Login" />;
  }

  // return isLogin ? children : (<Navigate to = '/Login' />)
}

export default ProtectedRoute;
