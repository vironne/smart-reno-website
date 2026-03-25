import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  className?: string;
}

const s = { ink: '#1a1714', paper: '#F5F0EB', rust: '#B8976A', stone: '#6b5e52' };

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after, className = '' }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
  const handleTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX); };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative', overflow: 'hidden', userSelect: 'none',
        cursor: 'ew-resize', height: '500px', background: s.ink,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After (full bg) */}
      <img src={after} alt="After" style={{
        width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none',
        filter: 'saturate(0.7) contrast(1.1)',
      }} />

      {/* Before (clipped) */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
      }}>
        <img src={before} alt="Before" style={{
          width: '100%', height: '100%', objectFit: 'cover',
          filter: 'saturate(0.4) contrast(0.9)',
        }} />
      </div>

      {/* Slider handle */}
      <div style={{
        position: 'absolute', inset: '0 auto 0 auto', width: '2px',
        background: s.paper, pointerEvents: 'none', left: `${sliderPos}%`,
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40px', height: '40px', background: s.paper,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px',
        }}>
          <ChevronLeft size={14} style={{ color: s.rust }} />
          <ChevronRight size={14} style={{ color: s.rust }} />
        </div>
      </div>

      {/* Labels */}
      <div style={{
        position: 'absolute', top: '16px', left: '16px',
        fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: s.paper, background: 'rgba(26,23,20,0.6)', padding: '6px 12px',
      }}>Before</div>
      <div style={{
        position: 'absolute', top: '16px', right: '16px',
        fontFamily: 'var(--ui)', fontSize: '9px', fontWeight: 600,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: s.paper, background: s.rust, padding: '6px 12px',
      }}>After</div>
    </div>
  );
};
