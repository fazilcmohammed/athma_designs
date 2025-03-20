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
import Contact from './pages/Contact';
import CampusWifi from './pages/FooterLinks/ICTSolutions/CampusWifi';
import CCTVSurveillance from './pages/FooterLinks/ICTSolutions/CCTVSurveillance';
import ScrollToTop from './components/ScrollToTop';
import HCIInfrastructure from './pages/FooterLinks/ICTSolutions/HCIInfrastructure';
import IntelligentSwitching from './pages/FooterLinks/ICTSolutions/IntelligentSwitching';
import IpTelephony from './pages/FooterLinks/ICTSolutions/IpTelephony';
import NextGenFirewall from './pages/FooterLinks/ICTSolutions/NextGenFirewall';
import ServerSolutions from './pages/FooterLinks/ICTSolutions/ServerSolutions';
import StorageSolutions from './pages/FooterLinks/ICTSolutions/StorageSolutions';
import StructuredCabling from './pages/FooterLinks/ICTSolutions/StructuredCabling';
import VirtualizationSolutions from './pages/FooterLinks/ICTSolutions/VirtualizationSolutions';
import AzureCloudSolution from './pages/FooterLinks/Cloud Solution/AzureCloudSolution';
import AzureBackupSolution from './pages/FooterLinks/Cloud Solution/AzureBackupSolution';
import AureAdSolution from './pages/FooterLinks/Cloud Solution/AureAdSolution';
import CloudEmailSecurity from './pages/FooterLinks/Cloud Solution/CloudEmailSecurity';
import CloudOptimization from './pages/FooterLinks/Cloud Solution/CloudOptimization';
import CloudFirewall from './pages/FooterLinks/Cloud Solution/CloudFirewall';
import DesktopAsService from './pages/FooterLinks/Cloud Solution/DesktopAsService';
import WifiAsService from './pages/FooterLinks/Cloud Solution/WifiAsService';
import TelephonyAsServices from './pages/FooterLinks/Cloud Solution/TelephonyAsServices';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ScrollToTop /> {/* Ensures scrolling to top on route change */}
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
        <Route path="/cyber-security" element={<CyberSecurity />} /> {/* 404 Route */}
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
        <Route path="/service/managed-it-service/" element={<ManagedItService/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service/wifi-solutions/" element={<CampusWifi/>} />
        <Route path="/service/cctv-surveillance/" element={<CCTVSurveillance/>} />
        <Route path="/service/hci-infrastructure/" element={<HCIInfrastructure/>} />
        <Route path="/service/intelligent-switching/" element={<IntelligentSwitching/>} />
        <Route path="/service/ip-telephony-solutions/" element={<IpTelephony/>} />
        <Route path="/service/next-generation-firewall/" element={<NextGenFirewall/>} />
        <Route path="/service/server-solutions/" element={<ServerSolutions/>} />
        <Route path="/service/storage-solutions/" element={<StorageSolutions/>} />
        <Route path="/service/structured-cabling/" element={<StructuredCabling/>} />
        <Route path="/service/azure-cloud-solution/" element={<AzureCloudSolution/>} />
        <Route path="/service/microsoft-azure-backup/" element={<AzureBackupSolution/>} />
        <Route path="/service/azure-active-directory/" element={<AureAdSolution/>} />
        <Route path="/service/cloud-email-security/" element={<CloudEmailSecurity/>} />
        <Route path="/service/cloud-optimization-service/" element={<CloudOptimization/>} />
        <Route path="/service/next-generation-cloud-firewall/" element={<CloudFirewall/>} />
        <Route path="/service/desktop-as-a-service/" element={<DesktopAsService/>} />
        <Route path="/service/wi-fi-as-a-service/" element={<WifiAsService/>} />
        <Route path="/service/telephony-as-a-service/" element={<TelephonyAsServices/>} />
        
      </Routes>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
