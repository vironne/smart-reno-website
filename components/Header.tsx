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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

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

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 200,
    padding: '24px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mixBlendMode: 'exclusion',
  };

  const logoStyle: React.CSSProperties = {
    fontFamily: 'var(--ui)',
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: 'white',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  };

  const navLinkStyle: React.CSSProperties = {
    fontFamily: 'var(--ui)',
    fontSize: '11px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.6)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.25s',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  };

  const navCtaStyle: React.CSSProperties = {
    ...navLinkStyle,
    color: 'white',
    border: '1px solid rgba(255,255,255,0.3)',
    padding: '8px 18px',
  };

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: '-16px',
    paddingTop: '12px',
    zIndex: 50,
    mixBlendMode: 'normal',
  };

  const dropdownInnerStyle: React.CSSProperties = {
    background: 'var(--ink)',
    border: '1px solid rgba(245,240,235,0.1)',
    padding: '8px 0',
    width: '220px',
  };

  const dropdownItemStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    padding: '10px 20px',
    fontFamily: 'var(--ui)',
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(245,240,235,0.6)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
  };

  /* Mobile menu overlay */
  const mobileMenuStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: 'var(--ink)',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    padding: '80px 32px 32px',
    overflowY: 'auto',
  };

  const mobileCloseStyle: React.CSSProperties = {
    position: 'absolute',
    top: '24px',
    right: '32px',
    background: 'none',
    border: 'none',
    color: 'var(--paper)',
    cursor: 'pointer',
  };

  const mobileLinkStyle: React.CSSProperties = {
    fontFamily: 'var(--display)',
    fontSize: '48px',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
    color: 'var(--paper)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    padding: '8px 0',
    borderBottom: '1px solid rgba(245,240,235,0.06)',
    display: 'block',
    width: '100%',
    lineHeight: 1,
    marginBottom: '16px',
  };

  const mobileSubLinkStyle: React.CSSProperties = {
    fontFamily: 'var(--ui)',
    fontSize: '12px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'rgba(245,240,235,0.4)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    padding: '8px 0 8px 16px',
    display: 'block',
    width: '100%',
  };

  return (
    <>
      <nav style={navStyle}>
        <button style={logoStyle} onClick={() => handleNavigate('home')}>
          Smart·Renovation
        </button>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="m3-desktop-nav">
          {/* About Dropdown */}
          <div style={{ position: 'relative' }} ref={aboutRef}>
            <button
              style={navLinkStyle}
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              onMouseEnter={() => setIsAboutOpen(true)}
            >
              About <ChevronDown size={12} style={{ transform: isAboutOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
            </button>
            {isAboutOpen && (
              <div style={dropdownStyle}>
                <div style={dropdownInnerStyle}>
                  <button style={dropdownItemStyle} onClick={() => handleNavigate('heritage')}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--paper)'; (e.target as HTMLElement).style.background = 'rgba(245,240,235,0.04)'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(245,240,235,0.6)'; (e.target as HTMLElement).style.background = 'none'; }}
                  >Our Heritage</button>
                  <button style={dropdownItemStyle} onClick={() => handleNavigate('awards-recognition')}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--paper)'; (e.target as HTMLElement).style.background = 'rgba(245,240,235,0.04)'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(245,240,235,0.6)'; (e.target as HTMLElement).style.background = 'none'; }}
                  >Awards</button>
                  <button style={dropdownItemStyle} onClick={() => handleNavigate('founders')}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--paper)'; (e.target as HTMLElement).style.background = 'rgba(245,240,235,0.04)'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(245,240,235,0.6)'; (e.target as HTMLElement).style.background = 'none'; }}
                  >Meet Marco & Cinzia</button>
                  <button style={dropdownItemStyle} onClick={() => handleNavigate('client-testimonials')}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--paper)'; (e.target as HTMLElement).style.background = 'rgba(245,240,235,0.04)'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(245,240,235,0.6)'; (e.target as HTMLElement).style.background = 'none'; }}
                  >Client Stories</button>
                  <button style={dropdownItemStyle} onClick={() => handleNavigate('process')}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--paper)'; (e.target as HTMLElement).style.background = 'rgba(245,240,235,0.04)'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(245,240,235,0.6)'; (e.target as HTMLElement).style.background = 'none'; }}
                  >Process</button>
                </div>
              </div>
            )}
          </div>

          <button style={navLinkStyle} onClick={() => handleNavigate('services')}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'white'; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
          >Services</button>
          <button style={navLinkStyle} onClick={() => handleNavigate('communities')}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'white'; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
          >Communities</button>
          <button style={navLinkStyle} onClick={() => handleNavigate('portfolio')}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'white'; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
          >Portfolio</button>
          <button style={navCtaStyle} onClick={onConsultationClick}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'white'; (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.6)'; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'white'; (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; }}
          >Consult</button>
        </div>

        {/* Mobile hamburger */}
        <button
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none' }}
          className="m3-mobile-menu-btn"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={mobileMenuStyle}>
          <button style={mobileCloseStyle} onClick={() => setIsMenuOpen(false)}>
            <X size={28} />
          </button>

          <button style={mobileLinkStyle} onClick={() => handleNavigate('home')}>Home</button>
          <button style={mobileLinkStyle} onClick={() => handleNavigate('services')}>Services</button>
          <button style={mobileLinkStyle} onClick={() => handleNavigate('portfolio')}>Portfolio</button>
          <button style={mobileLinkStyle} onClick={() => handleNavigate('communities')}>Communities</button>

          <div style={{ marginTop: '8px', marginBottom: '24px' }}>
            <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>About</div>
            <button style={mobileSubLinkStyle} onClick={() => handleNavigate('heritage')}>Our Heritage</button>
            <button style={mobileSubLinkStyle} onClick={() => handleNavigate('awards-recognition')}>Awards</button>
            <button style={mobileSubLinkStyle} onClick={() => handleNavigate('founders')}>Marco & Cinzia</button>
            <button style={mobileSubLinkStyle} onClick={() => handleNavigate('client-testimonials')}>Client Stories</button>
            <button style={mobileSubLinkStyle} onClick={() => handleNavigate('process')}>Process</button>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                padding: '14px', fontFamily: 'var(--ui)', fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#25D366', border: '1px solid rgba(37,211,102,0.3)',
              }}
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <Button variant="primary" onClick={() => { onConsultationClick(); setIsMenuOpen(false); }}
              style={{ width: '100%', justifyContent: 'center' }}>
              Book Consultation
            </Button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .m3-desktop-nav { display: none !important; }
          .m3-mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
};
