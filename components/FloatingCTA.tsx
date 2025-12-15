import React, { useState, useEffect } from 'react';
import Button from './Button';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full p-4 z-40 bg-gradient-to-t from-white via-white/90 to-transparent transition-transform duration-300 md:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <Button 
        text="Agendar Consulta Grátis" 
        variant="whatsapp"
        fullWidth
        className="shadow-2xl shadow-green-900/20"
      />
    </div>
  );
};

export default FloatingCTA;