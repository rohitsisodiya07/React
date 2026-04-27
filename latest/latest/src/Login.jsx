import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(result);
    if ( 'admin@123' === form.email && '1234' === form.password) {
      alert("Login Successful");
      localStorage.setItem('token', true) ;
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
      <div className="text-center mt-20">
        <form
          className="flex flex-col gap-5 items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="border-2 p-2"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            className="border-2 p-2"
          />

          <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
