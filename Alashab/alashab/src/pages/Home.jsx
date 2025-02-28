import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Features from '../components/Feautres'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Features/>
        <Products/>
        <Newsletter/>
    </div>
  )
}

export default Home