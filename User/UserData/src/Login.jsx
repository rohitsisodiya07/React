import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email === "admin@123" && form.password === "1234") {
      alert("Login Successfully");
      localStorage.setItem("NewUser", true);

      navigate("/");
    } else {
      alert("Invalid Details");
    }
    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border-2 pl-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            className="border-2 pl-2"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 py-2 rounded-lg font-bold hover:bg-cyan-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
