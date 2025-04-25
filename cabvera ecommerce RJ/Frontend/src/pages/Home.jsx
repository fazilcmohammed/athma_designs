import React from 'react'
import Herosection from '../components/Herosection'
import Qualitysection from '../components/Qualitysection'
import Categories from '../components/Categories'
import Comfortsection from '../components/Comfortsection'
import Dedication from '../components/Dedication'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
        
        <Herosection/>
        <Categories/>
        <Qualitysection/>
        <Comfortsection/>
        <Dedication/>
        <Newsletter/>
    </div>
  )
}

export default Home