'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Car,
  Globe,
  Utensils,
  Music,
  Film,
  Trophy,
  Sparkles,
  BookOpen
} from 'lucide-react';

const categories = [
  {
    title: 'Cars',
    icon: Car,
    items: ['Porsche 911', 'Range Rover', 'Mercedes G Wagon'],
  },
  {
    title: 'Countries',
    icon: Globe,
    items: ['Japan', 'Switzerland', 'Italy', 'Canada'],
  },
  {
    title: 'Food',
    icon: Utensils,
    items: ['Pizza', 'Gujarati Traditional', 'Pasta', 'Mexican'],
  },
  {
    title: 'Music',
    icon: Music,
    items: ['Arijit Singh', 'Taylor Swift', 'Coldplay'],
  },
  {
    title: 'Movies & TV',
    icon: Film,
    items: ['Interstellar', 'Zindagi Na Milegi Dobara'],
  },
  {
    title: 'Books',
    icon: BookOpen,
    items: ['The Alchemist', 'Ikigai', 'Atomic Habits'],
  },
  {
    title: 'Luxury Brands',
    icon: Sparkles,
    items: ['Dior', 'Porsche Design', 'Chanel', 'Tiffany & Co.'],
  },
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

export default function FavoriteThings() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Preferences
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Favorite Things
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={itemVariants}
                className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-pink/30 transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-pink border border-white/5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-lg font-light text-white tracking-wider">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Items List */}
                  <ul className="space-y-3.5 pl-4 border-l border-pink/20">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-muted font-sans font-light flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-pink/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
