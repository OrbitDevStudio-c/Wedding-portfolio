'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Compass, HelpCircle, RefreshCw } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  options: string[];
  aliciaAnswer: string;
}

const questions: Question[] = [
  { id: 'travel', text: 'Do you love traveling abroad?', options: ['Yes', 'No'], aliciaAnswer: 'Yes' },
  { id: 'beverage', text: 'Coffee or Tea?', options: ['Coffee', 'Tea'], aliciaAnswer: 'Coffee' },
  { id: 'dogs', text: 'Are you a dog lover?', options: ['Yes', 'No'], aliciaAnswer: 'Yes' },
  { id: 'fitness', text: 'Do you maintain a fitness routine?', options: ['Yes', 'No'], aliciaAnswer: 'Yes' },
  { id: 'cars', text: 'Are you interested in cars / motorsport?', options: ['Yes', 'No'], aliciaAnswer: 'Yes' },
  { id: 'movies', text: 'Do you enjoy sci-fi and drama movies?', options: ['Yes', 'No'], aliciaAnswer: 'Yes' },
  { id: 'books', text: 'Do you like reading books?', options: ['Yes', 'No'], aliciaAnswer: 'Yes' },
  { id: 'family', text: 'Do you put family first?', options: ['Yes', 'No'], aliciaAnswer: 'Yes' },
  { id: 'adventure', text: 'Are you up for spontaneous road trips?', options: ['Yes', 'No'], aliciaAnswer: 'Yes' },
];

export default function CompatibilityMeter() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [compatibility, setCompatibility] = useState<number | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswerSelect = (option: string) => {
    const qId = questions[currentIdx].id;
    const newAnswers = { ...answers, [qId]: option };
    setAnswers(newAnswers);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      let matches = 0;
      questions.forEach((q) => {
        if (newAnswers[q.id] === q.aliciaAnswer) {
          matches++;
        }
      });
      const score = Math.round((matches / questions.length) * 100);
      setCompatibility(score);
      setFinished(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCompatibility(null);
    setCurrentIdx(0);
    setFinished(false);
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return "A perfect match! You share Alica's love for travel, family, and active lifestyle. Let's connect!";
    if (score >= 50) return "Great compatibility! You share many core interests. Let's chat and discover more.";
    return "You have different lifestyles, but opposites attract! Let's connect and share details.";
  };

  return (
    <section id="compatibility" className="py-24 px-6 md:px-12 lg:px-24 bg-[#07111F] relative overflow-hidden">
      
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-pink/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-pink font-light">
            Interactive Test
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Compatibility Meter
          </h2>
          <div className="w-12 h-[1px] bg-pink mx-auto" />
        </div>

        {/* Quiz panel container */}
        <div className="max-w-lg mx-auto glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative min-h-[380px] flex flex-col justify-between overflow-hidden shadow-2xl bg-white/[0.01]">
          
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key="quiz-question"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 flex flex-col justify-between h-full"
              >
                {/* Stats */}
                <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-muted">
                  <span className="flex items-center gap-1">
                    <HelpCircle size={12} className="text-pink animate-pulse" /> Question {currentIdx + 1} of {questions.length}
                  </span>
                  <span>{Math.round((currentIdx / questions.length) * 100)}%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-[1.5px] bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-pink to-purple transition-all duration-300"
                    style={{ width: `${(currentIdx / questions.length) * 100}%` }}
                  />
                </div>

                {/* Text */}
                <h3 className="font-serif text-2xl font-light text-white text-center py-6 leading-relaxed">
                  {questions[currentIdx].text}
                </h3>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {questions[currentIdx].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswerSelect(option)}
                      className="px-6 py-4 rounded-2xl border border-white/5 bg-white/5 hover:border-pink/40 text-white font-sans text-[10px] uppercase tracking-widest font-medium transition-all duration-300 interactive-cursor shadow-sm hover:shadow-[0_10px_20px_-10px_rgba(248,200,220,0.15)]"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="quiz-result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center space-y-8 py-4 relative"
              >
                {/* Custom confettis */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {Array.from({ length: 15 }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: idx % 3 === 0 ? 'var(--primary-pink)' : idx % 3 === 1 ? 'var(--secondary-purple)' : 'var(--highlight-blue)',
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: [(Math.random() - 0.5) * 300, (Math.random() - 0.5) * 400],
                        y: [(Math.random() - 0.5) * 300, (Math.random() - 0.5) * 400],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.5, 0.5],
                      }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                    />
                  ))}
                </div>

                <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="65"
                      stroke="currentColor"
                      className="text-white/5"
                      strokeWidth="3"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="65"
                      stroke="currentColor"
                      className="text-pink"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 65}
                      initial={{ strokeDashoffset: 2 * Math.PI * 65 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 65 * (1 - (compatibility || 0) / 100) }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                    />
                  </svg>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
                    <span className="font-serif text-3xl font-light text-white">{compatibility}%</span>
                    <span className="text-[7px] uppercase tracking-widest text-muted">Compatible</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-light text-white tracking-wider">
                    Calculated Affinity
                  </h3>
                  <p className="text-xs text-muted font-sans font-light max-w-sm mx-auto leading-relaxed">
                    {getScoreMessage(compatibility || 0)}
                  </p>
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full border border-white/10 hover:border-pink/30 font-sans text-[9px] uppercase tracking-[0.2em] transition-all duration-300 interactive-cursor text-white flex items-center gap-1.5"
                  >
                    <RefreshCw size={10} /> Retake Test
                  </button>
                  {compatibility && compatibility >= 50 && (
                    <button
                      onClick={() => {
                        const contact = document.querySelector('#contact');
                        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 rounded-full bg-white hover:bg-pink text-black font-sans text-[9px] uppercase tracking-[0.2em] transition-all duration-300 shadow-md interactive-cursor"
                    >
                      Connect Now
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
