"use strict";
"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

// Floating dust particle
function DustParticle({ delay = 0, xPos = "10%", size = 3 }) {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{
        y: "-10%",
        opacity: [0, 0.4, 0.4, 0],
        x: [0, Math.random() * 30 - 15, Math.random() * 30 - 15, 0],
      }}
      transition={{
        duration: Math.random() * 6 + 10,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
      className="absolute rounded-full bg-primary/15 blur-[0.5px] pointer-events-none"
      style={{
        left: xPos,
        width: size,
        height: size,
      }}
    />
  );
}

export default function CinematicQuote() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for 3D parallax on the portrait frame
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 90, damping: 20 });
  const springY = useSpring(y, { stiffness: 90, damping: 20 });
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  
  // Soft reflection movement based on mouse
  const rx = useTransform(springX, [-0.5, 0.5], ["0%", "30%"]);
  const ry = useTransform(springY, [-0.5, 0.5], ["0%", "30%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollToNextSection = () => {
    const el = document.getElementById("about");
    if (el) {
      (window as any).lenis?.scrollTo(el, { offset: -60, duration: 1.5 });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen relative flex items-center justify-center py-24 px-6 md:px-12 lg:px-24 bg-[#FFF7FB] overflow-hidden select-text border-t border-b border-primary/5"
    >
      {/* Background Soft Pink Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full bg-secondary/15 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-accent-purple/10 blur-[110px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "3s" }} />

      {/* Floating Dust Particles */}
      <DustParticle delay={0} xPos="15%" size={3} />
      <DustParticle delay={2.5} xPos="30%" size={5} />
      <DustParticle delay={5} xPos="45%" size={2} />
      <DustParticle delay={1} xPos="60%" size={4} />
      <DustParticle delay={6} xPos="75%" size={6} />
      <DustParticle delay={3} xPos="90%" size={3} />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center z-10">
        
        {/* LEFT COLUMN (45% on desktop): Full body editorial photograph */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          {/* Subtle glowing ring behind frame */}
          <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border border-primary/10 animate-float" />
          <div className="absolute -bottom-8 -right-4 w-32 h-32 rounded-full border border-accent-purple/10 animate-float-slow" style={{ animationDelay: "2s" }} />

          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-[340px] md:max-w-[380px] rounded-[2.5rem] p-3.5 glass-panel shadow-2xl transition-shadow duration-500 hover:shadow-pink-200/20"
          >
            {/* Image Wrapper ensuring the portrait is fully visible and not cropped */}
            <div className="relative w-full overflow-hidden rounded-[2rem] bg-bg-base aspect-[5/7]">
              {/* Soft luxury overlay reflection */}
              <motion.div
                style={{ x: rx, y: ry }}
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 z-10 pointer-events-none"
              />
              <img
                src="/images/hero 2.png"
                alt="Alica Patel Sephora Campaign Portrait"
                className="w-full h-full object-cover object-top scale-102"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (55% on desktop): Editorial Typography and Details */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start text-left pl-0 lg:pl-12">
          {/* Giant decorative quotation mark */}
          <div className="font-serif text-[11rem] md:text-[14rem] text-primary/10 leading-none select-none -mb-16 -ml-4">
            “
          </div>

          {/* Quote Text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-text-main leading-tight tracking-tight max-w-2xl mb-8 z-10"
          >
            "My heart belongs to <span className="italic font-normal text-primary">adventure</span>,
            <br />
            my soul belongs to family."
          </motion.blockquote>

          {/* Author Pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col mb-8"
          >
            <span className="font-serif text-xl sm:text-2xl font-normal text-text-main">Alica Patel</span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-text-muted font-sans font-bold mt-1.5 flex flex-wrap gap-2">
              <span>Fashion Designer</span> &bull; <span>Model</span> &bull; <span>Founder of Ravntra</span>
            </span>
          </motion.div>

          {/* Short elegant paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm sm:text-base text-text-muted leading-relaxed font-light max-w-xl mb-8"
          >
            "I believe the best relationships begin with friendship, respect and shared dreams. Life is more beautiful when two people grow together."
          </motion.p>

          {/* Cursive self-drawing signature */}
          <div className="mb-10 relative">
            <svg
              viewBox="0 0 300 80"
              className="w-48 h-16 sm:w-56 sm:h-20 text-primary stroke-current fill-none stroke-[2]"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: "easeInOut", delay: 0.5 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 20,50 C 15,35 25,15 40,15 C 55,15 50,55 42,60 C 35,65 50,65 60,50 C 65,40 70,40 75,50 C 80,55 85,50 90,45 C 95,40 100,50 105,50 M 130,50 C 120,30 130,15 142,15 C 152,15 150,40 142,50 C 135,60 148,60 155,50 C 160,40 165,40 170,50 C 175,55 180,45 185,40 C 190,35 195,50 200,50"
              />
            </svg>
          </div>

          {/* Continue button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToNextSection}
            className="px-6 py-3 rounded-full glass-card text-text-main text-[10px] sm:text-xs font-semibold tracking-widest uppercase hover:border-primary transition-all duration-300 hover-target flex items-center gap-2 shadow-sm"
          >
            <span>Continue Story</span>
            <FaChevronRight className="text-[9px] text-primary" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
