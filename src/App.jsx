import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Features from './components/Features';
import About from './components/About';
import BIPanelGallery from './components/BIPanelGallery';

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
      <div className="min-h-screen text-slate-50 selection:bg-blue-500/30 pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
        <footer className="py-10 border-t border-slate-800 mt-20 text-center text-slate-500 text-base">
          <p>© {new Date().getFullYear()} Portfólio de Dados & BI. Criado com Precisão.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
