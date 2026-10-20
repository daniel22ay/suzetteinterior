import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#132A2F] text-white pt-16 pb-12 border-t border-[#1C3E45]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#234951]">
          
          {/* Brand Info & Identity */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex flex-col items-start">
                <span className="font-serif-luxury text-3xl font-semibold tracking-[0.22em] text-white uppercase">
                  VISION
                </span>
                <span className="text-[10px] uppercase font-sans-clean font-medium tracking-[0.32em] text-[#A2E2E8] -mt-1">
                  Interior Design
                </span>
              </div>
              <p className="mt-5 text-sm text-[#94A3B8] font-light leading-relaxed max-w-sm">
                Thoughtful commercial spaces and retail environments. Established interior architecture and consulting led by Suzette Lauziere since 1987.
              </p>
            </div>

            <div className="mt-8 text-xs text-[#64748B] font-light">
              Ottawa & Kanata, Ontario &bull; Professional Interior Design Consulting
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A2E2E8] block mb-5">
              Navigation
            </span>
            <ul className="space-y-3 text-sm text-[#CBD5E1] font-light">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Consulting Services
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Heritage Since 1987
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Suzette Lauziere
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Consultations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A2E2E8] block mb-5">
              Direct Contact
            </span>
            <ul className="space-y-3.5 text-sm text-[#CBD5E1] font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A2E2E8] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A2E2E8] shrink-0" />
                <a href={`tel:${BRAND_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#A2E2E8] shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#234951] text-xs text-[#94A3B8]">
              Existing website:{' '}
              <a
                href={BRAND_INFO.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A2E2E8] hover:underline"
              >
                visioninteriordesign.ca
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] font-light gap-4">
          <p>
            &copy; {currentYear} {BRAND_INFO.name}. All rights reserved. Design Experience Since 1987.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#A2E2E8] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
