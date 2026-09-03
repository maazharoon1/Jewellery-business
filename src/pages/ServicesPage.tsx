import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST } from '../config/business';
import { PageRoute } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full py-16 sm:py-24 px-6 md:px-12 bg-[#FDFCFB]">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-2">
            Our Repertoire
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] tracking-tight font-normal mb-4">
            Services
          </h1>
          <p className="text-[14px] text-[#4A4742] font-normal leading-relaxed">
            From bespoke engagement commissions to archival restorations, every project is shaped by precision craftsmanship and personal dialogue.
          </p>
        </div>

        {/* Image-Led Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, idx) => (
            <div
              key={service.id}
              id={`service-item-${service.id}`}
              className="group flex flex-col bg-white border border-[#E5E1DA] rounded-sm overflow-hidden shadow-xs transition-all hover:border-[#1A1A1A]"
            >
              {/* Image Container with Macro Hover Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#FDFCFB]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] font-serif italic text-[#7A756D]">
                  0{idx + 1}
                </div>
              </div>

              {/* Service Info & Inquiry CTA */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="font-serif text-2xl text-[#1A1A1A] font-normal mb-2">
                    {service.name}
                  </h2>
                  <p className="text-[13px] text-[#4A4742] font-normal leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E1DA]">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full inline-flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A1A1A] group-hover:opacity-60 transition-opacity pt-1"
                  >
                    <span>INQUIRE THIS SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 sm:p-12 bg-[#1A1A1A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#E5E1DA] rounded-sm">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-1">Private Appointments</div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal">
              Looking for a custom consultation?
            </h3>
            <p className="text-xs text-neutral-400 font-light max-w-md">
              We arrange bespoke design sessions both in our atelier and virtually worldwide.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 text-[11px] border border-white text-white uppercase tracking-[0.15em] hover:bg-white hover:text-[#1A1A1A] transition-all bg-transparent shrink-0"
          >
            BOOK CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};
