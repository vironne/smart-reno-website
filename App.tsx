import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { SmartConsultationForm } from './components/SmartConsultationForm';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PortfolioGallery } from './components/PortfolioGallery';
import { EmailCaptureModal } from './components/EmailCaptureModal';
import { ServicesIndex } from './components/ServicesIndex';
import { ServiceDetail } from './components/ServiceDetail';
import { ProjectDetail } from './components/ProjectDetail';
import { VillaRenovationGuide, MaterialsGuide, NOCApprovalsGuide, BlogPage } from './components/ResourcePages';
import { COMMUNITIES, PROJECTS, PROCESS_STEPS, TESTIMONIALS, AWARDS, SERVICES } from './constants';
import {
  ArrowRight,
  Star,
  Award,
  Clock,
  CheckCircle2,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Quote,
  PlayCircle,
  MessageCircle,
  Map,
  Heart,
  FileText,
  BookOpen
} from 'lucide-react';

const WHATSAPP_NUMBER = '+971501234567';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I\'m interested in discussing a villa renovation project.');

// Additional communities for the hub
const ALL_COMMUNITIES = [
  ...COMMUNITIES,
  { id: 'meadows', name: 'The Meadows', slug: 'meadows', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800', renovatedCount: 18, description: 'Family-friendly community with lakeside villas' },
  { id: 'springs', name: 'The Springs', slug: 'springs', image: 'https://images.unsplash.com/photo-1600566753190-17f0bbc564ce?auto=format&fit=crop&q=80&w=800', renovatedCount: 25, description: 'Townhouse transformations with lake views' },
  { id: 'lakes', name: 'The Lakes', slug: 'lakes', image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=800', renovatedCount: 12, description: 'Premium lakefront villa renovations' },
  { id: 'victory-heights', name: 'Victory Heights', slug: 'victory-heights', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800', renovatedCount: 8, description: 'Exclusive golf course living' },
  { id: 'district-one', name: 'District One', slug: 'district-one', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', renovatedCount: 6, description: 'Ultra-luxury Crystal Lagoon estates' },
  { id: 'al-barari', name: 'Al Barari', slug: 'al-barari', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', renovatedCount: 4, description: 'Botanical themed luxury living' },
  { id: 'damac-hills', name: 'DAMAC Hills', slug: 'damac-hills', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800', renovatedCount: 15, description: 'Trump International Golf Club community' },
  { id: 'tilal-al-ghaf', name: 'Tilal Al Ghaf', slug: 'tilal-al-ghaf', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800', renovatedCount: 3, description: 'Lagoon-lifestyle new developments' },
];

const FLAGSHIP_COMMUNITIES = ALL_COMMUNITIES.slice(0, 5);
const OTHER_COMMUNITIES = ALL_COMMUNITIES.slice(5);

/* ═══ M3 Inline Style Helpers ═══ */
const s = {
  ink: '#0C0B09',
  paper: '#EDE6D9',
  newsprint: '#D9D1C0',
  rust: '#C4552A',
  rustPale: '#E8896B',
  stone: '#928378',
};

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [hasSubmittedEmail, setHasSubmittedEmail] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [communityFilter, setCommunityFilter] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<string>('');
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${WHATSAPP_MESSAGE}`;

  useEffect(() => {
    const submitted = localStorage.getItem('smartreno_email_submitted');
    if (submitted) setHasSubmittedEmail(true);
    const favorites = localStorage.getItem('smartreno_favorites');
    if (favorites) setFavoritesCount(JSON.parse(favorites).length);
  }, []);

  const handleFavoritesThresholdReached = () => {
    const favorites = localStorage.getItem('smartreno_favorites');
    if (favorites) setFavoritesCount(JSON.parse(favorites).length);
    setIsEmailModalOpen(true);
  };

  const handleEmailSubmit = (email: string) => {
    console.log('Email captured:', email);
    localStorage.setItem('smartreno_email_submitted', 'true');
    localStorage.setItem('smartreno_user_email', email);
    setHasSubmittedEmail(true);
    setIsEmailModalOpen(false);
  };

  const handleNavigate = (page: string) => {
    if (page.startsWith('project:')) {
      setSelectedProject(page.replace('project:', ''));
      setActivePage('project-detail');
    } else if (page.startsWith('service:')) {
      setSelectedService(page.replace('service:', ''));
      setActivePage('service-detail');
    } else if (page.startsWith('community:')) {
      setCommunityFilter(page.replace('community:', ''));
      setActivePage('portfolio');
    } else if (page === 'portfolio') {
      setCommunityFilter('All');
      setActivePage('portfolio');
    } else if (page === 'services') {
      setActivePage('services');
    } else {
      setActivePage(page);
    }
    window.scrollTo(0, 0);
  };

  /* ═══════════════════════════════
     M3 HOME — MANIFESTO STYLE
  ═══════════════════════════════ */
  const renderHome = () => (
    <div>
      {/* ═══ HERO — S0: BRAND ═══ */}
      <section className="m3-hero" style={{
        background: s.ink,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="m3-section" style={{ textAlign: 'center', padding: '0 40px', maxWidth: '1200px' }}>
          <p style={{
            fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600,
            letterSpacing: '0.35em', textTransform: 'uppercase',
            color: 'rgba(237,230,217,0.3)', marginBottom: '32px',
          }}>Award-Winning · Dubai · Since 1970</p>

          <h1 style={{
            fontFamily: 'var(--display)', fontWeight: 900, textTransform: 'uppercase',
            letterSpacing: '-0.03em', lineHeight: 0.85,
            fontSize: 'clamp(60px, 14vw, 200px)', color: s.paper,
          }}>
            <span style={{ display: 'block' }}>We Build</span>
            <span style={{
              display: 'block',
              WebkitTextStroke: '1.5px rgba(237,230,217,0.2)',
              color: 'transparent',
            }}>Interiors</span>
            <span style={{
              display: 'block', color: s.rust,
              fontWeight: 300, fontStyle: 'italic',
            }}>That Last.</span>
          </h1>

          <p style={{
            fontFamily: 'var(--serif)', fontSize: '22px', fontStyle: 'italic',
            color: 'rgba(237,230,217,0.45)', marginTop: '40px',
            maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6,
          }}>Interior renovation rooted in Italian craftsmanship. Five decades of European expertise, brought to Dubai's most exceptional spaces.</p>

          <div style={{
            marginTop: '52px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: '16px', flexWrap: 'wrap',
          }}>
            <button onClick={() => setIsFormOpen(true)} style={{
              fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.04em',
              color: s.paper, background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '12px', transition: 'color 0.25s',
            }}>Book Free Consultation <span style={{ fontSize: '16px' }}>→</span></button>
            <div style={{ width: '1px', height: '32px', background: 'rgba(237,230,217,0.15)' }}></div>
            <button onClick={() => handleNavigate('portfolio')} style={{
              fontFamily: 'var(--display)', fontSize: '14px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.04em',
              color: 'rgba(237,230,217,0.35)', background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>View Portfolio <span style={{ fontSize: '11px' }}>↗</span></button>
          </div>
        </div>

        {/* Award badge */}
        <div className="m3-award-badge" style={{
          position: 'absolute', bottom: '48px', right: '52px',
          border: '1px solid rgba(237,230,217,0.12)', padding: '14px 20px',
        }}>
          <div style={{
            fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600,
            letterSpacing: '0.25em', textTransform: 'uppercase', color: s.rust, marginBottom: '4px',
          }}>ALA 2025</div>
          <div style={{
            fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic',
            color: 'rgba(237,230,217,0.6)',
          }}>Boutique Firm of the Year</div>
        </div>
      </section>

      {/* ═══ S1: THE STATEMENT — rust ═══ */}
      <section className="m3-section" style={{
        background: s.rust, minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Marquee */}
        <div style={{ position: 'absolute', top: '48px', left: 0, right: 0, overflow: 'hidden' }}>
          <div className="m3-marquee-track" style={{ display: 'flex', width: 'max-content' }}>
            {['Villa Renovation ·', 'Italian Craftsmanship ·', 'ALA 2025 ·', 'Fixed Price ·', 'On Time ·', 'Since 1970 ·',
              'Villa Renovation ·', 'Italian Craftsmanship ·', 'ALA 2025 ·', 'Fixed Price ·', 'On Time ·', 'Since 1970 ·',
            ].map((item, i) => (
              <span key={i} className="m3-marquee-item">{item}</span>
            ))}
          </div>
        </div>

        <div className="m3-statement" style={{ padding: '0 60px', maxWidth: '1200px', width: '100%' }}>
          <h2 style={{
            fontFamily: 'var(--display)', fontWeight: 900, textTransform: 'uppercase',
            letterSpacing: '-0.03em', lineHeight: 0.88,
            fontSize: 'clamp(48px, 10vw, 144px)', color: s.paper,
          }}>
            We Don't<br/>
            <span style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(237,230,217,0.6)', display: 'block' }}>Decorate.</span>
            We Transform.
            <span style={{
              fontSize: '0.55em', color: 'rgba(237,230,217,0.35)', display: 'block', letterSpacing: '0.02em',
            }}>500 projects. 0 delays. 6 awards.</span>
          </h2>
        </div>

        {/* Stat strip */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'rgba(12,11,9,0.2)',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        }} className="m3-stat-strip">
          {[
            { num: '55', sup: '+', label: 'Years' },
            { num: '500', sup: '+', label: 'Projects' },
            { num: '6', sup: '×', label: 'Awards' },
            { num: '100', sup: '%', label: 'On Time' },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: '20px 40px', textAlign: 'center',
              borderRight: i < 3 ? '1px solid rgba(237,230,217,0.1)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--display)', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900,
                color: s.paper, lineHeight: 1,
              }}>{stat.num}<sup style={{ fontSize: '0.38em', color: 'rgba(237,230,217,0.6)', verticalAlign: 'super' }}>{stat.sup}</sup></div>
              <div style={{
                fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(237,230,217,0.5)', marginTop: '4px',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ S2: THE NUMBERS — paper grid ═══ */}
      <section className="m3-section" style={{ background: s.paper, minHeight: '100vh', display: 'flex' }}>
        <div className="m3-stats-grid" style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', minHeight: '100vh' }}>
          {[
            { num: '55', sup: '+', label: 'Years of Excellence', ghost: 'Est. 1970 · Dubai, UAE' },
            { num: '500', sup: '+', label: 'Projects Delivered', ghost: 'Villas, kitchens, offices' },
            { num: '6', sup: '×', label: 'Industry Awards', ghost: 'ALA · DME · 2022–2025' },
            { num: '100', sup: '%', label: 'Client Satisfaction', ghost: 'Since project one' },
          ].map((cell, i) => {
            const isHovered = hoveredStat === i;
            return (
              <div key={i}
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer', transition: 'background 0.35s',
                  padding: '48px', borderRight: i < 3 ? `1px solid ${s.newsprint}` : 'none',
                  background: isHovered ? s.ink : 'transparent',
                }}
              >
                <div style={{
                  fontFamily: 'var(--display)', fontSize: 'clamp(60px, 10vw, 140px)', fontWeight: 900,
                  letterSpacing: '-0.03em', lineHeight: 0.85, textAlign: 'center',
                  color: isHovered ? s.paper : s.ink, transition: 'color 0.35s',
                }}>
                  {cell.num}<sup style={{ fontSize: '0.38em', color: s.rust, verticalAlign: 'super' }}>{cell.sup}</sup>
                </div>
                <div style={{
                  fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: isHovered ? 'rgba(237,230,217,0.4)' : s.stone,
                  marginTop: '14px', textAlign: 'center', transition: 'color 0.35s',
                }}>{cell.label}</div>
                <div style={{
                  fontFamily: 'var(--display)', fontSize: 'clamp(11px, 1.2vw, 16px)',
                  fontWeight: 300, fontStyle: 'italic',
                  color: isHovered ? 'rgba(237,230,217,0.2)' : s.newsprint,
                  marginTop: '6px', textAlign: 'center', transition: 'color 0.35s',
                }}>{cell.ghost}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ S3: SERVICES — ink background, numbered list ═══ */}
      <section className="m3-section" style={{ background: s.ink, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="m3-section" style={{
          padding: '48px 60px 24px',
          borderBottom: '1px solid rgba(237,230,217,0.06)',
        }}>
          <h2 style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 900,
            textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.9, color: s.paper,
          }}>What We <em style={{ color: s.rust, fontWeight: 300, fontStyle: 'italic' }}>Build</em></h2>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
          {SERVICES.map((svc, i) => {
            const isHovered = hoveredService === i;
            return (
              <div key={svc.id}
                className="m3-service-item"
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => handleNavigate(`service:${svc.id}`)}
                style={{
                  display: 'flex', alignItems: 'center',
                  padding: isHovered ? '0 60px 0 76px' : '0 60px',
                  borderBottom: i < SERVICES.length - 1 ? '1px solid rgba(237,230,217,0.05)' : 'none',
                  cursor: 'pointer', transition: 'all 0.3s', flex: 1,
                  background: isHovered ? 'rgba(237,230,217,0.02)' : 'transparent',
                }}
              >
                <span className="m3-service-num" style={{
                  fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 900,
                  color: isHovered ? 'rgba(196,85,42,0.2)' : 'rgba(237,230,217,0.08)',
                  minWidth: '72px', lineHeight: 1, transition: 'color 0.3s',
                }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{
                  fontFamily: 'var(--display)', fontSize: 'clamp(24px, 3.5vw, 52px)', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '-0.01em',
                  color: isHovered ? s.paper : 'rgba(237,230,217,0.7)',
                  flex: 1, lineHeight: 1, transition: 'color 0.3s',
                }}>{svc.shortTitle}</span>
                <span className="m3-service-time" style={{
                  fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: isHovered ? s.rust : 'rgba(237,230,217,0.2)',
                  whiteSpace: 'nowrap', transition: 'color 0.3s',
                }}>{svc.timeline}</span>
                <span className="m3-service-arrow" style={{
                  fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 700,
                  color: s.rust, opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'translateX(0)' : 'translateX(-12px)',
                  transition: 'all 0.35s', marginLeft: '24px',
                }}>→</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ S4: FEATURED PROJECT ═══ */}
      <section className="m3-split" style={{ background: s.ink, minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div className="m3-split-img" style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src={PROJECTS[0].afterImage}
            alt={PROJECTS[0].title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              filter: 'saturate(0.65) contrast(1.1)',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(12,11,9,0.4) 0%, transparent 100%)',
          }}></div>
        </div>
        <div className="m3-split-text" style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: '72px 64px',
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600,
              letterSpacing: '0.3em', textTransform: 'uppercase', color: s.rust,
            }}>Featured Project · {PROJECTS[0].location}</p>
            <h2 style={{
              fontFamily: 'var(--display)', fontSize: 'clamp(40px, 7vw, 96px)', fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.88,
              color: s.paper, marginTop: '16px',
            }}>
              {PROJECTS[0].location.split(' ')[0]}<br/>
              <span style={{
                WebkitTextStroke: '1px rgba(237,230,217,0.2)', color: 'transparent', display: 'block',
              }}>{PROJECTS[0].location.split(' ').slice(1).join(' ') || 'Villa'}</span>
              Villa.
            </h2>
            <div style={{
              display: 'flex', gap: '24px', paddingTop: '24px',
              borderTop: '1px solid rgba(237,230,217,0.08)', marginTop: '24px',
            }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: s.stone }}>{PROJECTS[0].style || 'Full Renovation'}</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: s.stone }}>Dubai · {PROJECTS[0].completion || '2024'}</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: s.stone }}>{PROJECTS[0].timeline}</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{
              fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600,
              letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(237,230,217,0.25)',
            }}>ALA 2025 · Boutique Firm of the Year</span>
            <button onClick={() => handleNavigate(`project:${PROJECTS[0].id}`)} style={{
              fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.02em', color: s.rust,
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '14px', transition: 'color 0.3s',
              textAlign: 'left',
            }}>View Project <span style={{ fontSize: '18px' }}>→</span></button>
          </div>
        </div>
      </section>

      {/* ═══ S5: PROCESS — 3-column grid ═══ */}
      <section className="m3-section" style={{ background: s.paper, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="m3-section" style={{ padding: '48px 60px 0' }}>
          <h2 style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 900,
            textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.9, color: s.ink,
          }}>How We <em style={{ color: s.rust, fontWeight: 300, fontStyle: 'italic' }}>Work</em></h2>
        </div>
        <div className="m3-process-grid" style={{
          flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0, background: s.newsprint,
        }}>
          {[
            { num: '01', title: 'Discovery', desc: 'Free site visit, accurate measurements and structural assessment. We listen before we draw.', tags: ['Free visit', 'Brief', 'Budget'] },
            { num: '02', title: 'Planning', desc: 'Technical drawings, mood boards, fixed-price contract. Permits and logistics fully managed.', tags: ['Drawings', 'Fixed price', 'Timeline'] },
            { num: '03', title: 'Delivery', desc: 'End-to-end project management. On time. Within budget. Every trade, every deadline accountable.', tags: ['On time', 'Handover', 'Warranty'] },
          ].map((step, i) => {
            const isHovered = hoveredStep === i;
            return (
              <div key={i}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                style={{
                  background: isHovered ? s.ink : s.paper,
                  padding: '48px 52px', display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between', transition: 'background 0.4s', cursor: 'pointer',
                  borderRight: i < 2 ? `1px solid ${s.newsprint}` : 'none',
                }}
              >
                <div>
                  <div style={{
                    fontFamily: 'var(--display)', fontSize: '96px', fontWeight: 900,
                    color: isHovered ? 'rgba(237,230,217,0.04)' : 'rgba(12,11,9,0.06)',
                    lineHeight: 0.85, marginBottom: '20px', transition: 'color 0.4s',
                  }}>{step.num}</div>
                  <div style={{
                    fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '-0.01em',
                    color: isHovered ? s.paper : s.ink,
                    marginBottom: '12px', lineHeight: 1, transition: 'color 0.4s',
                  }}>{step.title}</div>
                  <p style={{
                    fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic',
                    color: isHovered ? 'rgba(237,230,217,0.5)' : 'rgba(12,11,9,0.55)',
                    lineHeight: 1.8, transition: 'color 0.4s',
                  }}>{step.desc}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                  {step.tags.map((tag, ti) => (
                    <span key={ti} style={{
                      fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600,
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: s.rust, border: `1px solid rgba(196,85,42,${isHovered ? '0.4' : '0.3'})`,
                      padding: '3px 10px', transition: 'color 0.4s, border-color 0.4s',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ TESTIMONIALS — editorial ═══ */}
      <section className="m3-section" style={{ background: s.ink, padding: '100px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontFamily: 'var(--display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.9, color: s.paper,
            }}>Client <em style={{ color: s.rust, fontWeight: 300, fontStyle: 'italic' }}>Stories</em></h2>
          </div>
          <div className="m3-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(237,230,217,0.06)' }}>
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} style={{
                background: s.ink, padding: '48px 40px', position: 'relative',
              }}>
                <Quote size={32} style={{ color: 'rgba(237,230,217,0.06)', position: 'absolute', top: '24px', right: '24px' }} />
                <div style={{ display: 'flex', gap: '3px', marginBottom: '24px' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill={s.rust} style={{ color: s.rust }} />
                  ))}
                </div>
                <p style={{
                  fontFamily: 'var(--serif)', fontSize: '18px', fontStyle: 'italic',
                  color: 'rgba(237,230,217,0.7)', lineHeight: 1.8, marginBottom: '32px',
                }}>"{t.quote}"</p>
                <div style={{ borderTop: '1px solid rgba(237,230,217,0.06)', paddingTop: '16px' }}>
                  <div style={{
                    fontFamily: 'var(--ui)', fontSize: '12px', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase', color: s.paper,
                  }}>{t.name}</div>
                  <div style={{
                    fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: s.rust, marginTop: '4px',
                  }}>{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — split manifesto + form ═══ */}
      <section className="m3-section" style={{ background: s.ink }}>
        <div className="m3-cta-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }}>
          {/* Left: Manifesto */}
          <div className="m3-cta-left" style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '80px 64px', borderRight: '1px solid rgba(237,230,217,0.06)',
          }}>
            <h2 style={{
              fontFamily: 'var(--display)', fontSize: 'clamp(48px, 8vw, 112px)', fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.88,
              color: s.paper, marginBottom: '32px',
            }}>
              Start Your<br/>
              <em style={{ color: s.rust, fontWeight: 300, fontStyle: 'italic', display: 'block' }}>Project.</em>
            </h2>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: '18px', fontStyle: 'italic',
              color: 'rgba(237,230,217,0.45)', lineHeight: 1.75,
              maxWidth: '380px', marginBottom: '36px',
            }}>Free consultation with Marco and Cinzia. We visit your property, listen to your vision and tell you exactly what's possible — no obligation.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Free site visit — same week',
                'Fixed-price quote — no surprises',
                'On-time delivery — guaranteed',
                '55+ years of Italian craftsmanship',
              ].map((g, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--ui)', fontSize: '12px', fontWeight: 500,
                  letterSpacing: '0.04em', color: 'rgba(237,230,217,0.4)',
                  display: 'flex', alignItems: 'center', gap: '10px',
                }}>
                  <span style={{ color: s.rust, fontWeight: 700 }}>✓</span> {g}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Mini form */}
          <div className="m3-cta-right" style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '80px 64px',
          }}>
            <div style={{
              fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '-0.01em', color: s.paper,
              marginBottom: '32px',
            }}>Book Free Consultation</div>
            <div className="m3-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={formLabelStyle}>First Name</label>
                <input type="text" placeholder="Marco" style={formInputStyle} />
              </div>
              <div>
                <label style={formLabelStyle}>Last Name</label>
                <input type="text" placeholder="Rossi" style={formInputStyle} />
              </div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={formLabelStyle}>Phone Number</label>
              <input type="tel" placeholder="+971 XX XXX XXXX" style={formInputStyle} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={formLabelStyle}>Project Type</label>
              <select style={{ ...formInputStyle, appearance: 'none' as const }}>
                {SERVICES.map(svc => (
                  <option key={svc.id} style={{ background: s.ink }}>{svc.shortTitle}</option>
                ))}
              </select>
            </div>
            <button onClick={() => setIsFormOpen(true)} style={{
              width: '100%', fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.04em',
              background: s.rust, color: s.paper, border: 'none',
              padding: '16px', cursor: 'pointer', marginTop: '10px', transition: 'all 0.25s',
            }}>Send My Brief →</button>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: '13px', fontStyle: 'italic',
              color: 'rgba(237,230,217,0.25)', textAlign: 'center', marginTop: '10px',
            }}>We respond within 24 hours. No spam. Free site visit included.</p>
          </div>
        </div>

        {/* Communities grid before footer */}
        <div className="m3-section" style={{ padding: '60px', borderTop: '1px solid rgba(237,230,217,0.06)' }}>
          <h3 style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 900,
            textTransform: 'uppercase', color: s.paper, marginBottom: '32px',
          }}>Communities We <em style={{ color: s.rust, fontWeight: 300, fontStyle: 'italic' }}>Serve</em></h3>
          <div className="m3-communities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1px', background: 'rgba(237,230,217,0.06)' }}>
            {COMMUNITIES.map((c) => (
              <button key={c.id} onClick={() => handleNavigate(`community:${c.name}`)} style={{
                background: s.ink, padding: '24px', textAlign: 'left', border: 'none', cursor: 'pointer',
                transition: 'background 0.3s',
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(237,230,217,0.03)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = s.ink; }}
              >
                <div style={{
                  fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 700,
                  textTransform: 'uppercase', color: s.paper, marginBottom: '4px',
                }}>{c.name}</div>
                <div style={{
                  fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: s.rust,
                }}>{c.renovatedCount}+ villas</div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer strip */}
        <div className="m3-footer-strip" style={{
          background: 'rgba(237,230,217,0.03)',
          borderTop: '1px solid rgba(237,230,217,0.06)',
          padding: '16px 64px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '16px',
        }}>
          <span style={{
            fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 900,
            textTransform: 'uppercase', letterSpacing: '-0.01em', color: 'rgba(237,230,217,0.4)',
          }}>Smart·<em style={{ color: s.rust, fontWeight: 300, fontStyle: 'italic' }}>Renovation</em></span>
          <div className="m3-footer-links" style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: '+971 4 235 0599', href: 'tel:+97142350599' },
              { label: 'Dubai, UAE', href: '#' },
              { label: 'Instagram', href: '#' },
              { label: 'LinkedIn', href: '#' },
            ].map((link, i) => (
              <a key={i} href={link.href} style={{
                fontFamily: 'var(--ui)', fontSize: '10px', letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'rgba(237,230,217,0.2)',
                transition: 'color 0.25s',
              }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(237,230,217,0.55)'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(237,230,217,0.2)'; }}
              >{link.label}</a>
            ))}
          </div>
          <span style={{
            fontFamily: 'var(--ui)', fontSize: '10px', letterSpacing: '0.08em',
            color: 'rgba(237,230,217,0.15)',
          }}>© 2025 Smart Renovation LLC</span>
        </div>
      </section>
    </div>
  );

  /* ═══ HERITAGE PAGE ═══ */
  const renderHeritage = () => (
    <div>
      <section style={{
        background: s.ink, padding: '160px 60px 100px', minHeight: '60vh',
        display: 'flex', alignItems: 'flex-end',
      }} className="m3-section-hero">
        <div style={{ maxWidth: '900px' }}>
          <span style={{ ...tagStyle, color: s.rust }}>OUR STORY</span>
          <h1 style={{ ...heroTitleStyle, color: s.paper, marginTop: '16px' }}>
            From Milan to Dubai:<br/>
            <span style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(237,230,217,0.5)' }}>50 Years of Excellence</span>
          </h1>
          <p style={{ ...bodyTextStyle, color: 'rgba(237,230,217,0.5)', marginTop: '24px', maxWidth: '600px' }}>
            Smart Renovation isn't just a fit-out company; it's a legacy of Italian craftsmanship that began in the workshops of Lombardy in 1970 and blossomed in the luxury estates of Dubai.
          </p>
        </div>
      </section>
      <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {[
            { year: '1970', title: 'The Italian Roots', desc: 'Our family established a luxury furniture and design workshop in Milan, specializing in bespoke Italian interiors.' },
            { year: '1995', title: 'European Expansion', desc: 'Expanding across the EU, handling restoration of historical villas in Lake Como and Tuscany.' },
            { year: '2015', title: 'Landing in Dubai', desc: 'Bringing the "Turnkey Italian" concept to the Middle East, starting with a single Signature Villa on Palm Jumeirah.' },
            { year: '2026', title: 'Dubai\'s Premier Firm', desc: 'Today, we are a 6-time award-winning firm with over 400 villas transformed across the UAE.' },
          ].map((item, i) => (
            <div key={i} className="m3-heritage-item" style={{
              display: 'flex', gap: '40px', padding: '40px 0',
              borderBottom: i < 3 ? `1px solid ${s.newsprint}` : 'none',
            }}>
              <div className="m3-heritage-num" style={{
                fontFamily: 'var(--display)', fontSize: '64px', fontWeight: 900,
                color: 'rgba(12,11,9,0.06)', lineHeight: 0.85, minWidth: '80px',
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div style={{ fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: s.rust, marginBottom: '8px' }}>{item.year}</div>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(12,11,9,0.55)', lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  /* ═══ AWARDS PAGE ═══ */
  const renderAwards = () => (
    <div>
      <section className="m3-section-hero" style={{ background: s.ink, padding: '160px 60px 80px' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ ...tagStyle, color: s.rust }}>RECOGNITION</span>
          <h1 style={{ ...heroTitleStyle, color: s.paper, marginTop: '16px' }}>
            6-Time Award<br/><span style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(237,230,217,0.5)' }}>Winner</span>
          </h1>
        </div>
      </section>
      <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
        <div className="m3-awards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: s.newsprint, maxWidth: '1000px', margin: '0 auto' }}>
          {AWARDS.map((award, i) => (
            <div key={i} style={{ background: s.paper, padding: '40px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: s.rust, marginBottom: '12px' }}>{award.year}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: '22px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginBottom: '8px', lineHeight: 1.1 }}>{award.title}</h3>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: s.stone }}>{award.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  /* ═══ FOUNDERS PAGE ═══ */
  const renderFounders = () => (
    <div>
      <section className="m3-section-hero" style={{ background: s.ink, padding: '160px 60px 80px', textAlign: 'center' }}>
        <span style={{ ...tagStyle, color: s.rust }}>THE HAUTE COUTURE OF RENOVATION</span>
        <h1 style={{ ...heroTitleStyle, color: s.paper, marginTop: '16px' }}>
          Meet the Master<br/><span style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(237,230,217,0.5)' }}>Tailors</span>
        </h1>
        <p style={{ ...bodyTextStyle, color: 'rgba(237,230,217,0.45)', maxWidth: '600px', margin: '24px auto 0' }}>
          Like the finest Milanese fashion houses, we believe luxury cannot be mass-produced.
        </p>
      </section>
      <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { name: 'Marco P.', role: 'FOUNDER & CREATIVE DIRECTOR', quote: '"Every villa tells a story. My job is to ensure that story is written in Italian marble and European light."', bio: 'With over 30 years of personal experience in high-end structural renovations, Marco leads the design and site engineering teams.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800' },
            { name: 'Cinzia D.', role: 'CO-FOUNDER & RELATIONS DIRECTOR', quote: '"We don\'t just build rooms; we curate experiences for Dubai\'s most discerning families."', bio: 'Cinzia manages our client partnerships with the attentiveness of a private couturier.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
          ].map((person, i) => (
            <div key={i} className="m3-founders-grid" style={{
              display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: '64px', marginBottom: i === 0 ? '80px' : 0, alignItems: 'center',
              direction: i % 2 === 1 ? 'rtl' : 'ltr',
            }}>
              <div style={{ direction: 'ltr' }}>
                <img src={person.img} alt={person.name} style={{ width: '100%', height: '500px', objectFit: 'cover', filter: 'saturate(0.7) contrast(1.1)' }} />
              </div>
              <div style={{ direction: 'ltr' }}>
                <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: s.rust, marginBottom: '12px' }}>{person.role}</div>
                <h2 style={{ fontFamily: 'var(--display)', fontSize: '48px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginBottom: '16px' }}>{person.name}</h2>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontStyle: 'italic', color: 'rgba(12,11,9,0.5)', lineHeight: 1.7, marginBottom: '20px' }}>{person.quote}</p>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(12,11,9,0.45)', lineHeight: 1.8, marginBottom: '24px' }}>{person.bio}</p>
                <Button variant="outline" onClick={() => setIsFormOpen(true)}>Schedule a Briefing</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  /* ═══ TESTIMONIALS PAGE ═══ */
  const renderTestimonials = () => (
    <div>
      <section className="m3-section-hero" style={{ background: s.ink, padding: '160px 60px 80px', textAlign: 'center' }}>
        <h1 style={{ ...heroTitleStyle, color: s.paper }}>
          Client <span style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(237,230,217,0.5)' }}>Stories</span>
        </h1>
      </section>
      <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} style={{
              padding: '48px 0', borderBottom: idx < TESTIMONIALS.length - 1 ? `1px solid ${s.newsprint}` : 'none',
            }}>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={s.rust} style={{ color: s.rust }} />)}
              </div>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '24px', fontStyle: 'italic', color: 'rgba(12,11,9,0.7)', lineHeight: 1.7, marginBottom: '20px' }}>"{t.quote}"</p>
              <div style={{ fontFamily: 'var(--ui)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.ink }}>{t.name}</div>
              <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: s.rust, marginTop: '4px' }}>{t.location}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  /* ═══ COMMUNITIES HUB ═══ */
  const renderCommunitiesHub = () => (
    <div>
      <section className="m3-section-hero" style={{ background: s.ink, padding: '160px 60px 80px' }}>
        <span style={{ ...tagStyle, color: s.rust }}>WHERE WE WORK</span>
        <h1 style={{ ...heroTitleStyle, color: s.paper, marginTop: '16px' }}>
          Dubai <span style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(237,230,217,0.5)' }}>Communities</span>
        </h1>
        <p style={{ ...bodyTextStyle, color: 'rgba(237,230,217,0.45)', marginTop: '20px', maxWidth: '600px' }}>
          Specialized villa renovation expertise across 13 of Dubai's premier residential areas. 400+ villas transformed.
        </p>
      </section>

      {/* Flagship grid */}
      <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginBottom: '32px' }}>Flagship Communities</h2>
        <div className="m3-flagship-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: s.newsprint }}>
          {FLAGSHIP_COMMUNITIES.map((c) => (
            <div key={c.id} onClick={() => handleNavigate(`community:${c.name}`)} style={{
              position: 'relative', height: '350px', overflow: 'hidden', cursor: 'pointer', background: s.ink,
            }}>
              <img src={c.image} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.65) contrast(1.1)', transition: 'transform 0.7s' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,11,9,0.8) 0%, transparent 60%)' }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '32px', color: s.paper }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '4px' }}>{c.name}</div>
                <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: s.rust }}>{c.renovatedCount}+ villas renovated</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other communities */}
      <section className="m3-section" style={{ background: s.paper, padding: '0 60px 80px' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginBottom: '32px' }}>Other Communities</h2>
        <div className="m3-communities-other" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: s.newsprint }}>
          {OTHER_COMMUNITIES.map((c) => (
            <button key={c.id} onClick={() => handleNavigate(`community:${c.name}`)} style={{
              background: s.paper, padding: '24px', textAlign: 'left', border: 'none', cursor: 'pointer',
              transition: 'background 0.3s',
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = s.ink; (e.currentTarget as HTMLElement).style.color = s.paper; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = s.paper; (e.currentTarget as HTMLElement).style.color = s.ink; }}
            >
              <div style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>{c.name}</div>
              <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: s.rust }}>{c.renovatedCount}+ villas</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '13px', fontStyle: 'italic', color: s.stone, marginTop: '8px' }}>{c.description}</div>
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="m3-section" style={{ background: s.rust, padding: '80px 60px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '48px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, marginBottom: '16px' }}>Don't See Your Community?</h2>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontStyle: 'italic', color: 'rgba(237,230,217,0.6)', marginBottom: '32px' }}>We serve all premium residential areas in Dubai.</p>
        <Button variant="white" onClick={() => setIsFormOpen(true)}>Get in Touch</Button>
      </section>
    </div>
  );

  /* ═══ PROCESS PAGE ═══ */
  const renderProcess = () => (
    <div>
      <section className="m3-section-hero" style={{ background: s.ink, padding: '160px 60px 80px', textAlign: 'center' }}>
        <span style={{ ...tagStyle, color: s.rust }}>HOW WE WORK</span>
        <h1 style={{ ...heroTitleStyle, color: s.paper, marginTop: '16px' }}>
          Our Seamless <span style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(237,230,217,0.5)' }}>Process</span>
        </h1>
        <p style={{ ...bodyTextStyle, color: 'rgba(237,230,217,0.45)', maxWidth: '600px', margin: '24px auto 0' }}>
          From initial consultation to final handover, guided with Italian precision and personal attention.
        </p>
      </section>
      <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="m3-process-page-item" style={{
              display: 'flex', gap: '40px', padding: '40px 0',
              borderBottom: idx < PROCESS_STEPS.length - 1 ? `1px solid ${s.newsprint}` : 'none',
              alignItems: 'flex-start',
            }}>
              <div className="m3-process-page-num" style={{
                fontFamily: 'var(--display)', fontSize: '64px', fontWeight: 900,
                color: 'rgba(12,11,9,0.06)', lineHeight: 0.85, minWidth: '80px',
              }}>{String(idx + 1).padStart(2, '0')}</div>
              <div>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{step.icon}</div>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(12,11,9,0.55)', lineHeight: 1.8 }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Timeline */}
      <section className="m3-section" style={{ background: s.ink, padding: '80px 60px' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, textAlign: 'center', marginBottom: '48px' }}>Typical Timeline</h2>
        <div className="m3-timeline-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(237,230,217,0.06)', maxWidth: '800px', margin: '0 auto' }}>
          {[
            { phase: 'Design', duration: '4-6 weeks' },
            { phase: 'Permits', duration: '2-4 weeks' },
            { phase: 'Construction', duration: '3-8 months' },
            { phase: 'Handover', duration: '1-2 weeks' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: s.ink, padding: '32px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 900, color: s.rust, marginBottom: '8px' }}>{item.duration}</div>
              <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,230,217,0.4)' }}>{item.phase}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="m3-section" style={{ background: s.rust, padding: '80px 60px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '48px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, marginBottom: '16px' }}>Ready to Start?</h2>
        <Button variant="white" onClick={() => setIsFormOpen(true)}>Book Free Consultation</Button>
      </section>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Grain overlay */}
      <div className="m3-grain"></div>

      <Header
        onConsultationClick={() => setIsFormOpen(true)}
        onNavigate={handleNavigate}
      />

      <main>
        {activePage === 'home' && renderHome()}
        {activePage === 'heritage' && renderHeritage()}
        {activePage === 'awards-recognition' && renderAwards()}
        {activePage === 'founders' && renderFounders()}
        {activePage === 'client-testimonials' && renderTestimonials()}
        {activePage === 'communities' && renderCommunitiesHub()}
        {activePage === 'process' && renderProcess()}

        {activePage === 'villa-guide' && (
          <VillaRenovationGuide onConsultationClick={() => setIsFormOpen(true)} onNavigate={handleNavigate} />
        )}
        {activePage === 'materials-guide' && (
          <MaterialsGuide onConsultationClick={() => setIsFormOpen(true)} onNavigate={handleNavigate} />
        )}
        {activePage === 'noc-guide' && (
          <NOCApprovalsGuide onConsultationClick={() => setIsFormOpen(true)} onNavigate={handleNavigate} />
        )}
        {activePage === 'blog' && (
          <BlogPage onConsultationClick={() => setIsFormOpen(true)} onNavigate={handleNavigate} />
        )}
        {activePage === 'services' && (
          <ServicesIndex onNavigate={(serviceId) => handleNavigate(`service:${serviceId}`)} onConsultationClick={() => setIsFormOpen(true)} />
        )}
        {activePage === 'service-detail' && (
          <ServiceDetail serviceId={selectedService} onBack={() => handleNavigate('services')} onConsultationClick={() => setIsFormOpen(true)} onViewProject={(id) => { if (SERVICES.find(ss => ss.id === id)) { handleNavigate(`service:${id}`); } else { handleNavigate('portfolio'); } }} />
        )}
        {activePage === 'portfolio' && (
          <PortfolioGallery onFavoritesThresholdReached={handleFavoritesThresholdReached} hasSubmittedEmail={hasSubmittedEmail} initialFilter={communityFilter} onViewProject={(projectId) => handleNavigate(`project:${projectId}`)} onRequestProject={(project) => { localStorage.setItem('smartreno_inspiration_project', JSON.stringify({ title: project.title, style: project.style, location: project.location })); setIsFormOpen(true); }} />
        )}
        {activePage === 'project-detail' && (
          <ProjectDetail projectId={selectedProject} onBack={() => handleNavigate('portfolio')} onConsultationClick={() => setIsFormOpen(true)} onViewProject={(projectId) => handleNavigate(`project:${projectId}`)} />
        )}
        {(['about'].includes(activePage)) && (
          <div style={{ padding: '200px 60px 100px', textAlign: 'center', background: s.paper }}>
            <h1 style={{ ...heroTitleStyle, color: s.ink }}>{activePage}</h1>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontStyle: 'italic', color: s.stone, marginTop: '16px' }}>Detailed content coming soon.</p>
            <div style={{ marginTop: '32px' }}><Button onClick={() => handleNavigate('home')}>Return Home</Button></div>
          </div>
        )}
      </main>

      {isFormOpen && <SmartConsultationForm onClose={() => setIsFormOpen(false)} />}
      <EmailCaptureModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} onSubmit={handleEmailSubmit} favoritesCount={favoritesCount} />
    </div>
  );
};

/* ═══ Shared inline style constants ═══ */
const tagStyle: React.CSSProperties = {
  fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600,
  letterSpacing: '0.35em', textTransform: 'uppercase',
};

const heroTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--display)', fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 900,
  textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.88,
};

const bodyTextStyle: React.CSSProperties = {
  fontFamily: 'var(--serif)', fontSize: '18px', fontStyle: 'italic', lineHeight: 1.75,
};

const formLabelStyle: React.CSSProperties = {
  fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600,
  letterSpacing: '0.22em', textTransform: 'uppercase',
  color: 'rgba(237,230,217,0.3)', display: 'block', marginBottom: '6px',
};

const formInputStyle: React.CSSProperties = {
  width: '100%', background: 'transparent', border: 'none',
  borderBottom: '1px solid rgba(237,230,217,0.15)',
  padding: '10px 0', fontFamily: 'var(--serif)', fontSize: '16px',
  fontStyle: 'italic', color: '#EDE6D9', outline: 'none',
};

export default App;
