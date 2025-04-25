import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductList from './pages/ProductList'     
import ProductDetail from './pages/ProductDetail'   
import Cart from './pages/Cart'   
import Login from './pages/Login'
import Register from './pages/Register'
import ScrollToTop from './assets/scrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      </Routes>
      <Footer />

    </>
  )
}

export default App
