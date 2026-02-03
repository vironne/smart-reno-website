
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'outline-white' | 'primary-large' | 'primary-small';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "rounded-md font-medium transition-all duration-300 text-center inline-flex items-center justify-center";

  const variants = {
    'primary': "px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-[#C9A96E] text-white hover:bg-[#D4B578] shadow-md",
    'primary-small': "px-3 py-1.5 text-xs bg-[#C9A96E] text-white hover:bg-[#D4B578] shadow-sm",
    'primary-large': "px-6 py-3 md:px-10 md:py-4 text-base md:text-lg bg-[#C9A96E] text-white hover:bg-[#D4B578] shadow-lg",
    'secondary': "px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-[#1A1A1A] text-white hover:bg-black",
    'outline': "px-4 py-2 md:px-6 md:py-3 text-sm md:text-base border-2 border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white",
    'white': "px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-white text-[#C9A96E] hover:bg-[#F5F1E8] shadow-md",
    'outline-white': "px-4 py-2 md:px-6 md:py-3 text-sm md:text-base border-2 border-white text-white hover:bg-white hover:text-[#C9A96E]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
