import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUser } from "./slice/userSlice";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const users = useSelector((state) => state.userData.user) || [];;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // find user
    const validUser = users.find(
      (user) =>
        user.email === form.email && user.password === form.password
    );

    if (validUser) {
      alert("Login Successful 🎉");

      // store logged-in user
      // localStorage.setItem("currentUser", JSON.stringify(validUser));
      dispatch(loginUser(validUser))

      navigate("/");
    } else {
      alert("Invalid Email or Password ❌");
    }

    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-cyan-100 to-blue-200">
      
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-87.5">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Welcome Back 👋
        </h2>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            type="submit"
            className="bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account?{" "}
          <span
            className="text-cyan-600 cursor-pointer"
            onClick={() => navigate("/Signup")}
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;