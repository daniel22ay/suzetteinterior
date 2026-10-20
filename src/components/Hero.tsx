import React from 'react';
import { ArrowDown, ArrowUpRight, Award, Compass, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 bg-[#FAF9F5] -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F3F7F7]/60 -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Credibility Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="w-8 h-[1px] bg-[#0D5C63]" />
              <span className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.22em] text-[#0D5C63]">
                Commercial & Retail Interior Architecture
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-[3.75rem] font-medium leading-[1.12] text-[#132A2F] tracking-[-0.01em]">
              Thoughtful Spaces.{' '}
              <span className="italic font-light text-[#0D5C63]">Designed with Purpose.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg text-[#4A5560] leading-relaxed max-w-xl font-light">
              VISION Interior Design brings creative thinking, practical planning and attention to detail to commercial interiors, retail environments and thoughtfully designed spaces.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#0D5C63] hover:bg-[#09474D] text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-all duration-200 shadow-sm active:scale-[0.99]"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 border border-[#CBD5E1] hover:border-[#0D5C63] text-[#1E252B] hover:text-[#0D5C63] text-xs uppercase tracking-[0.2em] font-medium px-7 py-4 transition-colors bg-white/70"
              >
                <span>Explore Our Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Verified Trust Strip */}
            <div className="mt-12 pt-8 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="block font-serif-luxury text-2xl font-semibold text-[#132A2F]">
                  1987
                </span>
                <span className="text-[11px] font-sans-clean uppercase tracking-[0.12em] text-[#64748B]">
                  Design Experience
                </span>
              </div>
              <div>
                <span className="block font-serif-luxury text-2xl font-semibold text-[#132A2F]">
                  Ottawa & Kanata
                </span>
                <span className="text-[11px] font-sans-clean uppercase tracking-[0.12em] text-[#64748B]">
                  Local Studio & Reach
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-serif-luxury text-2xl font-semibold text-[#132A2F]">
                  Turnkey
                </span>
                <span className="text-[11px] font-sans-clean uppercase tracking-[0.12em] text-[#64748B]">
                  Concept to Completion
                </span>
              </div>
            </div>

          </div>

          {/* Right Photographic Showcase (Authentic Portfolio Image) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Architectural Image Frame */}
              <div className="relative overflow-hidden bg-[#E2E8F0] shadow-xl border border-white/60">
                <img
                  src="/assets/aistudio/image_045d5082.png"
                  alt="VISION Interior Design - Authentic Retail Boutique and Custom Millwork Fit-Up"
                  className="w-full h-[440px] sm:h-[520px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                
                {/* Subtle image caption overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#132A2F]/90 via-[#132A2F]/40 to-transparent text-white">
                  <span className="text-[10px] uppercase font-sans-clean tracking-[0.2em] text-[#A2E2E8] block mb-0.5">
                    Authentic Project Photography
                  </span>
                  <p className="font-serif-luxury text-base sm:text-lg font-light leading-snug">
                    Retail Boutique & Bespoke Millwork Casework, Ottawa
                  </p>
                </div>
              </div>

              {/* Floating Architectural Note Badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-5 shadow-lg border border-[#E2E8F0] max-w-xs items-start gap-3.5 z-10">
                <div className="p-2 bg-[#EAF5F6] text-[#0D5C63] rounded-none">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#132A2F] block">
                    Tailored Spatial Planning
                  </span>
                  <p className="text-[11px] text-[#5A6872] leading-relaxed mt-0.5">
                    Custom millwork, cashier casework and flow optimization for commercial tenants.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
