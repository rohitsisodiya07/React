import React from 'react'
import { useState } from 'react'

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    function handleSubmit(e){

      e.preventDefault() ;

      const data = { fullname : name, email, password, number, age, address} ;
      localStorage.setItem( "user1", JSON.stringify(data)) ;
      console.log(data);

      const saveData = JSON.parse(localStorage.getItem('user1'))
      console.log(saveData);
      

      alert("Data Saved") ;

      setName('') ;
      setEmail('') ;
      setPassword('');
      setNumber('');
      setAge('');
      setAddress('');
    }
  return (
    <div className='flex justify-center'>
        
        <form className='text-center mt-10 w-[25%]' onSubmit={handleSubmit}>

          <input 
            type="text" 
            placeholder="Your Name" 
            className='border-2 pl-2' 
            value={name}
            onChange={ (e) => setName(e.target.value)}
            /><br/><br/>

          <input 
            type="email" 
            placeholder="Your Email" 
            className='border-2 pl-2'
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            /><br/><br/>

          <input 
            type="password" 
            placeholder="Enter Password"
            className='border-2 pl-2' 
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
            /><br/><br/>

          <input 
            type="number" 
            placeholder="Enter Number" 
            className='border-2 pl-2'
            value={number}
            onChange={ (e) => setNumber(e.target.value)}
            /><br/><br/>

          <input 
            type="number" 
            placeholder="Your Age" 
            className='border-2 pl-2'
            value={age}
            onChange={ (e) => setAge(e.target.value)}
            /><br/><br/>

          <textarea 
            placeholder="Your Addess" 
            rows="2" 
            className='w-full p-2 rounded border-2 outline-none'
            value={address}
            onChange={ (e) => setAddress(e.target.value)}
          ></textarea>

          <button 
            type="submit"
            className='w-full bg-cyan-500 py-2 rounded-lg font-bold hover:bg-cyan-600 transition'
          >
            Submit
          </button>

        </form>
    </div>
  )
}

export default Signup