"use strict";
"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCrown, FaGlobe, FaPray, FaVenusMars } from "react-icons/fa";
import { TbDetails } from "react-icons/tb";

export default function AboutAndProfile() {
  const profileItems = [
    { label: "Age", value: "22 Years", icon: FaVenusMars, detail: "Born 2004" },
    { label: "Height", value: "5'5\" (165 cm)", icon: FaCrown, detail: "Elegant Stature" },
    { label: "Profession", value: "Designer & CEO", icon: FaGraduationCap, detail: "Creative Lead" },
    { label: "Religion", value: "Hindu", icon: FaPray, detail: "Traditional Values" },
    { label: "Languages", value: "English, Hindi, Gujarati", icon: FaGlobe, detail: "Multilingual" },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-[#FFF7FB] relative overflow-hidden select-text">
      {/* Soft glowing decorations */}
      <div className="absolute top-1/3 right-1/10 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-[350px] h-[350px] rounded-full bg-accent-blue/10 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-sans font-bold mb-3"
          >
            A Portrait of a Woman
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-text-main"
          >
            Story & <span className="italic text-primary">Identity</span>
          </motion.h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full aspect-[3/4] max-w-[420px] mx-auto lg:mx-0 rounded-3xl p-3 glass-panel shadow-xl"
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-40 z-10" />
              <img
                src="/images/traditonal image.png"
                alt="Alica Patel Traditional Wear"
                className="w-full h-full object-cover object-center scale-102 transition-transform duration-700 group-hover:scale-106"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 p-3 px-5 rounded-2xl glass-card text-xs font-semibold tracking-widest text-primary uppercase shadow-md pointer-events-none">
              Traditional & Modern
            </div>
          </motion.div>

          {/* RIGHT: Biography & Profile Grid */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Story with Drop Cap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="prose prose-pink max-w-none text-text-muted font-light leading-relaxed text-base sm:text-lg"
            >
              <p className="mb-6">
                <span className="float-left text-6xl md:text-7xl font-serif font-light text-primary leading-[0.8] pr-3 pt-1">G</span>
                rowing up in an environment where couture fashion meets deep cultural roots, my journey has always been about aesthetics. I founded <span className="font-semibold text-text-main">Ravntra</span>, a luxury fashion house designed to create haute couture for models and professional creatives. 
              </p>
              <p>
                To me, style is a language of elegance, but character is what gives it substance. While I thrive in the fast-paced, high-concept world of design, I find my peace in quiet family weekends, classical music, and road trips that lead to untouched natural destinations. I am seeking a partner who values career drive as much as emotional closeness, ready to build a shared legacy.
              </p>
            </motion.div>

            {/* Profile Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl glass-card flex items-start gap-4 hover-target group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-text-muted uppercase font-sans font-semibold">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-text-main mt-0.5">
                      {item.value}
                    </p>
                    <span className="text-[10px] text-text-muted/70 block mt-0.5">
                      {item.detail}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* CEO/Company Card (Spanning full width on mobile, right column on desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="p-5 rounded-2xl glass-card sm:col-span-2 flex items-start gap-4 hover-target border-l-4 border-l-primary group"
              >
                <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-colors duration-300">
                  <TbDetails className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest text-text-muted uppercase font-sans font-semibold">
                    About Ravntra
                  </p>
                  <p className="text-sm font-medium text-text-main mt-0.5">
                    Ravntra &bull; Luxury Couture Fashion House
                  </p>
                  <p className="text-xs text-text-muted leading-relaxed mt-1">
                    Ravntra is a luxury fashion brand creating customized couture clothing for professional models, runway showcases, and editorial photography.
                  </p>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
