'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Globe, Sparkles } from 'lucide-react';

interface Destination {
  name: string;
  coords: { x: number; y: number }; // percentage coords on container
  desc: string;
  highlight: string;
}

const destinations: Destination[] = [
  { name: 'Switzerland', coords: { x: 48, y: 35 }, desc: 'Exploring scenic train routes and hiking in the Swiss Alps.', highlight: 'Swiss Alps & Lakes' },
  { name: 'Japan', coords: { x: 80, y: 40 }, desc: 'Experiencing the blossom season in Kyoto and the neon streets of Tokyo.', highlight: 'Kyoto Temples & Tech' },
  { name: 'Canada', coords: { x: 22, y: 32 }, desc: 'Witnessing the turquoise waters of Lake Louise and wild pine forest cabins.', highlight: 'Banff National Park' },
  { name: 'Europe', coords: { x: 49, y: 30 }, desc: 'Chasing art history in Florence, cafes in Paris, and architecture in Milan.', highlight: 'Art, Architecture & Fashion' },
  { name: 'Maldives', coords: { x: 65, y: 60 }, desc: 'Unwinding in overwater bungalows and sailing on private yachts during sunset.', highlight: 'Overwater Bungalows' },
  { name: 'Dubai', coords: { x: 58, y: 46 }, desc: 'Staying at desert luxury resorts and experiencing modern architecture marvels.', highlight: 'Luxury Desert Retreats' },
];

export default function DreamDestinations() {
  const [hoveredDest, setHoveredDest] = useState<Destination | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Wanderlust
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Dream Destinations
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Schematic Map Card */}
        <div className="glass-panel p-8 rounded-[2.5rem] border border-white/5 max-w-4xl mx-auto relative min-h-[450px] flex flex-col justify-between overflow-hidden bg-white/[0.01]">
          
          {/* Subtle grid in background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          <div className="flex justify-between items-center text-xs tracking-widest text-muted relative z-10">
            <span className="uppercase flex items-center gap-1.5 font-sans font-light">
              <Globe size={14} className="text-pink animate-spin-slow" /> Interactive Map
            </span>
            <span className="text-[9px] uppercase font-sans font-light text-pink">Hover Pins to Explore</span>
          </div>

          {/* Stylized world SVG or map projection */}
          <div className="relative w-full aspect-[2/1] my-8 flex items-center justify-center">
            {/* Soft background glow where map is */}
            <div className="absolute w-[80%] h-[70%] rounded-full bg-pink/5 blur-3xl pointer-events-none" />
            
            {/* Schematic SVG world map outline */}
            <svg viewBox="0 0 1000 500" className="w-full h-full opacity-35 text-pink fill-current stroke-pink/30 stroke-[1.5] pointer-events-none">
              {/* North America */}
              <path d="M 80,120 L 140,100 L 220,120 L 200,180 L 150,200 L 120,170 L 100,180 L 80,120 Z" />
              {/* South America */}
              <path d="M 170,240 L 210,230 L 240,260 L 210,360 L 190,360 L 160,270 L 170,240 Z" />
              {/* Greenland */}
              <path d="M 240,70 L 280,60 L 260,100 L 230,90 L 240,70 Z" />
              {/* Africa */}
              <path d="M 440,210 L 510,200 L 540,240 L 530,280 L 490,340 L 460,340 L 440,260 L 440,210 Z" />
              {/* Europe */}
              <path d="M 420,120 L 480,110 L 500,150 L 460,190 L 410,160 L 420,120 Z" />
              {/* Asia */}
              <path d="M 500,120 L 750,90 L 850,130 L 830,240 L 760,260 L 680,280 L 640,230 L 520,200 L 500,150 L 500,120 Z" />
              {/* India */}
              <path d="M 600,210 L 620,210 L 630,240 L 610,260 L 600,210 Z" />
              {/* Australia */}
              <path d="M 760,310 L 830,300 L 850,350 L 810,380 L 760,350 L 760,310 Z" />
            </svg>

            {/* Glowing Hotspot Pins */}
            {destinations.map((d) => {
              const isHovered = hoveredDest?.name === d.name;
              return (
                <div
                  key={d.name}
                  className="absolute"
                  style={{ left: `${d.coords.x}%`, top: `${d.coords.y}%` }}
                >
                  <button
                    onMouseEnter={() => setHoveredDest(d)}
                    onMouseLeave={() => setHoveredDest(null)}
                    className="relative flex items-center justify-center p-2 focus:outline-none interactive-cursor group"
                    aria-label={d.name}
                  >
                    <motion.div
                      animate={{ scale: isHovered ? 1.3 : [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border ${
                        isHovered 
                          ? 'bg-pink border-pink shadow-[0_0_12px_var(--primary-pink)]' 
                          : 'bg-[#07111F] border-pink/60 shadow-[0_0_6px_rgba(248,200,220,0.3)]'
                      }`}
                    >
                      <MapPin size={8} className="text-white dark:text-black" />
                    </motion.div>
                    
                    {/* Ring animation */}
                    <span className="absolute inset-0 rounded-full border border-pink/30 animate-ping opacity-60 pointer-events-none" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Interactive display board */}
          <div className="relative z-10 min-h-[90px] border-t border-white/5 pt-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {hoveredDest ? (
                <motion.div
                  key={hoveredDest.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center space-y-2 max-w-md"
                >
                  <div className="flex items-center gap-1.5 justify-center">
                    <Sparkles size={12} className="text-pink" />
                    <span className="font-serif text-lg tracking-wider text-white font-light">
                      {hoveredDest.name} — <span className="italic text-purple">{hoveredDest.highlight}</span>
                    </span>
                  </div>
                  <p className="text-xs text-muted font-sans font-light leading-relaxed">
                    {hoveredDest.desc}
                  </p>
                </motion.div>
              ) : (
                <motion.p
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  className="text-xs italic text-muted font-sans font-light text-center"
                >
                  Discover Alica's dream travel partners & bucket-list locations.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
