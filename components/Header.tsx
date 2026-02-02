
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onConsultationClick: () => void;
  onNavigate: (page: string) => void;
}

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
          <button onClick={() => onNavigate('home')} className="text-sm font-medium hover:text-[#C9A96E] transition-colors">Home</button>
          
          {/* About Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-[#C9A96E] transition-colors">
              About <ChevronDown size={14} />
            </button>
            <div className="absolute top-full -left-4 hidden group-hover:block pt-5 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="bg-white shadow-xl border border-gray-100 rounded-lg py-4 w-64 overflow-hidden">
                <button onClick={() => onNavigate('heritage')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors">Our Heritage</button>
                <button onClick={() => onNavigate('awards-recognition')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors">Awards & Recognition</button>
                <button onClick={() => onNavigate('founders')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors">Meet Marco & Cinzia</button>
                <button onClick={() => onNavigate('client-testimonials')} className="w-full text-left px-6 py-3 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E] transition-colors">Client Stories</button>
              </div>
            </div>
          </div>

          <button onClick={() => onNavigate('portfolio')} className="text-sm font-medium hover:text-[#C9A96E] transition-colors">Portfolio</button>
          
          <div className="group relative">
            <button onClick={() => onNavigate('communities')} className="flex items-center gap-1 text-sm font-medium hover:text-[#C9A96E] transition-colors">
              Communities <ChevronDown size={14} />
            </button>
            <div className="absolute top-full -left-4 hidden group-hover:block pt-5 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="bg-white shadow-xl border border-gray-100 rounded-lg py-4 w-64 max-h-[400px] overflow-y-auto">
                <button onClick={() => onNavigate('palm-jumeirah')} className="w-full text-left block px-6 py-2 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E]">Palm Jumeirah</button>
                <button className="w-full text-left block px-6 py-2 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E]">Emirates Hills</button>
                <button className="w-full text-left block px-6 py-2 text-sm hover:bg-[#F5F1E8] hover:text-[#C9A96E]">Arabian Ranches</button>
              </div>
            </div>
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <a href="tel:+97142350599" className="hidden lg:flex items-center gap-2 text-sm font-semibold hover:text-[#C9A96E] transition-colors">
            <Phone size={16} className="text-[#C9A96E]" />
            +971 4 235 0599
          </a>
          <Button onClick={onConsultationClick}>Book Consultation</Button>
          
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 p-8 flex flex-col gap-6 animate-in slide-in-from-right duration-300">
          <nav className="flex flex-col gap-6 text-xl font-playfair">
            <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="border-b border-gray-100 pb-4 text-left">Home</button>
            <div className="flex flex-col gap-4 pl-4 border-l-2 border-[#C9A96E]/20">
              <button onClick={() => { onNavigate('heritage'); setIsMenuOpen(false); }} className="text-lg opacity-80 text-left">Our Heritage</button>
              <button onClick={() => { onNavigate('awards-recognition'); setIsMenuOpen(false); }} className="text-lg opacity-80 text-left">Awards</button>
              <button onClick={() => { onNavigate('founders'); setIsMenuOpen(false); }} className="text-lg opacity-80 text-left">Meet Founders</button>
            </div>
            <button onClick={() => { onNavigate('portfolio'); setIsMenuOpen(false); }} className="border-b border-gray-100 pb-4 text-left">Portfolio</button>
            <button onClick={() => { onNavigate('palm-jumeirah'); setIsMenuOpen(false); }} className="border-b border-gray-100 pb-4 text-left">Palm Jumeirah</button>
          </nav>
          <div className="mt-auto flex flex-col gap-4">
            <a href="tel:+97142350599" className="flex items-center justify-center gap-3 p-4 bg-[#F5F1E8] rounded-lg font-semibold">
              <Phone size={20} className="text-[#C9A96E]" />
              Call +971 4 235 0599
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
