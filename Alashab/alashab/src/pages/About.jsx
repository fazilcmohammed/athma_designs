import React from 'react'
import Navbar from '../components/Navbar'
import AboutHeroSection from '../components/AboutHeroSection'
import AboutWelcome from '../components/AboutWelcome'
import Newsletter from '../components/Newsletter'
import Features from '../components/Feautres'
import { Helmet } from "react-helmet-async";
import AboutTimeline from '../components/AboutTimeline'

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Al Ashab</title>
        <meta name="description" content="Learn more about Al Ashab, our journey, and our commitment to quality exports." />
      </Helmet>
      <Navbar/>
      <AboutHeroSection page="About Us"/>
      <AboutWelcome/>
      <AboutTimeline/>
      <Newsletter/>
      <Features/>
    </div>
  )
}

export default About