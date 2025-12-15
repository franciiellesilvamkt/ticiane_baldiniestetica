import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, UserCheck } from 'lucide-react';

const TrustSection: React.FC = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Avaliação Sincera",
      desc: "Não vendo o que você não precisa. Minha análise é focada na sua real necessidade."
    },
    {
      icon: HeartHandshake,
      title: "Cuidado Pessoal",
      desc: "Acompanho você do início ao fim. Nada de linha de produção. Você é única."
    },
    {
      icon: ShieldCheck,
      title: "Segurança Total",
      desc: "Protocolos rigorosos de higiene e produtos com registro na ANVISA."
    },
    {
      icon: Sparkles,
      title: "Resultados Naturais",
      desc: "Harmonização que respeita seus traços. Você, só que melhor."
    }
  ];

  return (
    <section className="py-14 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl text-center text-brand-900 mb-10">
          Por que confiar em mim?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-brand-50 hover:bg-brand-100 transition-colors border border-brand-100/50">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-brand-200 flex items-center justify-center text-brand-800">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-brand-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-brand-700 text-sm leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;