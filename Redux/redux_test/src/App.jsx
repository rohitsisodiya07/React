import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Tags from './Tags'
import Dimension from './Dimension'
import Review from './Review'

function App() {
 

  return (
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Tags' element={<Tags/>}/>
      <Route path='/Dimension' element={<Dimension/>}/>
      <Route path='/Review' element={<Review/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
