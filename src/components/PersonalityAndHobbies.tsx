"use strict";
"use client";

import { motion } from "framer-motion";
import { FaPaintBrush, FaHeart, FaPray, FaRoute } from "react-icons/fa";
import { BiCoffeeTogo, BiCamera, BiCar, BiDumbbell, BiMusic, BiBookOpen, BiSun } from "react-icons/bi";

export default function PersonalityAndHobbies() {
  const traits = [
    {
      title: "Creative Visionary",
      desc: "Guided by a passion for aesthetics and details. Expressed through couture fashion design, sketching, and curation.",
      icon: FaPaintBrush,
      gradient: "from-pink-300 to-primary",
    },
    {
      title: "Compassionate Soul",
      desc: "Anchored in family values, empathy, and meaningful connections. Believe in raising others and listening deeply.",
      icon: FaHeart,
      gradient: "from-primary to-accent-purple",
    },
    {
      title: "Grounded & Traditional",
      desc: "Nurtured by Hindu spiritual principles, heritage festivals, and values that guide daily choices and ethics.",
      icon: FaPray,
      gradient: "from-accent-purple to-accent-blue",
    },
    {
      title: "Spontaneous Explorer",
      desc: "Always ready for road trips, discovering rustic cafes, photographing mountain landscapes, and tasting local culture.",
      icon: FaRoute,
      gradient: "from-accent-blue to-pink-300",
    },
  ];

  const hobbies = [
    { name: "Fashion Design", icon: FaPaintBrush },
    { name: "Photography", icon: BiCamera },
    { name: "Luxury Cars", icon: BiCar },
    { name: "Coffee Curation", icon: BiCoffeeTogo },
    { name: "Music & Concerts", icon: BiMusic },
    { name: "Fitness & Pilates", icon: BiDumbbell },
    { name: "Beach Sunsets", icon: BiSun },
    { name: "Editorial Books", icon: BiBookOpen },
    { name: "Road Trips", icon: FaRoute },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FFF7FB] relative overflow-hidden select-text">
      {/* Background radial soft light blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-pink/20 blur-[130px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN: Personality Traits */}
        <div className="lg:col-span-8">
          <div className="mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-sans font-bold">What Defines Me</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-text-main mt-2">
              Personality & <span className="italic text-primary">Temperament</span>
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {traits.map((trait) => (
              <motion.div
                key={trait.title}
                variants={itemVariants}
                className="p-6 rounded-3xl glass-card relative overflow-hidden group hover-target"
              >
                {/* Background soft color glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-gradient-to-br ${trait.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />

                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${trait.gradient} text-white flex items-center justify-center shadow-sm`}>
                    <trait.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-text-main group-hover:text-primary transition-colors duration-300">
                    {trait.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-text-muted font-light">
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Hobbies Showcase */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <div className="mb-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-sans font-bold">Interests</span>
            <h2 className="font-serif text-3xl font-light text-text-main mt-2">
              Life's <span className="italic text-primary">Rhythms</span>
            </h2>
            <p className="text-sm text-text-muted font-light mt-3 leading-relaxed">
              Simple pleasures and hobbies that enrich my weeks and create room for creative expression.
            </p>
          </div>

          {/* Mosaic Pills List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {hobbies.map((hobby) => (
              <motion.div
                key={hobby.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2.5 rounded-full glass-pill flex items-center gap-2 text-xs tracking-wider text-text-main font-sans font-medium shadow-sm hover-target"
              >
                <hobby.icon className="w-4 h-4 text-primary" />
                <span>{hobby.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
