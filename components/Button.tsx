import React from 'react';
import { MessageCircle } from 'lucide-react';
import { LINKS } from '../constants';

interface ButtonProps {
  text: string;
  subtext?: string;
  fullWidth?: boolean;
  className?: string;
  variant?: 'primary' | 'whatsapp' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  subtext, 
  fullWidth = false, 
  className = '',
  variant = 'whatsapp'
}) => {
  const baseStyles = "group relative flex flex-col items-center justify-center py-4 px-8 rounded-full transition-all duration-300 transform active:scale-95 shadow-lg hover:shadow-xl";
  
  const variants = {
    whatsapp: "bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent",
    primary: "bg-brand-400 hover:bg-brand-500 text-white border-transparent",
    outline: "bg-transparent border-2 border-brand-400 text-brand-800 hover:bg-brand-50"
  };

  return (
    <a 
      href={LINKS.WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <div className="flex items-center gap-2 font-bold tracking-wide text-lg uppercase">
        {variant === 'whatsapp' && <MessageCircle className="w-5 h-5 fill-current" />}
        {text}
      </div>
      {subtext && (
        <span className="text-[10px] opacity-90 font-medium mt-0.5 tracking-wider uppercase">
          {subtext}
        </span>
      )}
    </a>
  );
};

export default Button;