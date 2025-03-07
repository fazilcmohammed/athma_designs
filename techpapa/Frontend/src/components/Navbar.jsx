import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { menuItems } from "../assets/constant";
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 py-4 shadow-md bg-white z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-red-600"><img src={logo} alt="logo" className="w-24 md:w-36"/></div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-2xl cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setMenuOpen(false)}></div>}

      {/* Desktop & Mobile Menu */}
      <ul className={`md:flex absolute md:static bg-white w-full md:w-auto left-0 top-16 md:top-auto p-6 md:p-0 md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0 transition-transform duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      } z-50 shadow-lg md:shadow-none`}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative group"
            onMouseEnter={() => setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="text-black font-medium flex items-center gap-1 w-full"
              onClick={() => setMobileDropdown(mobileDropdown === index ? null : index)}
            >
              {item.name} {item.dropdown && <span>&#9662;</span>}
            </button>

            {/* Desktop Dropdown */}
            {item.dropdown && openDropdown === index && (
              <div 
                className="absolute left-0 mt-2 w-64 bg-white border rounded-md shadow-lg p-4 hidden md:block"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <ul>
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mobile Dropdown */}
            {item.dropdown && mobileDropdown === index && (
              <ul className="mt-2 w-full bg-gray-100 md:hidden">
                {item.dropdown.map((subItem, subIndex) => (
                  <li key={subIndex} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* WhatsApp Icon */}
      <a href="https://wa.me/7356568224" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-2xl text-gray-600 cursor-pointer hidden md:block" /></a>
    </nav>
  );
};

export default Navbar;
