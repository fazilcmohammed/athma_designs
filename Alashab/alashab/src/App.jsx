
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IndianProd from './pages/IndianProd';
import AllProducts from './pages/AllProducts';
import { ToastContainer, toast } from 'react-toastify';
import CountryProducts from './components/CountryProducts';
import { productsByCountry } from './assets/constant';
import SrilankanProd from './pages/SrilankanProd';
import ChineseProd from './pages/ChineseProd';
import EgyptProd from './pages/EgyptProd';
import SpanishProd from './pages/SpanishProd';
import AficanProd from './pages/AficanProd';
import MorroccoProd from './pages/MorroccoProd';


function App() {

  return (
    <>
      <Router>
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/indian-fruits-vegetables" element={<IndianProd />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/india" element={<IndianProd products={productsByCountry} />} />
        <Route path="/products/srilanka" element={<SrilankanProd products={productsByCountry} />} />
        <Route path="/products/china" element={<ChineseProd products={productsByCountry} />} />
        <Route path="/products/egypt" element={<EgyptProd products={productsByCountry} />} />
        <Route path="/products/spain" element={<SpanishProd products={productsByCountry} />} />
        <Route path="/products/africa" element={<AficanProd products={productsByCountry} />} />
        <Route path="/products/morocco" element={<MorroccoProd products={productsByCountry} />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
