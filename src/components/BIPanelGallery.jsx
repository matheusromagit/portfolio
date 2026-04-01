import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Maximize2, X, Check } from 'lucide-react';

const panels = [
  {
    id: 1,
    title: 'Conectividade Escolas e Saude',
    description: 'Dashboard de monitoramento de conectividade em escolas e unidades de saude com visualizacao geografica.',
    tags: ['Governo', 'Geografico', 'KPIs'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Vo7eW7Kw3jogM7FvqFLaWWlX9yT9xz.png'
  },
  {
    id: 2,
    title: 'GESAC - Mapeamento Regional',
    description: 'Painel interativo com mapeamento de regioes e estados brasileiros com filtros avancados.',
    tags: ['Geografico', 'Filtros', 'Interativo'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-z8yt3ZMstCpyW9cIGkC3LvMhQ7DcqS.png'
  },
  {
    id: 3,
    title: 'Mapeamento de Dados Pessoais',
    description: 'Dashboard MCOM para controle e status de bases de dados por coordenacao.',
    tags: ['LGPD', 'Compliance', 'Status'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-wgpKgqAHPfqSftdX5ViNyLy6MCAhLx.png'
  },
  {
    id: 4,
    title: 'Relatorio de Pedidos',
    description: 'BI de distribuicao e classificacao de pedidos de informacao com graficos interativos.',
    tags: ['Relatorios', 'Graficos', 'Analise'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-Fd8jCmFTllKGuY4g2REhbvv4usS2kq.png'
  },
  {
    id: 5,
    title: 'Transformacao Digital',
    description: 'Monitoramento do plano de transformacao digital com acompanhamento por eixo e trimestre.',
    tags: ['Estrategico', 'Timeline', 'KPIs'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-oq3JXXMG2F3mzJFMTAdT1tMALQ5kvG.png'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {panels.map((panel, index) => (
            <motion.div
              key={panel.id}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              className="glass-panel group overflow-hidden flex flex-col cursor-pointer"
              onClick={(e) => handleExpand(e, panel.id)}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-slate-900/60">
                <img 
                  src={panel.image} 
                  alt={panel.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button 
                    onClick={(e) => handleExpand(e, panel.id)}
                    className="p-2.5 rounded-xl bg-slate-900/80 backdrop-blur-sm hover:bg-blue-500 hover:text-white transition-all text-white shadow-lg"
                    title="Expandir"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={(e) => handleShare(e, panel.id)}
                    className="p-2.5 rounded-xl bg-slate-900/80 backdrop-blur-sm hover:bg-emerald-500 hover:text-white transition-all text-white shadow-lg"
                    title="Copiar Link"
                  >
                    {sharedId === panel.id ? <Check className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow bg-slate-800/40 group-hover:bg-slate-800/60 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {panel.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 flex-grow">{panel.description}</p>
                <div className="flex flex-wrap gap-2">
                  {panel.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                      {tag}
                    </span>
                  ))}
                </div>
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
              <div className="flex-grow p-6 md:p-10 bg-[#0f172a] overflow-auto flex items-center justify-center">
                <img 
                  src={panels.find(p => p.id === expandedId)?.image}
                  alt={panels.find(p => p.id === expandedId)?.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
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
