// Hero.jsx

import heroImg from "../assets/images/travel&career.webp";
import { Button } from "@/components/ui/button";

const Hero = ({ onBrowseJobs, onExplorePackages }) => {
  return (
    <div className="relative bg-corporate-navy text-white pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="container mx-auto p-10 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Your Journey to Success Starts Here
            </h1>
            <p className="text-base sm:text-lg text-gray-300">
              Find your dream job and explore the world with our premium travel packages.
              We combine career opportunities with unforgettable experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button
                size="lg"
                className="bg-corporate-coral hover:bg-corporate-coral/90 w-full sm:w-auto"
                onClick={onBrowseJobs}
              >
                Browse Jobs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-corporate-navy hover:bg-gray-200 hover:text-corporate-navy w-full sm:w-auto"
                onClick={onExplorePackages}
              >
                Explore Travel Packages
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImg}
              alt="Career and Travel"
              className="w-full max-w-md md:max-w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
