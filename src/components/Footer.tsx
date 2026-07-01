'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 bg-[#07111F] relative z-10">
      
      {/* Glowing divider line */}
      <div className="max-w-5xl mx-auto h-[1px] bg-gradient-to-r from-pink/5 via-pink/30 to-purple/5 mb-12" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Monogram link */}
        <div className="space-y-2">
          <a
            href="#"
            onClick={handleScrollToTop}
            className="font-serif text-xl tracking-[0.25em] text-white hover:text-pink transition-colors"
          >
            ALICA
          </a>
          <p className="text-[10px] text-muted font-sans font-light tracking-[0.2em] uppercase">
            Sometimes the best journeys begin with one hello.
          </p>
        </div>

        {/* Social Icons row */}
        <div className="flex gap-4">
          <a
            href="https://instagram.com/alicia_fictional"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-pink text-white hover:text-pink transition-all duration-300"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/alicia_fictional"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-pink text-white hover:text-pink transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-pink text-white hover:text-pink transition-all duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle size={15} />
          </a>
        </div>

      </div>

      <div className="max-w-5xl mx-auto text-center md:text-left text-[9px] uppercase tracking-[0.25em] text-muted/50 mt-12 border-t border-white/[0.02] pt-6">
        <p>© 2026 Alica Patel. Premium Editorial Matrimonial Portfolio.</p>
      </div>

    </footer>
  );
}
