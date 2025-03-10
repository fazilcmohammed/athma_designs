import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRefs = useRef({});

  const dropdowns = ["Digital Solutions", "Cloud Service", "Cyber Security", "IT Infra"];
  const dropdownLinks = {
    "Digital Solutions": ["Service 1", "Service 2", "Service 3"],
    "Cloud Service": ["Cloud 1", "Cloud 2", "Cloud 3"],
    "Cyber Security": ["Security 1", "Security 2", "Security 3"],
    "IT Infra": ["Infra 1", "Infra 2", "Infra 3"],
  };

  useEffect(() => {
    function handleClickOutside(event) {
      let isOutside = true;
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && ref.contains(event.target)) {
          isOutside = false;
        }
      });

      if (isOutside) {
        setDropdownOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setDropdownOpen(null);
    }
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          <img src={logo} alt="logo" className="w-24 md:w-36" />
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          {dropdowns.map((dropdown) => (
            <div
              className="relative"
              key={dropdown}
              ref={(el) => (dropdownRefs.current[dropdown] = el)}
            >
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === dropdown ? null : dropdown)
                }
                className="flex items-center hover:text-blue-600"
              >
                {dropdown}
                <motion.div animate={{ rotate: dropdownOpen === dropdown ? 180 : 0 }}>
                  <ChevronDown size={18} className="ml-1" />
                </motion.div>
              </button>
              {dropdownOpen === dropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2"
                >
                  {dropdownLinks[dropdown].map((item, index) => (
                    <Link
                      key={index}
                      to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setDropdownOpen(null);
                        setIsOpen(false);
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
          <Link to="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/yourwhatsapplink"
          className="hidden md:block text-green-500 text-xl"
        >
          📞
        </motion.a>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md py-4 px-4"
        >
          <Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link>
          {dropdowns.map((dropdown) => (
            <div key={dropdown} className="border-b">
              <button
                onClick={() => setDropdownOpen(dropdownOpen === dropdown ? null : dropdown)}
                className="flex justify-between w-full py-2"
              >
                {dropdown}
                <ChevronDown size={18} className={`ml-1 ${dropdownOpen === dropdown ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen === dropdown && (
                <div className="pl-4">
                  {dropdownLinks[dropdown].map((item, index) => (
                    <Link
                      key={index}
                      to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                      className="block py-2"
                      onClick={() => {
                        setDropdownOpen(null);
                        setIsOpen(false);
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/about" className="block py-2" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRefs = useRef({});

  const dropdowns = ["Digital Solutions", "Cloud Service", "Cyber Security", "IT Infra"];
  const dropdownLinks = {
    "Digital Solutions": ["Service 1", "Service 2", "Service 3"],
    "Cloud Service": ["Cloud 1", "Cloud 2", "Cloud 3"],
    "Cyber Security": ["Security 1", "Security 2", "Security 3"],
    "IT Infra": ["Infra 1", "Infra 2", "Infra 3"],
  };

  useEffect(() => {
    function handleClickOutside(event) {
      let isOutside = true;
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && ref.contains(event.target)) {
          isOutside = false;
        }
      });

      if (isOutside) {
        setDropdownOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setDropdownOpen(null);
    }
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          <img src={logo} alt="logo" className="w-24 md:w-36" />
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          {dropdowns.map((dropdown) => (
            <div
              className="relative"
              key={dropdown}
              ref={(el) => (dropdownRefs.current[dropdown] = el)}
            >
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === dropdown ? null : dropdown)
                }
                className="flex items-center hover:text-blue-600"
              >
                {dropdown}
                <motion.div animate={{ rotate: dropdownOpen === dropdown ? 180 : 0 }}>
                  <ChevronDown size={18} className="ml-1" />
                </motion.div>
              </button>
              {dropdownOpen === dropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2"
                >
                  {dropdownLinks[dropdown].map((item, index) => (
                    <Link
                      key={index}
                      to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setDropdownOpen(null);
                        setIsOpen(false);
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
          <Link to="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/yourwhatsapplink"
          className="hidden md:block text-green-500 text-xl"
        >
          📞
        </motion.a>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md py-4 px-4"
        >
          <Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link>
          {dropdowns.map((dropdown) => (
            <div key={dropdown} className="border-b">
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === dropdown ? null : dropdown)
                }
                className="flex justify-between w-full py-2"
              >
                {dropdown}
                <ChevronDown
                  size={18}
                  className={`ml-1 ${dropdownOpen === dropdown ? "rotate-180" : ""}`}
                />
              </button>
              {dropdownOpen === dropdown && (
                <div className="pl-4">
                  {dropdownLinks[dropdown].map((item, index) => (
                    <Link
                      key={index}
                      to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                      className="block py-2"
                      onClick={() => {
                        // Close the dropdown if it's already open
                        setDropdownOpen(null);
                        setIsOpen(false); // Close the nav menu
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/about" className="block py-2" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

