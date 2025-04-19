import { Building, Users, Trophy } from "lucide-react";
import aboutImg from "../assets/images/aboutImg.webp"
import AboutServices from "@/components/AboutServices";
import TripSteps from "@/components/TripSteps";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-corporate-navy">
            About JB Sky World
          </h1>

          {/* Text + Image Section */}
          <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
            <div className="flex flex-col items-center md:items-start justify-center">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-justify">
                Your Journey to Success Starts Here
              </h2>
              <p className="text-gray-600 mb-4 text-sm sm:text-base text-justify">
              At JB SkyWorld, we believe that career growth and life-changing experiences go hand in hand. We've empowered thousands of professionals to not only secure their dream jobs but also embark on unforgettable journeys around the world.
              </p>
              <p className="text-gray-600 text-sm sm:text-base text-justify">
              What sets us apart is our unique blend of traditional recruitment services and curated travel experiences. We don't just match people with opportunities — we help them discover new cultures, expand their global perspectives, and grow both professionally and personally. Whether you're a recent graduate seeking your first big break or a seasoned professional looking for a change of pace, JB SkyWorld is your trusted partner in navigating the next chapter of your career — with a passport in hand.


              </p>
              <button className="bg-corporate-navy mt-6 hover:bg-corporate-navy/90 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition">
                        <Link to="/booktravel">LET’S PLAN YOUR TRIP</Link>
                      </button>
            </div>
            <div>
              <img
                src={aboutImg}
                alt="About SkyWorld"
                className="rounded-lg shadow-xl w-full max-w-full"
              />
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mb-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Building className="w-10 h-10 sm:w-12 sm:h-12 text-corporate-coral mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Global Presence</h3>
              <p className="text-gray-600 text-sm sm:text-base ">
                Operating in over 30 countries with trusted partnerships worldwide
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-corporate-coral mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Dedicated recruiters and travel specialists with years of experience
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-corporate-coral mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Success Rate</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                95% client satisfaction with successful placements and trips
              </p>
            </div>
          </div>

          <TripSteps/>
        </div>
      </div>
    </div>
  );
};

export default About;
