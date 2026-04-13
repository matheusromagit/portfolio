import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, LayoutDashboard } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-24 px-4">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container relative z-10 flex flex-col items-center justify-center">
        
        <motion.div 
          className="text-center mb-12 max-w-4xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
        
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
        >
          <LayoutDashboard className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300 font-medium">Business Intelligence</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center leading-tight">
          <span className="text-white">Transformando Dados em</span><br />
          <span className="text-gradient">Inteligência Estratégica</span>
        </h1>

        <motion.p 
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mb-14 mx-auto text-pretty px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Portfólio de painéis interativos, análises avançadas e sistemas de relatórios automatizados criados para impulsionar o crescimento dos negócios.
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="https://wa.me/55061995164994" target="_blank" rel="noopener noreferrer" className="px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-base sm:text-lg font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1">
            <span>Fale Comigo</span>
          </a>
        </motion.div>
        
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-slate-400 text-sm">Role para explorar</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
