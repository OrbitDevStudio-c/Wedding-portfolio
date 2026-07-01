'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Ruler, GraduationCap, Briefcase, Heart, Flame, ShieldAlert } from 'lucide-react';

const criteria = [
  { label: 'Ideal Age Range', value: '24 - 30 Years Old', desc: 'Seeking maturity, alignment in career development, and shared life goals.', icon: User },
  { label: 'Minimum Height', value: "5'8\" or above", desc: 'A complementary physical stature.', icon: Ruler },
  { label: 'Educational Standing', value: 'Graduate or Higher Degree', desc: 'Values intellect, curiosity, and continuous learning.', icon: GraduationCap },
  { label: 'Preferred Occupations', value: 'Businessman / Software Engineer / Doctor / Entrepreneur', desc: 'Dedicated to their profession, financially independent, and driven.', icon: Briefcase },
];

const qualities = [
  'Kind & Empathetic heart',
  'Emotionally mature & Self-aware',
  'Loves laughter & light banter',
  'Family oriented & Respectful',
  'Financially responsible & Stable',
  'Travel lover (Ready for Swiss road trips!)',
  'Animal lover (Must love dogs)',
  'Supportive of career & agency ambitions',
];

export default function PartnerExpectations() {
  return (
    <section id="expectations" className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Compatibility
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Partner Expectations
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-6 border-l border-white/10 space-y-12">
          
          {/* Animated line indicator */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            className="absolute left-0 top-0 w-[1.5px] bg-gradient-to-b from-pink to-purple"
          />

          {criteria.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative space-y-2 group"
              >
                {/* Connector Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border border-pink/40 bg-[#07111F] flex items-center justify-center group-hover:border-pink transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink/50 group-hover:bg-pink transition-colors" />
                </div>

                <div className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-pink/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 text-pink flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-muted font-sans font-light">{item.label}</p>
                      <h3 className="font-serif text-lg font-light text-white mt-0.5">{item.value}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-muted font-sans font-light leading-relaxed md:max-w-xs">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}

          {/* Qualities Card (End Node of expectations timeline) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-pink/20 transition-all duration-300 relative"
          >
            <div className="absolute -left-[31px] top-9 w-4 h-4 rounded-full border border-purple bg-[#07111F] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-purple" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Heart size={14} className="text-pink animate-pulse" />
                <h3 className="font-serif text-xl font-light text-white tracking-wider">Mindset & Core Qualities</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualities.map((q) => (
                  <div key={q} className="flex items-center gap-2.5 text-xs text-muted font-sans font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink/70" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
