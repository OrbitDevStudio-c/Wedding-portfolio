'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Plane, Home, Rocket, Heart, Flame, Shield, Compass } from 'lucide-react';

const milestones = [
  { title: 'Graduate', desc: 'MBA in International Business', completed: true, icon: Check },
  { title: 'Build Career', desc: 'Senior Marketing Strategist role', completed: true, icon: Check },
  { title: 'Travel Europe', desc: 'Explore Swiss Alps & Italian streets', completed: false, icon: Plane },
  { title: 'Own Dream House', desc: 'Design an organic, modern sanctuary', completed: false, icon: Home },
  { title: 'Start Business', desc: 'Launch global creative boutique agency', completed: false, icon: Rocket },
  { title: 'Marriage', desc: 'Forever partner & travel best friend', completed: false, icon: Heart },
  { title: 'Kids', desc: 'Warm family with strong cultural roots', completed: false, icon: Shield },
  { title: 'World Tour', desc: 'Explore 40+ countries together', completed: false, icon: Compass },
];

export default function DreamLife() {
  return (
    <section id="dream-life" className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Roadmap
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Dream Life Roadmap
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Large Grid Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-panel p-6 rounded-3xl border border-white/5 flex flex-col justify-between aspect-square hover:border-pink/30 hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Step index and icon */}
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-sans tracking-widest text-muted uppercase">Step 0{idx + 1}</span>
                    <div className={`p-2.5 rounded-xl border ${
                      m.completed 
                        ? 'bg-pink/10 border-pink/30 text-pink shadow-[0_0_8px_rgba(248,200,220,0.3)]' 
                        : 'bg-white/5 border-white/5 text-muted'
                    }`}>
                      <Icon size={14} />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-light text-white tracking-wider">
                    {m.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] text-muted font-sans font-light leading-relaxed">
                    {m.desc}
                  </p>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center gap-1.5 pt-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${m.completed ? 'bg-pink' : 'bg-white/20'}`} />
                    <span className="text-[8px] uppercase tracking-widest text-muted">
                      {m.completed ? 'Completed' : 'Future Goal'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
