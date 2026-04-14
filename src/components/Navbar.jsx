import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (isMobile && latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { to: '/', label: 'Início' },
    { to: '/paineis', label: 'Painéis BI' },
    { to: '/frontend', label: 'Front-End' },
    { to: '/backend', label: 'Back-End' },
    { to: '/ia-eficiencia', label: 'IA & Processos' },
  ];

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-[100] border-b border-white/10 backdrop-blur-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 ${
          scrolled ? 'bg-[#0a0f1d]/70' : 'bg-[#0a0f1d]/90'
        }`}
      >
        <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-24'
        }`}>
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-white font-bold text-xl group"
        >
          <div className="p-2.5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl group-hover:from-blue-500 group-hover:to-blue-600 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] group-hover:scale-105">
            <LayoutDashboard className="w-5 h-5" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className={`font-medium transition-all hover:text-blue-400 relative ${location.pathname === link.to ? 'text-white' : 'text-slate-400'}`}
            >
              {link.label}
              {location.pathname === link.to && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              )}
            </Link>
          ))}
          <a 
            href="https://wa.me/55061995164994" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-medium px-5 py-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/30 hover:border-blue-500/50 transition-all hover:-translate-y-0.5"
          >
            Contato
          </a>
        </div>
        {/* Mobile Menu Button was moved outside motion.nav to stay fixed */}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/5 bg-[#0a0f1d] backdrop-blur-2xl shadow-2xl"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium py-2.5 px-4 rounded-xl transition-all ${location.pathname === link.to ? 'text-white bg-blue-600/20 border border-blue-500/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="https://wa.me/55061995164994" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium py-2.5 px-4 mt-2 rounded-xl bg-blue-600 text-white text-center hover:bg-blue-500 transition-colors"
              >
                Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>

      {/* Floating Fixed Menu Button for Mobile */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-5 right-5 z-[101] p-3 rounded-full bg-slate-900/80 backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.3)] text-white hover:bg-slate-800 transition-all border border-blue-500/30"
        aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </>
  );
};

export default Navbar;
