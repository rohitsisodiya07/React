import React, { useState } from 'react';

const Signup = () => {

  const [error, setError] = useState({});

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
    age: '',
    address: ''
  });

  function getBorder(err) {
    return error[err] ? 'border-red-500' : 'border-gray-300';
  }

  function handleSubmit(e) {
    e.preventDefault();

    let obj = {};

    if (form.name === '') obj.name = "Name is Required";
    if (form.email === '') obj.email = "Email is Required";
    if (form.password === '') obj.password = "Password is Required";
    if (form.number === '') obj.number = "Number is Required";
    if (form.age === '') obj.age = "Age is Required";
    if (form.address === '') obj.address = "Address is Required";

    setError(obj);

    if (Object.keys(obj).length === 0) {

      localStorage.setItem('user', JSON.stringify(form));

      setForm({
        name: '',
        email: '',
        password: '',
        number: '',
        age: '',
        address: ''
      });
    }
  }

  return (
    <div className='flex justify-center'>

      <form className='mt-5 w-[25%] flex flex-col gap-4' onSubmit={handleSubmit}>

        <div>
          <input
            type="text"
            placeholder="Your Name"
            className={`border-2 p-2 ${getBorder('name')}`}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {error.name && <p className='text-red-600 text-sm'>{error.name}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            className={`border-2 p-2 ${getBorder('email')}`}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {error.email && <p className='text-red-600 text-sm'>{error.email}</p>}
        </div>

     
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            className={`border-2 p-2 ${getBorder('password')}`}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          {error.password && <p className='text-red-600 text-sm'>{error.password}</p>}
        </div>

        
        <div>
          <input
            type="tel"
            placeholder="Enter Number"
            className={`border-2 p-2 ${getBorder('number')}`}
            value={form.number}
            onChange={(e) => setForm({ ...form, number: e.target.value })}
          />
          {error.number && <p className='text-red-600 text-sm'>{error.number}</p>}
        </div>

       
        <div>
          <input
            type="number"
            placeholder="Your Age"
            className={`border-2 p-2 ${getBorder('age')}`}
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />
          {error.age && <p className='text-red-600 text-sm'>{error.age}</p>}
        </div>

     
        <div>
          <textarea
            placeholder="Your Address"
            rows="2"
            className={`w-full p-2 border-2 ${getBorder('address')}`}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          ></textarea>
          {error.address && <p className='text-red-600 text-sm'>{error.address}</p>}
        </div>

        <button
          type="submit"
          className='w-full bg-cyan-500 py-2 rounded-lg font-bold hover:bg-cyan-600 transition text-white'
        >
          Submit
        </button> 

      </form>
    </div>
  );
};

export default Signup;