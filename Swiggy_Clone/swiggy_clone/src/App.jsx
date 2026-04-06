import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import Login from './Login'
import Offers from './Offers'
import Help from './Help'
import About from './About'


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Offers' element={<Offers/>}/>
        <Route path='/Help' element={<Help/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/About' element={<About/>}/>
        
      </Routes>
      </BrowserRouter>
  )
}

export default App
