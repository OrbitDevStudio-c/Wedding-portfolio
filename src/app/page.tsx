"use strict";
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const CinematicQuote = dynamic(() => import("@/components/CinematicQuote"), { ssr: false });
const AboutAndProfile = dynamic(() => import("@/components/AboutAndProfile"), { ssr: false });
const PersonalityAndHobbies = dynamic(() => import("@/components/PersonalityAndHobbies"), { ssr: false });
const DreamGarage = dynamic(() => import("@/components/DreamGarage"), { ssr: false });
const WorldTravel = dynamic(() => import("@/components/WorldTravel"), { ssr: false });
const TravelMemories = dynamic(() => import("@/components/TravelMemories"), { ssr: false });
const Timeline = dynamic(() => import("@/components/Timeline"), { ssr: false });
const RelationshipValues = dynamic(() => import("@/components/RelationshipValues"), { ssr: false });
const CompatibilityQuiz = dynamic(() => import("@/components/CompatibilityQuiz"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Luxury Loading Screen */}
      <Loader onComplete={() => setIsLoading(false)} />

      {/* Main Website Content */}
      {!isLoading && (
        <div className="flex flex-col min-h-screen relative">
          {/* Ambient Glows scattered globally across sections */}
          <div className="absolute top-[10%] left-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
          <div className="absolute top-[35%] right-0 w-[600px] h-[600px] rounded-full bg-accent-purple/5 blur-[140px] pointer-events-none" />
          <div className="absolute top-[65%] left-0 w-[550px] h-[550px] rounded-full bg-accent-blue/5 blur-[130px] pointer-events-none" />
          <div className="absolute top-[85%] right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

          {/* Floating Glass Navigation */}
          <Navbar />

          <main className="flex-grow">
            {/* Sections */}
            <Hero />
            <CinematicQuote />
            <AboutAndProfile />
            <PersonalityAndHobbies />
            <DreamGarage />
            <WorldTravel />
            <TravelMemories />
            <Timeline />
            <RelationshipValues />
            <CompatibilityQuiz />
            <Contact />
          </main>

          {/* Minimalist Luxury Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
