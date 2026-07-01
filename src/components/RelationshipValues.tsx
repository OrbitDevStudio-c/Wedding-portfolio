'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  ShieldAlert,
  MessageCircle,
  KeyRound,
  TrendingUp,
  Activity,
  Smile,
  Eye,
  Sparkles
} from 'lucide-react';

const values = [
  { name: 'Loyalty', desc: 'Standing by each other through all of life’s changing seasons.', icon: ShieldAlert },
  { name: 'Respect', desc: 'Valuing each other’s opinions, space, and individuality.', icon: Eye },
  { name: 'Communication', desc: 'Expressing thoughts openly and listening with an open heart.', icon: MessageCircle },
  { name: 'Trust', desc: 'Building a firm foundation where security is absolute.', icon: KeyRound },
  { name: 'Growth Together', desc: 'Encouraging personal progress and striving toward shared dreams.', icon: TrendingUp },
  { name: 'Support', desc: 'Being each other’s biggest cheerleader and anchor during storms.', icon: Activity },
  { name: 'Friendship', desc: 'Liking each other as best friends first, laughing and playing.', icon: Smile },
  { name: 'Honesty', desc: 'Maintaining absolute transparency in thoughts and intentions.', icon: Heart },
  { name: 'Kindness', desc: 'Treating each other with gentleness, empathy, and daily warmth.', icon: Sparkles },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function RelationshipValues() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Core Beliefs
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Relationship Values
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Asymmetrical values grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {values.map((v, idx) => {
            const Icon = v.icon;
            
            // Layout offsets for variance
            const isWide = idx === 1 || idx === 7;

            return (
              <motion.div
                key={v.name}
                variants={itemVariants}
                className={`glass-panel p-8 rounded-3xl border border-white/5 flex gap-4 items-start hover:border-pink/30 hover:bg-white/[0.03] transition-all duration-300 ${
                  isWide ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="p-2.5 rounded-xl bg-white/5 text-pink border border-white/5 flex-shrink-0">
                  <Icon size={16} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-light text-white tracking-wider">
                    {v.name}
                  </h3>
                  <p className="text-xs text-muted font-sans font-light leading-relaxed max-w-md">
                    {v.desc}
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
