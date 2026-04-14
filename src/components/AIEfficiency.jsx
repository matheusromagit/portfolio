import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Zap, Rocket, Clock, Cog, CheckCircle2, TrendingUp, Workflow } from 'lucide-react';

const AIEfficiency = () => {
  const comparisons = [
    {
      title: 'Desenvolvimento e Refatoração',
      manual: 'Horas gastas lendo documentação e caçando bugs simples em linhas de código.',
      ai: 'Análise léxica imediata, sugestões de otimização de performance e detecção antecipada de vulnerabilidades.',
    },
    {
      title: 'Geração de Dashboards de BI',
      manual: 'Tratamento manual de dados via Excel, cruzamento lento e propensão a erro humano.',
      ai: 'Pipelines automatizados que filtram, processam e plotam os dados em tempo real utilizando scripts dinâmicos.',
    },
    {
      title: 'Processos Empresariais',
      manual: 'Setores isolados com fluxos repetitivos de copiar e colar informações entre sistemas.',
      ai: 'Sistemas inteligentes integrados via API que orquestram automaticamente o fluxo de tarefas e criam relatórios resumidos.',
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1d] pt-20 overflow-hidden relative">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[#0a0f1d]">
        <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[size:32px_32px]"></div>
      </div>
      
      {/* AI Themed Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

      <div className="mx-auto px-4 lg:px-8 relative z-10 py-16 lg:py-24">
        {/* Hero Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-purple-500/30 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <BrainCircuit className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-100 font-medium tracking-wide">Inteligência Tecnológica</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Engenharia <span className="text-slate-400">&</span> <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 font-extrabold pb-2">
              Automação Inteligente
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ferramentas de Inteligência Artificial tornam tudo mais rápido, mas apenas uma forte base <strong className="text-white font-semibold">técnica</strong> e de <strong className="text-white font-semibold">engenharia</strong> transforma essa velocidade em processos robustos e resultados escaláveis que impactam o negócio.
          </p>
        </motion.div>

        {/* Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <motion.div 
            className="glass-panel p-8 text-center flex flex-col items-center border border-slate-700/50 hover:bg-slate-800/80 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(251,191,36,0.15)]">
              <Zap className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Velocidade de Execução</h3>
            <p className="text-slate-400">Atalhos precisos na escrita de código, reduzindo o tempo de entrega de semanas para dias em módulos padronizados.</p>
          </motion.div>

          <motion.div 
            className="glass-panel p-8 text-center flex flex-col items-center border border-slate-700/50 hover:bg-slate-800/80 transition-colors relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,85,247,0.15)] relative z-10">
              <Workflow className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 relative z-10">Orquestração Lógica</h3>
            <p className="text-slate-400 relative z-10">IA sozinha gera textos. A engenharia conecta esses outputs em sistemas reais através de APIs e webhooks.</p>
          </motion.div>

          <motion.div 
            className="glass-panel p-8 text-center flex flex-col items-center border border-slate-700/50 hover:bg-slate-800/80 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              <TrendingUp className="w-8 h-8 text-sky-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Crescimento Escalável</h3>
            <p className="text-slate-400">Soluções arquitetadas desde o início para permitirem expansão lateral e adição de novas camadas de automação fáceis.</p>
          </motion.div>
        </div>

        {/* Workflow Comparison Section */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O Impacto na Prática</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Como a aplicação correta de recursos computacionais potencializados por técnica pura alteram completamente o dia a dia produtivo.</p>
          </div>

          <div className="space-y-6">
            {comparisons.map((item, i) => (
              <motion.div 
                key={i}
                className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden flex flex-col md:flex-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Manual Side */}
                <div className="flex-1 p-6 md:p-8 bg-slate-900/80 border-b md:border-b-0 md:border-r border-slate-800 relative">
                  <div className="flex items-center gap-3 mb-4 text-slate-500">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold tracking-wide text-sm uppercase">Caminho Tradicional (Lento)</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-300 mb-2">{item.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">{item.manual}</p>
                </div>
                
                {/* AI & Tech Side */}
                <div className="flex-1 p-6 md:p-8 bg-gradient-to-br from-purple-900/10 to-transparent relative">
                  <div className="flex items-center gap-3 mb-4 text-emerald-400">
                    <Rocket className="w-5 h-5" />
                    <span className="font-semibold tracking-wide text-sm uppercase">Otimização + IA (Rápido)</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">{item.ai}</p>
                  
                  {/* Subtle success icon overlay */}
                  <div className="absolute bottom-4 right-4 opacity-10">
                    <CheckCircle2 className="w-24 h-24 text-emerald-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default AIEfficiency;
