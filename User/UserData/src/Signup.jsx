import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("UserSignup")) || [];

    const userExists = existingUsers.find(
      (user) => user.email.toLowerCase() === form.email.toLowerCase(),
    );

    if (userExists) {
      alert("User Email Already exists ❌");
      return;
    }

    const { confirmPassword, ...userData } = form;

    const updatedUsers = [...existingUsers, userData];

    localStorage.setItem("UserSignup", JSON.stringify(updatedUsers));

    alert("Signup Successful 🎉");

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    navigate("/Login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-100 to-blue-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-90">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Create Account 🚀
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />

          <button
            type="submit"
            className="bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 active:scale-95 transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <span
            className="text-purple-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
