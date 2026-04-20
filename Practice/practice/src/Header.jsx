import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-700 font-mono'>
        <h2 className='py-5 text-center text-6xl'><i>Shooping</i></h2>
        <div className='flex gap-4 flex-wrap justify-evenly text-white text-2xl'>
            
            <Link to = "/">Signup</Link>
           
            <Link to = "/Login">Login</Link>
        
        </div>
    </div>
  )
}

export default Header