import React from 'react';
import { IMAGES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <div className="relative order-2 md:order-1">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
             <img 
              src={IMAGES.AUTHORITY_1} 
              alt="Ticiane Baldini atendendo" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-300 rounded-3xl -z-0"></div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-6">
            Mais do que estética, <br/>
            <span className="italic text-brand-500">autoestima e saúde.</span>
          </h2>
          
          <div className="space-y-4 text-brand-800 font-light leading-relaxed mb-8 text-base">
            <p>
              Muitas pessoas chegam até mim insatisfeitas com o que veem no espelho, buscando uma mudança que pareça natural.
            </p>
            <p>
              Meu propósito não é transformar você em outra pessoa, mas sim revelar a sua melhor versão. Trabalho com uma avaliação honesta, onde alinho suas expectativas com resultados reais e seguros.
            </p>
          </div>

          <ul className="space-y-3 mb-6">
            {[
              "Atendimento 100% realizado por mim",
              "Produtos de alta qualidade e segurança",
              "Foco em naturalidade, sem exageros",
              "Ambiente acolhedor e exclusivo"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <span className="text-brand-900 font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;