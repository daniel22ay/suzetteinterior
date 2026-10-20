import React from 'react';
import { ArrowUpRight, Award, Check, MapPin } from 'lucide-react';
import { BRAND_INFO, DESIGNER_BIO } from '../data/content';

interface AboutDesignerProps {
  onOpenBooking: () => void;
}

export const AboutDesigner: React.FC<AboutDesignerProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 bg-[#F5F4EF] border-t border-[#E8E6DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Overview & Image Context */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Architectural Detail Frame */}
              <div className="relative overflow-hidden bg-white p-3 shadow-lg border border-[#E2E8F0]">
                <img
                  src="/assets/aistudio/image_38ef4952.png"
                  alt="Custom architectural millwork created under Suzette Lauziere's direction"
                  className="w-full h-[460px] object-cover object-center"
                />
                <div className="p-4 bg-[#132A2F] text-white">
                  <span className="text-[10px] font-sans-clean uppercase tracking-[0.2em] text-[#A2E2E8] block mb-1">
                    Signature Millwork
                  </span>
                  <p className="font-serif-luxury text-sm font-light">
                    Custom circular display millwork crafted for specialty boutique retail.
                  </p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute -top-5 -right-5 bg-[#0D5C63] text-white p-4 shadow-xl hidden sm:block">
                <span className="block font-serif-luxury text-2xl font-bold leading-none">
                  Since 1987
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#A2E2E8] block mt-1">
                  Design Consultant
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Professional Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.24em] text-[#0D5C63] block mb-3">
              About the Designer
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#132A2F] leading-tight">
              Suzette Lauziere
            </h2>
            <span className="text-sm font-medium text-[#52636D] uppercase tracking-[0.12em] mt-1 block">
              Principal Interior Design Consultant &bull; Ottawa & Kanata, ON
            </span>

            <div className="mt-6 space-y-4 text-base text-[#4A5560] font-light leading-relaxed">
              {DESIGNER_BIO.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0D5C63] mt-1 shrink-0" />
                <span className="text-sm text-[#1E252B] font-medium">
                  38+ Years of Verified Commercial & Retail Design
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0D5C63] mt-1 shrink-0" />
                <span className="text-sm text-[#1E252B] font-medium">
                  Vetted Eastern Ontario Contractor & Trade Network
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0D5C63] mt-1 shrink-0" />
                <span className="text-sm text-[#1E252B] font-medium">
                  Lateral Creative Thinking with Budget Adherence
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0D5C63] mt-1 shrink-0" />
                <span className="text-sm text-[#1E252B] font-medium">
                  Hands-On Project Oversight from Concept to Handover
                </span>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#0D5C63] hover:bg-[#09474D] text-white text-xs uppercase tracking-[0.18em] font-semibold px-8 py-4 transition-colors"
              >
                <span>Schedule Consultation with Suzette</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="text-xs uppercase tracking-[0.16em] font-medium text-[#0D5C63] hover:text-[#083A3F] px-4 py-3"
              >
                {BRAND_INFO.email}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
