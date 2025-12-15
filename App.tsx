import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import TrustSection from './components/TrustSection';
import Process from './components/Process';
import MoreProof from './components/MoreProof';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Button from './components/Button';

function App() {
  return (
    <main className="min-h-screen font-sans selection:bg-brand-200 selection:text-brand-900">
      <Hero />
      <About />
      <Gallery />
      <TrustSection />
      
      {/* Intermediate CTA */}
      <section className="py-12 px-6 bg-brand-50 border-y border-brand-100">
        <div className="max-w-md mx-auto text-center">
          <p className="text-brand-800 font-medium italic mb-6 text-lg">
            "Não adie mais o cuidado que você merece."
          </p>
          <Button text="Falar com Ticiane no WhatsApp" variant="whatsapp" fullWidth />
        </div>
      </section>

      <Process />
      <MoreProof />
      
      {/* Final CTA */}
      <section className="py-20 px-6 bg-brand-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-900 mb-6">
            Sua melhor versão começa com uma conversa.
          </h2>
          <p className="text-brand-800 mb-8 font-light text-lg">
            A primeira consulta é gratuita para que você se sinta segura e confiante antes de qualquer decisão.
          </p>
          <div className="max-w-sm mx-auto">
             <Button 
              text="Agendar Minha Avaliação" 
              subtext="Toque aqui para garantir seu horário"
              variant="whatsapp"
              fullWidth
            />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}

export default App;