import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <header className='flex justify-between items-center px-10 py-8'>
        <Link to="/" className='font-extrabold text-5xl' >#Vanlife</Link>
      <nav className='flex gap-11'>
      <Link to="/about" className='text-xl font-medium text-slate-500'>About</Link>
      </nav>
      </header>
      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
       
      

      </Routes>
   
    </Router>
     
    </>
  )
}

export default App
