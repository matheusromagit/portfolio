import React from 'react';
import { motion } from 'framer-motion';
import { Server, LayoutDashboard, Code2, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-24 relative" id="about">
      {/* Background Flare */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[30rem] h-[30rem] bg-purple-600/10 mix-blend-screen filter blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Profile Text */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-6">
            <span className="text-sm font-medium text-purple-300">Perfil Profissional</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Sobre <span className="text-gradient hover:scale-105 inline-block transition-transform cursor-default">Mim</span>
          </h2>
          
          <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
            <p>
              Eu sou <strong className="text-white">Matheus Rodrigues Lima, Desenvolvedor Web Full-Stack e Analista de Dados</strong> com formação em Ciência da Computação e sólida experiência. Atuo criando desde sistemas web modernos e responsivos até a transformação de bases dinâmicas em <strong>informação estratégica para tomada de decisão</strong> executiva.
            </p>
            <p>
              Minha especialidade une os dois mundos: no Desenvolvimento Full-Stack, atuo de ponta a ponta construindo <strong>do Front-End ao Back-End</strong>, desenhando arquiteturas focadas em UI/UX, APIs e integração segura. Na engenharia do analítico, domino desde a <strong>modelagem de dados (Star Schema)</strong> até os dashboards altamente interativos no PowerBI, entregando performance e governança do código ao pipeline final.
            </p>
            <p>
              Com forte perfil analítico e mentalidade estruturada para resolução de problemas, traduzo regras de negócio fluidas em aplicações full-stack eficientes. Em constante evolução, integro a inteligência da Ciência dos Dados ao desenvolvimento clássico de software, sempre norteado pela minha missão:
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-5 py-3 my-8 bg-gradient-to-r from-blue-500/10 to-transparent rounded-r-xl italic text-blue-200 font-medium shadow-sm">
              "Mais do que construir dashboards, entrego contexto, clareza e direcionamento."
            </blockquote>
          </div>
        </motion.div>
        
        {/* Right Side: Skill Cards */}
        <motion.div 
          className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link to="/paineis">
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel p-6 h-full flex flex-col items-center text-center group cursor-pointer border border-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <LayoutDashboard className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Painéis BI</h4>
              <p className="text-xs text-slate-400">Dashboards interativos e visuais.</p>
            </motion.div>
          </Link>

          <Link to="/frontend">
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel p-6 h-full flex flex-col items-center text-center group cursor-pointer border border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <Code2 className="w-7 h-7 text-indigo-400" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Front-End</h4>
              <p className="text-xs text-slate-400">Interfaces modernas e UI/UX.</p>
            </motion.div>
          </Link>

          <Link to="/backend">
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel p-6 h-full flex flex-col items-center text-center group cursor-pointer border border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <Server className="w-7 h-7 text-purple-400" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Back-End</h4>
              <p className="text-xs text-slate-400">APIs, bancos e microsserviços.</p>
            </motion.div>
          </Link>

          <Link to="/ia-eficiencia">
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel p-6 h-full flex flex-col items-center text-center group cursor-pointer border border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <Brain className="w-7 h-7 text-emerald-400" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">IA & Processos</h4>
              <p className="text-xs text-slate-400">Automação e lógica avançada.</p>
            </motion.div>
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
