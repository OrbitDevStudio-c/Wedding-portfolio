'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Butterfly {
  id: number;
  x: number;
  y: number;
  scale: number;
  duration: number;
  delay: number;
  driftX: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function ParticleBackground() {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate butterflies
    const generatedButterflies: Butterfly[] = Array.from({ length: 6 }).map((_, idx) => ({
      id: idx,
      x: Math.random() * 80 + 10, // 10% to 90%
      y: Math.random() * 20 + 80, // starting bottom
      scale: Math.random() * 0.4 + 0.3,
      duration: Math.random() * 20 + 20, // 20s to 40s
      delay: Math.random() * -20, // negative delay so they start immediately at different positions
      driftX: (Math.random() - 0.5) * 200, // drift sideways
    }));
    setButterflies(generatedButterflies);

    // Generate background stars/particles
    const generatedStars: Star[] = Array.from({ length: 25 }).map((_, idx) => ({
      id: idx,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * -6,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07111F]">
      
      {/* Large Gradient Glow Blobs */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-pink/25 blur-[130px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple/20 blur-[150px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, 50, -40, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[20%] w-[450px] h-[450px] rounded-full bg-blue/15 blur-[120px] pointer-events-none"
      />

      {/* Floating Stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.1, 0.7, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Butterflies */}
      {butterflies.map((b) => (
        <div
          key={`butterfly-${b.id}`}
          className="absolute"
          style={{
            left: `${b.x}%`,
            top: `${b.y}vh`,
            transform: `scale(${b.scale})`,
            animation: `butterfly-drift-${b.id} ${b.duration}s linear infinite`,
            animationDelay: `${b.delay}s`,
          }}
        >
          {/* Animated flapping wings wrapper */}
          <div
            className="flex items-center justify-center relative w-8 h-8"
            style={{
              animation: 'butterfly-flap 0.6s ease-in-out infinite',
            }}
          >
            {/* Left Wing SVG */}
            <svg
              className="absolute right-1/2 w-4 h-6 text-pink/60 fill-current"
              viewBox="0 0 100 150"
              style={{ transformOrigin: 'right center' }}
            >
              <path d="M 100 75 C 60 20, 20 20, 20 60 C 20 90, 60 100, 100 110 C 80 130, 40 140, 30 130 C 10 110, 30 80, 100 75 Z" />
            </svg>
            
            {/* Right Wing SVG */}
            <svg
              className="absolute left-1/2 w-4 h-6 text-pink/60 fill-current"
              viewBox="0 0 100 150"
              style={{ transformOrigin: 'left center', transform: 'scaleX(-1)' }}
            >
              <path d="M 100 75 C 60 20, 20 20, 20 60 C 20 90, 60 100, 100 110 C 80 130, 40 140, 30 130 C 10 110, 30 80, 100 75 Z" />
            </svg>
            
            {/* Butterfly body */}
            <div className="absolute w-[2px] h-5 bg-white/70 rounded-full" />
          </div>

          {/* Add CSS Keyframes dynamically */}
          <style jsx global>{`
            @keyframes butterfly-flap {
              0%, 100% { transform: scaleX(1); }
              50% { transform: scaleX(0.15); }
            }
            @keyframes butterfly-drift-${b.id} {
              0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
              10% { opacity: 0.6; }
              90% { opacity: 0.6; }
              100% { transform: translate(${b.driftX}px, -110vh) rotate(${b.driftX > 0 ? 20 : -20}deg); opacity: 0; }
            }
          `}</style>
        </div>
      ))}
    </div>
  );
}
