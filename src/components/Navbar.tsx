"use strict";
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Garage", href: "#garage" },
  { label: "Journeys", href: "#travel" },
  { label: "Quiz", href: "#quiz" },
];

export default function Navbar() {
  const { scrollYProgress, scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [sparkleActive, setSparkleActive] = useState(false);
  const lastScrollY = useRef(0);

  // Auto-hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;
    if (latest < 80) {
      setVisible(true);
    } else if (diff > 10) {
      setVisible(false); // scrolling down
    } else if (diff < -10) {
      setVisible(true); // scrolling up
    }
    lastScrollY.current = latest;
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      (window as any).lenis?.scrollTo(el, { offset: -60, duration: 1.5 });
    }
  };

  const handleSparkleClick = () => {
    setSparkleActive(true);
    setTimeout(() => setSparkleActive(false), 1000);
  };

  return (
    <>
      {/* Scroll Progress Line at top of viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent-purple to-secondary z-[9999]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-[9998] flex items-center justify-between px-4 md:px-6 py-2.5 rounded-[99px] glass-panel shadow-lg shadow-pink-200/5"
          >
            {/* Logo area */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 md:gap-3 group hover-target"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/20 bg-accent-pink/30 flex-shrink-0">
                <img
                  src="/images/hero image.png"
                  alt="Alica Patel"
                  className="w-full h-full object-cover scale-110 object-top transition-transform duration-500 group-hover:scale-125"
                />
              </div>
              <span className="font-serif text-sm md:text-base tracking-[0.15em] font-medium text-text-main group-hover:text-primary transition-colors duration-300">
                ALICA
              </span>
            </a>

            {/* Middle Nav Items */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative px-2 py-1 text-xs uppercase tracking-[0.2em] font-sans font-medium text-text-muted hover:text-text-main transition-colors duration-300 hover-target"
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right side interactions */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Luxury Theme/Sparkle Toggle */}
              <button
                onClick={handleSparkleClick}
                className="w-9 h-9 rounded-full flex items-center justify-center text-text-muted hover:text-primary glass-pill hover-target relative overflow-hidden"
                aria-label="Toggle sparkles"
              >
                <motion.div
                  animate={sparkleActive ? { rotate: 360, scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <HiOutlineSparkles className="w-4 h-4" />
                </motion.div>
                {sparkleActive && (
                  <span className="absolute inset-0 bg-primary/5 animate-ping rounded-full" />
                )}
              </button>

              {/* Connect Call To Action */}
              <motion.a
                href="#connect"
                onClick={(e) => handleNavClick(e, "#connect")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 md:px-5 py-2 rounded-full bg-gradient-to-r from-primary to-primary-light text-white text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold font-sans shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover-target flex items-center gap-1.5"
              >
                <span>Connect</span>
                <FaRegEnvelope className="text-[10px] md:text-xs" />
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
