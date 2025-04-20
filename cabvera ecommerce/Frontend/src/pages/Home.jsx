import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import Qualitysection from '../components/Qualitysection'
import Categories from '../components/Categories'
import Comfortsection from '../components/Comfortsection'
import Dedication from '../components/Dedication'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Categories/>
        <Qualitysection/>
        <Comfortsection/>
        <Dedication/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home