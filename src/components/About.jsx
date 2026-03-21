import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Lightbulb, ShieldCheck } from 'lucide-react';

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
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Sobre <span className="text-gradient hover:scale-105 inline-block transition-transform cursor-default">Mim</span>
          </h2>
          
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Sou <strong className="text-white">Analista de Dados</strong> com formação em Ciência da Computação e sólida experiência no setor público. Atuo na transformação de bases complexas em <strong>informação estratégica para tomada de decisão</strong> governamental e executiva.
            </p>
            <p>
              Minha especialidade cobre a engenharia do analítico: desde a <strong>modelagem de dados (Star Schema)</strong>, até o desenvolvimento de dashboards altamente interativos e performáticos no Power BI. Minha abordagem vai do suporte técnico ao insight gerencial — garantindo governança, integridade e qualidade em todo o pipeline de dados.
            </p>
            <p>
              Com forte perfil analítico e foco em resolução de problemas, traduzo regras de negócio complexas em soluções técnicas eficientes. Em constante evolução, estou consolidando conhecimentos na área de Engenharia de Dados e no desenvolvimento de aplicações full-stack, sempre norteado pela minha missão:
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
          {[
            { icon: <Database className="w-8 h-8 text-blue-400" />, title: "Modelagem de Dados", desc: "Star Schema, Normalização & ETL" },
            { icon: <Server className="w-8 h-8 text-purple-400" />, title: "Data Viz Pleno", desc: "Dashboards Performáticos em PBI" },
            { icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />, title: "Governança", desc: "Integridade, Pipeline & Qualidade" },
            { icon: <Lightbulb className="w-8 h-8 text-yellow-400" />, title: "Inteligência Estratégica", desc: "Visão de Negócio & Resolução Complexa" }
          ].map((skill, i) => (
            <div key={i} className="glass-panel p-8 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)] transition-all duration-300 cursor-default group">
              <div className="w-14 h-14 rounded-2xl bg-slate-800/80 flex items-center justify-center mb-5 border border-slate-700/50 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h4 className="text-xl text-white font-semibold mb-2">{skill.title}</h4>
              <p className="text-sm text-slate-400">{skill.desc}</p>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
