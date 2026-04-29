import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Recepie from "./Recepie";
import Post from "./Post";
import Cart from "./Cart";
import UseTheme from "./UseTheme";

function App() {

  const { theme, toggleTheme } = UseTheme();
  return (
    <BrowserRouter>
      <Header theme={theme} toggleTheme={toggleTheme}/>
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
        <Route path="/recipes/:id" element={<Recepie />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/carts/:id" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
