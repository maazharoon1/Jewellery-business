import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { PageRoute } from '../types';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { config, setIsConfigDrawerOpen } = useBusiness();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (page: PageRoute, hash?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, hash);
  };

  const navLinks: { label: string; page: PageRoute; hash?: string }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'About', page: 'home', hash: 'about' },
    { label: 'Contact', page: 'contact' }
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'h-[72px] bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#E5E1DA] shadow-xs'
            : 'h-[72px] bg-[#FDFCFB]/90 backdrop-blur-sm border-b border-[#E5E1DA]'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            id="navbar-brand-logo"
            onClick={() => handleLinkClick('home')}
            className="text-left group focus:outline-none flex items-center gap-3"
            aria-label="Return to Homepage"
          >
            {config.logoUrl ? (
              <img
                src={config.logoUrl}
                alt={config.brandName}
                className="h-8 max-h-[36px] w-auto object-contain"
              />
            ) : (
              <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] uppercase font-light text-[#1A1A1A] group-hover:opacity-60 transition-opacity">
                {config.brandName}
              </span>
            )}
          </button>

          {/* Desktop Navigation Links (Max 5 visible links) */}
          <nav
            id="desktop-nav-links"
            className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-[0.15em] font-medium text-[#1A1A1A]"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                currentPage === link.page &&
                (!link.hash || (typeof window !== 'undefined' && window.location.hash === `#${link.hash}`));

              return (
                <button
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  onClick={() => handleLinkClick(link.page, link.hash)}
                  className={`relative py-1 transition-opacity hover:opacity-50 focus:outline-none ${
                    isActive ? 'opacity-100 font-semibold' : 'opacity-80'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1A1A1A]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Side: Phone + CTA + Config Drawer Trigger */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              id="navbar-phone-link"
              href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
              className="text-[11px] tracking-[0.1em] text-[#7A756D] hover:text-[#1A1A1A] transition-colors flex items-center gap-1.5"
              title="Direct Studio Phone"
            >
              <Phone className="w-3 h-3 stroke-[1.5]" />
              <span>{config.phone}</span>
            </a>

            <button
              id="navbar-consultation-cta"
              onClick={() => handleLinkClick('contact')}
              className="px-6 py-2.5 text-[11px] border border-[#1A1A1A] uppercase tracking-[0.15em] hover:bg-[#1A1A1A] hover:text-white transition-all bg-transparent text-[#1A1A1A] focus:outline-none"
            >
              Book a Consultation
            </button>

            {/* Subtle Business Data Configurator button */}
            <button
              id="navbar-config-toggle"
              onClick={() => setIsConfigDrawerOpen(true)}
              className="p-2 text-[#7A756D] hover:text-[#1A1A1A] hover:bg-[#E5E1DA]/30 rounded-full transition-colors focus:outline-none"
              title="Edit Business Data / Toggle Placeholders"
              aria-label="Edit Business Data Placeholders"
            >
              <SlidersHorizontal className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>

          {/* Mobile Right Side: [CONTACT ICON] [MENU] */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              id="mobile-contact-quick-icon"
              onClick={() => handleLinkClick('contact')}
              className="p-2.5 text-[#1A1A1A] hover:opacity-60 active:bg-neutral-100 rounded-full transition-colors focus:outline-none"
              aria-label="Contact Studio"
            >
              <Phone className="w-4 h-4 stroke-[1.5]" />
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 text-[#1A1A1A] hover:opacity-60 focus:outline-none"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* True Full-Screen Mobile Navigation Overlay (100vw, 100dvh) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-fullscreen-nav-overlay"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 w-screen h-[100dvh] bg-[#FDFCFB] flex flex-col justify-between p-6 sm:p-12 overflow-y-auto text-[#1A1A1A]"
          >
            {/* Top Bar of Overlay */}
            <div className="flex items-center justify-between border-b border-[#E5E1DA] pb-6">
              <span className="font-serif text-xl tracking-[0.2em] uppercase font-light text-[#1A1A1A]">
                {config.brandName}
              </span>
              <button
                id="close-mobile-menu-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-[#1A1A1A] hover:opacity-60 active:bg-neutral-100 rounded-full focus:outline-none"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* Menu Links with Large Tap-Friendly Navigation */}
            <nav className="flex flex-col space-y-5 my-auto py-8">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.label}
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.25 }}
                  onClick={() => handleLinkClick(link.page, link.hash)}
                  className="text-left font-serif text-3xl sm:text-4xl tracking-tight text-[#1A1A1A] hover:opacity-50 transition-opacity flex items-center justify-between group py-2"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-serif italic tracking-[0.2em] text-[#7A756D] group-hover:text-[#1A1A1A] transition-colors">
                    0{idx + 1}
                  </span>
                </motion.button>
              ))}
            </nav>

            {/* Mobile Action Section: CALL / MESSAGE + BOOK A CONSULTATION + Socials */}
            <div className="border-t border-[#E5E1DA] pt-6 flex flex-col space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  id="mobile-nav-call-btn"
                  href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full py-3 px-4 border border-[#1A1A1A] text-[#1A1A1A] text-[11px] tracking-[0.15em] uppercase font-medium text-center flex items-center justify-center gap-2 hover:bg-[#1A1A1A] hover:text-white transition-all"
                >
                  <Phone className="w-3.5 h-3.5 stroke-[1.5]" />
                  CALL / MESSAGE
                </a>
                <button
                  id="mobile-nav-cta-btn"
                  onClick={() => handleLinkClick('contact')}
                  className="w-full py-3 px-4 bg-[#1A1A1A] text-white text-[11px] tracking-[0.15em] uppercase font-medium text-center hover:bg-neutral-800 transition-colors border border-[#1A1A1A]"
                >
                  BOOK A CONSULTATION
                </button>
              </div>

              {/* Social Links & Config Toggle */}
              <div className="flex items-center justify-between pt-2 text-[10px] uppercase tracking-[0.15em] text-[#7A756D]">
                <div className="flex items-center space-x-6">
                  {config.facebookUrl && (
                    <a
                      href={config.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1A1A1A] transition-colors"
                    >
                      Facebook
                    </a>
                  )}
                  {config.instagramUrl && (
                    <a
                      href={config.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1A1A1A] transition-colors"
                    >
                      Instagram
                    </a>
                  )}
                  {config.tiktokUrl && (
                    <a
                      href={config.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1A1A1A] transition-colors"
                    >
                      TikTok
                    </a>
                  )}
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsConfigDrawerOpen(true);
                  }}
                  className="text-[11px] underline text-[#7A756D] hover:text-[#1A1A1A] flex items-center gap-1"
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>Config</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
