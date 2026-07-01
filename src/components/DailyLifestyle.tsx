'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Dumbbell,
  Briefcase,
  Coffee,
  BookOpen,
  Users,
  Music,
  Moon
} from 'lucide-react';

const schedule = [
  { time: '06:30 AM', title: 'Morning Workout', desc: 'Starting the day with fitness, yoga, or an energizing gym session.', icon: Dumbbell },
  { time: '09:30 AM', title: 'Office / Strategy', desc: 'Formulating campaigns and digital strategies for high-growth brands.', icon: Briefcase },
  { time: '04:00 PM', title: 'Coffee & Chill', desc: 'Indulging in a freshly brewed cappuccino, brainstorming new ideas.', icon: Coffee },
  { time: '06:00 PM', title: 'Reading Hour', desc: 'Unwinding with classic literature, self-growth books, or industry news.', icon: BookOpen },
  { time: '08:00 PM', title: 'Family Time', desc: 'Having dinner and discussing the day with my parents; staying connected.', icon: Users },
  { time: '09:30 PM', title: 'Music & Calm', desc: 'Listening to favorite tunes, Coldplay, or Arijit Singh to decompress.', icon: Music },
  { time: '10:30 PM', title: 'Night Walk', desc: 'A peaceful stroll to clear my mind and reflect before sleeping.', icon: Moon },
];

export default function DailyLifestyle() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Routine
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Daily Lifestyle
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Schedule List */}
        <div className="max-w-4xl mx-auto relative pl-6 border-l border-white/10 space-y-12">
          {schedule.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative space-y-2 group"
              >
                {/* Connector Dot */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border border-pink/40 bg-[#07111F] flex items-center justify-center group-hover:border-pink transition-colors duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink/50 group-hover:bg-pink transition-colors duration-300" />
                </div>

                {/* Card Container */}
                <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-pink/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-xs text-pink tracking-widest bg-pink/5 border border-pink/20 px-3 py-1 rounded-full whitespace-nowrap">
                      {item.time}
                    </span>
                    <h3 className="font-serif text-lg font-light text-white group-hover:text-pink transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 md:max-w-md">
                    <p className="text-xs text-muted font-sans font-light leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="p-2.5 rounded-full bg-white/5 text-pink border border-white/5 hidden sm:block">
                      <Icon size={14} />
                    </div>
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
