import React, { useState } from 'react';
import { ArrowRight, Clock, Banknote } from 'lucide-react';
import { SERVICES } from '../constants';
import { Button } from './Button';

interface ServicesIndexProps {
  onNavigate: (serviceId: string) => void;
  onConsultationClick: () => void;
}

const s = { ink: '#1a1714', paper: '#F5F0EB', newsprint: '#ebe5dd', rust: '#B8976A', stone: '#6b5e52' };

export const ServicesIndex: React.FC<ServicesIndexProps> = ({ onNavigate, onConsultationClick }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="m3-section-hero" style={{
        background: s.ink, padding: '160px 60px 80px', textAlign: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600,
          letterSpacing: '0.35em', textTransform: 'uppercase', color: s.rust,
        }}>OUR EXPERTISE</span>
        <h1 style={{
          fontFamily: 'var(--display)', fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 900,
          textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.88,
          color: s.paper, marginTop: '16px',
        }}>
          Bespoke<br/>
          <span style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(245,240,235,0.5)' }}>Services</span>
        </h1>
        <p style={{
          fontFamily: 'var(--serif)', fontSize: '20px', fontStyle: 'italic',
          color: 'rgba(245,240,235,0.45)', marginTop: '24px', maxWidth: '560px',
          marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6,
        }}>From complete villa transformations to stunning kitchens and resort-style pools.</p>
      </section>

      {/* Service List — M3 numbered list */}
      <section className="m3-section" style={{ background: s.ink, minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
        {SERVICES.map((service, i) => {
          const isHovered = hovered === i;
          return (
            <div key={service.id}
              className="m3-svc-index-item"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onNavigate(service.id)}
              style={{
                display: 'flex', alignItems: 'center',
                padding: isHovered ? '32px 60px 32px 76px' : '32px 60px',
                borderBottom: '1px solid rgba(245,240,235,0.05)',
                cursor: 'pointer', transition: 'all 0.3s',
                background: isHovered ? 'rgba(245,240,235,0.02)' : 'transparent',
              }}
            >
              <span style={{
                fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 900,
                color: isHovered ? 'rgba(184,151,106,0.3)' : 'rgba(245,240,235,0.08)',
                minWidth: '72px', lineHeight: 1, transition: 'color 0.3s',
              }}>{String(i + 1).padStart(2, '0')}</span>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: 'var(--display)', fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '-0.01em',
                  color: isHovered ? s.paper : 'rgba(245,240,235,0.7)',
                  lineHeight: 1, transition: 'color 0.3s',
                }}>{service.title}</div>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '15px', fontStyle: 'italic',
                  color: isHovered ? 'rgba(245,240,235,0.5)' : 'rgba(245,240,235,0.2)',
                  marginTop: '8px', transition: 'color 0.3s', maxWidth: '500px',
                }}>{service.description}</div>
              </div>
              <div className="m3-svc-index-meta" style={{ textAlign: 'right', marginRight: '24px' }}>
                <div style={{
                  fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: isHovered ? s.rust : 'rgba(245,240,235,0.2)',
                  transition: 'color 0.3s',
                }}>{service.timeline}</div>
                <div style={{
                  fontFamily: 'var(--ui)', fontSize: '9px',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'rgba(245,240,235,0.15)', marginTop: '4px',
                }}>{service.investmentRange}</div>
              </div>
              <span className="m3-svc-index-arrow" style={{
                fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 700,
                color: s.rust, opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateX(0)' : 'translateX(-12px)',
                transition: 'all 0.35s',
              }}>→</span>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="m3-section" style={{
        background: s.rust, padding: '80px 60px', textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--display)', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
          textTransform: 'uppercase', color: s.paper, marginBottom: '16px',
        }}>Not Sure Which Service?</h2>
        <p style={{
          fontFamily: 'var(--serif)', fontSize: '18px', fontStyle: 'italic',
          color: 'rgba(245,240,235,0.6)', marginBottom: '32px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto',
        }}>Book a free consultation. We'll assess your villa and recommend the perfect approach.</p>
        <Button variant="white" onClick={onConsultationClick}>Book Free Consultation</Button>
      </section>
    </div>
  );
};
