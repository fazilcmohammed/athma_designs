import { FaFacebookF, FaGoogle, FaPinterest, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import logo from '../assets/images/Meditech-Logo-1.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 mt-32 relative text-white">
      {/* Newsletter Section */}
      <div className="bg-blue-600 py-8 px-4 w-[95%] md:w-[90%] mx-auto md:h-40 absolute -top-20 left-1/2 transform -translate-x-1/2 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-3xl md:text-4xl" />
          <h2 className="text-base md:text-lg lg:text-xl font-semibold">
            Subscribe To Our Newsletter
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-2/3">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 rounded-md w-full text-gray-800 focus:outline-none"
          />
          <button className="bg-white text-blue-600 px-5 py-2 rounded-md font-semibold hover:bg-gray-100">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 pt-40 pb-10 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo & Description */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/">
            <img src={logo} alt="Meditech Logo" className="bg-white w-28 md:w-32" />
          </Link>
          <p className="mt-3 text-sm max-w-xs">
            Helping designers plan content placement for better approval and readability.
          </p>
          <div className="flex gap-3 mt-4">
            <button className="p-2 bg-blue-700 rounded hover:bg-blue-600">
              <FaFacebookF />
            </button>
            <button className="p-2 bg-blue-700 rounded hover:bg-blue-600">
              <FaGoogle />
            </button>
            <button className="p-2 bg-blue-700 rounded hover:bg-blue-600">
              <FaPinterest />
            </button>
          </div>
        </div>

        {/* Quick Links - Centered */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-center">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Services</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info - Right Aligned (Mobile Friendly) */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="flex items-center gap-2 mt-2">
            <FaPhone /> +1800-001-658
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope /> info@meditech.com
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaMapMarkerAlt /> Envato HQ, Los Angeles, USA
          </p>
        </div>
      </div>

      {/* Copyright */}
      <hr className="border-t border-gray-500 mx-6" />
      <div className="text-center py-5">
        <p>© 2023 Meditech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
