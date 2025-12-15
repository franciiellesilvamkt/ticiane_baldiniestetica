import React from 'react';
import { Instagram } from 'lucide-react';
import { LINKS, EXPERT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-brand-300 py-10 px-6 pb-28 md:pb-10 border-t border-brand-800">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <div>
          <h3 className="font-serif text-2xl text-brand-100 mb-1">{EXPERT_INFO.NAME}</h3>
          <p className="text-sm opacity-80 font-light">{EXPERT_INFO.TITLE}</p>
        </div>
        
        <div className="flex gap-6">
          <a 
            href={LINKS.INSTAGRAM} 
            target="_blank" 
            rel="noreferrer"
            className="p-3 rounded-full bg-brand-800 hover:bg-brand-700 text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>

        <div className="text-xs text-brand-500 font-light pt-6 border-t border-brand-800 w-full">
          &copy; {new Date().getFullYear()} {EXPERT_INFO.NAME}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;