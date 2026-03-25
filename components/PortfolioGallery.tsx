import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Clock, X, Sparkles } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface PortfolioGalleryProps {
  onFavoritesThresholdReached: () => void;
  hasSubmittedEmail: boolean;
  initialFilter?: string;
  onRequestProject?: (project: Project) => void;
  onViewProject?: (projectId: string) => void;
}

const FAVORITES_THRESHOLD = 10;
const STORAGE_KEY = 'smartreno_favorites';
const s = { ink: '#1a1714', paper: '#F5F0EB', newsprint: '#ebe5dd', rust: '#B8976A', stone: '#6b5e52' };

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onFavoritesThresholdReached, hasSubmittedEmail, initialFilter = 'All',
  onRequestProject, onViewProject
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>(initialFilter);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hasTriggeredModal, setHasTriggeredModal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const locations = ['All', ...Array.from(new Set(PROJECTS.map(p => p.location)))];

  useEffect(() => {
    if (initialFilter && initialFilter !== 'All') setFilter(initialFilter);
  }, [initialFilter]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setFavorites(JSON.parse(saved));
    const modalTriggered = localStorage.getItem('smartreno_modal_triggered');
    if (modalTriggered) setHasTriggeredModal(true);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (favorites.length >= FAVORITES_THRESHOLD && !hasSubmittedEmail && !hasTriggeredModal) {
      setHasTriggeredModal(true);
      localStorage.setItem('smartreno_modal_triggered', 'true');
      onFavoritesThresholdReached();
    }
  }, [favorites, hasSubmittedEmail, hasTriggeredModal, onFavoritesThresholdReached]);

  const toggleFavorite = (projectId: string) => {
    setFavorites(prev => prev.includes(projectId) ? prev.filter(id => id !== projectId) : [...prev, projectId]);
  };

  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.location === filter);

  return (
    <div>
      {/* Hero */}
      <section className="m3-section-hero" style={{ background: s.ink, padding: '160px 60px 80px', textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: s.rust }}>OUR WORK</span>
        <h1 style={{
          fontFamily: 'var(--display)', fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 900,
          textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.88, color: s.paper, marginTop: '16px',
        }}>Portfolio</h1>
        <p style={{
          fontFamily: 'var(--serif)', fontSize: '18px', fontStyle: 'italic',
          color: 'rgba(245,240,235,0.45)', marginTop: '20px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto',
        }}>Explore our collection of luxury villa transformations across Dubai's premier communities.</p>
      </section>

      {/* Favorites & Filters */}
      <section className="m3-section" style={{ background: s.paper, padding: '32px 60px', borderBottom: `1px solid ${s.newsprint}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Heart size={16} style={{ color: favorites.length > 0 ? '#ef4444' : s.stone, fill: favorites.length > 0 ? '#ef4444' : 'none' }} />
            <span style={{ fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.ink }}>
              {favorites.length} saved
            </span>
          </div>
          <div className="m3-filter-bar" style={{ display: 'flex', gap: '2px', background: s.newsprint }}>
            {locations.map(loc => (
              <button key={loc} onClick={() => setFilter(loc)} style={{
                padding: '8px 16px', fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600,
                letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer',
                background: filter === loc ? s.ink : s.paper,
                color: filter === loc ? s.paper : s.ink,
                transition: 'all 0.25s',
              }}>{loc}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="m3-section" style={{ background: s.paper, padding: '0 60px 80px' }}>
        <div className="m3-portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: s.newsprint, marginTop: '1px' }}>
          {filteredProjects.map(project => {
            const isFavorite = favorites.includes(project.id);
            const isHovered = hoveredCard === project.id;
            return (
              <div key={project.id}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ background: s.paper, position: 'relative' }}
              >
                <div onClick={() => onViewProject ? onViewProject(project.id) : setSelectedProject(project)}
                  style={{ height: '300px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}>
                  <img src={project.afterImage} alt={project.title} style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    filter: 'saturate(0.65) contrast(1.1)',
                    transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                    transition: 'transform 0.7s',
                  }} />
                  {/* Hover overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: isHovered ? 'rgba(26,23,20,0.5)' : 'rgba(26,23,20,0)',
                    transition: 'background 0.3s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {isHovered && (
                      <span style={{
                        fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 700,
                        textTransform: 'uppercase', letterSpacing: '0.04em', color: s.paper,
                      }}>View Project →</span>
                    )}
                  </div>
                </div>

                {/* Favorite btn */}
                <button onClick={(e) => { e.stopPropagation(); toggleFavorite(project.id); }} style={{
                  position: 'absolute', top: '12px', right: '12px', width: '36px', height: '36px',
                  background: isFavorite ? '#ef4444' : 'rgba(245,240,235,0.9)',
                  border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s',
                }}>
                  <Heart size={16} style={{ color: isFavorite ? s.paper : s.stone, fill: isFavorite ? s.paper : 'none' }} />
                </button>

                <div style={{ padding: '20px 24px' }}>
                  <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: s.rust, marginBottom: '6px' }}>{project.location}</div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginBottom: '8px' }}>{project.title}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: s.stone }}>{project.timeline} · {project.style}</span>
                    <span style={{ fontFamily: 'var(--display)', fontSize: '14px', fontWeight: 700, color: s.ink }}>{project.investment}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div onClick={() => setSelectedProject(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(26,23,20,0.85)', zIndex: 50,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: s.paper, maxWidth: '800px', width: '100%', maxHeight: '90vh', overflow: 'auto',
          }}>
            <div style={{ position: 'relative' }}>
              <img src={selectedProject.afterImage} alt={selectedProject.title} style={{ width: '100%', height: '400px', objectFit: 'cover', filter: 'saturate(0.65)' }} />
              <button onClick={() => setSelectedProject(null)} style={{
                position: 'absolute', top: '16px', right: '16px', width: '36px', height: '36px',
                background: s.paper, border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}><X size={18} /></button>
            </div>
            <div style={{ padding: '32px' }}>
              <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: s.rust, marginBottom: '8px' }}>{selectedProject.location}</div>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginBottom: '16px' }}>{selectedProject.title}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: s.newsprint, marginBottom: '24px' }}>
                {[
                  { label: 'Investment', val: selectedProject.investment },
                  { label: 'Timeline', val: selectedProject.timeline },
                  { label: 'Style', val: selectedProject.style },
                ].map((item, idx) => (
                  <div key={idx} style={{ background: s.paper, padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: s.stone, marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 700, color: s.ink }}>{item.val}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: s.newsprint, marginBottom: '24px' }}>
                <div style={{ background: s.paper }}>
                  <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: s.stone, padding: '8px 12px' }}>Before</div>
                  <img src={selectedProject.beforeImage} alt="Before" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                </div>
                <div style={{ background: s.paper }}>
                  <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: s.stone, padding: '8px 12px' }}>After</div>
                  <img src={selectedProject.afterImage} alt="After" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                </div>
              </div>
              <button onClick={() => { if (onRequestProject) onRequestProject(selectedProject); setSelectedProject(null); }} style={{
                width: '100%', fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.04em',
                background: s.rust, color: s.paper, border: 'none',
                padding: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              }}>
                <Sparkles size={18} /> I Want This Style
              </button>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '13px', fontStyle: 'italic', color: s.stone, textAlign: 'center', marginTop: '10px' }}>Start your consultation with this project as inspiration</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
