import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Loader2, Calendar } from 'lucide-react';
import { Button } from './Button';

interface SmartConsultationFormProps {
  onClose: () => void;
}

const s = { ink: '#0C0B09', paper: '#EDE6D9', rust: '#C4552A', stone: '#928378' };

export const SmartConsultationForm: React.FC<SmartConsultationFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    location: '', propertyType: '', scope: [] as string[],
    timeline: '', budget: 1200000,
    firstName: '', lastName: '', email: '', phone: '',
    referral: '', requirements: ''
  });

  const totalSteps = 7;
  const progress = (step / totalSteps) * 100;
  const handleNext = () => setStep(ss => Math.min(ss + 1, totalSteps));
  const handleBack = () => setStep(ss => Math.max(ss - 1, 1));

  const calculateScore = () => {
    let score = 0;
    if (['palm-jumeirah', 'emirates-hills'].includes(formData.location)) score += 25;
    if (formData.propertyType === 'villa') score += 20;
    score += (formData.scope.length * 5);
    if (formData.timeline === 'immediate') score += 30;
    if (formData.budget >= 2000000) score += 40;
    else if (formData.budget >= 1000000) score += 30;
    return score;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log('Final Lead Score:', calculateScore());
      setStep(7);
    }, 1500);
  };

  const score = calculateScore();

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: '1px solid rgba(237,230,217,0.15)',
    padding: '12px 0', fontFamily: 'var(--serif)', fontSize: '16px',
    fontStyle: 'italic', color: s.paper, outline: 'none',
  };

  const optionStyle = (selected: boolean): React.CSSProperties => ({
    padding: '20px 24px', border: `1px solid ${selected ? s.rust : 'rgba(237,230,217,0.1)'}`,
    background: selected ? 'rgba(196,85,42,0.08)' : 'transparent',
    cursor: 'pointer', transition: 'all 0.25s', display: 'block', textAlign: 'left',
  });

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 60, background: s.ink,
      color: s.paper, overflowY: 'auto',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 40px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '64px' }}>
          <span style={{ fontFamily: 'var(--ui)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: s.paper }}>Smart·Consultation</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: s.paper, cursor: 'pointer', padding: '8px' }}><X size={24} /></button>
        </div>

        {/* Progress */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(237,230,217,0.3)' }}>Step {step} of {totalSteps}</span>
            <span style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(237,230,217,0.3)' }}>{Math.round(progress)}%</span>
          </div>
          <div style={{ height: '2px', background: 'rgba(237,230,217,0.08)' }}>
            <div style={{ height: '100%', background: s.rust, transition: 'width 0.5s', width: `${progress}%` }}></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ minHeight: '400px' }}>
          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, marginBottom: '8px' }}>Where is your property?</h2>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(237,230,217,0.4)', marginBottom: '40px' }}>We specialize in Dubai's premier residential communities.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {['Palm Jumeirah', 'Emirates Hills', 'Arabian Ranches', 'Dubai Hills', 'Jumeirah Islands', 'Other'].map(loc => (
                  <label key={loc} style={optionStyle(formData.location === loc.toLowerCase().replace(' ', '-'))}>
                    <input type="radio" style={{ display: 'none' }} name="location" onChange={() => setFormData({...formData, location: loc.toLowerCase().replace(' ', '-')})} />
                    <span style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', color: s.paper }}>{loc}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, marginBottom: '8px' }}>Property Type</h2>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(237,230,217,0.4)', marginBottom: '40px' }}>Select the type of renovation required.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {['Villa', 'Penthouse', 'Apartment'].map(type => (
                  <label key={type} style={{ ...optionStyle(formData.propertyType === type.toLowerCase()), textAlign: 'center', padding: '40px 24px' }}>
                    <input type="radio" style={{ display: 'none' }} name="propertyType" onChange={() => setFormData({...formData, propertyType: type.toLowerCase()})} />
                    <span style={{ fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', color: s.paper }}>{type}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, marginBottom: '8px' }}>Project Scope</h2>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(237,230,217,0.4)', marginBottom: '40px' }}>What are we transforming? (Select all)</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'full', label: 'Full Villa Renovation', desc: 'Complete interior and structural makeover' },
                  { id: 'kitchen', label: 'Kitchen & Dining', desc: 'Modern European kitchen systems' },
                  { id: 'bath', label: 'Bathrooms', desc: 'Luxury spa-like retreats' },
                  { id: 'extension', label: 'Extension', desc: 'Adding new built-up area' },
                  { id: 'landscape', label: 'Landscape & Pool', desc: 'Premium outdoor living' },
                ].map(scope => (
                  <label key={scope.id} style={{
                    ...optionStyle(formData.scope.includes(scope.id)),
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}>
                    <input type="checkbox" style={{ display: 'none' }}
                      checked={formData.scope.includes(scope.id)}
                      onChange={(e) => {
                        const newScope = e.target.checked ? [...formData.scope, scope.id] : formData.scope.filter(sv => sv !== scope.id);
                        setFormData({...formData, scope: newScope});
                      }}
                    />
                    <div>
                      <span style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', color: s.paper, display: 'block' }}>{scope.label}</span>
                      <span style={{ fontFamily: 'var(--serif)', fontSize: '13px', fontStyle: 'italic', color: 'rgba(237,230,217,0.3)' }}>{scope.desc}</span>
                    </div>
                    {formData.scope.includes(scope.id) && <Check size={20} style={{ color: s.rust }} />}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, marginBottom: '8px' }}>Investment Level</h2>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(237,230,217,0.4)', marginBottom: '48px' }}>Select your planned investment.</p>
              <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
                  <span style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 700, color: 'rgba(237,230,217,0.4)' }}>AED 200K</span>
                  <span style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 900, color: s.rust }}>{(formData.budget / 1000000).toFixed(1)}M</span>
                  <span style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 700, color: 'rgba(237,230,217,0.4)' }}>AED 5M+</span>
                </div>
                <input type="range" min="200000" max="5000000" step="100000"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: parseInt(e.target.value)})}
                  style={{ width: '100%', accentColor: s.rust, cursor: 'pointer' }}
                />
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, marginBottom: '8px' }}>Timeline</h2>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(237,230,217,0.4)', marginBottom: '40px' }}>When would you like to begin?</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'immediate', label: 'Immediately', desc: 'Ready to start within 2 weeks' },
                  { id: '3months', label: '1 - 3 Months', desc: 'Planning near-term' },
                  { id: 'later', label: 'Just Browsing', desc: 'Researching for future' },
                ].map(time => (
                  <label key={time.id} style={optionStyle(formData.timeline === time.id)}>
                    <input type="radio" style={{ display: 'none' }} name="timeline" onChange={() => setFormData({...formData, timeline: time.id})} />
                    <span style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', color: s.paper, display: 'block' }}>{time.label}</span>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: '13px', fontStyle: 'italic', color: 'rgba(237,230,217,0.3)' }}>{time.desc}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: '40px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, marginBottom: '8px' }}>Contact Details</h2>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(237,230,217,0.4)', marginBottom: '40px' }}>Marco personally reviews every inquiry.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(237,230,217,0.3)', display: 'block', marginBottom: '6px' }}>First Name</label>
                  <input style={inputStyle} placeholder="First Name" required value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(237,230,217,0.3)', display: 'block', marginBottom: '6px' }}>Last Name</label>
                  <input style={inputStyle} placeholder="Last Name" required value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
                </div>
              </div>
              <div style={{ marginTop: '16px' }}>
                <label style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(237,230,217,0.3)', display: 'block', marginBottom: '6px' }}>Email</label>
                <input style={inputStyle} placeholder="Email" type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div style={{ marginTop: '16px' }}>
                <label style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(237,230,217,0.3)', display: 'block', marginBottom: '6px' }}>Phone</label>
                <input style={inputStyle} placeholder="+971 XX XXX XXXX" type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div style={{ marginTop: '16px' }}>
                <label style={{ fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(237,230,217,0.3)', display: 'block', marginBottom: '6px' }}>Vision</label>
                <textarea style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} placeholder="Tell us about your vision..." value={formData.requirements} onChange={e => setFormData({...formData, requirements: e.target.value})} />
              </div>
            </div>
          )}

          {step === 7 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ width: '64px', height: '64px', background: s.rust, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
                <Check size={32} style={{ color: s.paper }} />
              </div>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: '48px', fontWeight: 900, textTransform: 'uppercase', color: s.paper, marginBottom: '16px' }}>
                Success, {formData.firstName || 'friend'}!
              </h2>
              {score >= 80 ? (
                <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontStyle: 'italic', color: 'rgba(237,230,217,0.55)', lineHeight: 1.7, marginBottom: '32px' }}>
                    Your project qualifies for a Priority Strategic Consultation with Marco.
                  </p>
                  <div style={{ border: '1px solid rgba(237,230,217,0.1)', padding: '32px' }}>
                    <div style={{ fontFamily: 'var(--ui)', fontSize: '12px', fontWeight: 700, color: s.paper, marginBottom: '4px' }}>Marco P.</div>
                    <div style={{ fontFamily: 'var(--ui)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: s.rust, marginBottom: '16px' }}>Design Director & Founder</div>
                    <Button variant="primary" style={{ width: '100%' }}>Book via Calendly</Button>
                  </div>
                </div>
              ) : (
                <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontStyle: 'italic', color: 'rgba(237,230,217,0.55)', lineHeight: 1.7, marginBottom: '32px' }}>
                    Thank you for sharing your vision. Our team will contact you via WhatsApp within 24 hours.
                  </p>
                  <Button variant="outline-white" onClick={onClose}>Back to Website</Button>
                </div>
              )}
            </div>
          )}

          {step < 7 && (
            <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'space-between' }}>
              {step > 1 ? (
                <Button variant="outline-white" onClick={handleBack} type="button">← Back</Button>
              ) : <div></div>}
              {step === 6 ? (
                <Button variant="primary-large" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
                </Button>
              ) : (
                <Button variant="primary" onClick={handleNext} type="button">Continue →</Button>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
