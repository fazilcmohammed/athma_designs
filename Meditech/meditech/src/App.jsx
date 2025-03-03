import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
