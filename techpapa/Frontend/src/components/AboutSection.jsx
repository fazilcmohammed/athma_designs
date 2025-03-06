import { FaShieldAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-4xl sm:text-4xl md:text-5xl text-center md:text-left font-extrabold mb-4">
          Modern Technology <br /> Solutions Company
        </h2>
        <p className="text-red-600 font-semibold text-center md:text-left uppercase py-1 md:py-3">
          // Serving Your Technology Needs Since 1993
        </p>
        <p className="text-gray-700 mt-4 text-center md:text-left leading-relaxed">
          In a world that moves faster every day, we need to be constantly evolving.
          That’s where we come in. <strong>We are a Modern Technology Solutions & Integrated Service Management Organization</strong> 
          that uses technology to solve complex business challenges and deliver exceptional value to our clients.
        </p>
        <p className="text-gray-700 mt-4 text-center md:text-left leading-relaxed">
          <strong>Our Commitment to Customers</strong> is what makes us unique. We strive to 
          build a reputable organization and a desirable place to work. Our impact 
          extends through innovation, collective efforts, and the smart use of technology.
        </p>

        {/* Icons Section */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-6 mt-8">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-red-600 text-2xl" />
            <p className="text-gray-800 font-semibold">Technology Partner You Can Trust</p>
          </div>
          <div className="flex items-center gap-2">
            <MdVerified className="text-red-600 text-2xl" />
            <p className="text-gray-800 font-semibold">ISO 20000-1:2018 Certified</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative flex justify-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1661310027237-8f4ed9ebc6ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Team"
          className="w-full sm:w-[80%] md:w-[90%] h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutSection;
