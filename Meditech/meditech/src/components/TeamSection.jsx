import { teamMembers } from "../assets/constant";

const TeamSection = () => {
  return (
    <div className="py-16 text-center px-6 md:px-12 lg:px-20">
      {/* Subtitle */}
      <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-md uppercase">
        Our Team
      </span>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
        Meet Our Heart Specialists
      </h2>

      {/* Team Members Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative flex flex-col items-center group">
            {/* Image Box with Zoom-In Effect */}
            <div className="bg-white shadow-lg rounded-lg w-full max-w-[320px] h-[350px] sm:h-[380px] overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Name Box - Half Inside, Half Outside */}
            <div className="absolute top-[85%] sm:top-[80%] bg-white shadow-md w-[85%] max-w-[280px] h-[100px] flex flex-col justify-center text-center rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm font-semibold uppercase text-blue-600">
                {member.specialty}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
