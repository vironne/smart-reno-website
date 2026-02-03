
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, MessageCircle, Star } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onConsultationClick: () => void;
  onNavigate: (page: string) => void;
}

const WHATSAPP_NUMBER = '+971501234567'; // Replace with actual WhatsApp number
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I\'m interested in discussing a villa renovation project.');

export const Header: React.FC<HeaderProps> = ({ onConsultationClick, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${WHATSAPP_MESSAGE}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#C9A96E] rounded-sm flex items-center justify-center text-white font-bold text-xl">S</div>
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-xl tracking-tighter leading-none">SMART</span>
              <span className="text-[10px] tracking-[0.2em] font-montserrat uppercase opacity-80 leading-none">Renovation Dubai</span>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* HOME - Direct link */}
          <button onClick={() => onNavigate('home')} className="text-sm font-medium hover:text-[#C9A96E] transition-colors">
            Home
          </button>

          {/* ABOUT - Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-[#C9A96E] transition-colors">
              About <ChevronDown size={14} />
            </button>
            <div className="absolute top-full -left-4 hidden group-hover:block pt-5 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="bg-white shadow-xl border border-gray-100 rounded-lg py-4 w-64 overflow-hidden">
                <button onClick={() => onNavigate('heritage')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors">
                  Our Italian Heritage
                </button>
                <button onClick={() => onNavigate('awards-recognition')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors flex items-center gap-2">
                  <span>Awards & Recognition</span>
                  <Star size={14} className="text-[#C9A96E] fill-[#C9A96E]" />
                </button>
                <button onClick={() => onNavigate('founders')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors">
                  Meet Marco & Cinzia
                </button>
                <button onClick={() => onNavigate('client-testimonials')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors">
                  Client Testimonials
                </button>
                <button onClick={() => onNavigate('process')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors">
                  Our Process
                </button>
              </div>
            </div>
          </div>

          {/* SERVICES - Single page link */}
          <button onClick={() => onNavigate('services')} className="text-sm font-medium hover:text-[#C9A96E] transition-colors">
            Services
          </button>

          {/* COMMUNITIES - Hub page link */}
          <button onClick={() => onNavigate('communities')} className="text-sm font-medium hover:text-[#C9A96E] transition-colors">
            Communities
          </button>

          {/* PORTFOLIO - Filterable grid */}
          <button onClick={() => onNavigate('portfolio')} className="text-sm font-medium hover:text-[#C9A96E] transition-colors">
            Portfolio
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-sm font-semibold hover:text-[#25D366] transition-colors"
          >
            <MessageCircle size={18} className="text-[#25D366]" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>

          {/* Book Consultation CTA */}
          <Button onClick={onConsultationClick}>Book Consultation</Button>

          {/* Mobile menu toggle */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 p-8 flex flex-col gap-6 animate-in slide-in-from-right duration-300 overflow-y-auto">
          <nav className="flex flex-col gap-4 text-xl font-playfair">
            {/* HOME */}
            <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="border-b border-gray-100 pb-4 text-left font-bold">
              Home
            </button>

            {/* ABOUT Section */}
            <div className="border-b border-gray-100 pb-4">
              <span className="text-sm font-montserrat uppercase tracking-wider text-gray-400 block mb-3">About</span>
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#C9A96E]/20">
                <button onClick={() => { onNavigate('heritage'); setIsMenuOpen(false); }} className="text-lg opacity-80 text-left">Our Italian Heritage</button>
                <button onClick={() => { onNavigate('awards-recognition'); setIsMenuOpen(false); }} className="text-lg opacity-80 text-left flex items-center gap-2">
                  Awards & Recognition <Star size={14} className="text-[#C9A96E] fill-[#C9A96E]" />
                </button>
                <button onClick={() => { onNavigate('founders'); setIsMenuOpen(false); }} className="text-lg opacity-80 text-left">Meet Marco & Cinzia</button>
                <button onClick={() => { onNavigate('client-testimonials'); setIsMenuOpen(false); }} className="text-lg opacity-80 text-left">Client Testimonials</button>
                <button onClick={() => { onNavigate('process'); setIsMenuOpen(false); }} className="text-lg opacity-80 text-left">Our Process</button>
              </div>
            </div>

            {/* SERVICES */}
            <button onClick={() => { onNavigate('services'); setIsMenuOpen(false); }} className="border-b border-gray-100 pb-4 text-left font-bold">
              Services
            </button>

            {/* COMMUNITIES */}
            <button onClick={() => { onNavigate('communities'); setIsMenuOpen(false); }} className="border-b border-gray-100 pb-4 text-left font-bold">
              Communities
            </button>

            {/* PORTFOLIO */}
            <button onClick={() => { onNavigate('portfolio'); setIsMenuOpen(false); }} className="border-b border-gray-100 pb-4 text-left font-bold">
              Portfolio
            </button>
          </nav>

          {/* Mobile Action Buttons */}
          <div className="mt-auto flex flex-col gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-[#25D366]/10 rounded-lg font-semibold text-[#25D366]"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <Button variant="primary-large" onClick={() => { onConsultationClick(); setIsMenuOpen(false); }}>
              Book Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
