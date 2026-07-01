"use strict";
"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaRegEnvelope, FaChevronUp } from "react-icons/fa";

export default function Footer() {
  const handleScrollToTop = () => {
    (window as any).lenis?.scrollTo("#home", { duration: 2 });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Garage", href: "#garage" },
    { label: "Journeys", href: "#travel" },
    { label: "Quiz", href: "#quiz" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      (window as any).lenis?.scrollTo(el, { offset: -60, duration: 1.5 });
    }
  };

  return (
    <footer className="pt-20 pb-10 px-6 md:px-12 lg:px-24 bg-[#FFF7FB] relative overflow-hidden select-text border-t border-primary/5">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Animated Divider */}
        <div className="w-full relative h-[1px] bg-primary/10 overflow-hidden mb-16">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-primary/45 to-transparent"
          />
        </div>

        {/* Closing Quote */}
        <div className="text-center max-w-2xl mb-12">
          <blockquote className="font-serif text-2xl sm:text-3xl font-light text-text-main italic">
            "To build something beautiful, one must first believe in the possibility of it."
          </blockquote>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="w-6 h-[1px] bg-primary/20" />
            <span className="text-[9px] tracking-[0.25em] text-text-muted uppercase font-sans font-medium">Alica's Creed</span>
            <span className="w-6 h-[1px] bg-primary/20" />
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[10px] tracking-[0.2em] font-semibold text-text-muted hover:text-primary uppercase font-sans transition-colors duration-300 hover-target"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Top Scroll button */}
        <button
          onClick={handleScrollToTop}
          className="w-10 h-10 rounded-full border border-primary/25 bg-white/45 backdrop-blur-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover-target shadow-md hover:-translate-y-1 mb-10"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="w-3.5 h-3.5" />
        </button>

        {/* Creator Brand Sign-off */}
        <div className="flex flex-col items-center gap-2 mb-10">
          <span className="text-[8px] tracking-[0.25em] text-text-muted uppercase font-sans font-bold">CREATED BY</span>
          <div className="flex items-center gap-3">
            <img
              src="/images/orbitdevstuido logo.png"
              alt="orbitDevStudio Logo"
              className="h-7 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
            <span className="font-serif text-sm tracking-widest text-text-main font-semibold">
              orbitDevStudio
            </span>
          </div>
        </div>

        {/* Footer Base Info */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest text-text-muted/70 font-sans uppercase border-t border-primary/5 pt-10">
          <div>
            <span>ALICA PATEL &bull; MATRIMONIAL PORTFOLIO &bull; EDITION 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:alicapatel44@gmail.com"
              className="hover:text-primary transition-colors duration-300 hover-target"
            >
              Email
            </a>
            <a
              href="https://instagram.com/patel44.a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300 hover-target"
            >
              Instagram
            </a>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
