import React from 'react';
import { Quote, Building } from 'lucide-react';
import { AUTHENTIC_TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF9F5] border-t border-[#E8E6DD]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.24em] text-[#0D5C63] block mb-3">
            Client Endorsement
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#132A2F]">
            Consulting Reviews
          </h2>
          <p className="mt-3 text-sm text-[#64748B] font-light">
            Genuine feedback from long-standing commercial property management clients.
          </p>
        </div>

        {/* Testimonial Feature Card */}
        {AUTHENTIC_TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white border border-[#E2E8F0] p-8 sm:p-14 shadow-sm relative"
          >
            {/* Architectural decorative quote mark */}
            <div className="absolute top-6 right-8 text-[#EAF5F6] -z-0">
              <Quote className="w-20 h-20 rotate-180" />
            </div>

            <div className="relative z-10">
              {/* Relationship Badge */}
              <div className="inline-flex items-center gap-2 bg-[#EAF5F6] text-[#0D5C63] text-[11px] uppercase tracking-[0.16em] font-medium px-3.5 py-1 mb-8">
                <Building className="w-3.5 h-3.5" />
                <span>{testimonial.since} &bull; Commercial Client</span>
              </div>

              {/* Quote Body */}
              <blockquote className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-normal text-[#1E252B] leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Attribution */}
              <div className="mt-8 pt-8 border-t border-[#F1F5F9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <cite className="not-italic font-sans-clean font-semibold text-base text-[#132A2F] block">
                    {testimonial.author}
                  </cite>
                  <span className="text-xs uppercase tracking-[0.14em] text-[#64748B] block mt-0.5">
                    {testimonial.role}, <strong className="font-medium text-[#0D5C63]">{testimonial.company}</strong>
                  </span>
                </div>

                <div className="text-xs text-[#94A3B8] font-light italic">
                  Professional Office Fit-Ups & Condo Retrofits
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Note on Authenticity */}
        <p className="text-center text-xs text-[#94A3B8] mt-8 font-light">
          Verified review sourced from KeyComm Management Inc. testimonial archives.
        </p>

      </div>
    </section>
  );
};
