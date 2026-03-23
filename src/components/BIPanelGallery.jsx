import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardMockup from './DashboardMockup';
import { ExternalLink, Maximize2, X, Check } from 'lucide-react';

const panels = [
  {
    id: 1,
    title: 'Receita Global & Crescimento',
    metric: 'R$ 842.500',
    change: 12.5,
    description: 'Visão executiva de desempenho global de vendas com previsão estruturada.',
    tags: ['Executivo', 'Finanças', 'Preditivo']
  },
  {
    id: 2,
    title: 'Eficiência Operacional',
    metric: '94,2%',
    change: 2.1,
    description: 'Monitoramento da cadeia de suprimentos e painel de alertas avançados.',
    tags: ['Operações', 'Alertas', 'KPIs']
  }
];

const BIPanelGallery = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [sharedId, setSharedId] = useState(null);

  const handleShare = (e, id) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setSharedId(id);
    setTimeout(() => setSharedId(null), 2000);
  };

  const handleExpand = (e, id) => {
    e.stopPropagation();
    setExpandedId(id);
  };

  return (
    <section className="py-24 relative" id="gallery">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-600/10 mix-blend-screen filter blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
          >
            Painéis de <span className="text-gradient hover:scale-105 inline-block transition-transform cursor-default">Inteligência em Destaque</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-xl"
          >
            Navegue pelos nossos painéis totalmente interativos. Clique em qualquer dashboard para abrir em tela cheia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {panels.map((panel, index) => (
            <motion.div
              key={panel.id}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", bounce: 0.3 }}
              className="glass-panel group overflow-hidden flex flex-col h-[550px] cursor-pointer"
              onClick={(e) => handleExpand(e, panel.id)}
            >
              <div className="p-8 border-b border-slate-700/50 bg-slate-800/40 flex justify-between items-start group-hover:bg-slate-800/60 transition-colors">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {panel.title}
                  </h3>
                  <p className="text-base text-slate-400 mb-4">{panel.description}</p>
                  <div className="flex gap-2">
                    {panel.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                  <button 
                    onClick={(e) => handleExpand(e, panel.id)}
                    className="p-3 rounded-xl bg-slate-700/50 hover:bg-blue-500 hover:text-white transition-all text-slate-300 shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1"
                    title="Expandir"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => handleShare(e, panel.id)}
                    className="p-3 rounded-xl bg-slate-700/50 hover:bg-emerald-500 hover:text-white transition-all text-slate-300 shadow-lg hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:-translate-y-1 relative"
                    title="Copiar Link"
                  >
                    {sharedId === panel.id ? <Check className="w-5 h-5 text-white" /> : <ExternalLink className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="p-6 flex-grow bg-slate-900/60 relative overflow-hidden group-hover:bg-slate-900/40 transition-colors pt-10">
                <div className="h-full border border-slate-700/50 bg-[#1e293b]/80 rounded-xl p-5 shadow-inner group-hover:scale-[1.02] transform transition-transform duration-500">
                  <DashboardMockup title={panel.title} metric={panel.metric} change={panel.change} />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expandedId && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 md:p-10"
            onClick={() => setExpandedId(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-7xl h-full max-h-[900px] glass-panel flex flex-col overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-slate-700/50 flex justify-between items-center bg-slate-800/80 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {panels.find(p => p.id === expandedId)?.title} - Visão Ampliada
                </h3>
                <button 
                  onClick={() => setExpandedId(null)}
                  className="p-3 rounded-xl hover:bg-red-500 hover:text-white transition-all text-slate-400 shadow-md hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transform hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-grow p-6 md:p-10 bg-[#0f172a] overflow-hidden">
                <DashboardMockup 
                  title={panels.find(p => p.id === expandedId)?.title}
                  metric={panels.find(p => p.id === expandedId)?.metric}
                  change={panels.find(p => p.id === expandedId)?.change}
                  fullScreen={true}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BIPanelGallery;
