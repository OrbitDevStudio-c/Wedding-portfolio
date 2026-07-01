'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Home, Heart, Award, Users, RefreshCw } from 'lucide-react';

const goals = [
  { title: 'Travel 40 Countries', desc: 'Exploring and discovering diverse global cultures and natural wonders.', icon: Plane },
  { title: 'Build Dream Home', desc: 'Designing a beautiful, modern space where design blends with nature.', icon: Home },
  { title: 'Healthy Lifestyle', desc: 'Maintaining physical fitness, mindful eating, and peaceful mental health.', icon: Heart },
  { title: 'Successful Career', desc: 'Leading strategic marketing campaigns while building a remote business.', icon: Award },
  { title: 'Happy Family', desc: 'Creating a loving household built on communication, respect, and joy.', icon: Users },
  { title: 'Grow Together', desc: 'Walking hand-in-hand with my partner, supporting each other’s growth.', icon: RefreshCw },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function LifeGoals() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Vision
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Life Goals
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Goals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {goals.map((goal) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.title}
                variants={itemVariants}
                className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col justify-between space-y-4 text-left hover:border-pink/30 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="p-2.5 rounded-xl bg-white/5 text-pink border border-white/5 w-fit">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-serif text-lg font-light text-white tracking-wider">
                    {goal.title}
                  </h3>
                  <p className="text-xs text-muted font-sans font-light leading-relaxed">
                    {goal.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
