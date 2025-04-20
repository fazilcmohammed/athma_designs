import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import {packages} from "../assets/constant"
import { Link } from "react-router-dom";


const TravelPackages = () => {
  return (
    <section className="py-16 bg-gray-50" id="travel">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-corporate-navy mb-4">
            Travel Packages
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Combine your career move with unforgettable experiences
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              {/* Image Section */}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-48 w-full object-cover rounded-t-md"
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg sm:text-xl font-bold text-corporate-navy">
                    {pkg.title}
                  </CardTitle>
                  <Badge
                    variant="default"
                    className="bg-corporate-coral text-white"
                  >
                    {pkg.tag}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm sm:text-base">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{pkg.duration}</span>
                </div>
                {/* <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{pkg.location}</span>
                </div> */}
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{pkg.groupSize}</span>
                </div>
                <Badge variant="outline"
                    className="text-corporate-coral border-corporate-coral text-lg">
                  {pkg.price}
                </Badge>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-corporate-navy hover:bg-corporate-navy/90 text-white text-lg">
                <Link to="/booktravel">Book Now</Link>
                  
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-corporate-navy text-corporate-navy hover:bg-corporate-navy hover:text-white"
          >
            
            <Link to="/booktravel">View All Packages</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;
