import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch  } from "react-redux";
import { addUser } from "./slice/signupSlice";

const Signup = () => {

    const dispatch = useDispatch() ;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser(form))
    localStorage.setItem("latestUser", JSON.stringify(form));

    alert("Signup Successful");

    navigate("/login");

    setForm({
      name: "",
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
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="border-2 p-2"
          />

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
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;