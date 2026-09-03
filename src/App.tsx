import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BusinessProvider } from './context/BusinessContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConfigDrawer } from './components/ConfigDrawer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { PageRoute } from './types';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  // Handle URL hash routing and initial load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'services') {
        setCurrentPage('services');
      } else if (hash === 'gallery') {
        setCurrentPage('gallery');
      } else if (hash === 'contact') {
        setCurrentPage('contact');
      } else if (hash === 'about') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute, hash?: string) => {
    setCurrentPage(page);

    if (hash) {
      window.location.hash = hash;
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      if (page === 'home') {
        window.history.pushState(null, '', window.location.pathname);
      } else {
        window.location.hash = page;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] text-[#1A1A1A]">
      {/* Sticky Compact Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content with subtle page fade animation */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
            {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
            {currentPage === 'gallery' && <GalleryPage />}
            {currentPage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Compact Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Business Data & Placeholders Configuration Drawer */}
      <ConfigDrawer />
    </div>
  );
}

export default function App() {
  return (
    <BusinessProvider>
      <AppContent />
    </BusinessProvider>
  );
}
