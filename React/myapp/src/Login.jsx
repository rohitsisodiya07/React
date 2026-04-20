import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate() ;
  

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [user, setUser] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = JSON.parse(localStorage.getItem('user'));

    if (!result) {
      alert("No user found, please signup first");
      navigate("/Signup")
      
    }

    if (form.email === result.email && form.password === result.password) {
    alert("Login Successfully");
    localStorage.setItem("token", true)
    setUser(true);
    navigate("/FetchApi")
    } 

    else if (form.email !== result.email && form.password !== result.password) {
    alert("Both Incorrect");
    } 

    else if (form.email !== result.email) {
    alert("Email is Incorrect");
    } 

    else {
    alert("Password is Incorrect");
    }

    setForm({
      email: '',
      password: ''
    });
  };

  let show = null;

  const result = JSON.parse(localStorage.getItem('user'));

  if (user) {
    show = (
      <div className='bg-gray-400 text-xl mt-16 border-2 w-96 text-center m-auto flex flex-col gap-4 p-5'>
        <p className='text-3xl font-bold'>🎉 Congratulations!!!!</p>
        <p>Name : {result.name}</p>
        <p>Email : {result.email}</p>
        <p>Number : {result.number}</p>
        <p>Age : {result.age}</p>
        <p>Address : {result.address}</p>
      </div>
    );
  }

  return (
    <div>

      <div className='flex justify-center mt-10'>
        <form className='flex flex-col gap-10' onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder='Enter Your Email'
            className='border-2 pl-2'
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder='Enter Your Password'
            className='border-2 pl-2'
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button
            type="submit"
            className='w-full bg-cyan-500 py-2 rounded-lg font-bold hover:bg-cyan-600 transition'
          >
            Login
          </button>

        </form>
      </div>

      
       {show} {/* “Render whatever value is inside the Show variable” */}

    </div>
  );
};

export default Login;