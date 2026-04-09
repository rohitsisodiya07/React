import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Counter from './Counter'
import Signup from './Signup'
import Practice from './Practice'
import Login from './Login'
import FetchApi from './FetchApi'

function App() {
  
  const user = [
  { id: 1, name: "Rohit" },
  { id: 2, name: "Aman" }
];

  return (
   <BrowserRouter>
    <Header/>
    <Routes>

       
       <Route path='/' element={<Counter/>}/>
       <Route path='/Signup' element={<Signup/>}/>
       <Route path='/Pratice' element={<Practice user = {user}/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/FetchApi' element={<FetchApi/>}/>


    </Routes>
   
   
   </BrowserRouter>
  )
}

export default App
