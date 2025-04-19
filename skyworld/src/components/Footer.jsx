import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/skyworld_logo.png";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-corporate-navy text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Grid Section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
  {/* Brand Info */}
  <div className="flex flex-col items-center sm:items-start">
    <Link to="/" className="flex items-center">
      <img src={logo} alt="skyworld logo" className="w-36 md:w-48 bg-white" />
    </Link>
    <p className="text-gray-300 text-sm sm:text-base mt-2">
      Your partner in career growth and travel adventures.
    </p>
  </div>

  {/* Quick Links */}
  <div className="flex flex-col items-center sm:items-start">
    <h4 className="font-semibold mb-4">Quick Links</h4>
    <ul className="space-y-2 text-sm sm:text-base">
      <li><Link to="/jobs" className="text-gray-300 hover:text-white">Jobs</Link></li>
      <li><Link to="/travel" className="text-gray-300 hover:text-white">Travel Packages</Link></li>
      <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
      <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
    </ul>
  </div>

  {/* Contact Info */}
  <div className="flex flex-col items-center sm:items-start">
    <h4 className="font-semibold mb-4">Contact Us</h4>
    <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
      <li>Nalanchira, Kottamukal, Trivandrum</li>
      <li>Phone: +91 944 600 4261</li>
      <li>Phone: +91 828 196 4261</li>
      <li>Phone: +91 999 582 3559</li>
      <li>Email: jbskyworld@gmail.com</li>
    </ul>
  </div>

  {/* Social Media */}
  <div className="flex flex-col items-center sm:items-start">
    <h4 className="font-semibold mb-4">Follow Us</h4>
    <div className="flex space-x-4 justify-center sm:justify-start">
      <Link to="https://www.facebook.com/people/Sky-World/61570420091875/" className="text-gray-300 hover:text-white">
        <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>
      <Link to="https://in.pinterest.com/skyworld4all/" className="text-gray-300 hover:text-white">
        <FaPinterest className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>
      <Link to="https://www.instagram.com/jb_skyworld_tours_and_travels/" className="text-gray-300 hover:text-white">
        <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>
    </div>
  </div>
</div>

        {/* Bottom Line */}
        <div className="border-t border-white mt-10 pt-6 text-center text-sm sm:text-base text-gray-300">
        <p>&copy; {new Date().getFullYear()} JB SkyWorld. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
