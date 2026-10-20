import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { VisionLogo } from './VisionLogo';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenChat: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Selected Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md py-3 shadow-[0_1px_0_rgba(13,92,99,0.08)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C63] rounded py-1"
            aria-label="VISION Interior Design Homepage"
          >
            <VisionLogo className="h-10 sm:h-12 w-auto" theme="dark" variant="mark" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] font-medium text-[#3A4850] hover:text-[#0D5C63] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#0D5C63] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-medium text-[#0D5C63] hover:text-[#083A3F] px-3 py-2 rounded transition-colors"
              title="Chat with VISION Design Assistant"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask AI</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#0D5C63] hover:bg-[#09474D] text-white text-xs uppercase tracking-[0.18em] font-semibold px-5 py-2.5 rounded-none transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenBooking}
              className="bg-[#0D5C63] text-white text-[10px] uppercase tracking-[0.14em] font-semibold px-3 py-2 rounded-none"
            >
              Book
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#132A2F] hover:text-[#0D5C63] focus:outline-none focus:ring-2 focus:ring-[#0D5C63]"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#132A2F]/40 backdrop-blur-sm md:hidden animate-fade-in">
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#FAF9F5] p-8 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E2E8F0]">
                <VisionLogo className="h-10 w-auto" theme="dark" variant="mark" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#3A4850] hover:text-[#0D5C63]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-serif-luxury text-[#1E252B] hover:text-[#0D5C63] transition-colors py-2 border-b border-[#F1F5F9]"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-8 space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#0D5C63] text-white py-3 text-xs uppercase tracking-[0.16em] font-semibold"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenChat();
                  }}
                  className="w-full flex items-center justify-center gap-2 border border-[#0D5C63] text-[#0D5C63] py-2.5 text-xs uppercase tracking-[0.16em] font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat With Assistant</span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] text-xs text-[#52636D] space-y-1">
              <p className="font-semibold text-[#1E252B]">Suzette Lauziere</p>
              <p>{BRAND_INFO.address}</p>
              <p>
                <a href={`tel:${BRAND_INFO.phoneClean}`} className="hover:text-[#0D5C63]">
                  {BRAND_INFO.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
