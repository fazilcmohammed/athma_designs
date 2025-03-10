import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

import Footer from './components/Footer'

import { Route, Routes, Link } from "react-router-dom"; // Import necessary components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import DigitalSolutions from './pages/DigitalSolutions';
import CloudService from './pages/CloudService';
import ItInfra from './pages/ItInfra';
import CyberSecurity from './pages/CyberSecurity';
import ManagedService from './pages/ManagedService';
import HybridCloud from './pages/KnowMore/HybridCloud';
import ManagedItService from './pages/KnowMore/ManagedItService';
import DigitalWorkplace from './pages/KnowMore/DigitalWorkplace';
import DigitalLearningSolutions from './pages/KnowMore/DigitalLearningSolutions';


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
