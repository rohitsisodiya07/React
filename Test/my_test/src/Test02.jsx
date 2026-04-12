import React, { useState } from "react";

const Test02 = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    skills: []
  });

  const [error, setError] = useState({});

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setForm({
        ...form,
        skills: [...form.skills, value]
      });
    } else {
      setForm({
        ...form,
        skills: form.skills.filter((item) => item !== value)
      });
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {};

    if (form.name === "") obj.name = "Name is Required";
    if (form.age === "") obj.age = "Age is Required";
    if (form.gender === "") obj.gender = "Gender must be selected";
    if (form.skills.length === 0) obj.skills = "Select at least one skill";
    if (form.email === "") obj.email = "Email is Required";
    if (form.password === "") obj.password = "Password is Required";

    setError(obj);

    if (Object.keys(obj).length === 0) {
      localStorage.setItem("user", JSON.stringify(form));
      alert("Data is Saved ✅");

      setForm({
        name: "",
        age: "",
        gender: "",
        email: "",
        password: "",
        skills: []
      });
    }
  };

  return (
    <div className="text-center mt-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-3"
      >
        
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2"
        />
        {error.name && <p className="text-red-500 text-sm">{error.name}</p>}

      
        <input
          type="number"
          name="age"
          placeholder="Enter Your Age"
          value={form.age}
          onChange={handleChange}
          className="border p-2"
        />
        {error.age && <p className="text-red-500 text-sm">{error.age}</p>}

        
        <div className="flex gap-5">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={form.gender === "other"}
              onChange={handleChange}
            />
            Other
          </label>
        </div>
        {error.gender && <p className="text-red-500 text-sm">{error.gender}</p>}

        
        <div className="bg-amber-200 p-2">
          <label>Skills :</label><br />

          <label>
            <input
              type="checkbox"
              value="HTML"
              checked={form.skills.includes("HTML")}
              onChange={handleCheckbox}
            />
            HTML
          </label>

          <label>
            <input
              type="checkbox"
              value="CSS"
              checked={form.skills.includes("CSS")}
              onChange={handleCheckbox}
            />
            CSS
          </label>

          <label>
            <input
              type="checkbox"
              value="JavaScript"
              checked={form.skills.includes("JavaScript")}
              onChange={handleCheckbox}
            />
            JavaScript
          </label>
        </div>
        {error.skills && <p className="text-red-500 text-sm">{error.skills}</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2"
        />
        {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

        
        <input
          type="password"
          name="password"
          placeholder="Create Your Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2"
        />
        {error.password && (
          <p className="text-red-500 text-sm">{error.password}</p>
        )}

        <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test02;