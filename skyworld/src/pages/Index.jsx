import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedJobs from '../components/FeaturedJobs'
import TravelPackages from '@/components/TravelPackages'

const Index = () => {
  const jobsRef = useRef(null);
  const travelRef = useRef(null);

  const scrollToJobs = () => {
    jobsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTravel = () => {
    travelRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero onBrowseJobs={scrollToJobs} onExplorePackages={scrollToTravel} />

      <div ref={jobsRef}>
        <FeaturedJobs />
      </div>

      <div ref={travelRef}>
        <TravelPackages />
      </div>
    </div>
  )
}

export default Index
