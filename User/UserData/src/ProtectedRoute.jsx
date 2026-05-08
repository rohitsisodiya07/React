import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const isLogin = useSelector( (state) => state.userData.currentUser);

  if (isLogin) {
    return children;
  } else {

      alert("Please!!! Login First");
      return <Navigate to="/Login" />;
  }

  // return isLogin ? children : (<Navigate to = '/Login' />)
}

export default ProtectedRoute;
