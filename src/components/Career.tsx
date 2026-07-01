'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Landmark, Sparkles, Plane } from 'lucide-react';

const skills = ['Brand Consultancy', 'Digital Acquisitions', 'Campaign Strategy', 'Media Planning'];

export default function Career() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Career Paths
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Professional Direction
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Timeline Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-4 md:left-1/2 top-0 w-[1px] bg-gradient-to-b from-pink via-purple to-blue -translate-x-1/2"
          />

          <div className="space-y-16">
            
            {/* Step 1: Current Profession */}
            <div className="flex flex-col md:flex-row relative items-start md:items-center">
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#07111F] border-2 border-pink -translate-x-1/2 z-10 shadow-[0_0_8px_rgba(248,200,220,0.5)]" />
              
              <div className="w-full md:w-1/2 pl-10 md:pl-0 md:pr-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="glass-panel p-8 rounded-3xl border border-white/5 space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-pink/10 border border-pink/20 flex items-center justify-center text-pink">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-muted">Current Role</p>
                      <h3 className="font-serif text-lg font-light text-white mt-0.5">Digital Marketing Strategist</h3>
                    </div>
                  </div>

                  <p className="text-xs text-muted leading-relaxed font-sans font-light">
                    Spearheading brand positioning campaigns and executing performance marketing operations for startup and mid-market consumer product clients.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-white text-[8px] uppercase tracking-wider font-sans font-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="hidden md:block w-1/2" />
            </div>

            {/* Step 2: Future Goal */}
            <div className="flex flex-col md:flex-row relative items-start md:items-center">
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#07111F] border-2 border-purple -translate-x-1/2 z-10 shadow-[0_0_8px_rgba(216,180,254,0.5)]" />
              
              <div className="hidden md:block w-1/2" />
              
              <div className="w-full md:w-1/2 pl-10 md:pl-10">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="glass-panel p-8 rounded-3xl border border-white/5 space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple/10 border border-purple/20 flex items-center justify-center text-purple">
                      <Landmark size={16} />
                    </div>
                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-muted">Future Objective</p>
                      <h3 className="font-serif text-lg font-light text-white mt-0.5">Launch Global Creative Agency</h3>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-muted font-sans font-light">
                    <div className="flex gap-3">
                      <Sparkles size={12} className="text-pink mt-0.5 flex-shrink-0" />
                      <p className="leading-relaxed">Build a premier digital media consultancy serving high-fashion and luxury clients globally.</p>
                    </div>
                    <div className="flex gap-3">
                      <Plane size={12} className="text-purple mt-0.5 flex-shrink-0" />
                      <p className="leading-relaxed">Establish complete remote workspace flexibility, combining career growth with world travel.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
