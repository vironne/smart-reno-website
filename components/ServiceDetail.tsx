import React from 'react';
import { ArrowLeft, Check, Clock, Banknote, ChevronRight } from 'lucide-react';
import { SERVICES, PROJECTS } from '../constants';
import { Button } from './Button';
import { Service } from '../types';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
  onConsultationClick: () => void;
  onViewProject: (projectId: string) => void;
}

const s = { ink: '#0C0B09', paper: '#EDE6D9', newsprint: '#D9D1C0', rust: '#C4552A', stone: '#928378' };

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onBack, onConsultationClick, onViewProject }) => {
  const service = SERVICES.find(sv => sv.id === serviceId);

  if (!service) {
    return (
      <div style={{ padding: '200px 60px', textAlign: 'center', background: s.paper }}>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: '48px', fontWeight: 900, textTransform: 'uppercase', color: s.ink }}>Service not found</h1>
        <div style={{ marginTop: '32px' }}><Button onClick={onBack}>Back to Services</Button></div>
      </div>
    );
  }

  const relatedProjects = PROJECTS.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'flex-end',
      }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.65) contrast(1.1)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,11,9,0.85) 0%, rgba(12,11,9,0.3) 50%, rgba(12,11,9,0.2) 100%)' }}></div>
        </div>
        <div style={{ position: 'relative', padding: '0 60px 64px', maxWidth: '900px' }}>
          <button onClick={onBack} style={{
            fontFamily: 'var(--ui)', fontSize: '11px', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'rgba(237,230,217,0.5)', background: 'none',
            border: 'none', cursor: 'pointer', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px',
          }}><ArrowLeft size={16} /> Back to Services</button>
          <div style={{
            fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600,
            letterSpacing: '0.3em', textTransform: 'uppercase', color: s.rust, marginBottom: '12px',
          }}>{service.shortTitle}</div>
          <h1 style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 900,
            textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.88, color: s.paper,
          }}>{service.title}</h1>
          <p style={{
            fontFamily: 'var(--serif)', fontSize: '18px', fontStyle: 'italic',
            color: 'rgba(237,230,217,0.55)', marginTop: '20px', maxWidth: '600px', lineHeight: 1.7,
          }}>{service.fullDescription}</p>
          <div style={{ display: 'flex', gap: '24px', marginTop: '24px' }}>
            <span style={{
              fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: s.rust, border: '1px solid rgba(196,85,42,0.3)', padding: '6px 14px',
            }}>{service.investmentRange}</span>
            <span style={{
              fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(237,230,217,0.4)', border: '1px solid rgba(237,230,217,0.1)', padding: '6px 14px',
            }}>{service.timeline}</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: s.paper, padding: '80px 60px' }}>
        <div className="m3-detail-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', maxWidth: '1100px', margin: '0 auto', alignItems: 'start' }}>
          <div>
            <span style={{ fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: s.rust }}>WHAT'S INCLUDED</span>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginTop: '12px', marginBottom: '32px' }}>Our {service.shortTitle} Package</h2>
            <div className="m3-features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {service.features.map((feature, idx) => (
                <div key={idx} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 16px', borderBottom: `1px solid ${s.newsprint}`,
                }}>
                  <span style={{ color: s.rust, fontWeight: 700, fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: 'var(--ui)', fontSize: '12px', fontWeight: 500, color: s.ink }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: s.ink, padding: '48px', position: 'sticky' as const, top: '100px',
          }}>
            <h3 style={{
              fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 700,
              textTransform: 'uppercase', color: s.paper, marginBottom: '16px',
            }}>Ready to Transform?</h3>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: '15px', fontStyle: 'italic',
              color: 'rgba(237,230,217,0.45)', lineHeight: 1.7, marginBottom: '24px',
            }}>Book a free consultation to discuss your {service.shortTitle.toLowerCase()} project.</p>
            {['Free site visit & assessment', 'Concept design & 3D visualization', 'Detailed proposal & timeline'].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                marginBottom: '12px',
              }}>
                <span style={{
                  fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 700,
                  color: s.rust, minWidth: '24px',
                }}>{idx + 1}</span>
                <span style={{ fontFamily: 'var(--ui)', fontSize: '12px', color: 'rgba(237,230,217,0.6)' }}>{item}</span>
              </div>
            ))}
            <Button variant="primary-large" onClick={onConsultationClick} style={{ width: '100%', marginTop: '24px' }}>
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section style={{ background: s.ink, padding: '80px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: s.rust }}>OUR WORK</span>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, marginTop: '8px' }}>Related Projects</h2>
        </div>
        <div className="m3-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(237,230,217,0.06)', maxWidth: '1100px', margin: '0 auto' }}>
          {relatedProjects.map(project => (
            <div key={project.id} onClick={() => onViewProject(project.id)} style={{
              background: s.ink, cursor: 'pointer', transition: 'background 0.3s',
            }}>
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img src={project.afterImage} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.65)', transition: 'transform 0.5s' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: s.rust, marginBottom: '8px' }}>{project.location}</div>
                <div style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', color: s.paper }}>{project.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section style={{ background: s.paper, padding: '80px 60px' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, textAlign: 'center', marginBottom: '32px' }}>Explore Other Services</h2>
        <div className="m3-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: s.newsprint, maxWidth: '1000px', margin: '0 auto' }}>
          {SERVICES.filter(sv => sv.id !== serviceId).map(other => (
            <button key={other.id} onClick={() => onViewProject(other.id)} style={{
              background: s.paper, padding: '24px', textAlign: 'left',
              border: 'none', cursor: 'pointer', transition: 'background 0.3s',
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = s.ink; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = s.paper; }}
            >
              <span style={{ fontSize: '28px', display: 'block', marginBottom: '8px' }}>{other.icon}</span>
              <div style={{ fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', color: 'inherit' }}>{other.shortTitle}</div>
              <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: s.stone, marginTop: '4px' }}>{other.timeline}</div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
