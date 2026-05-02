import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ theme, toggleTheme }) => {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg transition font-medium ${
      location.pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
          MyApp 🚀
        </h1>

        <nav className="flex items-center gap-6">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/MyOrder" className={linkClass("/MyOrder")}>MyOrder</Link>
          <Link to="/Wishlist" className={linkClass("/Wishlist")}>Wishlist</Link>
          <Link to="/Login" className={linkClass("/Login")}>Login</Link>
          <Link to="/Signup" className={linkClass("/Signup")}>Signup</Link>
        </nav>

        <button
          onClick={toggleTheme}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 active:scale-95 transition"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </header>
  );
};

export default Header;