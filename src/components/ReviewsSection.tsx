import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CLIENT_REVIEWS } from '../config/business';

export const ReviewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? CLIENT_REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === CLIENT_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const currentReview = CLIENT_REVIEWS[activeIndex];

  return (
    <section id="reviews" className="py-24 lg:py-32 px-6 md:px-12 bg-[#FDFCFB] border-b border-[#E5E1DA]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-2">
              Correspondence
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-[#1A1A1A] font-normal">
              Client Words
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-2">
            <button
              id="review-prev-btn"
              onClick={handlePrev}
              className="p-2 border border-[#E5E1DA] text-[#7A756D] hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors focus:outline-none"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4 stroke-[1.5]" />
            </button>
            <span className="text-[11px] font-serif italic tracking-widest text-[#7A756D] px-2">
              0{activeIndex + 1} / 0{CLIENT_REVIEWS.length}
            </span>
            <button
              id="review-next-btn"
              onClick={handleNext}
              className="p-2 border border-[#E5E1DA] text-[#7A756D] hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors focus:outline-none"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Minimalist Editorial Quote Card with Subtle Fade Transition */}
        <div className="min-h-[180px] sm:min-h-[160px] flex items-center p-8 sm:p-12 bg-white border border-[#E5E1DA] rounded-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full"
            >
              <blockquote className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-light leading-relaxed mb-6">
                “{currentReview.comment}”
              </blockquote>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[10px] uppercase tracking-[0.15em] text-[#7A756D]">
                <span className="font-medium text-[#1A1A1A]">{currentReview.clientName}</span>
                <span className="hidden sm:inline text-[#E5E1DA]">&bull;</span>
                <span className="text-[#7A756D] font-light">{currentReview.serviceType}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Discrete progress dots */}
        <div className="flex items-center space-x-2 mt-8">
          {CLIENT_REVIEWS.map((rev, idx) => (
            <button
              key={rev.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-[2px] transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-[#1A1A1A]' : 'w-3 bg-[#E5E1DA] hover:bg-neutral-400'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
