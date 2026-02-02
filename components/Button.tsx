
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'outline-white' | 'primary-large';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-md font-medium transition-all duration-300 text-center inline-flex items-center justify-center";
  
  const variants = {
    'primary': "bg-[#C9A96E] text-white hover:bg-[#D4B578] shadow-md",
    'primary-large': "bg-[#C9A96E] text-white hover:bg-[#D4B578] text-lg px-10 py-4 shadow-lg",
    'secondary': "bg-[#1A1A1A] text-white hover:bg-black",
    'outline': "border-2 border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white",
    'white': "bg-white text-[#C9A96E] hover:bg-[#F5F1E8] shadow-md",
    'outline-white': "border-2 border-white text-white hover:bg-white hover:text-[#C9A96E]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
