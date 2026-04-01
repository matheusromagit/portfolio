import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Palette, Box, PenTool, Monitor, Sparkles, Zap } from 'lucide-react';

const Frontend = () => {
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
    <section className="py-24 relative overflow-hidden min-h-screen">
      {/* Animated floating shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-20 blur-3xl pointer-events-none ${
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

      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
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
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="text-white">Criando </span>
            <span className="text-gradient">Experiencias</span>
            <br />
            <span className="text-white">Digitais Unicas</span>
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto text-pretty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Combino codigo limpo com design criativo, utilizando ferramentas profissionais 
            de producao digital para entregar interfaces modernas e imersivas.
          </motion.p>
        </motion.div>

        {/* Animated Code Block */}
        <motion.div
          className="max-w-4xl mx-auto mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-panel p-1 rounded-2xl overflow-hidden">
            <div className="bg-slate-900/80 rounded-xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-slate-500 text-xs">frontend-developer.tsx</span>
              </div>
              <div className="space-y-2">
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
                  className="pl-6"
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
                  className="pl-6"
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
                  className="pl-6"
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
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <span className="text-white">Ferramentas de </span>
            <span className="text-gradient">Producao Digital</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                className="glass-panel p-8 text-center group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${tool.glow} 0%, transparent 70%)`
                  }}
                />
                
                <motion.div 
                  className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-6 text-white shadow-lg relative z-10`}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {tool.icon}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-2 relative z-10">{tool.name}</h3>
                <p className="text-sm text-slate-400 relative z-10">{tool.desc}</p>
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
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <span className="text-white">Habilidades </span>
            <span className="text-gradient">Tecnicas</span>
          </motion.h2>

          <div className="glass-panel p-8 md:p-10 space-y-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-blue-400 font-mono">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-800/80 rounded-full overflow-hidden">
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
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Monitor className="w-7 h-7" />,
                title: 'Design Responsivo',
                desc: 'Interfaces que se adaptam perfeitamente a qualquer dispositivo, garantindo experiencia consistente.'
              },
              {
                icon: <Sparkles className="w-7 h-7" />,
                title: 'Animacoes Fluidas',
                desc: 'Micro-interacoes e transicoes suaves que encantam usuarios e elevam a experiencia.'
              },
              {
                icon: <Zap className="w-7 h-7" />,
                title: 'Performance',
                desc: 'Codigo otimizado para carregamento rapido e fluidez mesmo em dispositivos modestos.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-panel p-8 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center mb-5 text-blue-400 border border-blue-500/20"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-lg transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:-translate-y-1"
          >
            <span>Vamos Criar Algo Incrivel</span>
            <Sparkles className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Frontend;
