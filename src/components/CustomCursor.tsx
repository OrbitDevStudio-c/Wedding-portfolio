'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [magneticTarget, setMagneticTarget] = useState<DOMRect | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    
    const updateGlowPosition = () => {
      setGlowPosition((prev) => {
        let targetX = position.x;
        let targetY = position.y;

        if (magneticTarget) {
          targetX = magneticTarget.left + magneticTarget.width / 2;
          targetY = magneticTarget.top + magneticTarget.height / 2;
        }

        const dx = targetX - prev.x;
        const dy = targetY - prev.y;

        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateGlowPosition);
    };

    animationFrameId = requestAnimationFrame(updateGlowPosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, magneticTarget]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const magneticEl = target.closest('.magnetic-btn');
      if (magneticEl) {
        setMagneticTarget(magneticEl.getBoundingClientRect());
        setIsHovering(true);
      } else {
        setMagneticTarget(null);
        
        const isInteractive =
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'SELECT' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[role="button"]') ||
          target.classList.contains('interactive-cursor');

        setIsHovering(!!isInteractive);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny inner dot */}
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          backgroundColor: isHovering ? 'var(--primary-pink)' : 'var(--highlight-blue)',
        }}
      />
      {/* Outer magnetic glow circle */}
      <div
        className="custom-cursor-glow hidden md:block"
        style={{
          left: `${glowPosition.x}px`,
          top: `${glowPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? (magneticTarget ? 1.05 : 1.3) : 1})`,
          borderColor: isHovering ? 'var(--primary-pink)' : 'var(--secondary-purple)',
          backgroundColor: isHovering ? 'rgba(248, 200, 220, 0.04)' : 'transparent',
          width: magneticTarget ? `${magneticTarget.width + 12}px` : '44px',
          height: magneticTarget ? `${magneticTarget.height + 12}px` : '44px',
          borderRadius: magneticTarget ? '14px' : '50%',
        }}
      />
    </>
  );
}
