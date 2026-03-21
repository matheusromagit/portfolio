import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart3, TrendingUp } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          {[
            { icon: <Database className="w-8 h-8 text-blue-400" />, title: "Engenharia de Dados", desc: "Arquiteturas ETL automatizadas" },
            { icon: <BarChart3 className="w-8 h-8 text-purple-400" />, title: "BI Interativo", desc: "Métricas de desempenho em tempo real" },
            { icon: <TrendingUp className="w-8 h-8 text-pink-400" />, title: "Análise Preditiva", desc: "Previsões e análise de tendências" }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              className="glass-panel p-10 flex flex-col items-center text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-slate-800/60 flex items-center justify-center mb-6 border border-slate-700/50 transform group-hover:rotate-12 transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
              <p className="text-base text-slate-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
