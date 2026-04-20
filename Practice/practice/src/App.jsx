import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Signup from './Signup'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <Routes>

    <Route path='/' element = {<Signup/>} />
    <Route path='/Login' element = {<Login/>} />

    </Routes>

    </BrowserRouter>

  )
}

export default App
