import React from 'react';
import { Button } from './Button';
import {
  CheckCircle2, Clock, FileText, Home, Hammer, Sparkles,
  Shield, AlertTriangle, ArrowRight, Calendar, MapPin,
  Phone, Download, BookOpen
} from 'lucide-react';

interface ResourcePageProps {
  onConsultationClick: () => void;
  onNavigate: (page: string) => void;
}

const s = { ink: '#0C0B09', paper: '#EDE6D9', newsprint: '#D9D1C0', rust: '#C4552A', stone: '#928378' };

const heroSection = (tag: string, title: React.ReactNode, desc: string) => (
  <section className="m3-section-hero" style={{ background: s.ink, padding: '160px 60px 80px' }}>
    <div style={{ maxWidth: '800px' }}>
      <span style={{ fontFamily: 'var(--ui)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: s.rust }}>{tag}</span>
      <h1 style={{
        fontFamily: 'var(--display)', fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 900,
        textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.88,
        color: s.paper, marginTop: '16px',
      }}>{title}</h1>
      <p style={{
        fontFamily: 'var(--serif)', fontSize: '18px', fontStyle: 'italic',
        color: 'rgba(237,230,217,0.5)', marginTop: '20px', maxWidth: '600px', lineHeight: 1.7,
      }}>{desc}</p>
    </div>
  </section>
);

const ctaSection = (title: string, desc: string, btnText: string, onClick: () => void) => (
  <section className="m3-section" style={{ background: s.rust, padding: '80px 60px', textAlign: 'center' }}>
    <h2 style={{ fontFamily: 'var(--display)', fontSize: '48px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, marginBottom: '12px' }}>{title}</h2>
    <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(237,230,217,0.6)', marginBottom: '32px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>{desc}</p>
    <Button variant="white" onClick={onClick}>{btnText}</Button>
  </section>
);

/* ═══ VILLA RENOVATION GUIDE ═══ */
export const VillaRenovationGuide: React.FC<ResourcePageProps> = ({ onConsultationClick, onNavigate }) => (
  <div>
    {heroSection('COMPREHENSIVE GUIDE',
      <>The Ultimate Dubai Villa<br/><span style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(237,230,217,0.5)' }}>Renovation Guide 2026</span></>,
      'Everything you need to know about renovating your villa in Dubai. From planning and permits to materials and timelines.'
    )}
    <div style={{ background: s.ink, padding: '0 60px 48px', display: 'flex', gap: '12px' }}>
      <Button variant="primary" onClick={onConsultationClick}>Get Free Consultation</Button>
      <Button variant="outline-white">Download PDF Guide</Button>
    </div>

    {/* TOC */}
    <section className="m3-section" style={{ background: s.newsprint, padding: '60px' }}>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginBottom: '24px' }}>What You'll Learn</h2>
      <div className="m3-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: s.paper }}>
        {[
          { icon: '📋', title: 'Planning', desc: 'Budget, timeline, scope' },
          { icon: '📄', title: 'Permits', desc: 'NOCs and legal' },
          { icon: '🏗️', title: 'Construction', desc: 'What to expect' },
          { icon: '✨', title: 'Finishing', desc: 'Materials & details' },
        ].map((item, idx) => (
          <div key={idx} style={{ background: s.newsprint, padding: '24px', textAlign: 'center' }}>
            <span style={{ fontSize: '28px', display: 'block', marginBottom: '12px' }}>{item.icon}</span>
            <div style={{ fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginBottom: '4px' }}>{item.title}</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '13px', fontStyle: 'italic', color: s.stone }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Planning */}
    <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginBottom: '24px' }}>1. Planning Your Renovation</h2>

        <h3 style={{ fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginTop: '32px', marginBottom: '16px' }}>Setting Your Budget</h3>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(12,11,9,0.55)', lineHeight: 1.8, marginBottom: '24px' }}>Villa renovation costs in Dubai vary significantly based on scope, materials, and location.</p>

        <div style={{ border: `1px solid ${s.newsprint}`, padding: '24px', marginBottom: '32px' }}>
          <h4 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginBottom: '16px' }}>Investment Ranges</h4>
          {[
            { range: 'Light Refresh (AED 150K-400K)', desc: 'Paint, flooring, fixtures, minor updates' },
            { range: 'Medium (AED 400K-1.2M)', desc: 'Kitchen/bathroom remodel, new flooring' },
            { range: 'Full Transform (AED 1.2M-3M)', desc: 'Complete interior redesign, structural changes' },
            { range: 'Luxury Overhaul (AED 3M+)', desc: 'Extensions, premium materials, smart home' },
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <span style={{ color: s.rust, fontWeight: 700 }}>✓</span>
              <span style={{ fontFamily: 'var(--ui)', fontSize: '13px', color: s.ink }}><strong>{item.range}:</strong> {item.desc}</span>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginTop: '32px', marginBottom: '16px' }}>Timeline Expectations</h3>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(12,11,9,0.55)', lineHeight: 1.8, marginBottom: '24px' }}>Realistic timelines help set proper expectations.</p>
        <div className="m3-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: s.newsprint, marginBottom: '32px' }}>
          {[
            { scope: 'Kitchen Only', time: '6-10 weeks' },
            { scope: 'Bathroom Only', time: '4-8 weeks' },
            { scope: 'Full Villa Interior', time: '4-8 months' },
            { scope: 'Villa + Extension', time: '8-14 months' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: s.paper, padding: '16px 20px', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--ui)', fontSize: '12px', fontWeight: 600, color: s.ink }}>{item.scope}</span>
              <span style={{ fontFamily: 'var(--display)', fontSize: '14px', fontWeight: 700, color: s.rust }}>{item.time}</span>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginTop: '32px', marginBottom: '16px' }}>Choosing the Right Contractor</h3>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(12,11,9,0.55)', lineHeight: 1.8, marginBottom: '16px' }}>The contractor you choose will make or break your renovation.</p>
        {['Valid Trade License', 'Portfolio of Similar Projects', 'Clear Contract', 'Insurance', 'References'].map((item, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
            <span style={{ color: s.rust, fontWeight: 700 }}>✓</span>
            <span style={{ fontFamily: 'var(--ui)', fontSize: '13px', color: s.ink }}>{item}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Common Mistakes */}
    <section className="m3-section" style={{ background: s.newsprint, padding: '80px 60px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginBottom: '32px' }}>2. Common Mistakes to Avoid</h2>
        {[
          { mistake: 'Underestimating the Budget', solution: 'Always add 15-20% contingency for unexpected issues.' },
          { mistake: 'Skipping the Design Phase', solution: 'Invest in 3D renders before construction. Changes during construction are 5x more expensive.' },
          { mistake: 'Ignoring Developer Approvals', solution: 'Communities like Palm Jumeirah have strict guidelines. Get NOCs first.' },
          { mistake: 'Choosing the Cheapest Quote', solution: 'Low quotes often mean corners cut. Compare scope, not just price.' },
          { mistake: 'Not Living Through a Summer', solution: 'Live through one summer to understand cooling needs and sun exposure.' },
        ].map((item, idx) => (
          <div key={idx} style={{
            padding: '24px 0', borderBottom: idx < 4 ? `1px solid ${s.paper}` : 'none',
          }}>
            <div style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', color: '#b91c1c', marginBottom: '8px' }}>{item.mistake}</div>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '15px', fontStyle: 'italic', color: 'rgba(12,11,9,0.6)', lineHeight: 1.7 }}>{item.solution}</p>
          </div>
        ))}
      </div>
    </section>

    {ctaSection('Ready to Start?', 'Get a personalized consultation with our design directors.', 'Book Free Consultation', onConsultationClick)}
  </div>
);

/* ═══ MATERIALS GUIDE ═══ */
export const MaterialsGuide: React.FC<ResourcePageProps> = ({ onConsultationClick, onNavigate }) => (
  <div>
    {heroSection('MATERIALS GUIDE',
      <>Premium Materials for<br/><span style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(237,230,217,0.5)' }}>Dubai Villas</span></>,
      'A comprehensive guide to selecting the right materials for Dubai\'s unique climate.'
    )}
    <div style={{ background: s.ink, padding: '0 60px 48px' }}>
      <Button variant="primary" onClick={onConsultationClick}>Get Material Recommendations</Button>
    </div>

    {/* Flooring */}
    <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginBottom: '32px' }}>Flooring Options</h2>
        <div className="m3-materials-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: s.newsprint }}>
          {[
            { name: 'Italian Marble', price: 'AED 400-2,000/sqm', pros: ['Timeless elegance', 'Stays cool', 'Increases value'], cons: ['Requires sealing', 'Can be slippery'], best: 'Living areas, lobbies', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600' },
            { name: 'European Oak', price: 'AED 250-800/sqm', pros: ['Warm aesthetic', 'Comfortable'], cons: ['Expands with humidity', 'Scratches'], best: 'Bedrooms, offices', img: 'https://images.unsplash.com/photo-1600566753190-17f0bbc564ce?auto=format&fit=crop&q=80&w=600' },
            { name: 'Porcelain Tiles', price: 'AED 100-500/sqm', pros: ['Extremely durable', 'Low maintenance'], cons: ['Cold underfoot', 'Hard surface'], best: 'High-traffic, kitchens', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600' },
            { name: 'Natural Stone', price: 'AED 200-600/sqm', pros: ['Unique patterns', 'Natural beauty'], cons: ['Porous', 'Can stain'], best: 'Pool decks, terraces', img: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=600' },
          ].map((mat, idx) => (
            <div key={idx} style={{ background: s.paper }}>
              <img src={mat.img} alt={mat.name} style={{ width: '100%', height: '180px', objectFit: 'cover', filter: 'saturate(0.65)' }} />
              <div style={{ padding: '24px' }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: '22px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginBottom: '4px' }}>{mat.name}</div>
                <div style={{ fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: s.rust, marginBottom: '16px' }}>{mat.price}</div>
                <div style={{ marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#15803d' }}>Pros</span>
                  {mat.pros.map((p, i) => <div key={i} style={{ fontFamily: 'var(--serif)', fontSize: '13px', fontStyle: 'italic', color: s.stone, marginTop: '4px' }}>✓ {p}</div>)}
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b91c1c' }}>Cons</span>
                  {mat.cons.map((c, i) => <div key={i} style={{ fontFamily: 'var(--serif)', fontSize: '13px', fontStyle: 'italic', color: s.stone, marginTop: '4px' }}>⚠ {c}</div>)}
                </div>
                <div style={{ borderTop: `1px solid ${s.newsprint}`, paddingTop: '12px' }}>
                  <span style={{ fontFamily: 'var(--ui)', fontSize: '11px', color: s.ink }}><strong>Best for:</strong> {mat.best}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Kitchen Appliances */}
    <section className="m3-section" style={{ background: s.newsprint, padding: '80px 60px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginBottom: '32px' }}>Premium Kitchen Appliances</h2>
        <div className="m3-appliances-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: s.paper }}>
          {[
            { brand: 'Gaggenau', country: 'Germany', spec: 'Built-in, steam ovens', note: 'Gold standard. Excellent local service.' },
            { brand: 'Miele', country: 'Germany', spec: 'Dishwashers, laundry, coffee', note: '20+ year lifespan. Strong UAE presence.' },
            { brand: 'Sub-Zero & Wolf', country: 'USA', spec: 'Refrigeration, ranges', note: 'Restaurant-grade for home chefs.' },
          ].map((b, idx) => (
            <div key={idx} style={{ background: s.newsprint, padding: '24px' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', color: s.ink }}>{b.brand}</div>
              <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: s.rust, marginBottom: '12px' }}>{b.country}</div>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '13px', fontStyle: 'italic', color: s.stone, lineHeight: 1.6 }}><strong>Known for:</strong> {b.spec}</p>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '13px', fontStyle: 'italic', color: s.stone, lineHeight: 1.6, marginTop: '4px' }}>{b.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Bathroom */}
    <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginBottom: '32px' }}>Bathroom Fixtures</h2>
        <div className="m3-bathroom-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div>
            <h4 style={{ fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: s.rust, marginBottom: '12px' }}>Faucets & Showers</h4>
            {['Hansgrohe Axor — German minimalist', 'Dornbracht — Ultra-luxury', 'Gessi — Italian elegance', 'Grohe — Reliable mid-to-high'].map((b, i) =>
              <div key={i} style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: s.stone, marginBottom: '6px' }}>• {b}</div>
            )}
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: s.rust, marginBottom: '12px' }}>Sanitaryware</h4>
            {['Duravit — German engineering', 'Villeroy & Boch — Classic European', 'TOTO — Japanese smart toilets', 'Kohler — Wide range, good availability'].map((b, i) =>
              <div key={i} style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: s.stone, marginBottom: '6px' }}>• {b}</div>
            )}
          </div>
        </div>
        <div style={{ background: s.ink, padding: '24px 32px', marginTop: '32px' }}>
          <div style={{ fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', color: s.paper, marginBottom: '8px' }}>Pro Tip: Dubai Water Quality</div>
          <p style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: 'rgba(237,230,217,0.55)', lineHeight: 1.7 }}>Dubai's desalinated water is hard. Invest in a whole-house softener and choose fixtures with easy-clean coatings.</p>
        </div>
      </div>
    </section>

    {ctaSection('Need Recommendations?', 'Our team sources directly from European manufacturers.', 'Book Material Consultation', onConsultationClick)}
  </div>
);

/* ═══ NOC APPROVALS GUIDE ═══ */
export const NOCApprovalsGuide: React.FC<ResourcePageProps> = ({ onConsultationClick, onNavigate }) => (
  <div>
    {heroSection('APPROVALS GUIDE',
      <>NOC & Permit Guide for<br/><span style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(237,230,217,0.5)' }}>Dubai Villas</span></>,
      'Navigate Dubai\'s approval process with confidence. Learn which permits you need and avoid costly delays.'
    )}
    <div style={{ background: s.ink, padding: '0 60px 48px' }}>
      <Button variant="primary" onClick={onConsultationClick}>Get Permit Assistance</Button>
    </div>

    {/* What is NOC */}
    <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginBottom: '24px' }}>What is an NOC?</h2>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(12,11,9,0.55)', lineHeight: 1.8, marginBottom: '24px' }}>A No Objection Certificate is an official document from the developer or community management stating they have "no objection" to your proposed renovation work.</p>
        <div style={{ background: '#fef2f2', borderLeft: `3px solid #b91c1c`, padding: '20px 24px' }}>
          <div style={{ fontFamily: 'var(--display)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', color: '#b91c1c', marginBottom: '8px' }}>Important Warning</div>
          <p style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: '#b91c1c', lineHeight: 1.6 }}>Starting work without proper NOCs can result in stop-work orders, fines up to AED 50,000, and being required to restore the property at your expense.</p>
        </div>
      </div>
    </section>

    {/* Community Requirements */}
    <section className="m3-section" style={{ background: s.newsprint, padding: '80px 60px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginBottom: '32px' }}>By Community</h2>
        {[
          { community: 'Palm Jumeirah (Nakheel)', strictness: 'Very Strict', timeline: '2-4 weeks', notes: 'Detailed drawings required. No external changes without architect approval.' },
          { community: 'Emirates Hills (Emaar)', strictness: 'Very Strict', timeline: '3-6 weeks', notes: 'Architectural committee approval. Strict exterior guidelines.' },
          { community: 'Arabian Ranches (Emaar)', strictness: 'Moderate', timeline: '2-3 weeks', notes: 'Interior works straightforward. Extensions need detailed submissions.' },
          { community: 'Dubai Hills Estate (Emaar)', strictness: 'Moderate', timeline: '2-3 weeks', notes: 'Clear guidelines. Online submission portal available.' },
          { community: 'Jumeirah Islands (Nakheel)', strictness: 'Moderate', timeline: '2-4 weeks', notes: 'Lake-facing properties have additional restrictions.' },
        ].map((item, idx) => (
          <div key={idx} className="m3-noc-item" style={{
            padding: '24px 0', borderBottom: idx < 4 ? `1px solid ${s.paper}` : 'none',
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px',
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginBottom: '6px' }}>{item.community}</div>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: s.stone, lineHeight: 1.6 }}>{item.notes}</p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <span style={{
                fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: item.strictness === 'Very Strict' ? '#b91c1c' : '#ca8a04',
                border: `1px solid ${item.strictness === 'Very Strict' ? '#fecaca' : '#fef08a'}`,
                padding: '4px 10px',
              }}>{item.strictness}</span>
              <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', color: s.stone, marginTop: '8px' }}>{item.timeline}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* What needs NOC */}
    <section className="m3-section" style={{ background: s.paper, padding: '80px 60px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginBottom: '32px' }}>What Requires an NOC?</h2>
        <div className="m3-noc-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div style={{ borderLeft: `3px solid #15803d`, paddingLeft: '20px' }}>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', color: '#15803d', marginBottom: '12px' }}>Usually NO NOC</h3>
            {['Interior painting', 'Replacing fixtures (like-for-like)', 'Minor repairs', 'Furniture changes', 'AC maintenance', 'Garden plants'].map((item, i) =>
              <div key={i} style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: s.stone, marginBottom: '4px' }}>• {item}</div>
            )}
          </div>
          <div style={{ borderLeft: `3px solid #b91c1c`, paddingLeft: '20px' }}>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', color: '#b91c1c', marginBottom: '12px' }}>NOC Required</h3>
            {['Structural changes', 'Kitchen/bath relocation', 'Window/door changes', 'External facade', 'Pool construction', 'Extensions', 'Pergolas', 'Major landscaping'].map((item, i) =>
              <div key={i} style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: s.stone, marginBottom: '4px' }}>• {item}</div>
            )}
          </div>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="m3-section" style={{ background: s.newsprint, padding: '80px 60px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', color: s.ink, marginBottom: '32px' }}>Application Process</h2>
        {[
          { step: 1, title: 'Prepare Documentation', desc: 'Gather title deed, site plan, proposed drawings, contractor license.', time: '1-2 weeks' },
          { step: 2, title: 'Submit Application', desc: 'Submit to community management. Pay fee (AED 500-2,000).', time: '1 day' },
          { step: 3, title: 'Technical Review', desc: 'Community engineering team reviews compliance.', time: '1-3 weeks' },
          { step: 4, title: 'NOC Issuance', desc: 'Approved NOC issued with 6-12 month validity.', time: '2-5 days' },
          { step: 5, title: 'Final Inspection', desc: 'Community inspects work matches approved drawings.', time: '1-2 weeks' },
        ].map((item, idx) => (
          <div key={idx} style={{
            display: 'flex', gap: '24px', padding: '24px 0',
            borderBottom: idx < 4 ? `1px solid ${s.paper}` : 'none',
          }}>
            <div style={{
              width: '40px', height: '40px', background: s.rust, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 900, color: s.paper,
            }}>{item.step}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', color: s.ink }}>{item.title}</span>
                <span style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.1em', color: s.rust }}>{item.time}</span>
              </div>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: s.stone, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {ctaSection('We Handle All Approvals', '400+ NOC applications processed across all major Dubai communities.', 'Get NOC Assistance', onConsultationClick)}
  </div>
);

/* ═══ BLOG PAGE ═══ */
export const BlogPage: React.FC<ResourcePageProps> = ({ onConsultationClick, onNavigate }) => {
  const posts = [
    { id: 1, title: '2026 Dubai Villa Design Trends', excerpt: 'Hottest interior design trends for Dubai villas this year.', cat: 'Design Trends', date: 'Jan 28, 2026', read: '8 min', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Smart Home Integration Guide', excerpt: 'Everything about smart home technology in villa renovations.', cat: 'Technology', date: 'Jan 21, 2026', read: '12 min', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Pool Renovation Ideas', excerpt: 'Create a resort-style pool experience at home.', cat: 'Outdoor', date: 'Jan 14, 2026', read: '6 min', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Italian Marble vs Porcelain', excerpt: 'Detailed comparison of flooring options for Dubai.', cat: 'Materials', date: 'Jan 7, 2026', read: '10 min', img: 'https://images.unsplash.com/photo-1600566753190-17f0bbc564ce?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Palm Jumeirah Renovation', excerpt: 'Special considerations for Palm villa renovations.', cat: 'Community', date: 'Dec 28, 2025', read: '9 min', img: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Kitchen Design Essentials', excerpt: 'Expert tips on designing a luxury kitchen.', cat: 'Interior', date: 'Dec 21, 2025', read: '7 min', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div>
      {heroSection('INSIGHTS & INSPIRATION',
        <>Smart Renovation<br/><span style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(237,230,217,0.5)' }}>Blog</span></>,
        'Expert insights on villa renovation, interior design trends, and luxury living in Dubai.'
      )}

      {/* Grid */}
      <section className="m3-section" style={{ background: s.paper, padding: '60px' }}>
        <div className="m3-blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: s.newsprint }}>
          {posts.map(post => (
            <article key={post.id} style={{ background: s.paper, cursor: 'pointer' }}>
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.65)' }} />
                <span style={{
                  position: 'absolute', top: '12px', left: '12px',
                  fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: s.paper, background: s.rust, padding: '4px 10px',
                }}>{post.cat}</span>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.1em', color: s.stone, marginBottom: '8px' }}>{post.date} · {post.read}</div>
                <h2 style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', color: s.ink, marginBottom: '8px', lineHeight: 1.1 }}>{post.title}</h2>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic', color: s.stone, lineHeight: 1.6 }}>{post.excerpt}</p>
                <div style={{ fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.rust, marginTop: '12px' }}>Read More →</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="m3-section" style={{ background: s.ink, padding: '80px 60px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, marginBottom: '12px' }}>Stay Inspired</h2>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(237,230,217,0.4)', marginBottom: '24px' }}>Subscribe for design trends and exclusive project reveals.</p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', maxWidth: '400px', margin: '0 auto' }}>
          <input type="email" placeholder="Enter your email" style={{
            flex: 1, background: 'transparent', border: 'none',
            borderBottom: '1px solid rgba(237,230,217,0.2)',
            padding: '10px 0', fontFamily: 'var(--serif)', fontSize: '16px',
            fontStyle: 'italic', color: s.paper, outline: 'none',
          }} />
          <Button variant="primary">Subscribe</Button>
        </div>
      </section>

      {ctaSection('Ready to Start?', 'Turn inspiration into reality with a free consultation.', 'Book Free Consultation', onConsultationClick)}
    </div>
  );
};
