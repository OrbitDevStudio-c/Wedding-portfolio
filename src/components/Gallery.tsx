'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin } from 'lucide-react';

const filters = [
  'ALL',
  'Traditional',
  'Abroad',
  'Beach',
  'Mountain'
];

interface GalleryImage {
  label: string;
  src: string;
  location: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Traditional
  { label: 'Gujarati Heritage Saree • Jan 2026', src: '/images/traditonal image.png', location: 'Ahmedabad, Gujarat', category: 'Traditional' },
  { label: 'Royal Garba Night • Oct 2025', src: '/images/tradional image23.png', location: 'Baroda, Gujarat', category: 'Traditional' },
  { label: 'Mehndi Festivities • Dec 2025', src: '/images/tradional image2.png', location: 'Ahmedabad, Gujarat', category: 'Traditional' },
  { label: 'Diwali Glow • Nov 2025', src: '/images/tradional image.png', location: 'Ahmedabad, Gujarat', category: 'Traditional' },
  
  // Abroad
  { label: 'Parisian Autumn Walk • Nov 2025', src: '/images/europe 1.png', location: 'Paris, France', category: 'Abroad' },
  { label: 'Barcelona Sunsets • May 2025', src: '/images/europe 2.png', location: 'Barcelona, Spain', category: 'Abroad' },
  { label: 'Munich Square Cafe • Jun 2025', src: '/images/europe3.png', location: 'Munich, Germany', category: 'Abroad' },
  { label: 'Rome Colosseum Tour • Sep 2025', src: '/images/europe4.png', location: 'Rome, Italy', category: 'Abroad' },
  
  // Beach
  { label: 'Miami Beach Breeze • Jul 2025', src: '/images/beach1.png', location: 'Florida, USA', category: 'Beach' },
  { label: 'Infinity Blue Horizon • Feb 2026', src: '/images/beach2.png', location: 'Maldives', category: 'Beach' },
  { label: 'Seminyak Golden Hour • Aug 2025', src: '/images/beach3.png', location: 'Bali, Indonesia', category: 'Beach' },
  { label: 'Canggu Coastal Morning • Aug 2025', src: '/images/beach4.png', location: 'Bali, Indonesia', category: 'Beach' },
  
  // Mountain
  { label: 'Spiti Valley Trek • Aug 2025', src: '/images/himalaya 1.png', location: 'Spiti, India', category: 'Mountain' },
  { label: 'Zermatt Cabin Morning • Dec 2025', src: '/images/himalaya 2.png', location: 'Zermatt, Switzerland', category: 'Mountain' }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredImages = activeFilter === 'ALL'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Visual Gallery
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Filter Badges List */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {filters.map((f) => {
            const isSelected = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full font-sans text-[10px] uppercase tracking-widest font-medium transition-all duration-300 interactive-cursor border ${
                  isSelected
                    ? 'bg-pink border-pink text-[#07111F]'
                    : 'bg-white/5 border-white/5 text-white/80 hover:border-white/10 hover:bg-white/10'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Pinterest Masonry Grid using CSS Columns */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 max-w-5xl mx-auto pt-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.label}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative rounded-3xl overflow-hidden glass-panel p-2 border border-white/5 group cursor-pointer mb-6"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {/* Aspect ratios vary to give masonry feel */}
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Overlaid details */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/5 text-white transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="space-y-1 text-center">
                    <p className="font-serif text-sm tracking-wider font-light">{img.label}</p>
                    <div className="flex items-center gap-1 justify-center text-[8px] uppercase tracking-widest text-pink font-light">
                      <MapPin size={8} />
                      <span>{img.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
