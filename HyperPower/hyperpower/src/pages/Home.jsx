import React from 'react'
import HeroSection from '../components/HeroSection'
import OurProducts from '../components/OurProducts'
import CustomerLogos from '../components/CustomerLogos'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <CustomerLogos/>
        <OurProducts/>
        <WhyChooseUs/>
    </>
  )
}

export default Home