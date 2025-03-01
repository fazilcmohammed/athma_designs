import React from 'react'
import AboutHeroSection from '../components/AboutHeroSection'
import ContactSection from '../components/ContactSection'
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Al Ashab</title>
        <meta name="description" content="Get in touch with Al Ashab for fresh fruit exports and trade inquiries." />
      </Helmet>
      <AboutHeroSection page="Contact Us"/>
      <ContactSection/>
    </div>
  )
}

export default Contact