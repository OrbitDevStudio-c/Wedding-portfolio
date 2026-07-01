'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageCircle, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    relationship: 'Parent',
    contactNumber: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      relationship: 'Parent',
      contactNumber: '',
      email: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative overflow-hidden">
      
      {/* Decorative Grid Map Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#07111F_90%),linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Connection
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Let's Connect
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/5 space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-light text-white tracking-wider pb-3 border-b border-white/5">
                Direct Contact
              </h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:alicia.patel@fictional.com"
                  className="flex gap-4 items-center group text-white/80 hover:text-pink transition-colors duration-300 interactive-cursor"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-white/10 text-pink border border-white/5">
                    <Mail size={16} />
                  </div>
                  <span className="text-xs font-sans font-light tracking-wider">
                    alicia.patel@fictional.com
                  </span>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex gap-4 items-center group text-white/80 hover:text-pink transition-colors duration-300 interactive-cursor"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-white/10 text-pink border border-white/5">
                    <Phone size={16} />
                  </div>
                  <span className="text-xs font-sans font-light tracking-wider">
                    +91 98765 43210 (Family managed)
                  </span>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-4 items-center group text-white/80 hover:text-pink transition-colors duration-300 interactive-cursor"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-white/10 text-pink border border-white/5">
                    <MessageCircle size={16} />
                  </div>
                  <span className="text-xs font-sans font-light tracking-wider">
                    WhatsApp Message
                  </span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <p className="text-[9px] tracking-[0.25em] uppercase text-muted font-sans font-light">Social Profiles</p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/alicia_fictional"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full border border-white/5 hover:border-pink text-white hover:text-pink transition-all duration-300 interactive-cursor"
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
                  className="p-2.5 rounded-full border border-white/5 hover:border-pink text-white hover:text-pink transition-all duration-300 interactive-cursor"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/5 min-h-[460px]"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-xl font-light text-white tracking-wider pb-3 border-b border-white/5">
                    Marriage Inquiry Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-wider text-muted font-sans font-light">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-white/5 focus:border-pink/40 bg-white/5 text-white text-xs font-sans outline-none transition-colors"
                        placeholder="Your Name"
                      />
                    </div>

                    {/* Relationship */}
                    <div className="space-y-1.5">
                      <label htmlFor="relationship" className="text-[10px] uppercase tracking-wider text-muted font-sans font-light">
                        Relationship
                      </label>
                      <select
                        id="relationship"
                        value={formData.relationship}
                        onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-white/5 focus:border-pink/40 bg-[#07111F] text-white text-xs font-sans outline-none transition-colors interactive-cursor"
                      >
                        <option value="Parent">Parent</option>
                        <option value="Self">Self</option>
                        <option value="Sibling">Sibling</option>
                        <option value="Relative">Relative</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Contact Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[10px] uppercase tracking-wider text-muted font-sans font-light">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.contactNumber}
                        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-white/5 focus:border-pink/40 bg-white/5 text-white text-xs font-sans outline-none transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-muted font-sans font-light">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-white/5 focus:border-pink/40 bg-white/5 text-white text-xs font-sans outline-none transition-colors"
                        placeholder="name@email.com"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-muted font-sans font-light">
                      Introduction / Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/5 focus:border-pink/40 bg-white/5 text-white text-xs font-sans outline-none transition-colors resize-none"
                      placeholder="Write a brief introduction about your family and background..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-white hover:bg-pink text-black font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_15px_30px_-10px_rgba(248,200,220,0.2)] interactive-cursor"
                  >
                    <Send size={12} /> Send Inquiry
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 text-pink flex items-center justify-center border border-pink/20 animate-pulse-slow">
                    <Sparkles size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-light text-white">Inquiry Sent Successfully</h4>
                    <p className="text-xs text-muted font-sans font-light max-w-sm mx-auto leading-relaxed">
                      Thank you for your interest. Alica's family will review your message and details, and respond shortly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full border border-white/10 hover:border-pink/30 font-sans text-[10px] uppercase tracking-[0.2em] transition-all duration-300 interactive-cursor text-white"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
