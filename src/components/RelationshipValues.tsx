"use strict";
"use client";

import { motion } from "framer-motion";
import { FaHeart, FaChevronRight, FaRegHandshake, FaBalanceScale, FaUsers } from "react-icons/fa";
import { BiTask, BiWorld, BiSmile, BiHomeHeart } from "react-icons/bi";

export default function RelationshipValues() {
  const values = [
    {
      title: "Trust & Transparency",
      desc: "Open communication without filters. Building a sanctuary of mutual safety and support.",
      icon: FaRegHandshake,
    },
    {
      title: "Mutual Independence",
      desc: "Supporting individual career ambitions. Growing together while preserving individual identities.",
      icon: FaBalanceScale,
    },
    {
      title: "Family Integrity",
      desc: "Deep respect for elders, culture, and siblings. Cultivating warm, welcoming family networks.",
      icon: FaUsers,
    },
    {
      title: "Shared Expansion",
      desc: "Pushing each other to study, travel, build, and reach new heights of emotional and physical health.",
      icon: FaHeart,
    },
  ];

  const expectations = [
    { text: "Age Range: 20 - 25 Years Old", icon: BiSmile },
    { text: "Emotionally Mature & Self-Aware", icon: FaHeart },
    { text: "Supportive of Professional Growth", icon: BiTask },
    { text: "Family Oriented & Rooted in Values", icon: BiHomeHeart },
    { text: "Ambitious & Highly Motivated", icon: FaChevronRight },
    { text: "Financially Stable & Responsible", icon: FaBalanceScale },
    { text: "Enthusiastic Travel & Cafe Lover", icon: BiWorld },
    { text: "Compassionate Animal Lover", icon: FaUsers },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FFF7FB] relative overflow-hidden select-text">
      {/* Glow decorations */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-accent-purple/10 blur-[110px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* LEFT COLUMN: Core Relationship Values */}
        <div className="lg:col-span-7">
          <div className="mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-sans font-bold">Foundation</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-text-main mt-2">
              Relationship <span className="italic text-primary">Values</span>
            </h2>
            <p className="text-sm text-text-muted font-light mt-3 max-w-md leading-relaxed">
              The core principles I hold close. They are the non-negotiables that define my style of love and partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="p-6 rounded-3xl glass-card hover-target group relative"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-normal text-text-main group-hover:text-primary transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-light mt-2">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Partner Expectations */}
        <div className="lg:col-span-5 relative">
          <div className="mb-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-sans font-bold">Expectations</span>
            <h2 className="font-serif text-3xl font-light text-text-main mt-2">
              The Right <span className="italic text-primary">Person</span>
            </h2>
            <p className="text-sm text-text-muted font-light mt-3 leading-relaxed">
              Qualities in a man that resonate with my lifestyle, ideals, family values, and future goals.
            </p>
          </div>

          {/* Expectations list inside a beautiful glass block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-3xl glass-panel border border-primary/20 shadow-xl flex flex-col gap-4"
          >
            {expectations.map((exp, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <exp.icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-sans font-medium text-text-main tracking-wider leading-none">
                  {exp.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
