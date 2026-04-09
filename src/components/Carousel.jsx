// src/components/Carousel.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  { id: 1, title: 'Dashboard de Vendas (Power BI)', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Análise de RH (Qlik)', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Logística e Frota (Power BI)', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Marketing Analytics (Tableau)', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'Fluxo de Caixa (Qlik)', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop' }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 relative">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em <span className="text-gradient">Power BI & Qlik</span>
          </h2>
          <p className="text-slate-400">Deslize para visualizar exemplos reais de dashboards.</p>
        </div>

        <div className="relative max-w-5xl mx-auto flex items-center justify-center">
          <button 
            onClick={prevSlide}
            className="absolute left-4 md:-left-6 z-20 p-3 rounded-full glass-panel hover:bg-slate-700/80 transition-colors text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="w-full overflow-hidden rounded-2xl glass-panel relative aspect-video shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img 
                  src={carouselImages[currentIndex].src} 
                  alt={carouselImages[currentIndex].title}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end">
                  <div className="p-8 w-full">
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">{carouselImages[currentIndex].title}</h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-4 md:-right-6 z-20 p-3 rounded-full glass-panel hover:bg-slate-700/80 transition-colors text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 gap-3">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-blue-500 w-8' : 'bg-slate-700 hover:bg-slate-500'}`}
              aria-label={`Visualizar slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
