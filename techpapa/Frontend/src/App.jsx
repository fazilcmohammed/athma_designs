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
import Virtualization from './pages/solutions/virtualization';
import AmcSupport from './pages/solutions/AmcSupport';
import CloudeNetworking from './pages/solutions/CloudeNetworking';
import Enterprise from './pages/solutions/Enterprise';
import ArtificialIntelligence from './pages/solutions/ArtificialIntelligence';
import IoT from './pages/solutions/IoT';
import ItInfrastructure from './pages/solutions/ItInfrastructure';
import ItSupport from './pages/solutions/ItSupport';
import Microsoft365 from './pages/solutions/Microsoft365';
import CloudOperation from './pages/solutions/CloudOperation';
import AzureService from './pages/solutions/AzureService';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/digital-solutions" element={<DigitalSolutions/>} />
        <Route path="/cloud-service" element={<CloudService />} />
        <Route path="/services/telephony-as-a-service/" element={<HybridCloud />} />
        <Route path="/service/managed-it-service/" element={<ManagedItService />} />
        <Route path="/service/digital-workspace/" element={<DigitalWorkplace />} />
        <Route path="/service/digital-learning-solutions/" element={<DigitalLearningSolutions />} />
        <Route path="/it-infrastructure" element={<ItInfra />} /> {/* 404 Route */}
        <Route path="/cybersecurity" element={<CyberSecurity />} /> {/* 404 Route */}
        <Route path="/it-managed-service" element={<ManagedService />} /> 
        <Route path="/service/virtualization-solutions/" element={<Virtualization />} />
        <Route path="/service/it-amc/" element={<AmcSupport />} />
        <Route path="/service/cloud-managed-networking/" element={<CloudeNetworking />} />
        <Route path="/service/ict-solutions/" element={<Enterprise/>} />
        <Route path="/service/artificial-intelligence/" element={<ArtificialIntelligence/>} />
        <Route path="/service/iot-service/" element={<IoT/>} />
        <Route path="/service/it-infrastructure/" element={<ItInfrastructure/>} />
        <Route path="/service/it-support/" element={<ItSupport/>} />
        <Route path="/service/microsoft-365-suite/" element={<Microsoft365/>} />
        <Route path="/service/cloud-operations-center/" element={<CloudOperation/>} />
        <Route path="/service/azure-management-service/" element={<AzureService/>} />
        <Route path="/service/managed-it-service/" element={<ManagedItService/>} />
      </Routes>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
