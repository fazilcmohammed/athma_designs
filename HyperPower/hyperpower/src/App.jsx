import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about/' element={<About />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
