import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../config/business';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { GalleryItem } from '../types';

const CATEGORIES = ['All', 'Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Custom Pieces', 'Details'] as const;

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLightboxIndex, setSelectedLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full py-16 sm:py-24 px-6 md:px-12 bg-[#FDFCFB]">
      <div className="max-w-6xl mx-auto space-y-20 sm:space-y-24">
        {/* Gallery Header */}
        <div className="max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-2">
            Visual Archive
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] tracking-tight font-normal mb-3">
            Gallery
          </h1>
          <p className="text-[14px] text-[#4A4742] font-normal leading-relaxed">
            An editorial study of forms, light, archival pieces, and tailored bespoke commissions.
          </p>
        </div>

        {/* Before / After Restoration Section with Draggable Slider */}
        <div className="space-y-6 pt-4 border-t border-[#E5E1DA]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-1">
                Atelier Benchwork
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal">
                Restoration Study
              </h2>
            </div>
            <p className="text-[11px] text-[#7A756D] font-normal">
              Interactive comparison &bull; Drag slider to inspect bench restoration
            </p>
          </div>

          <BeforeAfterSlider />
        </div>

        {/* Gallery Filter Categories */}
        <div className="space-y-8 pt-6 border-t border-[#E5E1DA]">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-[0.18em] font-medium transition-all whitespace-nowrap focus:outline-none rounded-sm ${
                    isActive
                      ? 'border border-[#1A1A1A] bg-[#1A1A1A] text-white'
                      : 'border border-[#E5E1DA] bg-white text-[#7A756D] hover:text-[#1A1A1A] hover:border-[#1A1A1A]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Clean Editorial Masonry / Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => {
                const globalIndex = GALLERY_ITEMS.findIndex((gi) => gi.id === item.id);

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="group relative cursor-pointer overflow-hidden bg-white border border-[#E5E1DA] rounded-sm aspect-[4/5] shadow-xs"
                    onClick={() => setSelectedLightboxIndex(globalIndex >= 0 ? globalIndex : idx)}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Minimal Title Hover Indicator */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <p className="font-serif text-lg text-white font-normal">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-neutral-300 uppercase tracking-widest font-light">
                        {item.category}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={GALLERY_ITEMS}
        selectedIndex={selectedLightboxIndex}
        onClose={() => setSelectedLightboxIndex(null)}
        onSelectIndex={(index) => setSelectedLightboxIndex(index)}
      />
    </div>
  );
};
