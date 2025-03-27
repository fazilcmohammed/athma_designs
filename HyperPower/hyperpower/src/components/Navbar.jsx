import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Hypoz-logo_full.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white max-w-[1200px] mx-auto ">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <img src={logo} alt="hyperpower logo" className="w-[30%]" />
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-red-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-red-600">
            About
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-red-600">
            Products
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-600">
            Contact
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white p-4 space-y-2 shadow-md">
          <Link to="/" className="block text-gray-700 hover:text-pink-500">
            Home
          </Link>
          <Link to="/pages" className="block text-gray-700 hover:text-pink-500">
            Pages
          </Link>
          <Link to="/products" className="block text-gray-700 hover:text-pink-500">
            Products
          </Link>
          <Link to="/blog" className="block text-gray-700 hover:text-pink-500">
            Blog
          </Link>
          <Link to="/shop" className="block text-gray-700 hover:text-pink-500">
            Shop
          </Link>
          <Link to="/contact" className="block text-gray-700 hover:text-pink-500">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
