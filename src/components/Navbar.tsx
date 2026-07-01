'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Story', href: '#about' },
  { name: 'Facts', href: '#facts' },
  { name: 'Garage', href: '#garage' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Test', href: '#compatibility' },
  { name: 'Expectations', href: '#expectations' },
  { name: 'Connect', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Detect active section
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = top + rect.height;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(item.href.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 transition-all duration-500 rounded-full ${
          scrolled
            ? 'py-3.5 px-8 bg-[#07111F]/70 backdrop-blur-lg border border-white/10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.4)]'
            : 'py-6 px-4 bg-transparent border-transparent'
        }`}
      >
        <div className="flex justify-between items-center relative">
          
          {/* Logo Monogram */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="font-serif text-xl tracking-[0.25em] text-white hover:text-pink transition-colors relative"
          >
            Alica Patel
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[10px] uppercase tracking-[0.25em] relative py-1 transition-colors duration-300 font-sans font-light interactive-cursor text-white/80 hover:text-pink"
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-line"
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-pink to-purple"
                    />
                  )}
                </a>
              );
            })}

            {/* Light/Dark mode switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 hover:border-pink/30 bg-white/5 text-white transition-all duration-300 interactive-cursor magnetic-btn"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 bg-white/5 text-white transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress line wrapping */}
        <div className="absolute bottom-0 left-[10%] right-[10%] h-[1.5px] bg-white/5 overflow-hidden rounded-full">
          <div
            className="h-full bg-gradient-to-r from-pink via-purple to-blue transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#07111F]/95 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col space-y-6 text-center">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-serif text-3xl tracking-widest text-white hover:text-pink block py-2 transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
