import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prevent browser from restoring scroll position on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Instantly jump to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const MouseTracker = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.getElementsByClassName("glass-panel");
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return null;
};

import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Features from './components/Features';
import About from './components/About';
import BIPanelGallery from './components/BIPanelGallery';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import AIEfficiency from './components/AIEfficiency';

const Home = () => (
  <>
    <Hero />
    <Carousel />
    <Features />
    <BIPanelGallery />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MouseTracker />
      <div className="min-h-screen text-slate-50 selection:bg-blue-500/30 pt-20">
        <ParticleBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/paineis" element={<Home />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/ia-eficiencia" element={<AIEfficiency />} />
        </Routes>
        <footer className="py-16 border-t border-slate-800/50 mt-20 bg-gradient-to-t from-slate-900/50 to-transparent">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col items-center md:items-start gap-2">
                <p className="text-slate-400 text-base">Matheus Rodrigues Lima</p>
                <p className="text-slate-500 text-sm">Onde a precisão técnica encontra a visão estética</p>
              </div>
              <div className="flex items-center gap-6">
                <a 
                  href="https://wa.me/55061995164994" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  WhatsApp
                </a>
                <a 
                  href="https://www.linkedin.com/in/matheus-lima-4ba149182/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/matheusromagit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-slate-800/50 text-center">
              <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
      <SpeedInsights />
    </Router>
  );
}

export default App;
