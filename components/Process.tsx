import React from 'react';
import { MessageSquare, CalendarCheck, Sparkles } from 'lucide-react';
import Button from './Button';

const Process: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Toque no botão",
      desc: "Clique no WhatsApp e envie um 'Olá'. Minha equipe (ou eu) responderá rapidamente."
    },
    {
      icon: CalendarCheck,
      title: "Agende seu horário",
      desc: "Escolhemos juntos o melhor dia e horário para você vir ao consultório."
    },
    {
      icon: Sparkles,
      title: "Avaliação Gratuita",
      desc: "Analiso seu rosto/corpo presencialmente e monto seu plano de tratamento personalizado."
    }
  ];

  return (
    <section className="py-16 px-6 bg-brand-800 text-brand-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl text-center mb-2">
          Como funciona a <span className="text-brand-300">Primeira Consulta</span>
        </h2>
        <p className="text-center text-brand-200 text-sm mb-12 uppercase tracking-widest">
          Simples • Rápido • Sem Custo
        </p>

        <div className="space-y-8 relative before:absolute before:left-[27px] before:top-4 before:h-[80%] before:w-[1px] before:bg-brand-600/50 before:z-0">
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-700 border border-brand-600 flex items-center justify-center text-brand-200 shadow-lg">
                <step.icon size={24} />
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-serif text-white mb-2">{step.title}</h3>
                <p className="text-brand-200 font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <Button 
            text="Quero Agendar Agora" 
            subtext="Vagas limitadas para este mês"
            variant="whatsapp"
            className="shadow-brand-900/50"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;