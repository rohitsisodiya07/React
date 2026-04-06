import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-700 font-mono'>
        <h2 className='pt-6 text-center text-4xl'>Daily</h2>
        <div className='flex gap-4 flex-wrap justify-center text-white mt-5 text-xl'>
            <Link to = "/">Counter</Link>
            <Link to = "/Signup">Signup</Link>
            <Link to = "/Pratice">Pratice</Link>
        </div>
    </div>
  )
}

export default Header