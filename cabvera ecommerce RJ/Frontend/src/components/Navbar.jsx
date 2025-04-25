import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/cabvera-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems] = useState(5); // Replace with actual cart state
  const [searchQuery, setSearchQuery] = useState("");
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("username");
    setUsername(null);
    navigate("/login");
  };

  return (
    <nav className="bg-white p-2 md:p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
            <FaBars />
          </button>
          <Link to="/" className="text-xl font-bold">
            <img src={logo} alt="E-commerce Logo" className="w-28" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch />
            </button>
          </form>

          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-6">
          {username ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Welcome, {username}</span>
              <button
                onClick={handleLogout}
                className="text-sm text-red-600 font-medium hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/register" className="text-2xl hover:text-blue-600 transition">
              <FaUser />
            </Link>
          )}
          <Link to="/cart" className="relative text-2xl hover:text-blue-600 transition">
            <FaShoppingCart />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Cart Icon */}
        <Link to="/cart" className="md:hidden text-2xl relative">
          <FaShoppingCart />
          {cartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-3xl">
          <FaTimes />
        </button>

        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="E-commerce Logo" className="w-32 mb-8" />
        </Link>

        <form onSubmit={handleSearch} className="relative w-3/4 mb-8">
          <input
            type="text"
            placeholder="Search products..."
            className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch />
          </button>
        </form>

        <ul className="text-xl space-y-6 font-medium text-center">
          <li><Link to="/" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/shop" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Shop</Link></li>
          <li><Link to="/categories" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Categories</Link></li>
          <li><Link to="/deals" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Hot Deals</Link></li>
          <li><Link to="/account" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>My Account</Link></li>
        </ul>

        <Link to="/cart" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition mt-8 flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <FaShoppingCart />
          <span>Cart ({cartItems})</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
