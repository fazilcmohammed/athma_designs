import homeimg from '../assets/images/home image.jpg';

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center md:justify-start bg-cover bg-center px-6 sm:px-12"
      style={{ backgroundImage: `url(${homeimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl text-center md:text-left">
        <span className="bg-blue-500 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-md">
          PASSION FOR CARING
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight">
          Genuine Commitment <br /> To Your Health
        </h1>
        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          It is a long established fact that a reader will be distracted by the readable content
          of a page when looking at its layout.
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 mx-auto md:mx-0">
          READ MORE <span className="text-lg">+</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
