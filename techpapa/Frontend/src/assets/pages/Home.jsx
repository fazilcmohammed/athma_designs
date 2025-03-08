import React from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import ScrollingLogos from '../../components/ScrollingLogos'
import AboutSection from '../../components/AboutSection'
import ServicesSection from '../../components/ServicesSection'
import Solutions from '../../components/Solutions'
import IspgSection from '../../components/IspgSection'
import WebaLearn from '../../components/WebaLearn'
import ChooseUs from '../../components/ChooseUs'
import HeroSection from '../../components/HeroSection'

const Home = () => {
  return (
    <div>

        <HeroSection/>
        <ScrollingLogos/>
        <AboutSection/>
        <ServicesSection/>
        <Solutions/>
        <IspgSection/>
        <WebaLearn/>
        <ChooseUs/>     
    </div>
  )
}

export default Home