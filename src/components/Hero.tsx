'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Heart, Compass } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Scroll Parallax translations
  const yImage = useTransform(scrollY, [0, 800], [0, -60]);
  const yBg = useTransform(scrollY, [0, 800], [0, 80]);
  const rotateImage = useTransform(scrollY, [0, 800], [0, -3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to window center
      const x = (e.clientX - window.innerWidth / 2) / 35;
      const y = (e.clientY - window.innerHeight / 2) / 35;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#07111F]">
      
      {/* Background Gradient circles reacting to mouse */}
      <motion.div
        style={{
          x: mousePos.x * 0.4,
          y: mousePos.y * 0.4,
        }}
        className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-pink/10 blur-[130px] pointer-events-none"
      />
      <motion.div
        style={{
          x: -mousePos.x * 0.5,
          y: yBg,
        }}
        className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] rounded-full bg-purple/10 blur-[150px] pointer-events-none"
      />

      {/* Grid wrapper */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left: Headline & details */}
        <div className="lg:col-span-7 space-y-10 text-center lg:text-left order-2 lg:order-1">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md"
          >
            <Sparkles size={12} className="text-pink animate-pulse" />
            <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-pink font-light">
              Feminine Luxury Portfolio
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-wide leading-[1.05] text-white"
            >
              Hello, <br />
              I'm <span className="animated-gradient-text">Alica</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif italic text-2xl md:text-3xl text-white/90 font-light"
            >
              "Finding my forever travel partner."
            </motion.h2>

            {/* Split tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-sans tracking-[0.2em] text-pink uppercase font-light"
            >
              <span className="flex items-center gap-1">
                <Heart size={12} /> Modern Heart
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-pink/20" />
              <span className="flex items-center gap-1">
                <Compass size={12} /> Traditional Values
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm text-muted font-sans font-light leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Senior digital marketing strategist, lover of Swiss road trips, photography, and meaningful talks. Grounded by family devotion and looking for an ambitious, supportive partner to explore the world together.
          </motion.p>

          {/* Magnetic action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => scrollToSection('#about')}
              className="px-8 py-4 bg-white text-black hover:bg-pink transition-all duration-300 font-sans text-[10px] uppercase tracking-[0.25em] font-medium rounded-full shadow-lg magnetic-btn interactive-cursor"
            >
              Read My Story
            </button>
            <button
              onClick={() => scrollToSection('#gallery')}
              className="px-8 py-4 border border-white/10 hover:border-pink/40 bg-white/5 hover:bg-white/10 text-white transition-all duration-300 font-sans text-[10px] uppercase tracking-[0.25em] font-light rounded-full magnetic-btn interactive-cursor"
            >
              Explore Gallery
            </button>
            <button
              onClick={() => scrollToSection('#compatibility')}
              className="px-8 py-4 border border-pink/20 hover:border-pink/40 bg-pink/5 hover:bg-pink/10 text-pink transition-all duration-300 font-sans text-[10px] uppercase tracking-[0.25em] font-light rounded-full magnetic-btn interactive-cursor"
            >
              Compatibility
            </button>
          </motion.div>
        </div>

        {/* Right: Floating Glass Portrait Card */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            style={{
              x: mousePos.x * 0.8,
              y: mousePos.y * 0.8,
              translateY: yImage,
              rotateZ: rotateImage,
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 h-[400px] sm:w-80 sm:h-[450px] md:w-[350px] md:h-[500px] rounded-[2.5rem] overflow-hidden glass-panel p-3.5 shadow-2xl group border border-white/10 hover:border-pink/20 transition-all duration-500"
          >
            {/* Fine border accent */}
            <div className="absolute inset-4 rounded-[2rem] border border-white/5 pointer-events-none z-10 transition-all duration-500 group-hover:border-pink/20" />
            
            {/* Image */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              <Image
                src="/images/hero image.png"
                alt="Alica Patel portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Bottom details label */}
            <div className="absolute bottom-8 left-8 right-8 z-20 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 text-center">
              <p className="text-[9px] tracking-[0.25em] uppercase text-pink font-light">Digital Marketing Strategist</p>
              <p className="font-serif text-lg font-light tracking-widest text-white mt-1">Alica Patel</p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[8px] uppercase tracking-[0.3em] text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-[1.5px] h-4 bg-pink"
        />
      </div>

    </section>
  );
}
