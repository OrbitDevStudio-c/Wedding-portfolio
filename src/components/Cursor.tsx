"use strict";
"use client";

import { useEffect, useState, useRef } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  
  // Target position tracking
  const mouseRef = useRef({ x: 0, y: 0 });
  // Current interpolated position for the glow (lag effect)
  const glowPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Dynamic hover detection for interactive components
    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    const updateHoverListeners = () => {
      const targets = document.querySelectorAll('button, a, input, select, textarea, [role="button"], .hover-target');
      targets.forEach((target) => {
        target.addEventListener("mouseenter", handleHoverStart);
        target.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    // Initial setup
    updateHoverListeners();

    // Create a MutationObserver to listen to new interactive nodes in the DOM
    const observer = new MutationObserver(() => {
      updateHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Smooth LERP loop for the outer glow cursor
    let animationFrameId: number;
    const lerp = () => {
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;
      
      // Interpolate current position towards target (0.15 is the lerp factor)
      glowPosRef.current.x += (targetX - glowPosRef.current.x) * 0.15;
      glowPosRef.current.y += (targetY - glowPosRef.current.y) * 0.15;

      if (glowRef.current) {
        glowRef.current.style.left = `${glowPosRef.current.x}px`;
        glowRef.current.style.top = `${glowPosRef.current.y}px`;
      }
      
      if (dotRef.current) {
        dotRef.current.style.left = `${targetX}px`;
        dotRef.current.style.top = `${targetY}px`;
      }

      animationFrameId = requestAnimationFrame(lerp);
    };

    animationFrameId = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      
      const targets = document.querySelectorAll('button, a, input, select, textarea, [role="button"], .hover-target');
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", handleHoverStart);
        target.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        ref={glowRef}
        className={`custom-cursor-glow ${isHovered ? "custom-cursor-hover" : ""}`}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="custom-cursor"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
