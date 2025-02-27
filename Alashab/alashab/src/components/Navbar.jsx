import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-600">VEGEFOODS</div>

      {/* Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-semibold">
        <Link to="/" className="hover:text-green-500">HOME</Link>
        <Link to="/about" className="hover:text-green-500">ABOUT</Link>
        <Link to="/contact" className="hover:text-green-500">CONTACT</Link>
      </div>

      {/* Cart Icon */}
      <div className="flex items-center space-x-2">
        <FaShoppingCart className="text-xl text-gray-700" />
        <span className="text-gray-700">[0]</span>
      </div>
    </nav>
  );
};

export default Navbar;
