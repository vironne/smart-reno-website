import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'outline-white' | 'primary-large' | 'primary-small' | 'ghost';
  children: React.ReactNode;
}

const baseStyles: React.CSSProperties = {
  fontFamily: "var(--display)",
  fontWeight: 700,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.04em',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  transition: 'all 0.25s ease',
};

const variantStyles: Record<string, React.CSSProperties> = {
  'primary': {
    ...baseStyles,
    padding: '14px 28px',
    fontSize: '16px',
    background: 'var(--rust)',
    color: 'var(--paper)',
  },
  'primary-small': {
    ...baseStyles,
    padding: '8px 16px',
    fontSize: '12px',
    background: 'var(--rust)',
    color: 'var(--paper)',
  },
  'primary-large': {
    ...baseStyles,
    padding: '18px 36px',
    fontSize: '18px',
    background: 'var(--rust)',
    color: 'var(--paper)',
  },
  'secondary': {
    ...baseStyles,
    padding: '14px 28px',
    fontSize: '16px',
    background: 'var(--ink)',
    color: 'var(--paper)',
  },
  'outline': {
    ...baseStyles,
    padding: '14px 28px',
    fontSize: '16px',
    background: 'transparent',
    color: 'var(--rust)',
    border: '1px solid var(--rust)',
  },
  'white': {
    ...baseStyles,
    padding: '14px 28px',
    fontSize: '16px',
    background: 'var(--paper)',
    color: 'var(--rust)',
  },
  'outline-white': {
    ...baseStyles,
    padding: '14px 28px',
    fontSize: '16px',
    background: 'transparent',
    color: 'var(--paper)',
    border: '1px solid rgba(245,240,235,0.3)',
  },
  'ghost': {
    ...baseStyles,
    padding: '8px 0',
    fontSize: '14px',
    background: 'transparent',
    color: 'var(--rust)',
    letterSpacing: '0.02em',
  },
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, style, className = '', ...props }) => {
  const s = variantStyles[variant] || variantStyles['primary'];
  return (
    <button style={{ ...s, ...style }} className={className} {...props}>
      {children}
    </button>
  );
};
