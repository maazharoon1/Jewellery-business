import React from 'react';
import { useBusiness } from '../context/BusinessContext';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { config } = useBusiness();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#1A1A1A] text-white border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Col 1: Brand & Atelier */}
          <div className="space-y-4 md:col-span-2">
            <button
              id="footer-brand-title"
              onClick={() => onNavigate('home')}
              className="font-serif text-2xl tracking-[0.2em] uppercase font-light text-left text-white hover:opacity-70 transition-opacity focus:outline-none"
            >
              {config.brandName}
            </button>
            <p className="text-[13px] text-[#A5A099] font-light leading-relaxed max-w-sm">
              {config.designerName && (
                <span className="block mb-1 text-white/90 font-normal">
                  Directed by {config.designerName}
                </span>
              )}
              {config.cityRegion}
            </p>
          </div>

          {/* Col 2: Studio Contact */}
          <div className="space-y-2.5 text-[12px] text-[#A5A099]">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-3">
              Studio Inquiry
            </h4>
            <p className="hover:text-white transition-colors">
              <a href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}>{config.phone}</a>
            </p>
            <p className="hover:text-white transition-colors">
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </p>
            <p className="text-[#7A756D] pt-1 leading-relaxed">
              {config.address}
            </p>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-2 text-[12px] text-[#A5A099]">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#7A756D] font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors focus:outline-none"
                >
                  Contact & Consultations
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A756D] tracking-wider">
          <p>
            &copy; {currentYear} {config.brandName}. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 uppercase tracking-[0.15em] text-[10px] text-[#A5A099]">
            {config.facebookUrl && (
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
            )}
            {config.instagramUrl && (
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            )}
            {config.tiktokUrl && (
              <a
                href={config.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                TikTok
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
