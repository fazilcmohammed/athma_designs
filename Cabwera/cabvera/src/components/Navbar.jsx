import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/cabvera-logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold">
          <img src={logo} alt="Cabvera Logo" className="w-28" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {/* <li><a href="/" className="hover:text-gray-500">Home</a></li> */}
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          {/* <li><a href="/about" className="hover:text-gray-500">About</a></li> */}
          <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
          {/* <li><a href="/contact" className="hover:text-gray-500">Contact Us</a></li> */}
          <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
        </ul>

        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-3xl">
          <FaTimes />
        </button>

        <ul className="text-lg space-y-6 font-medium text-center">
          <li><a href="/" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/about" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>About Us</a></li>
          <li><a href="/contact" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Contact Us</a></li>
        </ul>

        {/* Cart Button (Now below links) */}
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-400 mt-4">
          Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
