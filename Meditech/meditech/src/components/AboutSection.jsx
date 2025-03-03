import aboutImage from "../assets/images/about-img-1.jpg";
import { FaCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-12 lg:px-20 py-16">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <img src={aboutImage} alt="Doctor talking to patient" className="rounded-lg shadow-md w-full h-auto" />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* Small Label */}
        <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
          WHAT ABOUT US
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
          The Heart And Science Of Medic Test
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          It is a long established fact that a reader will be distracted by its layout. Lorem Ipsum 
          is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Bullet Points */}
        <ul className="mt-6 space-y-3">
          {[
            "Comprehensive Inpatient Services",
            "Medical And Surgical Services",
            "Outpatient Services",
            "Medicine & instrument",
            "Specialised Support Service",
            "Instant Operation & Appointment"
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700 justify-center md:justify-start">
              <FaCheckCircle className="text-blue-500" /> {item}
            </li>
          ))}
        </ul>

        {/* Read More Button */}
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 mx-auto md:mx-0">
          READ MORE <span className="text-lg">+</span>
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
