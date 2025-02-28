import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 md:px-20 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      {/* <div className="text-2xl font-bold text-green-600">VEGEFOODS</div> */}
      <img src={logo} alt="" className="w-20"/> 

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-semibold">
        <Link to="/" className="hover:text-green-500">HOME</Link>
        <Link to="/about" className="hover:text-green-500">ABOUT</Link>
        <Link to="/contact" className="hover:text-green-500">CONTACT</Link>
      </div>

      {/* Cart (Visible only on Large Screens) */}
      <div className="hidden md:flex items-center space-x-2">
        <FaShoppingCart className="text-xl text-gray-700" />
        <span className="text-gray-700">[0]</span>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
      </button>

      {/* Mobile Menu (Cart moved inside on small screens) */}
      <div
        className={`absolute top-16 left-0 w-full bg-black text-white text-center py-5 flex flex-col space-y-4 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Link to="/" className="hover:text-green-400" onClick={() => setIsOpen(false)}>HOME</Link>
        <Link to="/about" className="hover:text-green-400" onClick={() => setIsOpen(false)}>ABOUT</Link>
        <Link to="/contact" className="hover:text-green-400" onClick={() => setIsOpen(false)}>CONTACT</Link>

        {/* Cart (Only Visible on Mobile) */}
        <div className="flex items-center justify-center space-x-2 mt-4">
          <FaShoppingCart className="text-xl text-white" />
          <span className="text-white">[0]</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
