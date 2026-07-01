'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageSquare, HandHelping, Heart, Gift } from 'lucide-react';

const languages = [
  { name: 'Quality Time', percent: 40, desc: 'Undivided attention, shared travel adventures, and quiet coffee dates.', icon: Clock },
  { name: 'Words of Affirmation', percent: 25, desc: 'Honest compliments, verbal encouragement, and notes of appreciation.', icon: MessageSquare },
  { name: 'Acts of Service', percent: 15, desc: 'Thoughtful actions that ease daily tasks and support goals.', icon: HandHelping },
  { name: 'Physical Affection', percent: 10, desc: 'Holding hands, comforting presence, and holding doors.', icon: Heart },
  { name: 'Gift Giving', percent: 10, desc: 'Small, meaningful tokens showing that I am thinking of you.', icon: Gift },
];

export default function LoveLanguage() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Affection
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Love Languages
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Display List */}
        <div className="max-w-xl mx-auto space-y-8">
          {languages.map((lang, idx) => {
            const Icon = lang.icon;
            return (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between items-center text-xs font-sans tracking-wide">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Icon size={14} className="text-pink" />
                    <span>{lang.name}</span>
                  </div>
                  <span className="text-pink font-light">{lang.percent}%</span>
                </div>

                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.05, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-pink to-purple rounded-full"
                  />
                </div>

                <p className="text-[10px] text-muted font-sans font-light leading-relaxed">
                  {lang.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
