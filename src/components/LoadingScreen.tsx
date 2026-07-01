'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLoading(false), 700);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="redesign-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#07111F]"
        >
          {/* Glowing background circles for loader */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-pink/10 blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple/10 blur-[100px] delay-300" />

          <div className="text-center space-y-10 max-w-md px-6 relative z-10">
            {/* Elegant Monogram Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center w-24 h-24 mx-auto rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <span className="font-serif text-3xl font-light text-pink tracking-[0.2em] translate-x-[2px]">
                A
              </span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-[-6px] rounded-full border-t border-b border-transparent border-l border-r border-pink/30"
              />
            </motion.div>

            {/* Typography Name Anim */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl tracking-[0.25em] text-white font-light uppercase"
              >
                Alica
              </motion.h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.6 }}
              className="text-[9px] uppercase tracking-[0.3em] text-muted font-sans font-light"
            >
              Luxury Personal Portfolio
            </motion.p>

            {/* Premium Progress Bar */}
            <div className="w-56 h-[2px] bg-white/5 mx-auto overflow-hidden relative rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-pink to-purple"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
            
            {/* Percentage counter */}
            <motion.span
              key={progress}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 0.6, y: 0 }}
              className="text-xs font-sans tracking-[0.2em] text-muted font-light block"
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
