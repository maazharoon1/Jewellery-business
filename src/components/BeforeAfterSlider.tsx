import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useBusiness } from '../context/BusinessContext';

export const BeforeAfterSlider: React.FC = () => {
  const { config } = useBusiness();
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  return (
    <div className="w-full">
      <div
        id="before-after-container"
        ref={containerRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden select-none cursor-ew-resize border border-[#E5E1DA] rounded-sm shadow-xs bg-neutral-100"
      >
        {/* AFTER Image (Full background layer) */}
        <img
          src={config.afterImageUrl}
          alt="After Restoration"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* BEFORE Image (Clipped layer) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={config.beforeImageUrl}
            alt="Before Restoration"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%'
            }}
          />
        </div>

        {/* Minimal Labels Only: BEFORE / AFTER */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="px-3 py-1 bg-[#1A1A1A]/85 text-white backdrop-blur-xs text-[10px] tracking-[0.2em] uppercase font-sans rounded-xs">
            BEFORE
          </span>
        </div>

        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="px-3 py-1 bg-[#1A1A1A]/85 text-white backdrop-blur-xs text-[10px] tracking-[0.2em] uppercase font-sans rounded-xs">
            AFTER
          </span>
        </div>

        {/* Draggable Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Vertical Hairline */}
          <div className="w-[1.5px] h-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]" />

          {/* Minimalist Circular Grip Handle */}
          <div className="absolute w-8 h-8 rounded-full bg-white text-[#1A1A1A] border border-[#E5E1DA] shadow-md flex items-center justify-center text-[11px] font-sans">
            <span className="select-none leading-none">&harr;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
