'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Ruler,
  Dumbbell,
  Sparkles,
  Eye,
  Smile,
  GraduationCap,
  Briefcase,
  Languages,
  Milestone,
  Leaf,
  Heart,
  Ban,
  Wine,
  Dog,
  MapPin,
  Globe
} from 'lucide-react';

const facts = [
  { icon: Calendar, label: 'Age', value: '22 Yrs' },
  { icon: Ruler, label: 'Height', value: "5'5\"" },
  { icon: Dumbbell, label: 'Build', value: 'Slim' },
  { icon: Sparkles, label: 'Hair', value: 'Long Black' },
  { icon: Eye, label: 'Eyes', value: 'Blue' },
  { icon: Smile, label: 'Skin', value: 'Fair' },
  { icon: GraduationCap, label: 'Education', value: 'MBA Degree' },
  { icon: Briefcase, label: 'Job', value: 'Marketing Strategist' },
  { icon: Languages, label: 'Languages', value: 'English, Hindi, Gujarati' },
  { icon: Milestone, label: 'Religion', value: 'Hindu' },
  { icon: Leaf, label: 'Diet', value: 'Vegetarian' },
  { icon: Heart, label: 'Status', value: 'Never Married' },
  { icon: Ban, label: 'Smoke', value: 'No' },
  { icon: Wine, label: 'Drink', value: 'Occasionally' },
  { icon: Dog, label: 'Pets', value: 'Dog Lover' },
  { icon: MapPin, label: 'Home', value: 'Ahmedabad' },
  { icon: Globe, label: 'Dream Place', value: 'Switzerland' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function QuickFacts() {
  return (
    <section id="facts" className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Biometrics & Info
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Quick Facts
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Floating Glass Chips Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: (Math.random() - 0.5) * 4 }}
                className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 border border-white/5 hover:border-pink/30 hover:bg-white/[0.04] transition-all duration-300 shadow-sm cursor-pointer"
              >
                <div className="text-pink/80">
                  <Icon size={13} strokeWidth={1.5} />
                </div>
                <div className="flex items-baseline gap-2 font-sans">
                  <span className="text-[9px] uppercase tracking-wider text-muted font-light">
                    {fact.label}:
                  </span>
                  <span className="text-xs text-white font-medium">
                    {fact.value}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
