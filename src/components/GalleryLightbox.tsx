import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  selectedIndex,
  onClose,
  onSelectIndex
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onSelectIndex((selectedIndex + 1) % items.length);
      }
      if (e.key === 'ArrowLeft') {
        onSelectIndex((selectedIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIndex, items.length, onClose, onSelectIndex]);

  if (selectedIndex === null) return null;

  const currentItem = items[selectedIndex];

  return (
    <AnimatePresence>
      <motion.div
        id="gallery-lightbox-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-[#0C0C0C]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div
          className="flex items-center justify-between text-neutral-300 z-10 w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center space-x-3">
            <span className="font-serif text-lg tracking-wider text-white">
              {currentItem.title}
            </span>
            <span className="text-xs font-mono tracking-widest text-neutral-500">
              [{currentItem.category}]
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2.5 text-neutral-400 hover:text-white transition-colors focus:outline-none"
              title={isZoomed ? 'Zoom Out' : 'Macro Zoom In'}
              aria-label="Toggle Zoom"
            >
              {isZoomed ? <ZoomOut className="w-5 h-5 stroke-[1.5]" /> : <ZoomIn className="w-5 h-5 stroke-[1.5]" />}
            </button>
            <button
              id="lightbox-close-btn"
              onClick={onClose}
              className="p-2.5 text-neutral-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Center Image Stage with macro zoom option */}
        <div
          className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: isZoomed ? 1.4 : 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            src={currentItem.imageUrl}
            alt={currentItem.title}
            onClick={() => setIsZoomed(!isZoomed)}
            className={`max-h-[82vh] max-w-full object-contain cursor-zoom-${
              isZoomed ? 'out' : 'in'
            } shadow-2xl transition-transform duration-300`}
          />
        </div>

        {/* Bottom Bar: Prev / Next / Counter */}
        <div
          className="flex items-center justify-between text-neutral-400 text-xs tracking-widest z-10 w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => onSelectIndex((selectedIndex - 1 + items.length) % items.length)}
            className="flex items-center gap-2 px-4 py-2 hover:text-white transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-4 h-4 stroke-[1.5]" />
            <span className="uppercase tracking-widest">Previous</span>
          </button>

          <span className="font-mono text-neutral-500">
            {selectedIndex + 1} / {items.length}
          </span>

          <button
            onClick={() => onSelectIndex((selectedIndex + 1) % items.length)}
            className="flex items-center gap-2 px-4 py-2 hover:text-white transition-colors focus:outline-none"
          >
            <span className="uppercase tracking-widest">Next</span>
            <ChevronRight className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
