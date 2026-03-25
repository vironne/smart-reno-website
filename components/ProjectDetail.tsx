import React, { useState } from 'react';
import {
  ArrowLeft, ChevronLeft, ChevronRight, MapPin, Home, Calendar,
  Clock, Palette, Banknote, Quote, Wrench, Lightbulb, CheckCircle2
} from 'lucide-react';
import { PROJECTS, PROCESS_STEPS } from '../constants';
import { Button } from './Button';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
  onConsultationClick: () => void;
  onViewProject: (projectId: string) => void;
}

const s = { ink: '#1a1714', paper: '#F5F0EB', newsprint: '#ebe5dd', rust: '#B8976A', stone: '#6b5e52' };

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack, onConsultationClick, onViewProject }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeRoom, setActiveRoom] = useState(0);

  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return (
      <div style={{ padding: '200px 60px', textAlign: 'center', background: s.paper }}>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: '48px', fontWeight: 900, textTransform: 'uppercase', color: s.ink }}>Project not found</h1>
        <div style={{ marginTop: '32px' }}><Button onClick={onBack}>Back to Portfolio</Button></div>
      </div>
    );
  }

  const gallery = project.gallery || [project.afterImage, project.beforeImage];
  const relatedProjects = PROJECTS.filter(p => p.id !== projectId && p.location === project.location).slice(0, 3);
  if (relatedProjects.length < 3) {
    const otherProjects = PROJECTS.filter(p => p.id !== projectId && !relatedProjects.find(r => r.id === p.id)).slice(0, 3 - relatedProjects.length);
    relatedProjects.push(...otherProjects);
  }

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <div>
      {/* Hero — spotlight style */}
      <section className="m3-project-hero" style={{ background: s.ink, minHeight: '70vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {/* Image with gallery */}
        <div className="m3-project-hero-img" style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={gallery[currentImageIndex]} alt={project.title} style={{
            width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.65) contrast(1.1)',
          }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,23,20,0.3) 0%, transparent 100%)' }}></div>

          {/* Nav arrows */}
          <button onClick={prevImage} style={{
            position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
            width: '40px', height: '40px', background: 'rgba(245,240,235,0.1)', border: 'none',
            color: s.paper, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><ChevronLeft size={20} /></button>
          <button onClick={nextImage} style={{
            position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
            width: '40px', height: '40px', background: 'rgba(245,240,235,0.1)', border: 'none',
            color: s.paper, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><ChevronRight size={20} /></button>

          {/* Counter */}
          <div style={{
            position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)',
            fontFamily: 'var(--ui)', fontSize: '11px', letterSpacing: '0.15em',
            color: 'rgba(245,240,235,0.5)', background: 'rgba(26,23,20,0.5)', padding: '6px 14px',
          }}>{currentImageIndex + 1} / {gallery.length}</div>

          {/* Back button */}
          <button onClick={onBack} style={{
            position: 'absolute', top: '24px', left: '24px',
            fontFamily: 'var(--ui)', fontSize: '11px', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'rgba(245,240,235,0.5)',
            background: 'rgba(26,23,20,0.4)', border: 'none', cursor: 'pointer',
            padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px',
          }}><ArrowLeft size={14} /> Portfolio</button>
        </div>

        {/* Text panel */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: '72px 64px',
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600,
              letterSpacing: '0.3em', textTransform: 'uppercase', color: s.rust,
            }}>Featured · {project.location}</p>
            <h1 style={{
              fontFamily: 'var(--display)', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.88,
              color: s.paper, marginTop: '16px',
            }}>
              {project.title.split(' ').slice(0, 2).join(' ')}<br/>
              <span style={{
                WebkitTextStroke: '1px rgba(245,240,235,0.2)', color: 'transparent', display: 'block',
              }}>{project.title.split(' ').slice(2).join(' ') || 'Project'}</span>
            </h1>
            {project.description && (
              <p style={{
                fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic',
                color: 'rgba(245,240,235,0.45)', lineHeight: 1.7, marginTop: '20px', maxWidth: '400px',
              }}>{project.description}</p>
            )}
            <div style={{
              display: 'flex', gap: '24px', paddingTop: '24px',
              borderTop: '1px solid rgba(245,240,235,0.08)', marginTop: '24px',
            }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: s.stone }}>{project.investment}</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: s.stone }}>{project.timeline}</span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: s.stone }}>{project.style}</span>
            </div>
          </div>
          <div>
            <Button variant="primary" onClick={onConsultationClick}>Start Your Project →</Button>
          </div>
        </div>
      </section>

      {/* Before/After by Room */}
      {project.rooms && project.rooms.length > 0 && (
        <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: s.rust }}>ROOM BY ROOM</span>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginTop: '8px' }}>Before & After</h2>
          </div>
          <div className="m3-room-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginBottom: '48px', background: s.newsprint }}>
            {project.rooms.map((room, idx) => (
              <button key={idx} onClick={() => setActiveRoom(idx)} style={{
                padding: '10px 24px', fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 600,
                letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer',
                background: activeRoom === idx ? s.ink : s.paper,
                color: activeRoom === idx ? s.paper : s.ink,
                transition: 'all 0.3s',
              }}>{room.name}</button>
            ))}
          </div>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <BeforeAfterSlider
              before={project.rooms[activeRoom].beforeImage}
              after={project.rooms[activeRoom].afterImage}
            />
            {project.rooms[activeRoom].description && (
              <p style={{
                fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic',
                color: s.stone, textAlign: 'center', marginTop: '20px',
              }}>{project.rooms[activeRoom].description}</p>
            )}
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="m3-section" style={{ background: s.ink, padding: '80px 60px', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <Quote size={40} style={{ color: 'rgba(245,240,235,0.08)', marginBottom: '24px' }} />
            <blockquote style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(20px, 3vw, 28px)', fontStyle: 'italic',
              color: 'rgba(245,240,235,0.7)', lineHeight: 1.7, marginBottom: '24px',
            }}>"{project.testimonial.quote}"</blockquote>
            <div style={{ fontFamily: 'var(--ui)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.paper }}>{project.testimonial.author}</div>
            {project.testimonial.role && (
              <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: s.rust, marginTop: '4px' }}>{project.testimonial.role}</div>
            )}
          </div>
        </section>
      )}

      {/* Materials */}
      {project.materials && project.materials.length > 0 && (
        <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: s.rust }}>PREMIUM SELECTIONS</span>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginTop: '8px' }}>Materials & Finishes</h2>
          </div>
          <div className="m3-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: s.newsprint, maxWidth: '800px', margin: '0 auto' }}>
            {project.materials.map((material, idx) => (
              <div key={idx} style={{
                background: s.paper, padding: '20px', textAlign: 'center',
              }}>
                <span style={{ color: s.rust, fontWeight: 700, marginBottom: '4px', display: 'block' }}>✓</span>
                <span style={{ fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 600, color: s.ink }}>{material}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="m3-section" style={{ background: s.newsprint, padding: '80px 60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: s.rust }}>EXPERTISE IN ACTION</span>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginTop: '8px' }}>Challenges & Solutions</h2>
          </div>
          <div className="m3-challenges-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: s.paper, maxWidth: '1000px', margin: '0 auto' }}>
            {project.challenges.map((item, idx) => (
              <div key={idx} style={{ background: s.newsprint, padding: '32px' }}>
                <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b91c1c', marginBottom: '8px' }}>Challenge</div>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: 'rgba(26,23,20,0.6)', lineHeight: 1.6, marginBottom: '20px' }}>{item.challenge}</p>
                <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#15803d', marginBottom: '8px' }}>Solution</div>
                <p style={{ fontFamily: 'var(--ui)', fontSize: '12px', fontWeight: 600, color: s.ink, lineHeight: 1.5 }}>{item.solution}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process */}
      <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', color: s.ink }}>Our <em style={{ color: s.rust, fontWeight: 300, fontStyle: 'italic' }}>Process</em></h2>
        </div>
        <div className="m3-process-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: s.newsprint, maxWidth: '1000px', margin: '0 auto' }}>
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} style={{ background: s.paper, padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{step.icon}</div>
              <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: s.rust, marginBottom: '8px' }}>STEP {idx + 1}</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginBottom: '8px' }}>{step.title}</div>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '13px', fontStyle: 'italic', color: s.stone, lineHeight: 1.6 }}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Projects */}
      <section className="m3-section" style={{ background: s.ink, padding: '80px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: s.rust }}>MORE INSPIRATION</span>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, marginTop: '8px' }}>Related Projects</h2>
        </div>
        <div className="m3-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(245,240,235,0.06)', maxWidth: '1100px', margin: '0 auto' }}>
          {relatedProjects.map(related => (
            <div key={related.id} onClick={() => onViewProject(related.id)} style={{ background: s.ink, cursor: 'pointer' }}>
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img src={related.afterImage} alt={related.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.65)', transition: 'transform 0.5s' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: s.rust, marginBottom: '8px' }}>{related.location}</div>
                <div style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', color: s.paper }}>{related.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="m3-section" style={{ background: s.rust, padding: '80px 60px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900,
          textTransform: 'uppercase', color: s.paper, marginBottom: '16px',
        }}>Ready to Transform<br/><em style={{ fontWeight: 300, fontStyle: 'italic' }}>Your Villa?</em></h2>
        <Button variant="white" onClick={onConsultationClick} style={{ fontSize: '18px', padding: '18px 36px' }}>Start Your Project</Button>
      </section>
    </div>
  );
};
