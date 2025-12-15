import React from 'react';
import { IMAGES, EXPERT_INFO } from '../constants';
import Button from './Button';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 px-4 md:pt-12 bg-gradient-to-b from-brand-100 to-brand-50">
      <div className="max-w-md mx-auto text-center md:max-w-2xl">
        
        {/* Trust badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-brand-200 shadow-sm mb-6">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
          <span className="text-xs font-medium text-brand-800 tracking-wide uppercase">Estética Avançada</span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-900 leading-[1.1] mb-4">
          Olá, eu sou <span className="text-brand-500 italic font-medium">{EXPERT_INFO.NAME}</span>
        </h1>
        
        <p className="text-brand-800 text-lg mb-8 leading-relaxed font-light">
          Especialista em <strong className="font-semibold">{EXPERT_INFO.TITLE}</strong>. Realce sua beleza natural com procedimentos seguros e personalizados.
        </p>

        {/* Mobile-first Image Styling */}
        <div className="relative w-full max-w-[320px] mx-auto mb-8 aspect-[4/5] rounded-t-[100px] rounded-b-[40px] overflow-hidden shadow-2xl ring-4 ring-white">
          <img 
            src={IMAGES.HERO} 
            alt={EXPERT_INFO.NAME} 
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle gradient overlay at bottom of image for depth */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <Button 
            text="Agendar 1ª Consulta Gratuita" 
            subtext="Resposta rápida • Sem compromisso"
            fullWidth
            variant="whatsapp"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;