import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Clock, CheckCircle2, AlertCircle, Loader2, Video, MapPin, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDate?: string;
  initialSlot?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDate,
  initialSlot
}) => {
  // Format initial date as tomorrow YYYY-MM-DD
  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    // skip to Monday if Sunday
    if (d.getDay() === 0) d.setDate(d.getDate() + 1);
    // skip to Monday if Saturday
    if (d.getDay() === 6) d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  };

  const [date, setDate] = useState<string>(initialDate || getTomorrowDate());
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>(initialSlot || '');
  const [loadingSlots, setLoadingSlots] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [form, setForm] = useState({
    clientName: '',
    email: '',
    phone: '',
    format: 'virtual' as 'virtual' | 'onsite',
    projectType: 'Retail Boutique Design',
    projectDescription: ''
  });

  // Fetch live availability from backend when date changes
  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    setLoadingSlots(true);
    setErrorMessage('');

    fetch(`/api/appointments/availability?date=${date}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        setLoadingSlots(false);
        const slots: string[] = data.availableSlots || [];
        setAvailableSlots(slots);
        // If selected slot is not in new available slots, reset or pick first
        if (selectedSlot && !slots.includes(selectedSlot)) {
          setSelectedSlot('');
        } else if (!selectedSlot && slots.length > 0) {
          setSelectedSlot(slots[0]);
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        setLoadingSlots(false);
        console.error('Failed to fetch availability:', err);
        setErrorMessage('Unable to check calendar availability. Please try selecting another date.');
      });

    return () => {
      isMounted = false;
    };
  }, [date, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      setErrorMessage('Please select an available consultation time slot.');
      return;
    }

    if (!form.clientName.trim() || !form.email.trim()) {
      setErrorMessage('Please provide your name and email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/appointments/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: form.clientName,
          email: form.email,
          phone: form.phone,
          preferredDate: date,
          preferredTimeSlot: selectedSlot,
          format: form.format,
          projectType: form.projectType,
          projectDescription: form.projectDescription || 'Consultation booked via online portal'
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to book consultation appointment.');
      }

      setBookingSuccess(data.booking);
      setSubmitting(false);
    } catch (err: any) {
      setSubmitting(false);
      setErrorMessage(err.message || 'An error occurred during booking. Please try again.');
    }
  };

  const handleResetAndClose = () => {
    setBookingSuccess(null);
    setErrorMessage('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#132A2F]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={handleResetAndClose}
    >
      <div
        className="bg-white max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#CBD5E1] relative"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Book Consultation Appointment"
      >
        {/* Header */}
        <div className="bg-[#132A2F] text-white p-6 sm:p-8 flex items-start justify-between">
          <div>
            <span className="text-[10px] uppercase font-sans-clean tracking-[0.24em] text-[#A2E2E8] block mb-1">
              Direct Consultation Booking
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium">
              Schedule with Suzette Lauziere
            </h3>
            <p className="text-xs text-[#CBD5E1] mt-1 font-light">
              45-Minute Discovery Consultation &bull; Monday–Friday 9:00 AM – 5:00 PM ET
            </p>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 text-[#CBD5E1] hover:text-white transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {bookingSuccess ? (
            /* Success Confirmation State */
            <div className="py-4 text-center animate-fade-in">
              <div className="w-16 h-16 bg-[#EAF5F6] text-[#0D5C63] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#132A2F] mb-2">
                Consultation Confirmed
              </h4>
              <p className="text-sm text-[#475569] max-w-md mx-auto mb-6 font-light">
                Your appointment with Suzette Lauziere has been scheduled in the calendar. A confirmation has been logged for your project.
              </p>

              {/* Confirmation Details Card */}
              <div className="bg-[#FAF9F5] border border-[#E2E8F0] p-6 max-w-md mx-auto text-left text-xs space-y-3 mb-8">
                <div className="flex justify-between pb-2 border-b border-[#E2E8F0]">
                  <span className="text-[#64748B]">Booking Reference:</span>
                  <strong className="font-mono text-[#0D5C63] text-sm">{bookingSuccess.referenceCode}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Date & Time:</span>
                  <span className="font-medium text-[#1E252B]">{bookingSuccess.preferredDate} at {bookingSuccess.preferredTimeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Time Zone:</span>
                  <span className="font-medium text-[#1E252B]">{bookingSuccess.timeZone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Format:</span>
                  <span className="font-medium text-[#1E252B] capitalize">
                    {bookingSuccess.format === 'virtual' ? 'Virtual Video Call' : 'On-Site (Ottawa/Kanata)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Client:</span>
                  <span className="font-medium text-[#1E252B]">{bookingSuccess.clientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Contact Email:</span>
                  <span className="font-medium text-[#1E252B]">{bookingSuccess.email}</span>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="bg-[#0D5C63] hover:bg-[#09474D] text-white text-xs uppercase tracking-[0.18em] font-semibold px-8 py-3.5 transition-colors"
              >
                Done & Return to Site
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 bg-red-50 border-l-2 border-red-500 text-red-700 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Step 1: Select Format */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1E252B] mb-2">
                  1. Consultation Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, format: 'virtual' }))}
                    className={`p-3.5 border flex items-center gap-3 text-left transition-all ${
                      form.format === 'virtual'
                        ? 'border-[#0D5C63] bg-[#EAF5F6] text-[#0D5C63]'
                        : 'border-[#CBD5E1] hover:border-[#94A3B8] text-[#475569]'
                    }`}
                  >
                    <Video className="w-5 h-5 shrink-0" />
                    <div>
                      <span className="text-xs font-semibold block">Virtual Video Call</span>
                      <span className="text-[10px] text-[#64748B]">Screen sharing & drawings review</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, format: 'onsite' }))}
                    className={`p-3.5 border flex items-center gap-3 text-left transition-all ${
                      form.format === 'onsite'
                        ? 'border-[#0D5C63] bg-[#EAF5F6] text-[#0D5C63]'
                        : 'border-[#CBD5E1] hover:border-[#94A3B8] text-[#475569]'
                    }`}
                  >
                    <MapPin className="w-5 h-5 shrink-0" />
                    <div>
                      <span className="text-xs font-semibold block">On-Site Discovery</span>
                      <span className="text-[10px] text-[#64748B]">Ottawa / Kanata Region Space</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 2: Date & Available Slots */}
              <div>
                <label htmlFor="bookingDate" className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1E252B] mb-2">
                  2. Choose Preferred Date & Check Live Availability (Eastern Time)
                </label>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative flex-1">
                    <input
                      type="date"
                      id="bookingDate"
                      value={date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none"
                    />
                  </div>
                  {loadingSlots && (
                    <span className="text-xs text-[#0D5C63] flex items-center gap-1.5 shrink-0">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Checking schedule...
                    </span>
                  )}
                </div>

                {/* Slot Selector */}
                <div>
                  <span className="text-xs text-[#64748B] block mb-2 font-light">
                    Available Time Slots for {date}:
                  </span>
                  {availableSlots.length === 0 ? (
                    <div className="p-3 bg-[#FAF9F5] border border-[#E2E8F0] text-xs text-[#64748B] text-center">
                      No remaining slots for this date. Please select another weekday.
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-2 px-3 text-xs font-medium border text-center transition-all ${
                            selectedSlot === slot
                              ? 'bg-[#0D5C63] text-white border-[#0D5C63] shadow-sm'
                              : 'bg-white text-[#334155] border-[#CBD5E1] hover:border-[#0D5C63]'
                          }`}
                        >
                          <Clock className="w-3 h-3 inline mr-1 -mt-0.5" />
                          {slot}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Step 3: Client Details */}
              <div className="pt-4 border-t border-[#E2E8F0]">
                <label className="block text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1E252B] mb-3">
                  3. Client & Project Details
                </label>

                <div className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name *"
                        required
                        value={form.clientName}
                        onChange={(e) => setForm((p) => ({ ...p, clientName: e.target.value }))}
                        className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={form.email}
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number (Optional)"
                        value={form.phone}
                        onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                        className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none"
                      />
                    </div>
                    <div>
                      <select
                        value={form.projectType}
                        onChange={(e) => setForm((p) => ({ ...p, projectType: e.target.value }))}
                        className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none bg-white"
                      >
                        <option value="Retail Boutique Design">Retail Boutique / Shop Fit-Up</option>
                        <option value="Commercial Office Fit-Up">Corporate Office Space</option>
                        <option value="Health Food / Pharmacy Retail">Specialty Health / Grocery Retail</option>
                        <option value="Condominium Common Areas">Condominium Common Area Retrofit</option>
                        <option value="Custom Millwork Design">Custom Millwork & Fixtures</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      placeholder="Brief space description (square footage, current stage, objectives)..."
                      value={form.projectDescription}
                      onChange={(e) => setForm((p) => ({ ...p, projectDescription: e.target.value }))}
                      className="w-full px-3.5 py-2.5 text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-xs text-[#64748B] font-light">
                  {selectedSlot ? `Confirming: ${date} at ${selectedSlot}` : 'Please choose a slot above'}
                </span>
                <button
                  type="submit"
                  disabled={submitting || !selectedSlot}
                  className="inline-flex items-center gap-2 bg-[#0D5C63] hover:bg-[#09474D] text-white text-xs uppercase tracking-[0.18em] font-semibold py-3.5 px-7 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Reserving Slot...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
