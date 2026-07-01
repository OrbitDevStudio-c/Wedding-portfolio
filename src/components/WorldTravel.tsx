"use strict";
"use client";

import React, { useState, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker, useMapContext, ZoomableGroup } from "react-simple-maps";
import { FaPlane, FaGlobe, FaCompass, FaStar } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import Image from "next/image";

// GeoJSON topology URL
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Origin coordinates (Ahmedabad, India)
const origin: [number, number] = [72.5714, 23.0225];

interface Destination {
  name: string;
  city: string;
  flag: string;
  year?: string;
  coordinates: [number, number];
  isDream: boolean;
  thumbnail: string;
  notes: string;
}

const visitedDestinations: Destination[] = [
  { name: "USA", city: "Miami, Florida", flag: "🇺🇸", year: "2023", coordinates: [-80.1918, 25.7617], isDream: false, thumbnail: "/images/beach4.png", notes: "Art Deco hotel studies & coastal fashion edits." },
  { name: "France", city: "Paris", flag: "🇫🇷", year: "2023", coordinates: [2.3522, 48.8566], isDream: false, thumbnail: "/images/europe 1.png", notes: "Autumn couture collections & architecture studies." },
  { name: "Maldives", city: "Maafushi Islands", flag: "🇲🇻", year: "2024", coordinates: [73.5089, 3.2028], isDream: false, thumbnail: "/images/beach1.png", notes: "Pristine beaches, turquoise horizons & warm tranquility." },
  { name: "Germany", city: "Munich", flag: "🇩🇪", year: "2025", coordinates: [10.4515, 51.1657], isDream: false, thumbnail: "/images/europe3.png", notes: "Classic Bauhaus structures & engineering aesthetics." },
  { name: "Switzerland", city: "Zermatt", flag: "🇨🇭", year: "2024", coordinates: [7.7491, 46.0207], isDream: false, thumbnail: "/images/himalaya 1.png", notes: "Matterhorn alpine peaks & clean minimalist design." },
  { name: "Dubai", city: "United Arab Emirates", flag: "🇦🇪", year: "2025", coordinates: [55.2708, 25.2048], isDream: false, thumbnail: "/images/hero image.png", notes: "Haute couture runway showcases & modern silhouettes." },
];

const dreamDestinations: Destination[] = [
  { name: "Japan", city: "Tokyo & Kyoto", flag: "🇯🇵", coordinates: [139.6917, 35.6762], isDream: true, thumbnail: "/images/tradional image23.png", notes: "Cherry blossoms, traditional silk weavers & gardens." },
  { name: "South Africa", city: "Cape Town", flag: "🇿🇦", coordinates: [18.4241, -33.9249], isDream: true, thumbnail: "/images/beach2.png", notes: "Table Mountain safaris, coastal textures & reserve walks." },
  { name: "Brazil", city: "Rio de Janeiro", flag: "🇧🇷", coordinates: [-43.1729, -22.9068], isDream: true, thumbnail: "/images/beach3.png", notes: "Copacabana waves, Christ the Redeemer & vibrant palettes." },
];

// Memoized Flight Route Line component to optimize rendering performance
const FlightRoute = React.memo(function FlightRoute({
  origin,
  destination,
  isSelected,
}: {
  origin: [number, number];
  destination: [number, number];
  isSelected: boolean;
}) {
  const { projection } = useMapContext();
  
  if (!projection) return null;
  
  const [x1, y1] = projection(origin);
  const [x2, y2] = projection(destination);
  
  // Create Bezier curve control points
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - 35; // Curve upwards
  
  const pathD = `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;

  return (
    <g>
      {/* Animated route path */}
      <motion.path
        d={pathD}
        stroke={isSelected ? "#F06292" : "rgba(240, 98, 146, 0.2)"}
        strokeWidth={isSelected ? 2 : 1}
        strokeDasharray="4 3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />
      {/* Native CSS animated chevron airplane along path */}
      <path
        d="M -3.5,-2.5 L 4.5,0 L -3.5,2.5 L -2,0 Z"
        fill={isSelected ? "#F06292" : "#FFB6C1"}
      >
        <animateMotion
          path={pathD}
          dur={isSelected ? "4.5s" : "7s"}
          repeatCount="indefinite"
          rotate="auto"
        />
      </path>
    </g>
  );
});

export default function WorldTravel() {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
  const [hoveredDest, setHoveredDest] = useState<Destination | null>(null);
  const [position, setPosition] = useState({ center: [10, 20], zoom: 1 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!mapContainerRef.current) return;
    const rect = mapContainerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const selectDestination = useCallback((dest: Destination) => {
    setSelectedDest((prev) => {
      if (prev?.name === dest.name) {
        setPosition({ center: [10, 20], zoom: 1 });
        return null;
      } else {
        setPosition({ center: dest.coordinates, zoom: 2.2 });
        return dest;
      }
    });
  }, []);

  // Filter map Geographies to only render when in view to reduce main-thread rendering lag
  const mapGeographies = useMemo(() => {
    return (
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="rgba(240, 98, 146, 0.16)"
              stroke="rgba(240, 98, 146, 0.35)"
              strokeWidth={0.5}
              style={{
                default: { outline: "none" },
                hover: { fill: "rgba(240, 98, 146, 0.28)", outline: "none" },
                pressed: { fill: "rgba(240, 98, 146, 0.35)", outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
    );
  }, []);

  return (
    <section id="travel" className="py-24 px-6 md:px-12 lg:px-24 bg-[#FFF7FB] relative overflow-hidden select-text">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-secondary/10 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-sans font-bold">Journeys</span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-text-main mt-2">
            World <span className="italic text-primary">Journey</span>
          </h2>
          <p className="text-sm text-text-muted font-light mt-3 max-w-md mx-auto leading-relaxed">
            "Every destination tells a story."
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT (70%): Giant Interactive World Map */}
          <div
            ref={mapContainerRef}
            onMouseMove={handleMouseMove}
            className="lg:col-span-8 rounded-[32px] glass-panel border border-pink-200/20 shadow-2xl p-6 overflow-hidden bg-white/20 relative flex flex-col justify-center items-center select-none"
            style={{ height: "520px" }}
          >
            {/* Top Info Hub Tag */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-2 text-[9px] tracking-[0.2em] text-text-muted uppercase font-sans font-bold bg-white/50 px-3.5 py-1.5 rounded-full border border-pink-200/15 shadow-sm">
              <FaCompass className="text-primary animate-spin-slow" />
              <span>Base Hub: Ahmedabad, India</span>
            </div>

            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{
                scale: 160,
                rotate: [-10, 0, 0],
              }}
              style={{ width: "100%", height: "100%" }}
            >
              <ZoomableGroup
                zoom={position.zoom}
                center={position.center as [number, number]}
                onMoveEnd={(pos: any) => setPosition(pos)}
                filterZoomEvent={(e: any) => e}
              >
                {/* Geographies */}
                {mapGeographies}

                {/* Dotted lines from India to all Visited Destinations */}
                {visitedDestinations.map((dest) => (
                  <FlightRoute
                    key={dest.name}
                    origin={origin}
                    destination={dest.coordinates}
                    isSelected={selectedDest?.name === dest.name}
                  />
                ))}

                {/* Base Marker (Ahmedabad, India) */}
                <Marker coordinates={origin}>
                  <circle r={5} fill="#F06292" stroke="#FFF" strokeWidth={1.5} />
                  <circle r={10} fill="none" stroke="#F06292" strokeWidth={0.5} className="animate-ping" />
                </Marker>

                {/* Visited Locations Markers (Pink) */}
                {visitedDestinations.map((dest) => {
                  const isHovered = hoveredDest?.name === dest.name;
                  const isSelected = selectedDest?.name === dest.name;
                  return (
                    <Marker
                      key={dest.name}
                      coordinates={dest.coordinates}
                      onMouseEnter={() => setHoveredDest(dest)}
                      onMouseLeave={() => setHoveredDest(null)}
                      onClick={() => selectDestination(dest)}
                    >
                      <g className="cursor-pointer">
                        <circle
                          r={isSelected || isHovered ? 8 : 4.5}
                          fill="#F06292"
                          stroke="#FFF"
                          strokeWidth={1.5}
                          className="transition-all duration-300"
                        />
                        <circle
                          r={14}
                          fill="none"
                          stroke="#F06292"
                          strokeWidth={1}
                          className="animate-ping opacity-60"
                        />
                      </g>
                    </Marker>
                  );
                })}

                {/* Dream Locations Markers (Purple) */}
                {dreamDestinations.map((dest) => {
                  const isHovered = hoveredDest?.name === dest.name;
                  const isSelected = selectedDest?.name === dest.name;
                  return (
                    <Marker
                      key={dest.name}
                      coordinates={dest.coordinates}
                      onMouseEnter={() => setHoveredDest(dest)}
                      onMouseLeave={() => setHoveredDest(null)}
                      onClick={() => selectDestination(dest)}
                    >
                      <g className="cursor-pointer">
                        <circle
                          r={isSelected || isHovered ? 8 : 4.5}
                          fill="#C084FC"
                          stroke="#FFF"
                          strokeWidth={1.5}
                          className="transition-all duration-300"
                        />
                        <circle
                          r={14}
                          fill="none"
                          stroke="#C084FC"
                          strokeWidth={1}
                          className="animate-ping opacity-50"
                        />
                      </g>
                    </Marker>
                  );
                })}
              </ZoomableGroup>
            </ComposableMap>

            {/* Floating Glass Tooltip */}
            <AnimatePresence>
              {hoveredDest && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute z-30 pointer-events-none p-3.5 rounded-2xl glass-panel border border-primary/20 shadow-lg flex flex-col gap-1 text-text-main"
                  style={{ left: mousePos.x + 16, top: mousePos.y - 16 }}
                >
                  <div className="flex items-center gap-1.5 font-bold">
                    <span>{hoveredDest.flag}</span>
                    <span>{hoveredDest.name}</span>
                  </div>
                  <span className="text-[10px] text-text-muted">{hoveredDest.city}</span>
                  <span className="text-[9px] text-primary/80 font-mono mt-0.5 uppercase tracking-wider font-semibold">
                    {hoveredDest.isDream ? "Dream Destination" : `Visited: ${hoveredDest.year}`}
                  </span>
                  {hoveredDest.notes && (
                    <span className="text-[9px] italic text-text-muted mt-0.5 border-t border-primary/5 pt-1">
                      {hoveredDest.notes}
                    </span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT (30%): Sidebar Dashboard */}
          <div className="lg:col-span-4 flex flex-col gap-6 max-h-[520px] overflow-y-auto pr-1">
            
            {/* Stats Panel */}
            <div className="p-5 rounded-3xl glass-card border border-pink-200/25 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <IoStatsChart className="text-primary text-sm" />
                <h3 className="font-serif text-base font-light text-text-main">Travel Stats</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/30 rounded-xl p-3 border border-pink-200/10 text-center">
                  <span className="text-[9px] tracking-wider text-text-muted uppercase block font-sans">Countries</span>
                  <span className="text-base font-bold text-text-main mt-0.5 block">6</span>
                </div>
                <div className="bg-white/30 rounded-xl p-3 border border-pink-200/10 text-center">
                  <span className="text-[9px] tracking-wider text-text-muted uppercase block font-sans">Dream Spots</span>
                  <span className="text-base font-bold text-accent-purple mt-0.5 block">3</span>
                </div>
                <div className="bg-white/30 rounded-xl p-3 border border-pink-200/10 text-center">
                  <span className="text-[9px] tracking-wider text-text-muted uppercase block font-sans">Flights</span>
                  <span className="text-base font-bold text-text-main mt-0.5 block">28+</span>
                </div>
                <div className="bg-white/30 rounded-xl p-3 border border-pink-200/10 text-center">
                  <span className="text-[9px] tracking-wider text-text-muted uppercase block font-sans">Favorite</span>
                  <span className="text-[10px] font-bold text-primary mt-1.5 block truncate uppercase tracking-widest">Maldives</span>
                </div>
              </div>
            </div>

            {/* Visited Destinations Timeline list */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaPlane className="text-primary text-sm -rotate-45" />
                <h3 className="font-serif text-base font-light text-text-main">Visited timeline</h3>
              </div>
              <div className="flex flex-col gap-2.5">
                {visitedDestinations.map((dest) => {
                  const isSelected = selectedDest?.name === dest.name;
                  return (
                    <button
                      key={dest.name}
                      onClick={() => selectDestination(dest)}
                      className={`w-full p-2.5 rounded-2xl text-left border flex items-center justify-between hover-target transition-all duration-300 ${
                        isSelected
                          ? "bg-primary/10 border-primary shadow-sm"
                          : "bg-white/45 glass-card border-pink-200/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-pink-200/10 bg-bg-base flex-shrink-0">
                          <Image
                            src={dest.thumbnail}
                            alt={dest.city}
                            width={36}
                            height={36}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px]">{dest.flag}</span>
                            <h4 className="text-[11px] font-bold text-text-main leading-none">{dest.city}</h4>
                          </div>
                          <span className="text-[9px] text-text-muted mt-0.5 block leading-none">{dest.name}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-bold text-primary tracking-wider bg-primary/10 px-1.5 py-0.5 rounded uppercase font-sans">
                          Visited
                        </span>
                        <span className="font-mono text-[9px] text-text-muted bg-white/60 px-1.5 py-0.5 rounded">
                          {dest.year}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Redesigned Dream Destinations Cards */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaGlobe className="text-accent-purple text-sm" />
                <h3 className="font-serif text-base font-light text-text-main">Dream destinations</h3>
              </div>
              <div className="flex flex-col gap-3">
                {dreamDestinations.map((dest) => {
                  const isSelected = selectedDest?.name === dest.name;
                  return (
                    <button
                      key={dest.name}
                      onClick={() => selectDestination(dest)}
                      className={`w-full relative rounded-2xl overflow-hidden border p-4 text-left transition-all duration-300 hover-target ${
                        isSelected
                          ? "border-accent-purple bg-accent-purple/10 shadow-md"
                          : "bg-white/45 glass-card border-pink-200/20"
                      }`}
                    >
                      {/* Background Thumbnail Image Overlay */}
                      <div className="absolute right-0 top-0 bottom-0 w-24 opacity-25 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF7FB] via-[#FFF7FB]/40 to-transparent z-10" />
                        <Image
                          src={dest.thumbnail}
                          alt={dest.city}
                          width={96}
                          height={96}
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      <div className="relative z-10 flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs">{dest.flag}</span>
                            <h4 className="text-xs font-bold text-text-main">{dest.city}</h4>
                          </div>
                          <span className="text-[8px] font-bold text-accent-purple tracking-widest bg-accent-purple/10 px-1.5 py-0.5 rounded uppercase font-sans animate-pulse">
                            DREAMING
                          </span>
                        </div>
                        <p className="text-[10px] text-text-muted font-light leading-relaxed max-w-[200px]">
                          {dest.notes}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
