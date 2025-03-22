import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16">
      {/* Heading Section */}
      <div className="text-center mb-5 md:mb-10">
        <p className="text-gray-900 font-bold">About</p>
        <h2 className="text-4xl md:text-5xl text-primaryBlue font-extrabold">
          TechPappa
        </h2>
      </div>

      {/* Content Section */}
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center xl:text-left">
          <p className="text-gray-700 leading-relaxed text-justify">
            At Tech Pappa, we are dedicated to revolutionizing the world of
            technology by providing innovative solutions that empower businesses
            and individuals. Our expertise spans across account technology,
            automation, cloud computing, AI-driven financial management, and
            secure digital transactions, ensuring that our clients stay ahead in
            an ever-evolving digital landscape.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed text-justify">
            With a commitment to efficiency, security, and innovation, Tech
            Pappa helps businesses streamline operations, optimize performance,
            and embrace the future of technology. Whether it’s automating
            financial processes, integrating advanced fintech solutions, or
            enhancing cybersecurity, we provide cutting-edge tools to drive
            success.
          </p>

          {/* Read More Button */}
          <div className="mt-6">
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-primaryBlue text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center xl:justify-end">
          <img
            src="https://plus.unsplash.com/premium_photo-1661310027237-8f4ed9ebc6ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
