'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  TrendingUp,
  Smile,
  Zap,
  MapPin,
  Sparkles,
  Compass,
  Palette,
  Users,
  Eye
} from 'lucide-react';

const traits = [
  { name: 'Friendly', icon: Smile, desc: 'Warm, approachable, and always ready to make others feel welcome.' },
  { name: 'Ambitious', icon: TrendingUp, desc: 'Driven by personal goals, seeking constant growth in my marketing career.' },
  { name: 'Emotionally Mature', icon: Heart, desc: 'Deeply value empathy, self-awareness, and constructive talk.' },
  { name: 'Funny', icon: Zap, desc: 'Appreciate wit, playfulness, and finding joy in shared laughter.' },
  { name: 'Independent', icon: Compass, desc: 'Self-reliant, confident, and trust my own path while valuing support.' },
  { name: 'Family Oriented', icon: Users, desc: 'Grounded by deep cultural values; spending quality time with family is paramount.' },
  { name: 'Positive', icon: Sparkles, desc: 'Maintain an optimistic outlook, greeting challenges with a warm smile.' },
  { name: 'Romantic', icon: Eye, desc: 'Value old-school charm, sunset road trips, and deep conversations.' },
  { name: 'Adventurous', icon: MapPin, desc: 'Always excited to explore new countries and take spontaneous trips.' },
  { name: 'Creative', icon: Palette, desc: 'Express myself through strategy, photography, and design.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Personality() {
  return (
    <section id="personality" className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Core Traits
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            My Personality
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Asymmetrical Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {traits.map((trait, idx) => {
            const Icon = trait.icon;
            
            // Asymmetric widths for design differentiation
            const isWide = idx === 2 || idx === 5 || idx === 8;

            return (
              <motion.div
                key={trait.name}
                variants={itemVariants}
                className={`glass-panel p-8 rounded-3xl border border-white/5 flex flex-col justify-between space-y-6 hover:border-pink/30 hover:shadow-[0_15px_40px_-15px_rgba(248,200,220,0.15)] transition-all duration-500 cursor-pointer ${
                  isWide ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Glowing icon border */}
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-pink border border-white/5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-xl font-light text-white tracking-wider">
                    {trait.name}
                  </h3>
                </div>

                <p className="text-xs text-muted font-sans font-light leading-relaxed max-w-sm">
                  {trait.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
