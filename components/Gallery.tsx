import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 bg-brand-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-3">Resultados Reais</h2>
          <p className="text-brand-600 font-light italic">Toque nas fotos para ampliar</p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {IMAGES.GALLERY.map((src, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md cursor-zoom-in bg-white"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Resultado ${index + 1}`} 
                className="w-full h-auto duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-brand-400 mt-8 uppercase tracking-widest opacity-80">
          * Os resultados podem variar de pessoa para pessoa.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Resultado ampliado" 
            className="max-w-full max-h-[90vh] rounded-md shadow-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;