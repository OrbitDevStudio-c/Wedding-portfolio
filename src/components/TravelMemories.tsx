'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Compass, Award } from 'lucide-react';

const stamps = [
  { country: 'Switzerland', code: 'ZRH', date: '14.10.2025', shape: 'rounded' },
  { country: 'Japan', code: 'NRT', date: '22.04.2026', shape: 'oval' },
  { country: 'France', code: 'CDG', date: '08.06.2026', shape: 'square' },
];

export default function TravelMemories() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Memories
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Travel Memories
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Splitted stamps and routes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center">
          
          {/* Left Column: Passport stamps */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-serif text-2xl font-light text-white tracking-wider text-center lg:text-left">
              Passport Stamps
            </h3>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {stamps.map((stamp, idx) => (
                <motion.div
                  key={stamp.code}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 3 : -3 }}
                  className={`p-6 border border-pink/20 text-pink/80 flex flex-col items-center justify-center space-y-2 aspect-[4/3] w-36 relative overflow-hidden ${
                    stamp.shape === 'rounded' 
                      ? 'rounded-full' 
                      : stamp.shape === 'oval' 
                      ? 'rounded-[2rem]' 
                      : 'rounded-xl'
                  }`}
                >
                  {/* Subtle Stamp BG lines */}
                  <div className="absolute inset-2 border border-dashed border-pink/10 rounded-inherit" />
                  
                  <span className="text-[8px] uppercase tracking-widest text-pink/60 font-sans font-light">
                    {stamp.country}
                  </span>
                  <span className="font-serif text-2xl font-semibold tracking-widest">
                    {stamp.code}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-pink/60 font-sans font-light">
                    {stamp.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Flight paths visualizer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/5 space-y-6 relative"
          >
            <div className="flex justify-between items-center pb-3 border-b border-white/5">
              <span className="text-[9px] uppercase tracking-widest text-muted font-sans font-light flex items-center gap-1.5">
                <Compass size={12} className="text-pink animate-spin-slow" /> Flight Paths
              </span>
              <span className="text-[8px] uppercase tracking-widest text-pink font-sans font-light">AMD Departures</span>
            </div>

            {/* Flight routes SVG */}
            <div className="relative aspect-[2/1] w-full flex items-center justify-center my-4">
              <svg viewBox="0 0 400 200" className="w-full h-full text-pink/30 fill-none stroke-current">
                {/* Dashed flight lines */}
                <path
                  id="flightPath1"
                  d="M 50 150 Q 150 50, 320 80"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="stroke-pink/40"
                />
                <path
                  id="flightPath2"
                  d="M 50 150 Q 200 120, 250 140"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="stroke-purple/40"
                />

                {/* Flying planes path animations */}
                <circle cx="50" cy="150" r="4" fill="var(--primary-pink)" />
                <circle cx="320" cy="80" r="4" fill="var(--primary-pink)" />
                <circle cx="250" cy="140" r="4" fill="var(--secondary-purple)" />
              </svg>

              {/* Float Plane overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-pink/40 animate-pulse">
                <Plane size={16} className="rotate-45" />
              </div>
            </div>

            <div className="flex gap-6 justify-between text-[10px] font-sans font-light uppercase tracking-wider text-muted pt-2">
              <div>
                <p className="text-white font-medium">Route 01</p>
                <p>Ahmedabad (AMD) → Zurich (ZRH)</p>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">Route 02</p>
                <p>Ahmedabad (AMD) → Tokyo (NRT)</p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
