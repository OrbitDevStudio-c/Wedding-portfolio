'use client';

import React from 'react';
import { motion } from 'framer-motion';

const funFacts = [
  { text: 'Can spend hours planning travel itineraries and exploring remote destinations.', icon: '🗺️', rotate: -3 },
  { text: 'Never fails to stop and click a photo whenever there is a beautiful sunset.', icon: '🌅', rotate: 2 },
  { text: 'Has an absolute sweet tooth and never says no to premium Italian ice cream.', icon: '🍦', rotate: -1 },
  { text: 'Can identify almost any modern luxury or sports car instantly on the street.', icon: '🚗', rotate: 4 },
  { text: 'Loves taking long, quiet drives during rainy monsoon evenings.', icon: '🌧️', rotate: -2 },
];

export default function FunFacts() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Trivia
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Fun Facts About Me
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Polaroids Container */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto pt-6">
          {funFacts.map((fact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ scale: 1.06, rotate: 0, zIndex: 20 }}
              style={{ rotate: fact.rotate }}
              className="w-full sm:w-60 bg-white/[0.03] p-5 rounded-2xl border border-white/5 flex flex-col justify-between space-y-6 shadow-lg hover:shadow-[0_20px_40px_-20px_rgba(248,200,220,0.15)] transition-all duration-300 relative group"
            >
              {/* Semi-translucent Tape Effect */}
              <div 
                className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-14 h-4 bg-white/10 backdrop-blur-md border border-white/5 shadow-sm rounded-sm pointer-events-none"
                style={{ transform: 'translateX(-50%) rotate(-3deg)' }}
              />

              {/* Photo Area */}
              <div className="w-full aspect-[4/3] bg-pink/5 border border-white/5 rounded-xl flex items-center justify-center text-4xl shadow-inner relative overflow-hidden group-hover:bg-pink/10 transition-colors">
                <span>{fact.icon}</span>
              </div>

              {/* Caption note */}
              <p className="font-serif text-sm italic text-muted leading-relaxed font-light text-center px-2">
                "{fact.text}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
