import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaGoogle, FaInstagram, FaPinterest } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-blue-900 text-white text-sm py-2 px-6 flex justify-between items-center">
      {/* Left Side - Contact Info */}
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <FaPhoneAlt className="text-xs" />
          +1800-001-658
        </span>
        <span className="flex items-center gap-2">
          <FaEnvelope className="text-xs" />
          info@peacefulthemes.com
        </span>
      </div>

      {/* Right Side - Social Icons */}
      <div className="flex items-center gap-4">
        <div className="w-px h-6 bg-white/40"></div> {/* Divider */}

        {/* Social Media Icons with Hover Effect */}
        <div className="flex gap-2">
          <div className="p-2 bg-white/10 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="p-2 bg-white/10 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer">
            <FaGoogle />
          </div>
          <div className="p-2 bg-white/10 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer">
            <FaInstagram />
          </div>
          <div className="p-2 bg-white/10 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer">
            <FaPinterest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
