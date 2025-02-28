import React from 'react'
import Navbar from '../components/Navbar'
import AboutHeroSection from '../components/AboutHeroSection'
import AboutWelcome from '../components/AboutWelcome'
import Newsletter from '../components/Newsletter'
import Features from '../components/Feautres'

const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutHeroSection page="About Us"/>
      <AboutWelcome/>
      <Newsletter/>
      <Features/>
    </div>
  )
}

export default About