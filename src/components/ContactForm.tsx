import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    projectType: 'Retail Boutique Design',
    location: '',
    timeline: 'Within 3-6 months',
    description: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedLeadId, setSubmittedLeadId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.clientName.trim() || !formData.email.trim() || !formData.description.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and project description.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'website_contact_form'
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enquiry. Please check your network connection.');
      }

      setStatus('success');
      setSubmittedLeadId(data.lead?.id || 'LEAD-CONFIRMED');
      if (onSuccess) onSuccess();
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred while transmitting your enquiry. Please retry or email suzette@visioninteriordesign.ca.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 sm:p-10 border border-[#0D5C63]/30 shadow-md animate-fade-in">
        <div className="flex items-center gap-3 text-[#0D5C63] mb-4">
          <CheckCircle2 className="w-8 h-8" />
          <h3 className="font-serif-luxury text-2xl font-medium text-[#132A2F]">
            Enquiry Received
          </h3>
        </div>
        <p className="text-sm text-[#475569] leading-relaxed mb-6 font-light">
          Thank you for reaching out to VISION Interior Design. Suzette Lauziere has received your project details and will review your space requirements promptly.
        </p>
        <div className="bg-[#FAF9F5] p-4 border border-[#E2E8F0] text-xs text-[#64748B] space-y-1 mb-6">
          <p><strong className="text-[#1E252B]">Reference ID:</strong> {submittedLeadId}</p>
          <p><strong className="text-[#1E252B]">Contact:</strong> {formData.email}</p>
          <p><strong className="text-[#1E252B]">Space Type:</strong> {formData.projectType}</p>
        </div>
        <button
          onClick={() => {
            setStatus('idle');
            setFormData({
              clientName: '',
              email: '',
              phone: '',
              projectType: 'Retail Boutique Design',
              location: '',
              timeline: 'Within 3-6 months',
              description: ''
            });
          }}
          className="text-xs uppercase tracking-[0.16em] font-semibold text-[#0D5C63] hover:underline"
        >
          Send Another Message &rarr;
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 border border-[#E2E8F0] shadow-sm">
      <h3 className="font-serif-luxury text-2xl font-medium text-[#132A2F] mb-2">
        Send a Project Enquiry
      </h3>
      <p className="text-xs text-[#64748B] mb-6 font-light">
        Fill out this brief outline and Suzette Lauziere will get in touch with you.
      </p>

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border-l-2 border-red-500 text-red-700 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="clientName" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1E252B] mb-1.5">
              Your Name <span className="text-[#0D5C63]">*</span>
            </label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
              placeholder="e.g. Rachel Tremblay"
              className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1E252B] mb-1.5">
              Email Address <span className="text-[#0D5C63]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="name@company.ca"
              className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none transition-colors"
            />
          </div>
        </div>

        {/* Phone & Project Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1E252B] mb-1.5">
              Phone Number <span className="text-xs text-[#94A3B8] font-normal">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(613) 000-0000"
              className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1E252B] mb-1.5">
              Space / Project Type <span className="text-[#0D5C63]">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none transition-colors bg-white"
            >
              <option value="Retail Boutique Design">Retail Boutique / Specialty Store</option>
              <option value="Commercial Office Fit-Up">Commercial Office Fit-Up</option>
              <option value="Health Food / Pharmacy Retail">Specialty Health / Grocery Retail</option>
              <option value="Condominium Common Areas">Condominium Common Area Retrofit</option>
              <option value="Custom Millwork & Fixtures">Custom Architectural Millwork</option>
              <option value="Other Commercial Space">Other Commercial Space</option>
            </select>
          </div>
        </div>

        {/* Location & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="location" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1E252B] mb-1.5">
              Project Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Kanata, Ottawa, Nepean, ON"
              className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="timeline" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1E252B] mb-1.5">
              Target Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none transition-colors bg-white"
            >
              <option value="Immediately (Lease active)">Immediately (Lease active)</option>
              <option value="Within 1-3 months">Within 1–3 months</option>
              <option value="Within 3-6 months">Within 3–6 months</option>
              <option value="Planning for next year">Planning for next year</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1E252B] mb-1.5">
            Project Description & Requirements <span className="text-[#0D5C63]">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Tell us about the space: square footage, renovation vs. new fit-up, key objectives, and any specific architectural or millwork elements needed..."
            className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#0D5C63] hover:bg-[#09474D] text-white text-xs uppercase tracking-[0.18em] font-semibold py-3.5 px-6 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Project Enquiry</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

        <p className="text-[11px] text-[#94A3B8] text-center font-light pt-2">
          Your enquiry is handled with strict confidentiality. Direct review by Suzette Lauziere.
        </p>
      </div>
    </form>
  );
};
