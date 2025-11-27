import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { Home } from './views/Home';
import { ArticleDetail } from './views/ArticleDetail';
import { CategoryArchive } from './views/CategoryArchive';
import { About } from './views/About';
import { motion, AnimatePresence } from 'framer-motion';

// Minimalist Luxury Preloader
const Preloader: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-ink flex flex-col items-center justify-center text-white"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-center"
        >
          ART <span className="italic font-light">of</span> FASHION
        </motion.div>

        {/* Loading Progress Bar */}
        <div className="w-32 h-[1px] bg-zinc-800 relative overflow-hidden">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-white"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const MainLayout: React.FC = () => {
  const { currentView } = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'HOME': return <Home />;
      case 'ARTICLE': return <ArticleDetail />;
      case 'CATEGORY': return <CategoryArchive />;
      case 'ABOUT': return <About />;
      default: return <Home />;
    }
  };

  // Page Transition Configuration
  // "Fades out current content and fades in new content with a subtle zoom effect"
  const pageTransition = {
    initial: { opacity: 0, scale: 0.97, filter: 'blur(4px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 1.03, filter: 'blur(4px)' },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } // Custom bezier for luxury feel
  };

  return (
    <div className="antialiased min-h-screen flex flex-col bg-paper">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
      
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
            className="w-full h-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <RouterProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="app-root"
            // The App container entrance animation (matches the requested "fade in with zoom")
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="min-h-screen"
          >
            <MainLayout />
          </motion.div>
        )}
      </AnimatePresence>
    </RouterProvider>
  );
};

export default App;