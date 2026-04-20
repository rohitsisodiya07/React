import React, { useState } from 'react'

const Signup = () => {
    const [form, setForm] = useState({
        name : '',
        email : '',
        password  : ''

    })

    const handleChange = (e) => {

        const  {name, value} = e.target ;

        if( name === 'name'){
            setForm({ [name] : value, email : '', password  : ''})
        }
        else if( name === 'email'){
            setForm({ ...form, [name] : value, password  : ''})
        }
        else if( name === 'password')
    }
  return (
    <div>
        
        <form className='bg-gray-400 border-2 flex flex-col gap-3 items-center mt-10'>
            
        <input type="text"
        name='name'
        value={form.name}
        placeholder='Enter your Name'
        onChange={handleChange}
        className='border-2 rounded p-2 w-1/5' />   

        <input type="email"
        name = 'email'
        value={form.email}
        onChange={handleChange}
        placeholder='Enter your Email'
        className='border-2 rounded p-2 w-1/5' />   

        <input type="number"
        name = 'age'
        value={form.age}
        onChange={handleChange}
        placeholder='Enter your Age'
        className='border-2 rounded p-2 w-1/5' />    
            
            
        </form>   
    </div>
  )
}

export default Signup