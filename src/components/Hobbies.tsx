'use client';

import React from 'react';
import { motion } from 'framer-motion';

const hobbies = [
  { name: 'Traveling Abroad', emoji: '✈️', rotateVal: -2 },
  { name: 'Luxury Cars', emoji: '🏎️', rotateVal: 2 },
  { name: 'Photography', emoji: '📸', rotateVal: -3 },
  { name: 'Coffee Dates', emoji: '☕', rotateVal: 1 },
  { name: 'Fitness', emoji: '🧘', rotateVal: -2 },
  { name: 'Reading Books', emoji: '📚', rotateVal: 2 },
  { name: 'Cooking', emoji: '🍳', rotateVal: -1 },
  { name: 'Watching Formula 1', emoji: '🏁', rotateVal: 3 },
  { name: 'Beach Walks', emoji: '🏖️', rotateVal: -2 },
  { name: 'Music', emoji: '🎵', rotateVal: 2 },
  { name: 'Road Trips', emoji: '🚗', rotateVal: -1 },
  { name: 'Shopping', emoji: '🛍️', rotateVal: 2 },
  { name: 'Interior Design', emoji: '🏡', rotateVal: -3 },
  { name: 'Pets', emoji: '🐶', rotateVal: 2 },
  { name: 'Sunsets', emoji: '🌅', rotateVal: -1 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Hobbies() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Interests
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Hobbies & Passions
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Dynamic badge tags */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto"
        >
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                rotate: hobby.rotateVal,
                backgroundImage: 'linear-gradient(to right, rgba(248, 200, 220, 0.12), rgba(216, 180, 254, 0.12))',
                borderColor: 'rgba(248, 200, 220, 0.4)',
              }}
              className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 border border-white/5 cursor-pointer transition-colors duration-300 shadow-sm"
            >
              <span className="text-base">{hobby.emoji}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white font-sans font-light">
                {hobby.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
