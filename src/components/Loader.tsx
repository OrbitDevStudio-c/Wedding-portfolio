"use strict";
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2400; // 2.4s loading duration
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800); // Allow exit transition
          }, 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100%", 
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-[#FFF7FB] p-8 md:p-16 overflow-hidden"
        >
          {/* Ambient Glow Blobs */}
          <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-secondary/15 blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-purple/10 blur-[130px] animate-pulse-glow" />

          {/* Loader Header */}
          <div className="w-full flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-text-muted font-sans z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Alica Patel
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Matrimonial Introduction
            </motion.span>
          </div>

          {/* Middle Monogram */}
          <div className="flex flex-col items-center justify-center text-center z-10 select-none">
            <div className="relative flex items-center justify-center w-64 h-64">
              {/* Outer light rotating circle */}
              <svg className="absolute w-full h-full animate-spin-slow opacity-20" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="#F06292" strokeWidth="0.5" strokeDasharray="4 6" />
              </svg>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[11rem] md:text-[14rem] font-light leading-none tracking-tighter text-primary/10 select-none"
              >
                AP
              </motion.div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                  className="font-serif text-3xl md:text-4xl text-text-main tracking-[0.2em] font-normal"
                >
                  ALICA
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                  className="text-[9px] tracking-[0.4em] uppercase text-text-muted mt-2 font-sans font-medium"
                >
                  Patel
                </motion.span>
              </div>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-[10px] uppercase tracking-[0.25em] text-text-muted mt-6 max-w-xs leading-relaxed font-sans"
            >
              Creative Director &bull; Founder of Ravntra
            </motion.p>
          </div>

          {/* Bottom Progress Tracker */}
          <div className="w-full max-w-sm flex flex-col gap-3 z-10">
            <div className="flex justify-between items-end text-[9px] tracking-[0.2em] font-sans text-text-muted uppercase">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                CREATING EXPERIENCE
              </motion.span>
              <span className="font-mono text-xs font-semibold text-text-main">
                {Math.round(progress)}%
              </span>
            </div>
            
            {/* Elegant glass line */}
            <div className="h-[1px] w-full bg-primary/10 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent-purple to-secondary"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
