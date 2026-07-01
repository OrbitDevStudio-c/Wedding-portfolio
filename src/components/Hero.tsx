"use strict";
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaChevronRight, FaRegHeart, FaCompass } from "react-icons/fa";

// Butterfly SVG helper
function Butterfly({ delay = 0, style = {} }) {
  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 0.6, opacity: 0 }}
      animate={{
        x: [0, 40, -20, 30, 0],
        y: [0, -60, -120, -180, -240],
        scale: [0.6, 0.8, 0.7, 0.9, 0.6],
        opacity: [0, 0.75, 0.85, 0.6, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className="absolute pointer-events-none z-20"
      style={style}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Left wing */}
        <div className="absolute left-[3px] w-3 h-6 bg-gradient-to-r from-primary to-accent-pink rounded-l-full origin-right butterfly-wing" />
        {/* Center body */}
        <div className="absolute w-[2px] h-5 bg-text-main/80 rounded-full" />
        {/* Right wing */}
        <div className="absolute right-[3px] w-3 h-6 bg-gradient-to-l from-primary to-accent-pink rounded-r-full origin-left butterfly-wing" />
      </div>
    </motion.div>
  );
}

// Floating particle helper
function FloatingParticle({ delay = 0, xPos = "10%", size = 6 }) {
  return (
    <motion.div
      initial={{ y: "110vh", opacity: 0 }}
      animate={{
        y: "-10vh",
        opacity: [0, 0.45, 0.45, 0],
        x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0]
      }}
      transition={{
        duration: Math.random() * 8 + 12, // 12s - 20s
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
      className="absolute rounded-full bg-primary/20 blur-[1px] pointer-events-none z-0"
      style={{
        left: xPos,
        width: size,
        height: size,
      }}
    />
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for 3D parallax effect on the image
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 100, damping: 18 });
  const springY = useSpring(y, { stiffness: 100, damping: 18 });
  
  // Transform rotates based on mouse location
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      (window as any).lenis?.scrollTo(el, { offset: -60, duration: 1.5 });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#FFF7FB]"
    >
      {/* Background glowing blurred blur circles */}
      <div className="absolute top-1/4 left-1/10 w-[40vw] h-[40vw] rounded-full bg-secondary/20 blur-[130px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/10 w-[35vw] h-[35vw] rounded-full bg-accent-purple/15 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Floating particles */}
      <FloatingParticle delay={0} xPos="12%" size={5} />
      <FloatingParticle delay={2} xPos="25%" size={7} />
      <FloatingParticle delay={4} xPos="40%" size={4} />
      <FloatingParticle delay={1} xPos="55%" size={6} />
      <FloatingParticle delay={6} xPos="70%" size={8} />
      <FloatingParticle delay={3} xPos="85%" size={5} />
      <FloatingParticle delay={7} xPos="5%" size={6} />
      <FloatingParticle delay={5} xPos="95%" size={4} />
      <FloatingParticle delay={8} xPos="32%" size={7} />
      <FloatingParticle delay={10} xPos="62%" size={5} />
      <FloatingParticle delay={9} xPos="80%" size={8} />
      <FloatingParticle delay={11} xPos="48%" size={6} />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* LEFT: Typographic editorial content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left select-text">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[10px] md:text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-6"
          >
            <FaRegHeart className="text-[10px]" />
            <span>Matrimonial Edition</span>
          </motion.div>

          <h1 className="font-serif text-5xl sm:text-7xl xl:text-8xl font-normal leading-[1.05] tracking-tight text-text-main mb-6">
            <motion.span
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="block font-light text-text-muted text-4xl sm:text-5xl xl:text-6xl mb-2"
            >
              Hello, I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="block font-medium"
            >
              Alica Patel
            </motion.span>
          </h1>

          {/* Subtitles: Modern editorial pillars */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-sans font-semibold text-text-muted border-b border-primary/10 pb-6 w-full max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-primary"
            >
              Fashion Designer
            </motion.span>
            <span>&bull;</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Model
            </motion.span>
            <span>&bull;</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Founder of Ravntra
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="text-base sm:text-lg text-text-muted max-w-lg leading-relaxed mb-10 font-light"
          >
            A blend of <span className="font-semibold text-text-main">Modern Independence</span> and <span className="font-semibold text-text-main">Traditional Values</span>. I believe in dreaming big, living with purpose, and building a beautiful future centered on mutual trust and growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="px-6 sm:px-8 py-3.5 rounded-full bg-text-main text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover-target flex items-center gap-2"
            >
              <span>Read Story</span>
              <FaChevronRight className="text-[10px]" />
            </button>
            
            <button
              onClick={() => scrollToSection("gallery")}
              className="px-6 sm:px-8 py-3.5 rounded-full glass-card text-text-main text-xs font-semibold tracking-widest uppercase hover:border-primary transition-all duration-300 hover-target flex items-center gap-2"
            >
              <FaCompass className="text-xs text-primary" />
              <span>Gallery</span>
            </button>
          </motion.div>
        </div>

        {/* RIGHT: Floating Portrait with 3D Mouse Parallax */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          {/* Animated decorative circles behind frame */}
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border border-primary/10 animate-float" />
          <div className="absolute -bottom-10 -right-4 w-40 h-40 rounded-full border border-accent-purple/15 animate-float-slow" style={{ animationDelay: "1.5s" }} />

          {/* Fluttering Butterflies */}
          <Butterfly delay={1} style={{ top: "10%", left: "-10%" }} />
          <Butterfly delay={4} style={{ bottom: "20%", right: "-15%" }} />
          <Butterfly delay={7} style={{ top: "60%", left: "85%" }} />

          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-[85vw] max-w-[360px] aspect-[3/4] md:w-[360px] rounded-3xl p-4 glass-panel shadow-2xl"
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl group">
              {/* Soft pink highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              <img
                src="/images/hero image.png"
                alt="Alica Patel portrait"
                className="w-full h-full object-cover object-top scale-102 transition-transform duration-700 ease-out group-hover:scale-105"
                draggable={false}
              />
            </div>
            
            {/* Small glass details overlay */}
            <div className="absolute bottom-8 left-8 right-8 p-4 rounded-xl glass-card z-20 pointer-events-none transform translate-z-[40px]">
              <p className="font-serif text-lg font-medium text-text-main">Alica Patel</p>
              <p className="text-[10px] tracking-widest text-text-muted uppercase mt-0.5">Ahmedabad, India</p>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
