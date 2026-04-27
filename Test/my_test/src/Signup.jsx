import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ data }) => {

  const navigate = useNavigate() ;
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    state: "",
    college: "",
    course: "",
    branch: "",
    section: "",
    class: "",
  });

  const [error, setError] = useState({});

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {};
    if (form.name === "") obj.name = "Name is Required";
    if (form.age === "") obj.age = "Age is Required";
    if (form.email === "") obj.email = "Email is Required";
    if (form.password === "") obj.password = "Password is Required";

    setError(obj);
    if (Object.keys(obj).length === 0) {
      localStorage.setItem("user", JSON.stringify(form));
      alert("Data is Saved");
      navigate('/Login')

      setForm({
        name: "",
        age: "",
        email: "",
        password: "",
        state: "",
        college: "",
        course: "",
        branch: "",
        section: "",
        class: "",
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      if (name === "state") {
        return {
          ...prev,
          state: value,
          college: "",
          course: "",
          branch: "",
          section: "",
        };
      } else if (name === "college") {
        return {
          ...prev,
          college: value,
          course: "",
          branch: "",
          section: "",
        };
      } else if (name === "course") {
        return {
          ...prev,
          course: value,
          branch: "",
          section: "",
        };
      } else if (name === "branch") {
        return {
          ...prev,
          branch: value,
          section: "",
        };
      } else if (name === "section") {
        return {
          ...prev,
          section: value,
        };
      } else {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };
  return (
    <div>
      <h1 className="text-5xl text-center m-2">Signup</h1>
      <form
        className="h-screen bg-gray-200 flex flex-col gap-5 items-center border border-gray-200 p-5 m-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={form.name}
          onChange={handleForm}
          className="border-2 p-2"
        />
        {error.name && <p className="text-red-500 text-sm">{error.name}</p>}

        <input
          type="number"
          name="age"
          placeholder="Enter Your Age"
          onChange={handleForm}
          value={form.age}
          className="border-2 p-2"
        />
        {error.age && <p className="text-red-500 text-sm">{error.age}</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={form.email}
          onChange={handleForm}
          className="border-2 p-2"
        />
        {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          onChange={handleForm}
          value={form.password}
          className="border-2 p-2"
          />
          {error.password && <p className="text-red-500 text-sm">{error.password}</p>}

        <label className="font-bold">Select Your Details : (Optional)</label>
        <div className="flex flex-wrap gap-5">
        <select
          name="state"
          value={form.state}
          onChange={handleChange}
          className="border p-2"
        >
          <option>Select State</option>
          {Object.keys(data).map((state) => (
            <option value={state} id={state}>
              {state}
            </option>
          ))}
        </select>

        <select
          name="college"
          value={form.college}
          disabled={!form.state}
          onChange={handleChange}
          className="border p-2"
        >
          <option>Select College</option>
          {form.state &&
            Object.keys(data[form.state].colleges).map((college) => (
              <option value={college} id={college}>
                {college}
              </option>
            ))}
        </select>

        <select
          name="course"
          value={form.course}
          disabled={!form.college}
          onChange={handleChange}
          className="border p-2"
        >
          <option value="">Select Course</option>

          {Object.keys(
            data?.[form.state]?.colleges?.[form.college]?.courses || {},
          ).map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>

        <select
          name="branch"
          value={form.branch}
          disabled={!form.course}
          onChange={handleChange}
          className="border p-2"
        >
          <option value="">Select Branch</option>
          {form.state &&
            form.college &&
            form.course &&
            Object.keys(
              data?.[form.state]?.colleges?.[form.college]?.courses?.[
                form.course
              ]?.branches,
            ).map((branch) => (
              <option value={branch} key={branch}>
                {branch}
              </option>
            ))}
        </select>

        <select
          name="section"
          value={form.section}
          disabled={!form.branch}
          onChange={handleChange}
          className="border p-2"
        >
          <option value="">Select Sections</option>
          {form.state &&
            form.college &&
            form.course &&
            form.branch &&
            Object.keys(
              data?.[form.state]?.colleges?.[form.college]?.courses?.[
                form.course
              ]?.branches[form.branch].sections,
            ).map((branch) => (
              <option value={branch} key={branch}>
                {branch}
              </option>
            ))}
        </select>

        <select
          name="class"
          value={form.class}
          disabled={!form.section}
          onChange={handleChange}
          className="border p-2"
        >
          <option value="">Select Class</option>
          {form.state &&
            form.college &&
            form.course &&
            form.branch &&
            form.section &&
            data?.[form.state]?.colleges?.[form.college]?.courses?.[
              form.course
            ]?.branches[form.branch].sections[form.section].map((branch) => (
              <option value={branch} key={branch}>
                {branch}
              </option>
            ))}
        </select>
        </div>

        <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
