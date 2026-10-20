import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Credibility } from './components/Credibility';
import { SelectedProjects } from './components/SelectedProjects';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { AboutDesigner } from './components/AboutDesigner';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [modalDate, setModalDate] = useState<string | undefined>(undefined);
  const [modalSlot, setModalSlot] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setModalDate(undefined);
    setModalSlot(undefined);
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingWithSlot = (date: string, slot: string) => {
    setModalDate(date);
    setModalSlot(slot);
    setIsBookingModalOpen(true);
  };

  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1E252B] flex flex-col font-sans-clean selection:bg-[#0D5C63] selection:text-white">
      {/* SECTION 1: HEADER AND NAVIGATION */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenChat={() => setIsChatOpen(true)}
      />

      <main className="flex-grow">
        {/* SECTION 2: PREMIUM HERO */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* SECTION 3: EXPERIENCE AND CREDIBILITY */}
        <Credibility />

        {/* SECTION 4: SELECTED PROJECTS */}
        <SelectedProjects onOpenBooking={handleOpenBooking} />

        {/* SECTION 5: SERVICES */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* SECTION 6: CLIENT TESTIMONIALS */}
        <Testimonials />

        {/* SECTION 7: ABOUT THE DESIGNER */}
        <AboutDesigner onOpenBooking={handleOpenBooking} />

        {/* SECTION 8: FINAL CONSULTATION CTA & CONTACT FORM */}
        <FinalCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* SECTION 9: FOOTER */}
      <Footer />

      {/* Real Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialDate={modalDate}
        initialSlot={modalSlot}
      />

      {/* AI Chatbot Widget (VISION Design Assistant) */}
      <Chatbot
        isOpen={isChatOpen}
        onToggle={handleToggleChat}
        onOpenBookingModalWithSlot={handleOpenBookingWithSlot}
      />
    </div>
  );
}
