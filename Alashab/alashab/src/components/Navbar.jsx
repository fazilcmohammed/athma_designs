import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io"; // Import arrow icon
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-md px-6 md:px-20 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <Link to="/" className="hover:text-[#068f96]">
        <img src={logo} alt="Logo" className="w-14 md:w-[75px]" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-12 text-gray-800 text-sm font-medium items-center">
        <Link to="/" className="hover:text-[#068f96]" onClick={scrollToTop}>HOME</Link>
        <Link to="/about" className="hover:text-[#068f96]" onClick={scrollToTop}>ABOUT</Link>

        {/* Products Dropdown */}
        <div
          className="relative flex items-center cursor-pointer"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="hover:text-[#068f96] flex items-center space-x-1 focus:outline-none">
            <Link to="/products" className="hover:text-[#068f96]" onClick={scrollToTop}>PRODUCTS</Link>
            <IoIosArrowDown
              className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
            />
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-[270px] w-44 bg-white shadow-lg rounded-md border text-gray-700 z-50">
              <Link to="/products/india" onClick={scrollToTop} className="block px-4 py-2 hover:bg-gray-100">Indian</Link>
              <Link to="/products/china" onClick={scrollToTop} className="block px-4 py-2 hover:bg-gray-100">China</Link>
              <Link to="/products/srilanka" onClick={scrollToTop} className="block px-4 py-2 hover:bg-gray-100">Srilanka</Link>
              <Link to="/products/egypt" onClick={scrollToTop} className="block px-4 py-2 hover:bg-gray-100">Egypt</Link>
              <Link to="/products/spain" onClick={scrollToTop} className="block px-4 py-2 hover:bg-gray-100">Spain</Link>
              <Link to="/products/africa" onClick={scrollToTop} className="block px-4 py-2 hover:bg-gray-100">African</Link>
              <Link to="/products/morocco" onClick={scrollToTop} className="block px-4 py-2 hover:bg-gray-100">Morocco</Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="hover:text-[#068f96]" onClick={scrollToTop}>CONTACT</Link>
      </div>

      {/* Cart (Visible only on Large Screens) */}
      {/* <div className="hidden md:flex items-center space-x-2">
        <FaShoppingCart className="text-xl text-gray-700" />
        <span className="text-gray-700">[0]</span>
      </div> */}

      {/* Hamburger Button (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-[#00B3BC] text-white text-center py-10 flex flex-col space-y-6 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <Link to="/" className="hover:text-green-400" onClick={() => setIsOpen(false)}>HOME</Link>
        <Link to="/about" className="hover:text-green-400" onClick={() => setIsOpen(false)}>ABOUT</Link>

        {/* Products Dropdown (Mobile) */}
        <div className="relative flex flex-col justify-center">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-green-400 flex items-center justify-center space-x-1 focus:outline-none"
          >
            <Link to="/products" className="hover:text-[#068f96] text-center" onClick={() => {
              scrollToTop();
              // setIsOpen(false);
            }}
            >PRODUCTS</Link>
            <IoIosArrowDown
              className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
            />
          </button>
          {dropdownOpen && (
            <div className="mt-2 bg-[#00B3BC] text-white rounded-md">
              <Link to="/products/india" className="block px-4 py-2 hover:bg-green-400" onClick={() => {
                scrollToTop();
                setIsOpen(false);
              }}
              >Indian</Link>
              <Link to="/products/china" className="block px-4 py-2 hover:bg-green-400" onClick={() => {
                scrollToTop();
                setIsOpen(false);
              }}
              >China</Link>
              <Link to="/products/srilanka" className="block px-4 py-2 hover:bg-green-400" onClick={() => {
                scrollToTop();
                setIsOpen(false);
              }}
              >Srilanka</Link>
              <Link to="/products/egypt" className="block px-4 py-2 hover:bg-green-400" onClick={() => {
                scrollToTop();
                setIsOpen(false);
              }}
              >Egypt</Link>
              <Link to="/products/spain" className="block px-4 py-2 hover:bg-green-400" onClick={() => {
                scrollToTop();
                setIsOpen(false);
              }}
              >Spain</Link>
              <Link to="/products/africa" className="block px-4 py-2 hover:bg-green-400" onClick={() => {
                scrollToTop();
                setIsOpen(false);
              }}
              >African</Link>
              <Link to="/products/morocco" className="block px-4 py-2 hover:bg-green-400" onClick={() => {
                scrollToTop();
                setIsOpen(false);
              }}
              >Morocco</Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="hover:text-green-400" onClick={() => {
          scrollToTop();
          setIsOpen(false);
        }}
        >CONTACT</Link>

        {/* Cart (Mobile) */}
        <div className="flex items-center justify-center space-x-2 mt-4">
          <FaShoppingCart className="text-xl text-white" />
          <span className="text-white">[0]</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
