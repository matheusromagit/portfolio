import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Code2, Layers, Palette, Box, PenTool, Monitor, Sparkles, Zap, X, ChevronDown } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AutoGest - Sistema de Estoque',
    description: 'Interface dark mode para gestao de estoque e pecas com design moderno e funcional.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-eOUyTyq4BhNhLwGtsOzCDVdyYjQkxj.png'
  },
  {
    id: 2,
    title: 'AutoGest - Modulo Financeiro',
    description: 'Painel de controle financeiro com tema claro e visualizacao de receitas e despesas.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-BtZrrJnPaNiIMfSF80x3if5DeTvaXB.png'
  },
  {
    id: 3,
    title: 'Odontolinz - Landing Page',
    description: 'Website institucional elegante para clinica odontologica com estetica premium.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-nmgjq1goHYZtaiikzzxJA6tqU1uCjm.png'
  }
];

const Frontend = () => {
  const containerRef = useRef(null);
  const notebookSectionRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [expandedId, setExpandedId] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: notebookSectionRef,
    offset: ["start start", "end start"]
  });

  // Map scroll to 180-degree half rotations, stopping on the third image
  const rotateY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 180, 360, 360]);
  
  // Change project based on scroll progress cleanly exactly at the 90-degree invisible flip points
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      // 0.2 maps to 90 degrees (invisible edge)
      // 0.6 maps to 270 degrees (invisible edge)
      if (value < 0.2) {
        setCurrentProject(0);
      } else if (value < 0.6) {
        setCurrentProject(1);
      } else {
        setCurrentProject(2);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const tools = [
    { 
      name: 'Blender', 
      icon: <Box className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      glow: 'rgba(249, 115, 22, 0.4)',
      desc: 'Modelagem 3D, animacoes e renderizacao fotorrealista'
    },
    { 
      name: 'Illustrator', 
      icon: <PenTool className="w-8 h-8" />,
      color: 'from-amber-500 to-orange-500',
      glow: 'rgba(245, 158, 11, 0.4)',
      desc: 'Vetorizacao, logotipos e identidade visual'
    },
    { 
      name: 'Affinity', 
      icon: <Palette className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      glow: 'rgba(168, 85, 247, 0.4)',
      desc: 'Design grafico, edicao de imagens e layouts'
    },
    { 
      name: 'Figma', 
      icon: <Layers className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      glow: 'rgba(236, 72, 153, 0.4)',
      desc: 'Prototipagem, UI/UX e design systems'
    },
  ];

  const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Framer Motion', level: 85 },
    { name: 'Three.js / WebGL', level: 75 },
    { name: 'Design Systems', level: 88 },
  ];

  const floatingShapes = [
    { size: 120, x: '10%', y: '20%', delay: 0, color: 'blue' },
    { size: 80, x: '85%', y: '15%', delay: 1, color: 'purple' },
    { size: 60, x: '75%', y: '60%', delay: 2, color: 'pink' },
    { size: 100, x: '5%', y: '70%', delay: 0.5, color: 'blue' },
    { size: 40, x: '50%', y: '80%', delay: 1.5, color: 'purple' },
  ];

  return (
    <section className="relative" ref={containerRef}>
      {/* Animated floating shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`fixed rounded-full opacity-20 blur-3xl pointer-events-none ${
            shape.color === 'blue' ? 'bg-blue-500' : 
            shape.color === 'purple' ? 'bg-purple-500' : 'bg-pink-500'
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10 py-24 px-4">
        <motion.div 
          className="text-center mb-12 max-w-4xl mx-auto"
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
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Desenvolvimento Front-End</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center leading-tight">
            <span className="text-white">Criando </span>
            <span className="text-gradient">Experiencias</span>
            <br />
            <span className="text-white">Digitais Unicas</span>
          </h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto text-pretty px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Combino codigo limpo com design criativo, utilizando ferramentas profissionais 
            de producao digital para entregar interfaces modernas e imersivas.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-slate-400 text-sm">Role para ver os projetos</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-blue-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* 3D Notebook Section - Sticky during scroll */}
      <div ref={notebookSectionRef} className="h-[300vh] relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pt-16 pb-16 md:pt-24 md:pb-32">
          {/* Project Info */}
          <motion.div 
            className="text-center z-20 px-4 w-full max-w-4xl mb-4 md:mb-10 flex-shrink-0"
            key={currentProject}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              {projects[currentProject].title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto drop-shadow-md">
              {projects[currentProject].description}
            </p>
          </motion.div>

          {/* 3D Image Component */}
          <div className="perspective-[2000px] w-full max-w-3xl mx-auto px-4 flex-1 flex flex-col justify-center">
            <motion.div
              className="relative preserve-3d cursor-pointer w-full"
              style={{ rotateY }}
              onClick={() => setExpandedId(projects[currentProject].id)}
            >
              {/* Image Frame without Notebook borders */}
              <div className="relative mx-auto w-full transition-transform duration-500 hover:scale-[1.02]" style={{ maxWidth: '750px' }}>
                <div className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 bg-slate-900/50 flex justify-center items-center">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full max-h-[55vh] lg:max-h-[60vh] object-contain rounded-xl"
                    style={{ transform: currentProject === 1 ? 'scaleX(-1)' : 'none' }}
                  />
                  
                  {/* Subtle reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Progress indicators */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  i === currentProject 
                    ? 'bg-blue-500 scale-125 shadow-[0_0_10px_rgba(59,130,246,0.5)]' 
                    : 'bg-slate-600'
                }`}
              />
            ))}
          </div>

          {/* Rotation hint */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {currentProject < 2 ? 'Continue rolando...' : 'Ultimo projeto!'}
          </motion.div>
        </div>
      </div>

      {/* Rest of the page */}
      <div className="relative z-10 pt-10 pb-24 px-4">
        {/* Code Block */}
        <motion.div
          className="max-w-4xl mx-auto mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-panel p-1 rounded-2xl overflow-hidden">
            <div className="bg-slate-900/80 rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-slate-500 text-xs">frontend-developer.tsx</span>
              </div>
              <div className="space-y-2 overflow-x-auto">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">developer</span>{' '}
                  <span className="text-white">=</span>{' '}
                  <span className="text-yellow-300">{'{'}</span>
                </motion.div>
                <motion.div 
                  className="pl-4 sm:pl-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-green-300">stack</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-orange-300">[&quot;React&quot;, &quot;TypeScript&quot;, &quot;Tailwind&quot;]</span>
                  <span className="text-white">,</span>
                </motion.div>
                <motion.div 
                  className="pl-4 sm:pl-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="text-green-300">tools</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-orange-300">[&quot;Blender&quot;, &quot;Illustrator&quot;, &quot;Affinity&quot;]</span>
                  <span className="text-white">,</span>
                </motion.div>
                <motion.div 
                  className="pl-4 sm:pl-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-green-300">passion</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-orange-300">&quot;Criar experiencias memoraveis&quot;</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.9 }}
                >
                  <span className="text-yellow-300">{'}'}</span>
                  <span className="text-white">;</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <span className="text-white">Ferramentas de </span>
            <span className="text-gradient">Producao Digital</span>
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                className="glass-panel p-4 sm:p-8 text-center group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${tool.glow} 0%, transparent 70%)`
                  }}
                />
                
                <motion.div 
                  className={`w-14 h-14 sm:w-20 sm:h-20 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 sm:mb-6 text-white shadow-lg relative z-10`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {tool.icon}
                </motion.div>
                
                <h3 className="text-base sm:text-xl font-semibold text-white mb-1 sm:mb-2 relative z-10">{tool.name}</h3>
                <p className="text-xs sm:text-sm text-slate-400 relative z-10 hidden sm:block">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <span className="text-white">Habilidades </span>
            <span className="text-gradient">Tecnicas</span>
          </motion.h2>

          <div className="glass-panel p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                  <span className="text-blue-400 font-mono text-sm sm:text-base">{skill.level}%</span>
                </div>
                <div className="h-2 sm:h-3 bg-slate-800/80 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: <Monitor className="w-6 h-6 sm:w-7 sm:h-7" />,
                title: 'Design Responsivo',
                desc: 'Interfaces que se adaptam perfeitamente a qualquer dispositivo.'
              },
              {
                icon: <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />,
                title: 'Animacoes Fluidas',
                desc: 'Micro-interacoes e transicoes suaves que encantam usuarios.'
              },
              {
                icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7" />,
                title: 'Performance',
                desc: 'Codigo otimizado para carregamento rapido e fluidez.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-panel p-6 sm:p-8 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center mb-4 sm:mb-5 text-blue-400 border border-blue-500/20"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a 
            href="https://wa.me/55061995164994" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-base sm:text-lg transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:-translate-y-1"
          >
            <span>Vamos Criar Algo Incrivel</span>
            <Sparkles className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Expanded Image Modal */}
      <AnimatePresence>
        {expandedId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl p-4"
            onClick={() => setExpandedId(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setExpandedId(null)}
                className="absolute -top-12 right-0 p-2 rounded-xl hover:bg-red-500 hover:text-white transition-all text-slate-400 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={projects.find(p => p.id === expandedId)?.image}
                alt={projects.find(p => p.id === expandedId)?.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for 3D transforms */}
      <style>{`
        .perspective-\\[2000px\\] {
          perspective: 2000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Frontend;
