
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IndianProd from './pages/IndianProd';
import AllProducts from './pages/AllProducts';


function App() {

  return (
    <>
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/indian-fruits-vegetables" element={<IndianProd />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
