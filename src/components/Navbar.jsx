import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Se estiver rolando para baixo e já tiver passado de 100px, esconde a navbar
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      // Se estiver rolando para cima, mostra a navbar novamente
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-[100] glass-panel !rounded-none !border-t-0 !border-l-0 !border-r-0 border-b border-white/10 bg-[#0a0f1d]/90 backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-white font-bold text-xl group">
          <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            <LayoutDashboard className="w-5 h-5" />
          </div>
          <span>matheuslima<span className="text-blue-400">.com</span></span>
        </Link>
        <div className="flex gap-8 items-center">
          <Link 
            to="/" 
            className={`font-medium transition-colors hover:text-blue-400 ${location.pathname === '/' ? 'text-white border-b-2 border-blue-500 pb-1' : 'text-slate-400'}`}
          >
            Início
          </Link>
          <Link 
            to="/sobre" 
            className={`font-medium transition-colors hover:text-blue-400 ${location.pathname === '/sobre' ? 'text-white border-b-2 border-blue-500 pb-1' : 'text-slate-400'}`}
          >
            Sobre Mim
          </Link>
          <a href="https://wa.me/55061995164994" target="_blank" rel="noopener noreferrer" className="font-medium px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/40 transition-colors">
            Contato
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
