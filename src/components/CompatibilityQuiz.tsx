"use strict";
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaChevronRight, FaSync } from "react-icons/fa";
import confetti from "canvas-confetti";

interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    text: string;
    points: { adventure: number; visionary: number; grounded: number };
  }[];
}

const quizQuestions: Question[] = [
  {
    id: 1,
    text: "What is your idea of a perfect weekend?",
    options: [
      { label: "A", text: "Sourcing design concepts & visiting art exhibits in Paris", points: { adventure: 2, visionary: 5, grounded: 0 } },
      { label: "B", text: "Backpacking under the stars in Spiti or Zermatt", points: { adventure: 5, visionary: 1, grounded: 1 } },
      { label: "C", text: "Espresso tasting at a quiet vintage library cafe", points: { adventure: 1, visionary: 2, grounded: 4 } },
      { label: "D", text: "Preparing a warm dinner for close family & cousins", points: { adventure: 0, visionary: 1, grounded: 5 } },
    ],
  },
  {
    id: 2,
    text: "Which trait is most important in a partner?",
    options: [
      { label: "A", text: "Deep emotional trust and absolute transparency", points: { adventure: 1, visionary: 2, grounded: 5 } },
      { label: "B", text: "Intense drive to build a career legacy", points: { adventure: 1, visionary: 5, grounded: 1 } },
      { label: "C", text: "A strong sense of cultural & traditional values", points: { adventure: 0, visionary: 1, grounded: 5 } },
      { label: "D", text: "Wanderlust and hunger to explore cultures", points: { adventure: 5, visionary: 2, grounded: 0 } },
    ],
  },
  {
    id: 3,
    text: "How do you align career and lifestyle?",
    options: [
      { label: "A", text: "Focused work on weekdays, total family detachment on weekends", points: { adventure: 1, visionary: 3, grounded: 4 } },
      { label: "B", text: "Integrating art, design, and travels into one creative workflow", points: { adventure: 4, visionary: 5, grounded: 0 } },
      { label: "C", text: "Aiming for a peaceful and warm home foundation first", points: { adventure: 0, visionary: 1, grounded: 5 } },
      { label: "D", text: "Flexible creative timelines with spontaneous road trips", points: { adventure: 5, visionary: 2, grounded: 1 } },
    ],
  },
];

export default function CompatibilityQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [resultType, setResultType] = useState("");
  const [matchPercent, setMatchPercent] = useState(0);

  const handleSelectOption = (index: number) => {
    const nextAnswers = [...answers, index];
    setAnswers(nextAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate Result
      let adventure = 0;
      let visionary = 0;
      let grounded = 0;

      nextAnswers.forEach((ansIdx, qIdx) => {
        const pts = quizQuestions[qIdx].options[ansIdx].points;
        adventure += pts.adventure;
        visionary += pts.visionary;
        grounded += pts.grounded;
      });

      let type = "";
      let percent = 0;

      if (visionary >= adventure && visionary >= grounded) {
        type = "The Visionary Partner";
        percent = Math.floor(Math.random() * (98 - 88 + 1) + 88); // 88% - 98%
      } else if (adventure >= visionary && adventure >= grounded) {
        type = "The Adventure Partner";
        percent = Math.floor(Math.random() * (97 - 87 + 1) + 87);
      } else {
        type = "The Grounded Partner";
        percent = Math.floor(Math.random() * (99 - 89 + 1) + 89);
      }

      setResultType(type);
      setMatchPercent(percent);
      setShowResult(true);

      // Trigger luxury confetti explosion
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F06292", "#FFB6C1", "#C084FC", "#A5D8FF"],
      });
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
    setResultType("");
    setMatchPercent(0);
  };

  const progress = ((currentStep + (showResult ? 1 : 0)) / quizQuestions.length) * 100;

  return (
    <section id="quiz" className="py-24 px-6 md:px-12 lg:px-24 bg-[#FFF7FB] relative overflow-hidden select-text">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-accent-pink/15 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-sans font-bold">Interactive Match</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-text-main mt-2">
            Compatibility <span className="italic text-primary">Quiz</span>
          </h2>
          <p className="text-sm text-text-muted font-light mt-3 max-w-md mx-auto leading-relaxed">
            Take a moment to align on values, lifestyle, and aesthetic viewpoints to see how our stories connect.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10 max-w-md mx-auto">
          <div className="flex justify-between items-center text-[9px] tracking-wider text-text-muted uppercase font-sans font-semibold mb-2">
            <span>Progress Indicator</span>
            <span className="font-mono text-[10px]">{Math.round(progress)}%</span>
          </div>
          <div className="h-[2px] w-full bg-primary/10 overflow-hidden relative">
            <motion.div
              className="h-full bg-primary"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Quiz Body */}
        <div className="relative min-h-[420px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full p-8 md:p-10 rounded-3xl glass-panel border border-primary/20 shadow-2xl flex flex-col justify-between h-full"
              >
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-primary uppercase font-bold">
                    Question {currentStep + 1} of {quizQuestions.length}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-text-main mt-3 mb-8">
                    {quizQuestions[currentStep].text}
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {quizQuestions[currentStep].options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleSelectOption(idx)}
                      className="w-full p-4 rounded-2xl glass-card border border-pink-200/20 text-left hover:border-primary/40 transition-colors duration-300 flex items-center gap-4 group hover-target"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 font-serif text-sm font-semibold flex-shrink-0">
                        {option.label}
                      </div>
                      <span className="text-xs sm:text-sm font-sans font-medium text-text-muted group-hover:text-text-main transition-colors duration-300 leading-snug">
                        {option.text}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              // RESULT SCREEN
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full p-10 md:p-12 rounded-3xl glass-panel border-2 border-primary/30 shadow-2xl text-center flex flex-col items-center justify-center relative overflow-hidden"
              >
                {/* Floating decor */}
                <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-primary/5 blur-xl pointer-events-none" />

                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-6 animate-pulse">
                  <FaCheckCircle className="w-7 h-7" />
                </div>

                <span className="text-[10px] tracking-[0.25em] uppercase text-text-muted font-sans font-bold">Calculation Completed</span>
                <h3 className="font-serif text-3xl md:text-4xl font-normal text-text-main mt-3 mb-2">
                  Match Alignment Found!
                </h3>
                
                {/* Alignment Score Badge */}
                <div className="my-6 py-2 px-6 rounded-full bg-gradient-to-r from-primary to-accent-purple text-white font-mono text-2xl font-extrabold tracking-wide inline-flex items-center gap-2 shadow-lg shadow-primary/20 animate-bounce">
                  <span>{matchPercent}%</span>
                  <span className="text-sm font-normal font-sans tracking-widest uppercase">Match</span>
                </div>

                <p className="text-sm text-text-muted font-light leading-relaxed max-w-md mb-8">
                  Your answers align with <span className="font-semibold text-text-main">{resultType}</span>. You appreciate {resultType === "The Visionary Partner" ? "career drive, high-concept design, and a life built on creative goals." : resultType === "The Adventure Partner" ? "traveling, landscape exploration, and building memories on road trips." : "traditional values, family roots, and a peaceful, structured home foundation."}
                </p>

                {/* Reset button */}
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-full bg-text-main text-white text-[10px] tracking-[0.2em] font-semibold uppercase hover:bg-primary transition-all duration-300 hover-target flex items-center gap-2"
                >
                  <FaSync className="text-[10px]" />
                  <span>Try Again</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
