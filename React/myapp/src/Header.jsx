import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-700 font-mono'>
        <h2 className='pt-6 text-center text-5xl font-black'>Daily Work </h2>
        <div className='flex gap-4 flex-wrap justify-center text-white mt-5 text-xl'>
            <Link to = "/">Counter</Link>
            <Link to = "/Signup">Signup</Link>
            <Link to = "/Pratice">Pratice</Link>
            <Link to = "/Login">Login</Link>
            <Link to = "/FetchApi">FetchApi</Link>
            <Link to = "/Merge">Merge</Link>
            <Link to = "/ProductDetail">ProductDetail</Link>
            <Link to = "/Parent">Parent</Link>
            <Link to = "/Help">Help</Link>
            <Link to = "/Event">Event</Link>
        </div>
    </div>
  )
}

export default Header