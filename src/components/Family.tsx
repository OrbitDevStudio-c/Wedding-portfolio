'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sun } from 'lucide-react';

const familyValues = [
  { title: 'Supportive & Loving Parents', desc: 'Raised by encouraging parents who have always backed my choices and career ambitions.' },
  { title: 'Strong Cultural Roots', desc: 'Embracing the rich traditions and values of our heritage, maintaining a grounded lifestyle.' },
  { title: 'Respect for Elders', desc: 'Raised with the fundamental belief that respecting and caring for elders is paramount.' },
  { title: 'Festive Celebrations', desc: 'Cherishing moments spent celebrating Navratri, Diwali, and family get-togethers.' },
];

export default function Family() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            My Foundation
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Family & Culture
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Card Layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-center space-y-4 relative overflow-hidden text-center aspect-[4/3] lg:aspect-square"
          >
            <div className="absolute top-4 left-4 text-white/5 font-serif text-8xl pointer-events-none">“</div>
            <p className="font-serif italic text-lg text-white/90 font-light leading-relaxed relative z-10">
              Family is not an important thing. It's everything. My roots are what keep me grounded while my wings help me fly.
            </p>
            <div className="w-8 h-[1px] bg-pink/50 mx-auto mt-2" />
            <p className="text-[9px] uppercase tracking-widest text-pink font-medium">Alica Patel</p>
          </motion.div>

          {/* Right Side Values Grid */}
          <div className="lg:col-span-7 space-y-6">
            {familyValues.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-pink/30 transition-all duration-300"
              >
                <div className="p-2 rounded-xl bg-white/5 text-pink border border-white/5 flex-shrink-0">
                  <Sun size={14} className="animate-spin-slow" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-base font-light text-white tracking-wider">
                    {v.title}
                  </h3>
                  <p className="text-xs text-muted font-sans font-light leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
