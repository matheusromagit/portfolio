import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Code2, Cloud, ShieldCheck, Cpu, Braces, TerminalSquare, GitBranch } from 'lucide-react';

const Backend = () => {
  const pillars = [
    {
      title: 'Arquitetura Escalável',
      description: 'Desenho de sistemas distribuídos e microserviços prontos para suportar alto volume de requisições sem perder desempenho.',
      icon: <Server className="w-8 h-8 text-blue-400" />,
      color: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      title: 'Modelagem de Dados',
      description: 'Estruturação eficiente de bancos relacionais e NoSQL para garantir consultas rápidas e consistência absoluta.',
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      title: 'APIs Robustas',
      description: 'Desenvolvimento de APIs RESTful estruturadas, seguras e bem documentadas para fácil integração.',
      icon: <Braces className="w-8 h-8 text-purple-400" />,
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Segurança & Auth',
      description: 'Implementação rígida de autenticação JWT, OAuth2 e blindagem contra vulnerabilidades padrão OWASP.',
      icon: <ShieldCheck className="w-8 h-8 text-rose-400" />,
      color: 'from-rose-500/20 to-red-500/20'
    }
  ];

  const tools = [
    { name: 'Node.js', icon: <TerminalSquare className="w-6 h-6" />, category: 'Ambiente' },
    { name: 'Python', icon: <Code2 className="w-6 h-6" />, category: 'Linguagem' },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6" />, category: 'Relacional' },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" />, category: 'NoSQL' },
    { name: 'Docker', icon: <Cloud className="w-6 h-6" />, category: 'Infraestrutura' },
    { name: 'AWS', icon: <Cpu className="w-6 h-6" />, category: 'Cloud' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1d] pt-20 overflow-hidden relative">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[size:32px_32px]"></div>
      
      {/* Floating abstract servers */}
      <div className="absolute top-40 left-[10%] w-72 h-72 bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-40 right-[10%] w-96 h-96 bg-emerald-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16 lg:py-24">
        {/* Hero Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Server className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-slate-300 font-medium">Engenharia de Servidores</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Construindo <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              Fundações Sólidas
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A beleza de uma interface digital não se sustenta sem um núcleo robusto. 
            Desenvolvo lógicas complexas, bancos de dados integrados e arquiteturas blindadas que garantem a performance e segurança da operação.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-32">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="glass-panel p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className="bg-slate-800/80 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-slate-700/50">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Banner */}
        <motion.div 
          className="max-w-5xl mx-auto bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div className="md:w-1/3 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-3">Stack Técnica</h3>
              <p className="text-slate-400">As tecnologias modernas escolhidas para criar ecossistemas resilientes e ágeis no lado do servidor.</p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/80 transition-colors group">
                  <div className="text-slate-400 group-hover:text-cyan-400 transition-colors mb-3">
                    {tool.icon}
                  </div>
                  <span className="text-white font-medium">{tool.name}</span>
                  <span className="text-xs text-slate-500 mt-1">{tool.category}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Backend;
