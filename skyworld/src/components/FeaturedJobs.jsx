import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin } from "lucide-react";
import {jobListings} from '../assets/constant'
import { Link } from "react-router-dom";



const FeaturedJobs = () => {
  return (
    <section className="py-16" id="jobs">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-corporate-navy mb-4">
            Featured Job Opportunities
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Discover your next career move with top companies
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobListings.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl font-bold text-corporate-navy">
                  {job.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                  <Building2 className="h-4 w-4" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex flex-wrap">
                  {/* <Badge variant="secondary">{job.type}</Badge> */}
                  <Badge
                    variant="outline"
                    className="text-corporate-coral border-corporate-coral text-lg"
                  >
                    {job.salary}
                  </Badge><br />
                  
                </div>
                <p className="text-sm ">*Includes Visa & Tickets</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-corporate-navy hover:bg-corporate-navy/90">
                <Link to="/applyjob">Apply Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          {/* <Button
            variant="outline"
            className="border-corporate-navy text-corporate-navy hover:bg-corporate-navy hover:text-white"
          >
            View All Jobs
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
