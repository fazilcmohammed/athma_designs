import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import logo from '../assets/images/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-600">
        <img src={logo} alt="logo" className="w-24 md:w-36" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-black font-medium">
          <Link to="/about" className="hover:text-red-600">About us</Link>
          <Link to="/digital-solutions" className="hover:text-red-600">Digital Solutions</Link>
          <Link to="/cloud-service" className="hover:text-red-600">Cloud Service</Link>
          <Link to="/it-infrastructure" className="hover:text-red-600">IT Infra</Link>
          <Link to="/cybersecurity" className="hover:text-red-600">Cyber Security</Link>
          <Link to="/it-managed-service" className="hover:text-red-600">Managed Service</Link>
          {/* <Link to="/emassist" className="hover:text-red-600">emAssist</Link> */}
        </div>

        {/* WhatsApp Icon (Hidden on Small Screens) */}
        <a href="https://wa.me/7356568224" className="hidden md:block text-green-600 text-3xl">
          <FaWhatsapp />
        </a>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full py-4 px-6">
          <Link to="/about" className="block py-2 hover:text-red-600" onClick={() => setIsOpen(false)}>About us</Link>
          <Link to="/digital-solutions" className="block py-2 hover:text-red-600" onClick={() => setIsOpen(false)}>Digital Solutions</Link>
          <Link to="/cloud-service" className="block py-2 hover:text-red-600" onClick={() => setIsOpen(false)}>Cloud Service</Link>
          <Link to="/it-infrastructure" className="block py-2 hover:text-red-600" onClick={() => setIsOpen(false)}>IT Infra</Link>
          <Link to="/cybersecurity" className="block py-2 hover:text-red-600" onClick={() => setIsOpen(false)}>Cyber Security</Link>
          <Link to="/it-managed-service" className="block py-2 hover:text-red-600" onClick={() => setIsOpen(false)}>Managed Service</Link>
          {/* <Link to="/emassist" className="block py-2 hover:text-red-600" onClick={() => setIsOpen(false)}>emAssist</Link> */}

          {/* WhatsApp Icon */}
          <a href="https://wa.me/7356568224" className="block text-green-600 text-2xl mt-4">
            <FaWhatsapp />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
