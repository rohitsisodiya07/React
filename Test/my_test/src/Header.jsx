import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-500 h-[25vh]'>
        
        <h1 className='text-black text-center text-4xl pt-10'>Header</h1>

        <div className=' text-2xl flex justify-center gap-5 m-10'>
            <Link to="/">Test01</Link>
            <Link to="/Test02">Test02</Link>
            <Link to="/Test03">Test03</Link>
            <Link to="/Test04">Test04</Link>
            <Link to="/Test05">Test05</Link>
            <Link to="/Test06">Test06</Link>
            <Link to="/Test07">Test07</Link>
        </div>

    </div>
  )
}

export default Header