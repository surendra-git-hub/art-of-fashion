import React, { useState, useEffect } from 'react';
import { useRouter } from '../router';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const { navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
    scrolled ? 'bg-ink/95 backdrop-blur-md border-zinc-800 py-4 shadow-2xl' : 'bg-transparent border-transparent py-8'
  }`;

  const textClass = scrolled ? 'text-white' : 'text-ink mix-blend-difference';

  // Helper for luxury hover links
  const NavLink = ({ label, target, param }: { label: string, target: any, param?: any }) => (
    <button 
      onClick={() => navigate(target, param ? { category: param } : undefined)} 
      className="group relative py-1"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-blue transition-all duration-300 group-hover:w-full" />
    </button>
  );

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            className={`font-serif text-2xl md:text-3xl font-bold tracking-tighter cursor-pointer ${textClass}`}
            onClick={() => navigate('HOME')}
          >
            ART <span className="italic font-light">of</span> FASHION
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-10 uppercase text-[11px] tracking-[0.2em] font-medium ${textClass}`}>
            <NavLink label="Runway" target="CATEGORY" param="Runway" />
            <NavLink label="Editorial" target="CATEGORY" param="Editorial" />
            <NavLink label="Sustainable" target="CATEGORY" param="Sustainable" />
            <NavLink label="About" target="ABOUT" />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <button onClick={onOpenSearch} className={`${textClass} hover:opacity-70 transition-opacity`}>
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              className={`md:hidden ${textClass}`} 
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-[60] bg-ink text-white flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl font-bold">MENU</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-8 font-serif text-4xl italic">
              <button className="text-left hover:text-accent-blue transition-colors" onClick={() => { navigate('HOME'); setMobileMenuOpen(false); }}>Home</button>
              <button className="text-left hover:text-accent-blue transition-colors" onClick={() => { navigate('CATEGORY', { category: 'Runway' }); setMobileMenuOpen(false); }}>Runway</button>
              <button className="text-left hover:text-accent-blue transition-colors" onClick={() => { navigate('CATEGORY', { category: 'Editorial' }); setMobileMenuOpen(false); }}>Editorial</button>
              <button className="text-left hover:text-accent-blue transition-colors" onClick={() => { navigate('ABOUT'); setMobileMenuOpen(false); }}>About</button>
            </div>
            <div className="mt-auto border-t border-white/10 pt-8">
               <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4">Follow Us</div>
               <div className="flex gap-4 text-sm text-zinc-400">
                 <span>Instagram</span>
                 <span>Twitter</span>
                 <span>Pinterest</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};