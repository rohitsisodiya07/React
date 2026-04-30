import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name : '',
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email && form.password && form.name) {
      alert("Login Successfully");
      localStorage.setItem("NewUser", form.name);

      navigate("/");
    } else {
      alert("Invalid Details");
    }
    setForm({
      email: "",
      password: "",
      name : ''
    });
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <input
            type="name"
            placeholder="Enter Your Name"
            className="border-2 pl-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
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
