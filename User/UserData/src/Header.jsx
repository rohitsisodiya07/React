import React from "react";
import { Link } from "react-router-dom";

const Header = ({ theme, toggleTheme }) => {
  return (
    <div className="flex items-center justify-between my-6 mx-6 p-3 text-xl">
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
      </div>

      <button
        onClick={toggleTheme}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
};

export default Header;