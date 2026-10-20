import React from 'react';
import { ArrowUpRight, Compass, Lightbulb, ClipboardCheck, Check } from 'lucide-react';
import { AUTHENTIC_SERVICES } from '../data/content';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const serviceIcons = [Compass, Lightbulb, ClipboardCheck];

  return (
    <section id="services" className="py-24 bg-[#F7F6F2] border-t border-[#E8E6DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.24em] text-[#0D5C63] block mb-3">
            Core Expertise
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#132A2F] leading-tight">
            Consulting & Design Services
          </h2>
          <p className="mt-4 text-base text-[#52636D] font-light leading-relaxed">
            Tailored interior design consulting for commercial, retail, and corporate environments. Structured to guide your project smoothly from inception to completion.
          </p>
        </div>

        {/* Services List / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {AUTHENTIC_SERVICES.map((service, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];
            return (
              <div
                key={service.id}
                className="bg-white border border-[#E2E8F0] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#0D5C63] hover:shadow-lg relative group"
              >
                <div>
                  {/* Service Number & Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#F1F5F9]">
                    <span className="font-serif-luxury text-3xl font-light text-[#CBD5E1] group-hover:text-[#0D5C63] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 bg-[#EAF5F6] text-[#0D5C63] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif-luxury text-2xl font-medium text-[#132A2F] mb-1">
                    {service.title}
                  </h3>
                  <span className="text-xs uppercase font-sans-clean tracking-[0.14em] font-medium text-[#0D5C63] block mb-4">
                    {service.tagline}
                  </span>

                  {/* Authentic Quote from Website */}
                  <div className="bg-[#FAF9F5] p-4 border-l-2 border-[#0D5C63] mb-6">
                    <p className="text-xs text-[#334155] italic leading-relaxed">
                      "{service.quote}"
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#52636D] leading-relaxed font-light mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2.5 pt-4 border-t border-[#F8FAFC]">
                    <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#1E252B] block mb-3">
                      Key Deliverables
                    </span>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#475569]">
                        <Check className="w-3.5 h-3.5 text-[#0D5C63] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contextual Card CTA */}
                <div className="mt-8 pt-6 border-t border-[#F1F5F9]">
                  <button
                    onClick={onOpenBooking}
                    className="w-full inline-flex items-center justify-between text-xs uppercase tracking-[0.16em] font-semibold text-[#0D5C63] group-hover:text-[#083A3F] transition-colors py-2"
                  >
                    <span>Discuss {service.title}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Contextual Consultation Banner */}
        <div className="mt-16 bg-[#132A2F] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase font-sans-clean font-semibold tracking-[0.24em] text-[#A2E2E8] block mb-2">
              Structured Project Consultation
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium leading-snug">
              Unsure which design scope your commercial space requires?
            </h3>
            <p className="mt-2 text-sm text-[#CBD5E1] font-light leading-relaxed">
              Book a 45-minute discovery consultation with Suzette Lauziere to review your lease drawings, concept goals, and operational budget.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 inline-flex items-center gap-2 bg-[#0D5C63] hover:bg-[#12828C] text-white text-xs uppercase tracking-[0.18em] font-semibold px-8 py-4 transition-colors"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
