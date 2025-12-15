import React from 'react';
import { IMAGES } from '../constants';

const MoreProof: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl text-brand-900 mb-10">Bastidores & Dedicação</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <figure className="relative rounded-2xl overflow-hidden shadow-lg group">
             <img 
              src={IMAGES.AUTHORITY_2} 
              alt="Ambiente de atendimento" 
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 text-left">
              <p className="text-white font-medium font-serif text-lg">Tecnologia e Conforto</p>
            </div>
          </figure>
           <figure className="relative rounded-2xl overflow-hidden shadow-lg group">
             <img 
              src={IMAGES.HERO} 
              alt="Ticiane Sorrindo" 
              className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 text-left">
              <p className="text-white font-medium font-serif text-lg">Atendimento Humanizado</p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default MoreProof;