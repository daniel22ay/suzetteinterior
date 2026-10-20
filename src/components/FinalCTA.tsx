import React from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { ContactForm } from './ContactForm';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-24 bg-[#FAF9F5] border-t border-[#E8E6DD] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline, Copy, Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.24em] text-[#0D5C63] block mb-3">
                Initiate Consultation
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#132A2F] leading-tight">
                Let's Talk About Your Next Project.
              </h2>
              <p className="mt-5 text-base text-[#4A5560] font-light leading-relaxed">
                Have a space in mind? Get in touch to discuss your vision, requirements and next steps. Whether you have signed a lease or are evaluating preliminary concepts, we are ready to assist.
              </p>

              {/* Direct Schedule Button */}
              <div className="mt-8">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0D5C63] hover:bg-[#09474D] text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-all duration-200 shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Start a Conversation &bull; Book Slot</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Verified Contact Details Grid */}
              <div className="mt-12 pt-8 border-t border-[#E2E8F0] space-y-6">
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EAF5F6] text-[#0D5C63] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#132A2F] block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-sm text-[#0D5C63] hover:underline font-medium mt-0.5 block"
                    >
                      {BRAND_INFO.email}
                    </a>
                    <span className="text-xs text-[#64748B] font-light block">
                      Reviewed directly by Suzette Lauziere
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EAF5F6] text-[#0D5C63] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#132A2F] block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${BRAND_INFO.phoneClean}`}
                      className="text-sm text-[#0D5C63] hover:underline font-medium mt-0.5 block"
                    >
                      {BRAND_INFO.phone}
                    </a>
                    <span className="text-xs text-[#64748B] font-light block">
                      Available Monday–Friday 9:00 AM – 5:00 PM ET
                    </span>
                  </div>
                </div>

                {/* Studio Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EAF5F6] text-[#0D5C63] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#132A2F] block">
                      Studio Location
                    </span>
                    <p className="text-sm text-[#334155] font-medium mt-0.5">
                      {BRAND_INFO.address}
                    </p>
                    <span className="text-xs text-[#64748B] font-light block">
                      Serving Ottawa, Kanata, Nepean & Eastern Ontario
                    </span>
                  </div>
                </div>

                {/* Consultation Details */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EAF5F6] text-[#0D5C63] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#132A2F] block">
                      Consultation Formats
                    </span>
                    <p className="text-xs text-[#475569] font-light mt-0.5">
                      45-Minute Initial Discovery Session &bull; Virtual via Video Call or On-Site within the National Capital Region.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};
