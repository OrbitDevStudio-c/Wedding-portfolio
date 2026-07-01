"use strict";
"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

const cars = [
  {
    name: "Bugatti Tourbillon",
    isFavorite: true,
    bgImage: "/images/BUGATTI-World-Premiere-Presskit-Images-01-1.jpg",
    brand: "BUGATTI AUTOMOBILES",
  },
  {
    name: "Ferrari LaFerrari",
    isFavorite: false,
    bgImage: "/images/laferrari.jpg",
    brand: "FERRARI",
  },
];

export default function DreamGarage() {
  return (
    <section id="garage" className="py-20 px-6 md:px-12 lg:px-24 bg-[#FFF7FB] relative overflow-hidden select-text">
      {/* Ambient pink lights */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-accent-purple/5 blur-[90px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-sans font-bold">Aesthetic Inspiration</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-text-main mt-2">
            The Dream <span className="italic text-primary">Garage</span>
          </h2>
        </div>

        {/* 2 Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cars.map((car, idx) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
              className="relative h-[340px] rounded-3xl overflow-hidden glass-panel border border-pink-200/20 p-6 flex flex-col justify-between group shadow-xl hover-target"
            >
              {/* Car photo background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={car.bgImage}
                  alt={car.name}
                  className="w-full h-full object-cover object-center scale-102 transition-transform duration-700 ease-out group-hover:scale-106"
                />
                {/* Gradient shader */}
                <div className="absolute inset-0 bg-gradient-to-t from-text-main/80 via-text-main/20 to-transparent opacity-90" />
              </div>

              {/* Top Row: Favorite Badge */}
              <div className="z-10 flex justify-between items-start">
                {car.isFavorite ? (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-[9px] tracking-[0.2em] font-semibold uppercase shadow-md shadow-primary/20">
                    <FaStar className="text-[9px] animate-pulse" />
                    <span>Favorite Design</span>
                  </div>
                ) : (
                  <div />
                )}
              </div>

              {/* Bottom Row: Car name */}
              <div className="z-10 text-white mt-auto">
                <span className="text-[9px] tracking-[0.25em] uppercase text-secondary font-sans font-bold block">{car.brand}</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light mt-0.5">{car.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
