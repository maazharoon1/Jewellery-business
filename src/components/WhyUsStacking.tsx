import React from 'react';
import { WHY_US_CARDS } from '../config/business';

export const WhyUsStacking: React.FC = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 px-6 md:px-12 bg-[#FDFCFB] border-b border-[#E5E1DA]">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-2">
            The Standards
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1A1A1A] font-normal">
            Why Choose Us
          </h2>
        </div>

        {/* 3 Progressive Stacking Cards - Sticky positioning active on desktop, tablet, and mobile */}
        <div className="relative space-y-8 pb-12">
          {WHY_US_CARDS.map((card, idx) => {
            // Progressive sticky offsets so earlier card headers remain slightly visible
            const stickyTopClass =
              idx === 0
                ? 'top-[96px] sm:top-[108px]'
                : idx === 1
                ? 'top-[128px] sm:top-[144px]'
                : 'top-[160px] sm:top-[180px]';

            return (
              <div
                key={card.id}
                id={`stacking-card-${card.id}`}
                className={`sticky ${stickyTopClass} rounded-sm border border-[#E5E1DA] p-8 sm:p-12 bg-white shadow-xs transition-all duration-300`}
                style={{
                  zIndex: 10 + idx,
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#E5E1DA] pb-6 mb-6">
                  <span className="font-serif italic text-2xl sm:text-3xl text-[#7A756D]">
                    {card.number}.
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight font-normal">
                    {card.title}
                  </h3>
                </div>

                <p className="text-[14px] text-[#4A4742] font-normal leading-relaxed max-w-xl">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
