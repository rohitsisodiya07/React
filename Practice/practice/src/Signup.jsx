import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./slice/signupSlice";

const Signup = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
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

    if (!form.name || !form.email || !form.password || !form.age) {
      alert("All fields are required ❌");
      return;
    }

    // 🔥 Only Redux dispatch
    dispatch(addUser(form));

    alert("Signup Successful ✅");

    setForm({
      name: "",
      email: "",
      age: "",
      password: "",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-400 border-2 flex flex-col gap-3 items-center p-6 rounded w-1/3"
      >
        <h2 className="text-xl font-bold">Signup</h2>

        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter your Name"
          onChange={handleChange}
          className="border-2 rounded p-2 w-full"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your Email"
          className="border-2 rounded p-2 w-full"
        />

        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Enter your Age"
          className="border-2 rounded p-2 w-full"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your Password"
          className="border-2 rounded p-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;