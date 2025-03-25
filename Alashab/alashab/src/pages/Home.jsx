import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Features from '../components/Feautres'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import { Helmet } from "react-helmet-async";
import ProductsByCountry from '../components/ProductsByCountry'
import AboutUs from '../components/AboutUs'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Al Ashab</title>
        <meta name="description" content="Welcome to Al Ashab, the best exporter of fresh fruits and vegetables in UAE." />
      </Helmet>
        <HeroSection/>
        <AboutUs/>
        <ProductsByCountry/>
        <Features/>
        <Products/>
        <Newsletter/>
    </div>
  )
}

export default Home