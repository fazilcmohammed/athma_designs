import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo - Always Visible */}
        <Link to="/" className="block">
          <img src={logo} alt="logo" className="w-24 md:w-32" />
        </Link>

        {/* Desktop Navigation - Only on Large Screens */}
        <div className="hidden xl:flex space-x-6 text-black font-medium text-sm items-center">
          <Link to="/about" className="hover:text-[#079DDA]">About us</Link>
          <Link to="/digital-solutions" className="hover:text-[#079DDA]">Digital Solutions</Link>
          <Link to="/cloud-service" className="hover:text-[#079DDA]">Cloud Service</Link>
          <Link to="/it-infrastructure" className="hover:text-[#079DDA]">IT Infra</Link>
          <Link to="/cyber-security" className="hover:text-[#079DDA]">Cyber Security</Link>
          <Link to="/it-managed-service" className="hover:text-[#079DDA]">Managed Service</Link>
        </div>

        {/* Contact & Phone - Only on Large Screens */}
        <div className="hidden xl:flex items-center">
          <div className="bg-gray-300 w-0.5 h-5 mr-5"></div>
          <div className="group flex flex-col">
            {/* Call Us with Arrow Animation */}
            <a href="tel:+9876543210" className="text-primaryBlue font-medium text-sm flex items-center gap-1">
              Call Us
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Phone Number Below */}
            <h3 className="text-sm font-medium">+91 987 654 3210</h3>
          </div>
          <div className="bg-gray-300 w-0.5 h-5 mx-5"></div>
          <Link to="/contact" className="bg-primaryBlue text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-blue-700">Contact Us</Link>
        </div>

        {/* Mobile: Contact Button & Menu Icon */}
        <div className="xl:hidden flex items-center gap-4">
          <Link to="/contact" className="bg-primaryBlue text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm">Contact</Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white text-sm shadow-md absolute top-full left-0 w-full py-4 px-6 text-center flex flex-col gap-4">
          <Link to="/about" className="py-2 hover:text-[#079DDA] xl:text-center" onClick={() => setIsOpen(false)}>About us</Link>
          <Link to="/digital-solutions" className="py-2 hover:text-[#079DDA]" onClick={() => setIsOpen(false)}>Digital Solutions</Link>
          <Link to="/cloud-service" className="py-2 hover:text-[#079DDA]" onClick={() => setIsOpen(false)}>Cloud Service</Link>
          <Link to="/it-infrastructure" className="py-2 hover:text-[#079DDA]" onClick={() => setIsOpen(false)}>IT Infra</Link>
          <Link to="/cyber-security" className="py-2 hover:text-[#079DDA]" onClick={() => setIsOpen(false)}>Cyber Security</Link>
          <Link to="/it-managed-service" className="py-2 hover:text-[#079DDA]" onClick={() => setIsOpen(false)}>Managed Service</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
