import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-700 font-mono'>
        <div className='text-center pt-10 text-5xl text-white'>MY PORTFOLIO</div>
        <div className='flex gap-4 text-xl flex-wrap justify-center text-white mt-5'>
            <Link to="/">Skill</Link>
            <Link to="/Project">Project</Link>
            <Link to="/Introduction">Introduction</Link>
            <Link to="/Qualification">Qualification</Link>
            <Link to="/Hobbies">Hobbies</Link>
            <Link to="/Experience">Experience</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
            
        </div>
    </div>
  )
}

export default Header