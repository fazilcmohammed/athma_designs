import { FaFacebookF, FaGoogle, FaPinterest, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import logo from '../assets/images/Meditech-Logo-1.png'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-blue-900 mt-32 relative text-white">
      {/* Newsletter Section */}
      <div className="bg-blue-600 py-14 w-[90%] mx-auto absolute -top-20 left-1/2 transform -translate-x-1/2 rounded-lg shadow-lg flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-4xl" />
          <h2 className="text-xl font-semibold">Latest Updates Subscribe To Our Newsletter</h2>
        </div>
        <div className="flex items-center gap-3 w-2/5">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 rounded-md w-full text-gray-800 focus:outline-none"
          />
          <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 pt-32 flex justify-between items-start md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="w-[20%]">
          {/* <h2 className="text-2xl font-bold">Medicate</h2> */}
          <Link to="/" ><img src={logo} alt="" className="bg-white w-full" /></Link>
          <p className="mt-2 text-sm">It helps designers plan out where the content will sit, the content to be written and approved.</p>
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

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Services</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="flex items-center gap-2 mt-2"><FaPhone /> +1800-001-658</p>
          <p className="flex items-center gap-2 mt-2"><FaEnvelope /> info@peacefulthemes.com</p>
          <p className="flex items-center gap-2 mt-2"><FaMapMarkerAlt /> Envato HQ, Los Angeles, USA</p>
        </div>
      </div>

      {/* Copyright */}
      <hr className="border-t border-gray-500 mt-10" />
      <div className="text-center py-5 border-t border-gray-700">
        <p>© 2023 Medicate. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
