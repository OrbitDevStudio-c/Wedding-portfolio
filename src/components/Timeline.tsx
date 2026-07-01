"use strict";
"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaBuilding, FaPlane, FaHeart, FaStar, FaBaby } from "react-icons/fa";

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
  icon: any;
  category: string;
}

const events: TimelineEvent[] = [
  {
    year: "2004",
    title: "The Beginning",
    desc: "Born in Ahmedabad, India. Raised in a family that valued education, traditional values, and business excellence.",
    icon: FaBaby,
    category: "Personal",
  },
  {
    year: "2010 - 2020",
    title: "School Years",
    desc: "Academically excellent with a deep inclination toward fine arts, textile design, and classical music contests.",
    icon: FaAward,
    category: "Education",
  },
  {
    year: "2020 - 2024",
    title: "College & Couture Study",
    desc: "Pursued specialization in Couture Fashion Design & Model Management, laying the technical foundation for her brand.",
    icon: FaGraduationCap,
    category: "Education",
  },
  {
    year: "2024 - Present",
    title: "Founding Ravntra",
    desc: "Launched 'Ravntra' - a high-concept fashion house designing couture clothing for runway shows, modeling campaigns, and digital editorials.",
    icon: FaBuilding,
    category: "Career",
  },
  {
    year: "Ongoing",
    title: "European & Global Travel",
    desc: "Traveled across France, Greece, Maldives, Italy, and Bali to source fabrics, photograph architecture, and expand creative viewpoints.",
    icon: FaPlane,
    category: "Travel",
  },
  {
    year: "2026 & Beyond",
    title: "Matrimony & Marriage",
    desc: "Seeking to build a meaningful, supportive partnership centered on shared dreams, respect, and mutual family warmth.",
    icon: FaHeart,
    category: "Future",
  },
  {
    year: "The Future",
    title: "Shared Visions",
    desc: "Aiming to scale Ravntra globally while cultivating a beautiful, warm home filled with children, pets, travel maps, and laughter.",
    icon: FaStar,
    category: "Future",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FFF7FB] relative overflow-hidden select-text">
      {/* Background blurs */}
      <div className="absolute top-1/3 left-1/10 w-[300px] h-[300px] rounded-full bg-accent-purple/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-[350px] h-[350px] rounded-full bg-secondary/15 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-sans font-bold">Chronology</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-text-main mt-2">
            Alica's <span className="italic text-primary">Timeline</span>
          </h2>
          <p className="text-sm text-text-muted font-light mt-3 max-w-md mx-auto leading-relaxed">
            A linear map showing my education, entrepreneurial steps, adventures, and values for the future.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          {/* Vertical central glass column line */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-primary/10" />

          {/* Alternate Timeline items */}
          <div className="flex flex-col gap-12">
            {events.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={event.year}
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-between w-full relative ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Date marker node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFF7FB] border border-primary/30 flex items-center justify-center text-primary shadow-sm z-10 hover:border-primary hover:scale-110 transition-all duration-300">
                    <event.icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Empty space for grid mapping */}
                  <div className="hidden sm:block w-[45%]" />

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`ml-12 sm:ml-0 w-[85%] sm:w-[45%] p-6 rounded-3xl glass-card relative group hover-target border border-pink-200/20`}
                  >
                    {/* Tiny triangle pointer indicator */}
                    <div
                      className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white/45 border-t border-l border-pink-200/20 rotate-45 z-0 ${
                        isEven
                          ? "left-full -translate-x-1.5 border-t-transparent border-l-transparent border-b border-r"
                          : "right-full translate-x-1.5"
                      }`}
                    />

                    {/* Timeline Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-primary tracking-wider bg-primary/5 px-2.5 py-0.5 rounded-md">
                        {event.year}
                      </span>
                      <span className="text-[9px] tracking-widest text-text-muted uppercase font-bold">
                        {event.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-normal text-text-main group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-xs text-text-muted font-light mt-2 leading-relaxed">
                      {event.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
