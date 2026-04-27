import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-500 h-[25vh]'>
        
        <h1 className='text-black text-center text-4xl pt-10'>Header</h1>

        <div className=' text-2xl flex justify-center gap-5 m-10'>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Common">Common</Link>
            
        </div>

    </div>
  )
}

export default Header