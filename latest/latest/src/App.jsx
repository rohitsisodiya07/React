import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import ProductDetail from "./ProductDetail";
import ProtectedRoute from "./ProtectedRoute";
import { useDispatch } from "react-redux";
import { addApi } from "./slice/signupSlice";
import Api from "./Api";
import axios from "axios";

function App() {

  const dispatch = useDispatch();

  const fetchData = async () => {
    const result = await axios.get(
      "https://dummyjson.com/recipes"
    );

    dispatch(addApi(result.data.recipes));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/Login" element={<Login />} />

        <Route path="/Signup" element={<Signup />} />

        <Route path="/Api" element={<Api />} />

        <Route path="/recipes/:id" element={<ProductDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;