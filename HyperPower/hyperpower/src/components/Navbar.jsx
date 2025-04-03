import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Hypoz-logo_full.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white mx-auto px-6 md:px-20 py-4 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Hyperpower logo" className="w-[50%] md:w-[300px] " />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-semibold">
          <Link to="/" className="text-gray-700 hover:text-orange-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-orange-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-orange-600">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay (Fixed Position to Prevent Pushing Content) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Mobile Menu (Slide-in from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
          <X size={24} />
        </button>
        <div className="p-6 flex flex-col space-y-4 mt-10 font-semibold">
          <Link to="/" className="text-gray-700 hover:text-pink-500" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-pink-500" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-pink-500" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
