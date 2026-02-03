
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, MessageCircle, Star, Calendar } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onConsultationClick: () => void;
  onNavigate: (page: string) => void;
}

const WHATSAPP_NUMBER = '+971501234567';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I\'m interested in discussing a villa renovation project.');

export const Header: React.FC<HeaderProps> = ({ onConsultationClick, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${WHATSAPP_MESSAGE}`;

  const handleNavigate = (page: string) => {
    setIsAboutOpen(false);
    setIsMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2 md:py-3' : 'bg-white/90 backdrop-blur-md py-3 md:py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between h-14 md:h-16">
        {/* Logo - smaller on mobile */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigate('home')}>
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#C9A96E] rounded-sm flex items-center justify-center text-white font-bold text-lg md:text-xl">S</div>
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-lg md:text-xl tracking-tighter leading-none">SMART</span>
              <span className="text-[8px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] font-montserrat uppercase opacity-80 leading-none">Renovation</span>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <button onClick={() => handleNavigate('home')} className="text-sm font-medium hover:text-[#C9A96E] transition-colors">
            Home
          </button>

          {/* ABOUT - Dropdown (Click + Hover) */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="flex items-center gap-1 text-sm font-medium hover:text-[#C9A96E] transition-colors"
            >
              About <ChevronDown size={14} className={`transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
            </button>
            {isAboutOpen && (
              <div className="absolute top-full -left-4 pt-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="bg-white shadow-xl border border-gray-100 rounded-lg py-4 w-64 overflow-hidden">
                  <button onClick={() => handleNavigate('heritage')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors">
                    Our Italian Heritage
                  </button>
                  <button onClick={() => handleNavigate('awards-recognition')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors flex items-center gap-2">
                    <span>Awards & Recognition</span>
                    <Star size={14} className="text-[#C9A96E] fill-[#C9A96E]" />
                  </button>
                  <button onClick={() => handleNavigate('founders')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors">
                    Meet Marco & Cinzia
                  </button>
                  <button onClick={() => handleNavigate('client-testimonials')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors">
                    Client Testimonials
                  </button>
                  <button onClick={() => handleNavigate('process')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors">
                    Our Process
                  </button>
                </div>
              </div>
            )}
          </div>

          <button onClick={() => handleNavigate('services')} className="text-sm font-medium hover:text-[#C9A96E] transition-colors">
            Services
          </button>

          <button onClick={() => handleNavigate('communities')} className="text-sm font-medium hover:text-[#C9A96E] transition-colors">
            Communities
          </button>

          <button onClick={() => handleNavigate('portfolio')} className="text-sm font-medium hover:text-[#C9A96E] transition-colors">
            Portfolio
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* WhatsApp - Icon only on tablet, text on desktop */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-9 h-9 lg:w-auto lg:h-auto lg:px-3 lg:py-2 rounded-full lg:rounded-md bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageCircle size={18} className="text-[#25D366]" />
            <span className="hidden xl:inline ml-2 text-sm font-medium text-[#25D366]">WhatsApp</span>
          </a>

          {/* Book Consultation - Compact on mobile */}
          <Button
            variant="primary-small"
            onClick={onConsultationClick}
            className="md:hidden flex items-center gap-1.5"
          >
            <Calendar size={14} />
            <span>Book</span>
          </Button>

          {/* Book Consultation - Full on desktop */}
          <Button
            onClick={onConsultationClick}
            className="hidden md:flex"
          >
            Book Consultation
          </Button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-1.5 -mr-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[56px] md:top-[72px] bg-white z-40 p-6 md:p-8 flex flex-col gap-4 animate-in slide-in-from-right duration-300 overflow-y-auto">
          <nav className="flex flex-col gap-3 text-lg font-playfair">
            {/* HOME */}
            <button onClick={() => handleNavigate('home')} className="border-b border-gray-100 pb-3 text-left font-bold">
              Home
            </button>

            {/* ABOUT Section */}
            <div className="border-b border-gray-100 pb-3">
              <span className="text-xs font-montserrat uppercase tracking-wider text-gray-400 block mb-2">About</span>
              <div className="flex flex-col gap-2 pl-3 border-l-2 border-[#C9A96E]/20">
                <button onClick={() => handleNavigate('heritage')} className="text-base opacity-80 text-left">Our Italian Heritage</button>
                <button onClick={() => handleNavigate('awards-recognition')} className="text-base opacity-80 text-left flex items-center gap-2">
                  Awards <Star size={12} className="text-[#C9A96E] fill-[#C9A96E]" />
                </button>
                <button onClick={() => handleNavigate('founders')} className="text-base opacity-80 text-left">Meet Marco & Cinzia</button>
                <button onClick={() => handleNavigate('client-testimonials')} className="text-base opacity-80 text-left">Client Testimonials</button>
                <button onClick={() => handleNavigate('process')} className="text-base opacity-80 text-left">Our Process</button>
              </div>
            </div>

            {/* SERVICES */}
            <button onClick={() => handleNavigate('services')} className="border-b border-gray-100 pb-3 text-left font-bold">
              Services
            </button>

            {/* COMMUNITIES */}
            <button onClick={() => handleNavigate('communities')} className="border-b border-gray-100 pb-3 text-left font-bold">
              Communities
            </button>

            {/* PORTFOLIO */}
            <button onClick={() => handleNavigate('portfolio')} className="border-b border-gray-100 pb-3 text-left font-bold">
              Portfolio
            </button>
          </nav>

          {/* Mobile Action Buttons */}
          <div className="mt-auto flex flex-col gap-3 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 bg-[#25D366]/10 rounded-lg font-semibold text-[#25D366] text-sm"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <Button variant="primary" onClick={() => { onConsultationClick(); setIsMenuOpen(false); }} className="w-full justify-center">
              Book Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
