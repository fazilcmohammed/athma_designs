import React from 'react'
import AboutFirst from '../components/AboutFirst'
import PagesTitle from '../components/PagesTitle'
import WhyChooseUs from '../components/WhyChooseUs'
import AboutPageProducts from '../components/AboutPageProducts'

const About = () => {
  return (
    <>
    <PagesTitle title="About Us"/>
    <AboutFirst/>
    <WhyChooseUs/>
    <AboutPageProducts/>
    </>
  )
}

export default About