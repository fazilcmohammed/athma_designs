import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../assets/images/Meditech-Logo-1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Main Navbar */}
      <nav className="bg-white shadow-md w-full">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
            <img src={logo} className="w-44" alt="Meditech Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-semibold">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/pages" className="text-gray-700 hover:text-blue-600">Pages</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Open & Close Animation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 text-lg font-semibold transition-all duration-500 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 50 }}
      >
        <button className="absolute top-6 right-6 text-gray-700" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>

        <Link to="/" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/pages" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Pages</Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/projects" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/blog" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Blog</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact Us</Link>
      </div>
    </header>
  );
};

export default Navbar;
