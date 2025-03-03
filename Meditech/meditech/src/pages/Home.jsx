import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Herosection'
import AboutSection from '../components/AboutSection'
import FacilitiesSection from '../components/FacilitiesSection'
import TeamSection from '../components/TeamSection'
import Services from './Services'
import ServicesSection from '../components/ServicesSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <FacilitiesSection/>
        <ServicesSection/>
        <TeamSection/>
    </div>
  )
}

export default Home