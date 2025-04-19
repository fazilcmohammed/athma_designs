import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/skyworld_logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 md:px-20" ref={menuRef}>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="skyworld logo" className="w-36 md:w-48" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 font-semibold hover:text-corporate-navy">Home</Link>
            <Link to="/about" className="text-gray-600 font-semibold hover:text-corporate-navy">About</Link>
            <Link to="/contact" className="text-gray-600 font-semibold hover:text-corporate-navy">Contact</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-corporate-navy text-corporate-navy hover:bg-corporate-navy hover:text-white">
              <Link to="/applyjob">Post a Job</Link>
            </Button>
            <Button className="bg-corporate-coral hover:bg-corporate-coral/90 text-white">
              <Link to="/booktravel">Book Travel</Link>
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-12 w-12" /> : <Menu className="h-12 w-12" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-4 bg-white">
            <Link to="/" className="block text-gray-600 hover:text-corporate-navy" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block text-gray-600 hover:text-corporate-navy" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block text-gray-600 hover:text-corporate-navy" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Button variant="outline" className="w-full border-corporate-navy text-corporate-navy hover:bg-corporate-navy hover:text-white">
  <Link to="/applyjob" onClick={() => setMobileMenuOpen(false)}>Post a Job</Link>
</Button>
<Button className="w-full bg-corporate-coral hover:bg-corporate-coral/90 text-white">
  <Link to="/booktravel" onClick={() => setMobileMenuOpen(false)}>Book Travel</Link>
</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
