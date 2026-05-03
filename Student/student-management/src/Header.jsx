import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-linear-to-r from-indigo-500 to-purple-600 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-white text-xl font-bold tracking-wide">
          Student Dashboard
        </h1>

        <nav className="flex gap-6 text-white font-medium">
          <NavLink
            to="/StudentForm"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : "hover:text-gray-200"
            }
          >
            Form
          </NavLink>

          <NavLink
            to="/StudentList"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : "hover:text-gray-200"
            }
          >
            StudentList
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
