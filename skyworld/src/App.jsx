
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import JobForm from './components/JobForm';
import ApplyJob from './pages/ApplyJob';
import TravelBooking from './pages/TravelBooking';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/applyjob" element={<ApplyJob />} />
          <Route path="/booktravel" element={<TravelBooking />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
