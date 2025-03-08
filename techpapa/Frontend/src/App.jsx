import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

import Footer from './components/Footer'

import { Route, Routes, Link } from "react-router-dom"; // Import necessary components
import Home from './assets/pages/Home';
import AboutUs from './assets/pages/AboutUs';
import DigitalSolutions from './assets/pages/DigitalSolutions';
import CloudService from './assets/pages/CloudService';
import ItInfra from './assets/pages/ItInfra';
import CyberSecurity from './assets/pages/CyberSecurity';
import ManagedService from './assets/pages/ManagedService';
import HybridCloud from './assets/pages/KnowMore/HybridCloud';
import ManagedItService from './assets/pages/KnowMore/ManagedItService';
import DigitalWorkplace from './assets/pages/KnowMore/DigitalWorkplace';
import DigitalLearningSolutions from './assets/pages/KnowMore/DigitalLearningSolutions';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/services" element={<DigitalSolutions/>} />
        <Route path="/cloud-service" element={<CloudService />} />
        <Route path="/services/telephony-as-a-service/" element={<HybridCloud />} />
        <Route path="/service/managed-it-service/" element={<ManagedItService />} />
        <Route path="/service/digital-workspace/" element={<DigitalWorkplace />} />
        <Route path="/service/digital-learning-solutions/" element={<DigitalLearningSolutions />} />
        <Route path="/it-infrastructure" element={<ItInfra />} /> {/* 404 Route */}
        <Route path="/cybersecurity" element={<CyberSecurity />} /> {/* 404 Route */}
        <Route path="/managedservices" element={<ManagedService />} /> {/* 404 Route */}
      </Routes>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
