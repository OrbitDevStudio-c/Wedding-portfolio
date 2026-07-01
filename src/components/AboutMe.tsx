'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Countries Traveled' },
  { value: 'MBA', label: 'Intl Business Degree' },
  { value: 'F1', label: 'Formula 1 Fanatic' },
  { value: '4', label: 'Languages Spoken' },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-[#07111F] relative overflow-hidden">
      
      {/* Decorative Blur Background Blob */}
      <div className="absolute top-1/2 left-[20%] w-[450px] h-[450px] rounded-full bg-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-stretch relative z-10">
        
        {/* Left Column: Quote and Stats */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-pink font-light block">
              The Journey
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-white leading-tight">
              A Modern Story with <br />
              <span className="italic text-purple">Traditional Roots</span>
            </h2>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-pink to-purple" />
          </motion.div>

          {/* Luxury Quote Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 rounded-3xl border border-white/5 relative pl-12"
          >
            <Quote className="absolute top-6 left-6 w-5 h-5 text-pink/20 -scale-x-100" />
            <p className="font-serif italic text-lg md:text-xl text-white/95 font-light leading-relaxed">
              "I believe marriage is a partnership of equals, built on honesty, growth, and absolute friendship. I balance modern ambitions with a deep-seated love for family and traditions."
            </p>
          </motion.div>

          {/* Animated Statistics Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-pink/20 transition-all duration-300 group"
              >
                <p className="font-serif text-3xl md:text-4xl text-pink font-light tracking-wider group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.value}
                </p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-muted font-sans font-light mt-1.5">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Right Column: Portrait and Story details */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
          
          {/* Asymmetric portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl group border border-white/10"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/hero 2.png"
                alt="Alica Patel at Cafe"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            
            {/* Polaroid visual caption */}
            <div className="absolute top-6 right-6 p-2 px-3 rounded-lg bg-black/40 backdrop-blur-md border border-white/5 text-white flex items-center gap-1.5">
              <Sparkles size={10} className="text-pink" />
              <span className="text-[8px] uppercase tracking-[0.2em] font-sans font-light">Switzerland Dreamer</span>
            </div>
          </motion.div>

          {/* Quick story bullet points (Prioritise photography over text) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-sm text-muted font-sans font-light leading-relaxed"
          >
            <p>
              Growing up in a close-knit Gujarati family in Ahmedabad, I learned that respect, communication, and humor are the absolute anchors of life. I completed my MBA in International Business and currently consult luxury lifestyle brands on their digital strategies.
            </p>
            <p>
              Beyond the workspace, I’m an avid traveler, amateur photographer, and a passionate Formula 1 fan. I find joy in spontaneous road trips, sunset coffee chats, and designing clean digital spaces.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
