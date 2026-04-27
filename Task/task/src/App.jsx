import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import CheckCart from "./CheckCart";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import axios from "axios";
import Common from "./Common";

function App() {
  const [cart, setCart] = useState([]);


  const [api, setApi] = useState([]) ;
  const fetchData = async() => {

      const result = await axios.get("https://dummyjson.com/products")
      setApi(result.data.products) ;
  }
  

  useEffect( ()=> {
    fetchData() ;
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home setCart={setCart} />} />
        <Route
          path="/CheckCart"
          element={
            <ProtectedRoute>
              <CheckCart car={cart} />
            </ProtectedRoute>
          }
        />
``
        {/* <Route path="/CheckCart" element={<CheckCart cart={cart}/>}/>
         */}

        <Route path="/Login" element={<Login />} />
        <Route path="/Common" element={<Common api={api}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
