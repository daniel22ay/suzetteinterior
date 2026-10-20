import React from 'react';
import { CheckCircle2, Ruler, Users2, Building2 } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const Credibility: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#F4F3EE] border-y border-[#E7E5DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Title Column */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.24em] text-[#0D5C63] block mb-3">
              Verified Heritage
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[2.6rem] font-medium text-[#132A2F] leading-tight">
              Design Experience <br className="hidden sm:inline" />
              <span className="italic text-[#0D5C63]">Since 1987.</span>
            </h2>
            <p className="mt-5 text-[#4A5560] leading-relaxed font-light text-base">
              Founded and led by professional Interior Design Consultant <strong className="font-medium text-[#1E252B]">Suzette Lauziere</strong>, VISION Interior Design has guided business owners and property managers through commercial renovations, retail spaces, and corporate office fit-ups for nearly four decades.
            </p>
          </div>

          {/* Right Highlights Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            <div className="bg-white p-7 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-[#EAF5F6] text-[#0D5C63] flex items-center justify-center mb-5">
                  <Ruler className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-xl font-medium text-[#132A2F] mb-2">
                  Dimensional & Material Precision
                </h3>
                <p className="text-sm text-[#52636D] leading-relaxed">
                  Every fixture, aisle clearance, and cash counter is dimensioned with exact architectural discipline to ensure customer flow and regulatory compliance.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] text-[11px] uppercase tracking-[0.14em] font-medium text-[#0D5C63]">
                Custom Millwork Standards
              </div>
            </div>

            <div className="bg-white p-7 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-[#EAF5F6] text-[#0D5C63] flex items-center justify-center mb-5">
                  <Users2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-xl font-medium text-[#132A2F] mb-2">
                  Trusted Contractor Network
                </h3>
                <p className="text-sm text-[#52636D] leading-relaxed">
                  Decades of established connections with verified commercial trades, fabricators, and general contractors throughout Eastern Ontario.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] text-[11px] uppercase tracking-[0.14em] font-medium text-[#0D5C63]">
                Vendor & Trade Synergy
              </div>
            </div>

            <div className="bg-white p-7 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-[#EAF5F6] text-[#0D5C63] flex items-center justify-center mb-5">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-xl font-medium text-[#132A2F] mb-2">
                  Commercial & Retail Focus
                </h3>
                <p className="text-sm text-[#52636D] leading-relaxed">
                  Specialized in retail boutiques, health food environments, corporate office leaseholds, and condominium common area retrofits.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] text-[11px] uppercase tracking-[0.14em] font-medium text-[#0D5C63]">
                High-Performance Spaces
              </div>
            </div>

            <div className="bg-white p-7 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-[#EAF5F6] text-[#0D5C63] flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-xl font-medium text-[#132A2F] mb-2">
                  Budget & Timeline Integrity
                </h3>
                <p className="text-sm text-[#52636D] leading-relaxed">
                  Realistic budgeting, practical material alternatives, and vigilant milestone tracking to safeguard your investment from inception to handover.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] text-[11px] uppercase tracking-[0.14em] font-medium text-[#0D5C63]">
                Respect for Investment
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
