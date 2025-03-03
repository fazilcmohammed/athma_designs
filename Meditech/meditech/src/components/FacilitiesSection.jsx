import { facilities, iconsMap } from "../assets/constant";

const FacilitiesSection = () => {
  return (
    <div className="py-16 bg-gray-100 text-center px-6 md:px-12 lg:px-20">
      {/* Subtitle */}
      <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-md uppercase">
        Facilities We Have
      </span>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
        What Facilities We Provided
      </h2>

      {/* Facilities Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {facilities.map((facility, index) => {
          const IconComponent = iconsMap[facility.icon]; // Get the corresponding icon

          return (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 group transition-transform duration-300 hover:shadow-lg">
              {/* Image with Zoom Effect */}
              <div className="overflow-hidden rounded-md">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="rounded-md w-full transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="mt-4 text-left">
                <p className="text-blue-500 text-sm font-semibold uppercase">
                  {facility.category}
                </p>

                {/* Title on Left & Icon on Right */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900">
                    {facility.title}
                  </h3>
                  {IconComponent && <IconComponent className="text-blue-500 text-2xl md:text-3xl" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FacilitiesSection;
