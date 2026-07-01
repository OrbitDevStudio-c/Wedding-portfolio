"use strict";
"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaExpand } from "react-icons/fa";

const categories = ["All", "Traditional", "Europe", "Beach", "Mountains", "Wedding", "Lifestyle"];

interface GalleryItem {
  id: number;
  category: string;
  image: string;
  location: string;
  date: string;
  caption: string;
  aspect: string; // for Pinterest masonry spacing
}

const items: GalleryItem[] = [
  {
    id: 1,
    category: "Traditional",
    image: "/images/traditonal image.png",
    location: "Udaipur, Rajasthan",
    date: "Nov 2024",
    caption: "Royal Rajputana couture project, exploring heritage gold embroideries.",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    category: "Europe",
    image: "/images/europe 1.png",
    location: "Paris, France",
    date: "Oct 2023",
    caption: "Autumn textures and neutral layering inspiration along the Seine.",
    aspect: "aspect-[2/3]",
  },
  {
    id: 3,
    category: "Beach",
    image: "/images/beach1.png",
    location: "Maafushi, Maldives",
    date: "Feb 2024",
    caption: "Chasing turquoise horizons and pristine white coral reefs.",
    aspect: "aspect-[4/5]",
  },
  {
    id: 4,
    category: "Mountains",
    image: "/images/himalaya 1.png",
    location: "Zermatt, Switzerland",
    date: "Jan 2023",
    caption: "Majestic view of Matterhorn, inspiring clean linear structural design.",
    aspect: "aspect-[3/4]",
  },
  {
    id: 5,
    category: "Wedding",
    image: "/images/tradional image2.png",
    location: "Ahmedabad, Gujarat",
    date: "Dec 2024",
    caption: "Traditional Gujarati Patola saree and bridal silk design elements.",
    aspect: "aspect-[4/5]",
  },
  {
    id: 6,
    category: "Europe",
    image: "/images/europe 2.png",
    location: "Barcelona, Spain",
    date: "Oct 2023",
    caption: "Gothic Quarter architectural lines and organic shadow palettes.",
    aspect: "aspect-[3/4]",
  },
  {
    id: 7,
    category: "Beach",
    image: "/images/beach2.png",
    location: "Santorini, Greece",
    date: "Sep 2023",
    caption: "Minimalist blue domes and whitewashed plaster textures.",
    aspect: "aspect-[2/3]",
  },
  {
    id: 8,
    category: "Mountains",
    image: "/images/himalaya 2.png",
    location: "Spiti Valley, India",
    date: "Jul 2024",
    caption: "Rugged textures and spiritual quietude of the cold desert.",
    aspect: "aspect-[4/5]",
  },
  {
    id: 9,
    category: "Traditional",
    image: "/images/tradional image23.png",
    location: "Jaipur, Rajasthan",
    date: "Nov 2024",
    caption: "Block print design research and pastel terracotta hues.",
    aspect: "aspect-[3/4]",
  },
  {
    id: 10,
    category: "Lifestyle",
    image: "/images/hero 2.png",
    location: "Studio Office, Ahmedabad",
    date: "May 2024",
    caption: "Quiet studio conceptualization hours before the runway show.",
    aspect: "aspect-[2/3]",
  },
  {
    id: 11,
    category: "Beach",
    image: "/images/beach3.png",
    location: "Ubud, Bali",
    date: "Jun 2022",
    caption: "Tropical canopy reflections and volcanic black sand beaches.",
    aspect: "aspect-[3/4]",
  },
  {
    id: 12,
    category: "Wedding",
    image: "/images/traditonal image.png",
    location: "Surat, India",
    date: "Dec 2024",
    caption: "Pastel Royal Lehenga showcase with customized hand-woven zardozi.",
    aspect: "aspect-[4/5]",
  },
  {
    id: 13,
    category: "Europe",
    image: "/images/europe3.png",
    location: "Berlin, Germany",
    date: "Sep 2023",
    caption: "Bauhaus structural shapes and urban aesthetic details.",
    aspect: "aspect-[3/4]",
  },
  {
    id: 14,
    category: "Beach",
    image: "/images/beach4.png",
    location: "South Beach, Florida",
    date: "Mar 2023",
    caption: "Art Deco hotel silhouettes and ocean breeze styling directions.",
    aspect: "aspect-[2/3]",
  },
  {
    id: 15,
    category: "Europe",
    image: "/images/europe4.png",
    location: "Venice, Italy",
    date: "Oct 2023",
    caption: "Quiet gondola ripples and warm terracotta brick backdrops.",
    aspect: "aspect-[4/5]",
  },
  {
    id: 16,
    category: "Lifestyle",
    image: "/images/hero image.png",
    location: "Luxury Hotel, Mumbai",
    date: "Apr 2024",
    caption: "Creative direction session discussing the spring fabrics line.",
    aspect: "aspect-[3/4]",
  },
];

// Interactive Image Tilt Component
function TiltCard({ item }: { item: GalleryItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({ transform: "rotateX(0deg) rotateY(0deg)" });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Coordinates from -0.5 to 0.5 relative to card center
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    
    // Rotate amount: max 12 degrees
    const rotateY = x * 15;
    const rotateX = -y * 15;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full ${item.aspect} rounded-3xl overflow-hidden glass-panel border border-pink-200/20 p-2.5 shadow-md hover-target group mb-5`}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-bg-base">
        {/* Soft pink highlight filter */}
        <div className="absolute inset-0 bg-gradient-to-t from-text-main/70 via-transparent to-transparent opacity-70 z-10 transition-opacity duration-300 group-hover:opacity-85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F06292]/10 via-transparent to-transparent opacity-30 z-10 pointer-events-none" />

        <img
          src={item.image}
          alt={item.caption}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Hover Expand Icon */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
          <FaExpand className="text-[10px]" />
        </div>

        {/* Info card (animated slide-up on hover) */}
        <div className="absolute bottom-4 left-4 right-4 z-20 text-white flex flex-col gap-1.5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <div className="flex items-center gap-3 text-[9px] tracking-wider uppercase text-secondary font-bold">
            <span className="flex items-center gap-1"><FaMapMarkerAlt /> {item.location}</span>
            <span className="flex items-center gap-1"><FaCalendarAlt /> {item.date}</span>
          </div>
          
          <h4 className="font-serif text-base sm:text-lg font-light leading-snug">
            {item.category} Story
          </h4>

          <p className="text-[10px] text-white/80 font-light leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:max-h-[60px] group-hover:opacity-100 transition-all duration-500 ease-out">
            {item.caption}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TravelMemories() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" ? items : items.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 lg:px-24 bg-[#FFF7FB] relative overflow-hidden select-text">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-accent-purple/10 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-sans font-bold">Pinterest Curation</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-text-main mt-2">
            Travel <span className="italic text-primary">Memories</span>
          </h2>
          <p className="text-sm text-text-muted font-light mt-3 max-w-md mx-auto leading-relaxed">
            Snapshots of architecture, coastlines, and styling details that capture my aesthetic.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider font-sans uppercase transition-all duration-300 hover-target ${
                filter === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white/45 glass-pill text-text-muted hover:text-text-main"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest Column Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <TiltCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
