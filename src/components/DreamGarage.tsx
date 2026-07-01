'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Car, Compass, Sparkles } from 'lucide-react';

interface CarSpec {
  name: string;
  brand: string;
  power: string;
  speed: string;
  acceleration: string;
  desc: string;
}

const garageList: CarSpec[] = [
  { brand: 'Porsche', name: '911 GT3 RS', power: '518 HP', speed: '184 mph', acceleration: '3.0s 0-60', desc: 'The absolute pinnacle of track precision and daily sports luxury.' },
  { brand: 'Ferrari', name: 'SF90 Stradale', power: '986 HP', speed: '211 mph', acceleration: '2.5s 0-60', desc: 'A hybrid hypercar blending Maranello racing legacy with raw electricity.' },
  { brand: 'Bugatti', name: 'Chiron Super Sport', power: '1578 HP', speed: '273 mph', acceleration: '2.2s 0-60', desc: 'Unrivaled aerospace engineering, combining grand touring comfort with land-speed power.' },
  { brand: 'Koenigsegg', name: 'Jesko Absolut', power: '1600 HP', speed: '330+ mph', acceleration: '2.5s 0-60', desc: 'A carbon fiber masterpiece designed to challenge the limits of aerodynamics.' },
  { brand: 'Rolls-Royce', name: 'Phantom VIII', power: '563 HP', speed: '155 mph', acceleration: '5.1s 0-60', desc: 'Whisper-quiet luxury, featuring custom starlight headliner and bespoke coachbuild.' },
];

function Card3D({ car }: { car: CarSpec }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tilt position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smoother transition back to center
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 120, damping: 20 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position from -0.5 to 0.5
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className="glass-panel p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:border-pink/30 hover:bg-white/[0.03] transition-colors duration-500 flex flex-col justify-between aspect-[3/4] cursor-pointer shadow-lg group relative overflow-hidden"
    >
      {/* Reflection shine element */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-y-full group-hover:translate-y-full ease-out" />
      
      {/* Brand metadata header */}
      <div className="space-y-4" style={{ transform: 'translateZ(40px)' }}>
        <div className="flex justify-between items-center text-xs tracking-widest text-muted">
          <span className="uppercase font-sans font-light">{car.brand}</span>
          <div className="p-2 rounded-xl bg-white/5 text-pink/80 border border-white/5">
            <Car size={12} />
          </div>
        </div>

        <h3 className="font-serif text-2xl font-light text-white tracking-widest leading-snug">
          {car.name}
        </h3>
      </div>

      {/* Specifications list (translates out further in 3D space) */}
      <div className="space-y-6 pt-6" style={{ transform: 'translateZ(60px)' }}>
        <p className="text-[11px] text-muted font-sans font-light leading-relaxed">
          {car.desc}
        </p>

        <div className="border-t border-white/5 pt-4 space-y-2 text-[9px] uppercase tracking-wider font-sans font-light text-white/80">
          <div className="flex justify-between">
            <span>Power Output</span>
            <span className="text-pink font-semibold">{car.power}</span>
          </div>
          <div className="flex justify-between">
            <span>V-Max Speed</span>
            <span>{car.speed}</span>
          </div>
          <div className="flex justify-between">
            <span>Acceleration</span>
            <span className="text-purple">{car.acceleration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DreamGarage() {
  return (
    <section id="garage" className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Automotive
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Dream Garage
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {garageList.map((car) => (
            <Card3D key={car.name} car={car} />
          ))}
        </div>

      </div>
    </section>
  );
}
