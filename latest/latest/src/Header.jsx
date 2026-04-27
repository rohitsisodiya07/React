import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-700 font-mono'>
        <h2 className='pt-6 text-center text-5xl font-black'> React Test </h2>
        <div className='flex gap-4 flex-wrap justify-center text-white mt-5 text-xl'>
            <Link to = "/">Home</Link>
            <Link to = "/Child">Child</Link>
            <Link to = "/Login">Login</Link>
            
        </div>
    </div>
  )
}

export default Header