import React from 'react'

const Login = () => {
  return (
    <div className='bg-slate-100 min-h-screen font-comic'>
      {/* Heading */}
      <h1 className='text-center pt-10 text-5xl font-bold text-gray-800'>
        Login
      </h1>

      {/* Form */}
      <form className='bg-white p-8 rounded-2xl w-96 shadow-xl space-y-5 border border-gray-200 mx-auto mt-10'>

        {/* Email */}
        <input 
          type="email" 
          placeholder="Enter Email"
          className='w-full p-3 rounded-lg bg-white text-black border border-gray-300 outline-none focus:ring-2 focus:ring-cyan-400'
        />
        <input 
          type="password" 
          placeholder="Password"
          className='w-full p-3 rounded-lg bg-white text-black border border-gray-300 outline-none focus:ring-2 focus:ring-cyan-400'
        />

        <button 
          type="submit"
          className='w-full bg-cyan-500 py-3 rounded-lg font-semibold text-white hover:bg-cyan-600 transition'
        >
          Login
        </button>

      </form>
    </div>
  )
}

export default Login