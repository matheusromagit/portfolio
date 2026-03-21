// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-10 pb-10">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container relative z-10 text-center flex flex-col items-center">
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          Transformando Dados em <br />
          <span className="text-gradient">Inteligência Estratégica</span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mb-14 px-4 md:px-0 text-pretty"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Portfólio de painéis interativos, análises avançadas e sistemas de relatórios automatizados criados para impulsionar o crescimento dos negócios.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#gallery" className="px-6 sm:px-10 py-4 sm:py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-base sm:text-lg font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1">
            Explorar Paineis
          </a>
          <a href="https://wa.me/55061995164994" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-10 py-4 sm:py-5 rounded-2xl glass-panel text-white text-base sm:text-lg font-semibold flex items-center gap-2 group cursor-pointer border border-white/10 hover:border-white/30 transition-transform hover:-translate-y-1">
            <span className="group-hover:text-blue-400 transition-colors">Fale Comigo</span>
          </a>
        </motion.div>

      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <ChevronDown className="w-10 h-10 opacity-50 hover:opacity-100 transition-opacity text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
      </motion.div>
    </section>
  );
};

export default Hero;
