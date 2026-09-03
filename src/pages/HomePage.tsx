import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { SERVICES_LIST } from '../config/business';
import { WhyUsStacking } from '../components/WhyUsStacking';
import { ReviewsSection } from '../components/ReviewsSection';
import { ContactForm } from '../components/ContactForm';
import { PageRoute } from '../types';

interface HomePageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { config } = useBusiness();

  // Show only 3-4 primary services on homepage
  const primaryServices = SERVICES_LIST.filter((s) => s.isPrimary).slice(0, 4);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-[#F4F1ED] text-white overflow-hidden">
        {/* Full-bleed Editorial Jewelry Photography */}
        <div className="absolute inset-0 z-0 bg-[#E5E1DA]">
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.82 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src={config.heroImageUrl}
            alt="Fine Jewelry Editorial"
            className="w-full h-full object-cover object-center"
          />
          {/* Refined gradient overlay for high contrast readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white font-normal leading-[0.95] mb-6"
          >
            {config.heroHeadline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base font-light tracking-wide text-white/90 max-w-md leading-relaxed mb-10"
          >
            {config.heroSubheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-8"
          >
            <button
              id="hero-primary-cta"
              onClick={() => onNavigate('services')}
              className="text-[10px] uppercase tracking-[0.2em] border-b border-white pb-1 hover:opacity-70 transition-opacity text-white flex items-center gap-1.5 font-medium cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3 h-3 stroke-[1.5]" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={() => onNavigate('gallery')}
              className="text-[10px] uppercase tracking-[0.2em] border-b border-white pb-1 hover:opacity-70 transition-opacity text-white flex items-center gap-1.5 font-medium cursor-pointer"
            >
              <span>View Gallery</span>
              <ArrowUpRight className="w-3 h-3 stroke-[1.5]" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-24 lg:py-32 px-6 md:px-12 bg-[#FDFCFB] border-b border-[#E5E1DA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* One strong jewelry / studio image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden border border-[#E5E1DA] rounded-sm shadow-xs">
                <img
                  src={config.aboutImageUrl || "https://plus.unsplash.com/premium_photo-1681486928780-67d70f1ea3c2?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  alt="Jewelry studio and craftsmanship"
                  className="w-full h-full object-cover object-center filter grayscale-[10%] contrast-[1.03] hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Concise and Visual Text Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold">
                The Experience
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1A1A1A] font-normal leading-tight">
                {config.aboutHeading}
              </h2>

              <div className="space-y-4 text-[14px] text-[#4A4742] font-normal leading-relaxed">
                {config.aboutText.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

              {/* Editorial Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-6 bg-white border border-[#E5E1DA] rounded-sm">
                  <div className="text-xs font-serif italic mb-1 text-[#1A1A1A]">01. Custom Design</div>
                  <div className="text-[11px] text-[#7A756D]">Bespoke creations tailored to your vision.</div>
                </div>
                <div className="p-6 bg-white border border-[#E5E1DA] rounded-sm">
                  <div className="text-xs font-serif italic mb-1 text-[#1A1A1A]">02. Heritage Restoration</div>
                  <div className="text-[11px] text-[#7A756D]">Bringing life back to family treasures.</div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:opacity-60 transition-opacity"
                >
                  <span>INQUIRE ABOUT A BESPOKE COMMISSION</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (3-4 primary services, image-based cards, NO STACKING) */}
      <section id="services-preview" className="py-24 lg:py-32 px-6 md:px-12 bg-[#FDFCFB] border-b border-[#E5E1DA]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-2">
                Atelier Offerings
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1A1A1A] font-normal">
                Services
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:opacity-60 transition-opacity focus:outline-none"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>
          </div>

          {/* Clean 4-card grid: Image, service name, one very short line */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryServices.map((service, idx) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => onNavigate('services')}
                className="group cursor-pointer flex flex-col p-5 bg-white border border-[#E5E1DA] rounded-sm space-y-4 hover:border-[#1A1A1A] transition-colors"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 rounded-sm">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#FDFCFB]/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-serif italic text-[#7A756D]">
                    0{idx + 1}
                  </div>
                </div>

                {/* Service Name & One short line */}
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-normal group-hover:opacity-70 transition-opacity">
                    {service.name}
                  </h3>
                  <p className="text-[12px] text-[#7A756D] font-normal leading-relaxed line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Curated Selection Highlight (from Editorial Aesthetic theme) */}
          <div className="mt-16 p-8 sm:p-12 bg-[#1A1A1A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#E5E1DA] rounded-sm">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-2">Curated Selection</div>
              <div className="text-2xl sm:text-3xl font-serif">The Silk Collection</div>
              <p className="text-xs text-neutral-400 font-light mt-1 max-w-md">
                Refined modern heirlooms designed to celebrate individual journeys and quiet permanence.
              </p>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group cursor-pointer hover:bg-white hover:text-[#1A1A1A] transition-all shrink-0"
              aria-label="Explore Silk Collection in Gallery"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY US SECTION (3 Stacking cards on desktop, tablet, mobile) */}
      <WhyUsStacking />

      {/* 5. REVIEWS SECTION (2-3 reviews max, subtle transition, no fake ratings) */}
      <ReviewsSection />

      {/* 6. CONTACT SECTION (Concise, phone, email, address, inquiry form) */}
      <ContactForm
        heading="Let’s Create Something Personal."
        subheading="Tell us what you’re looking for and we’ll help you take the next step."
      />
    </div>
  );
};
