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
import MyOrder from "./MyOrder";
import Signup from "./Signup";
import Wishlist from "./Wishlist";

function App() {
  const { theme, toggleTheme } = UseTheme();
  const users = [
  { id: 1, name: "User 1", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "User 2", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "User 3", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "User 4", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "User 5", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 6, name: "User 6", image: "https://randomuser.me/api/portraits/women/6.jpg" },
  { id: 7, name: "User 7", image: "https://randomuser.me/api/portraits/men/7.jpg" },
  { id: 8, name: "User 8", image: "https://randomuser.me/api/portraits/women/8.jpg" },
  { id: 9, name: "User 9", image: "https://randomuser.me/api/portraits/men/9.jpg" },
  { id: 10, name: "User 10", image: "https://randomuser.me/api/portraits/women/10.jpg" },

  { id: 11, name: "User 11", image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { id: 12, name: "User 12", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 13, name: "User 13", image: "https://randomuser.me/api/portraits/men/13.jpg" },
  { id: 14, name: "User 14", image: "https://randomuser.me/api/portraits/women/14.jpg" },
  { id: 15, name: "User 15", image: "https://randomuser.me/api/portraits/men/15.jpg" },
  { id: 16, name: "User 16", image: "https://randomuser.me/api/portraits/women/16.jpg" },
  { id: 17, name: "User 17", image: "https://randomuser.me/api/portraits/men/17.jpg" },
  { id: 18, name: "User 18", image: "https://randomuser.me/api/portraits/women/18.jpg" },
  { id: 19, name: "User 19", image: "https://randomuser.me/api/portraits/men/19.jpg" },
  { id: 20, name: "User 20", image: "https://randomuser.me/api/portraits/women/20.jpg" },

  { id: 21, name: "User 21", image: "https://randomuser.me/api/portraits/men/21.jpg" },
  { id: 22, name: "User 22", image: "https://randomuser.me/api/portraits/women/22.jpg" },
  { id: 23, name: "User 23", image: "https://randomuser.me/api/portraits/men/23.jpg" },
  { id: 24, name: "User 24", image: "https://randomuser.me/api/portraits/women/24.jpg" },
  { id: 25, name: "User 25", image: "https://randomuser.me/api/portraits/men/25.jpg" },
  { id: 26, name: "User 26", image: "https://randomuser.me/api/portraits/women/26.jpg" },
  { id: 27, name: "User 27", image: "https://randomuser.me/api/portraits/men/27.jpg" },
  { id: 28, name: "User 28", image: "https://randomuser.me/api/portraits/women/28.jpg" },
  { id: 29, name: "User 29", image: "https://randomuser.me/api/portraits/men/29.jpg" },
  { id: 30, name: "User 30", image: "https://randomuser.me/api/portraits/women/30.jpg" }
];

  return (
    <BrowserRouter>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route
          path="/"
          element={
            // <ProtectedRoute>
            <Home user={users} />
            // {/* </ProtectedRoute> */}
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/recipes/:id"
          element={
            <ProtectedRoute>
              <Recepie />
            </ProtectedRoute>
          }
        />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/carts/:id"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/MyOrder"
          element={
            <ProtectedRoute>
              <MyOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
