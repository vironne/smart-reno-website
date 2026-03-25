import React, { useState } from 'react';
import { X, Heart, Sparkles, Send } from 'lucide-react';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
  favoritesCount: number;
}

const s = { ink: '#0C0B09', paper: '#EDE6D9', newsprint: '#D9D1C0', rust: '#C4552A', stone: '#928378' };

export const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({
  isOpen, onClose, onSubmit, favoritesCount
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    onSubmit(email);
    setIsSubmitting(false);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(12,11,9,0.85)', zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        background: s.paper, maxWidth: '420px', width: '100%', overflow: 'hidden',
      }}>
        {/* Header — dark */}
        <div style={{
          background: s.ink, padding: '40px 32px', textAlign: 'center', position: 'relative',
        }}>
          <button onClick={onClose} style={{
            position: 'absolute', top: '16px', right: '16px',
            background: 'none', border: 'none', color: 'rgba(237,230,217,0.4)', cursor: 'pointer',
          }}><X size={18} /></button>

          <div style={{
            width: '56px', height: '56px', background: s.rust,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px',
          }}>
            <Heart size={28} style={{ color: s.paper, fill: s.paper }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 900,
            textTransform: 'uppercase', color: s.paper, marginBottom: '4px',
          }}>
            {favoritesCount} Favorites Saved!
          </h2>
          <p style={{
            fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic',
            color: 'rgba(237,230,217,0.4)',
          }}>You have great taste in luxury design</p>
        </div>

        {/* Form — paper */}
        <div style={{ padding: '32px' }}>
          <h3 style={{
            fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 700,
            textTransform: 'uppercase', color: s.ink, marginBottom: '8px', textAlign: 'center',
          }}>Unlock Your Inspiration Board</h3>
          <p style={{
            fontFamily: 'var(--serif)', fontSize: '14px', fontStyle: 'italic',
            color: s.stone, lineHeight: 1.6, textAlign: 'center', marginBottom: '24px',
          }}>Enter your email to receive your personalized collection and exclusive renovation insights.</p>

          <form onSubmit={handleSubmit}>
            <input type="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: '100%', background: 'transparent', border: 'none',
                borderBottom: `1px solid ${error ? '#ef4444' : s.newsprint || '#D9D1C0'}`,
                padding: '12px 0', fontFamily: 'var(--serif)', fontSize: '16px',
                fontStyle: 'italic', color: s.ink, outline: 'none', marginBottom: '4px',
              }}
            />
            {error && <p style={{ fontFamily: 'var(--ui)', fontSize: '11px', color: '#ef4444', marginTop: '4px' }}>{error}</p>}

            <button type="submit" disabled={isSubmitting} style={{
              width: '100%', fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.04em',
              background: s.rust, color: s.paper, border: 'none',
              padding: '14px', cursor: 'pointer', marginTop: '20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              opacity: isSubmitting ? 0.7 : 1,
            }}>
              {isSubmitting ? 'Sending...' : <><Send size={16} /> Get My Board</>}
            </button>
          </form>

          <p style={{
            fontFamily: 'var(--serif)', fontSize: '11px', fontStyle: 'italic',
            color: s.stone, textAlign: 'center', marginTop: '16px',
          }}>No spam. Unsubscribe anytime.</p>

          <button onClick={onClose} style={{
            width: '100%', fontFamily: 'var(--ui)', fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: s.stone, background: 'none', border: 'none', cursor: 'pointer',
            marginTop: '12px', padding: '8px',
          }}>Maybe later</button>
        </div>
      </div>
    </div>
  );
};
