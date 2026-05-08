import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-700 font-mono">
      <div className="flex gap-4 flex-wrap justify-evenly text-white text-2xl">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Tags">Tags</Link>
        <Link to="/Dimension">Dimension</Link>
        <Link to="/Review">Review</Link>
      </div>
    </div>
  );
};

export default Header;
