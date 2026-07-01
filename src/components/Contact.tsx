"use strict";
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaRegEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", intro: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", intro: "" });
    }, 3000);
  };

  return (
    <section id="connect" className="py-24 px-6 md:px-12 lg:px-24 bg-[#FFF7FB] relative overflow-hidden select-text">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] rounded-full bg-secondary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[350px] h-[350px] rounded-full bg-accent-purple/10 blur-[110px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN: Invitation & Social Info */}
        <div className="lg:col-span-5 text-left">
          <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-sans font-bold">Inquire</span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-text-main mt-2 leading-[1.1]">
            Let's build <br className="hidden md:inline" />
            a <span className="italic text-primary">beautiful</span> future
          </h2>
          <p className="text-sm text-text-muted font-light mt-4 max-w-sm leading-relaxed mb-10">
            If our values, lifestyle, and stories resonate with you, I would love to connect and start a conversation.
          </p>

          {/* Social connections */}
          <div className="flex flex-col gap-4 max-w-xs">
            <a
              href="mailto:alicapatel44@gmail.com"
              className="p-4 rounded-2xl glass-card flex items-center gap-4 hover-target border border-pink-200/20 group"
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <FaRegEnvelope className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[9px] tracking-wider text-text-muted uppercase font-sans font-bold">Email Address</p>
                <p className="text-xs sm:text-sm font-semibold text-text-main">alicapatel44@gmail.com</p>
              </div>
            </a>

            <a
              href="https://instagram.com/patel44.a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl glass-card flex items-center gap-4 hover-target border border-pink-200/20 group"
            >
              <div className="w-9 h-9 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-colors duration-300">
                <FaInstagram className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[9px] tracking-wider text-text-muted uppercase font-sans font-bold">Instagram</p>
                <p className="text-xs sm:text-sm font-semibold text-text-main">@patel44.a</p>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <div className="lg:col-span-7 relative">
          {/* Animated decorative shapes */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-primary/10 animate-float" />
          <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full border border-accent-purple/10 animate-float-slow" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 md:p-10 rounded-3xl glass-panel border border-primary/20 shadow-2xl relative"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-4 animate-bounce">
                  <FaPaperPlane className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-light text-text-main">Message Received</h3>
                <p className="text-xs text-text-muted font-light max-w-xs mt-2 leading-relaxed">
                  Thank you for introducing yourself. I will review your profile and get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-text-main">Introduce Yourself</h3>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest mt-1">Matrimonial Inquiry</p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[9px] tracking-wider text-text-muted uppercase font-bold font-sans">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full p-3.5 rounded-xl bg-white/20 border border-pink-200/30 text-text-main text-sm focus:border-primary/50 focus:outline-none transition-colors duration-300 font-sans"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[9px] tracking-wider text-text-muted uppercase font-bold font-sans">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full p-3.5 rounded-xl bg-white/20 border border-pink-200/30 text-text-main text-sm focus:border-primary/50 focus:outline-none transition-colors duration-300 font-sans"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="intro" className="text-[9px] tracking-wider text-text-muted uppercase font-bold font-sans">
                    Your Story & Profession
                  </label>
                  <textarea
                    id="intro"
                    rows={4}
                    value={formState.intro}
                    onChange={(e) => setFormState({ ...formState, intro: e.target.value })}
                    placeholder="Tell me a bit about your values, career, hobbies, and dreams..."
                    className="w-full p-3.5 rounded-xl bg-white/20 border border-pink-200/30 text-text-main text-sm focus:border-primary/50 focus:outline-none transition-colors duration-300 font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white text-xs font-semibold tracking-widest uppercase hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover-target flex items-center justify-center gap-2 mt-2"
                >
                  <span>Send Connection Request</span>
                  <FaPaperPlane className="text-[10px]" />
                </button>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
