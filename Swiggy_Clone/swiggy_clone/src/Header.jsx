import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div>

      <div className='font-comic flex items-center gap-10  mt-4 pl-5 text-xl'>
        <p className='text-orange-500 font-extrabold text-2xl'>Bhandara</p>
        <Link to="/">Home</Link>
        <Link to="/Offers">Offers</Link>
        <Link to="/Help">Help</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Login">Login</Link>
        <Link to="/About">About</Link>
      </div>
        
      
  </div>
  )
}

export default Header