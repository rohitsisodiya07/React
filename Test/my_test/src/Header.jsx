import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-500 h-[25vh]'>
        
        <h1 className='text-black text-center text-4xl pt-10'>Header</h1>

        <div className='text-center pt-10 text-xl text-white'>
            <Link to="/">Signup</Link>
        </div>

    </div>
  )
}

export default Header