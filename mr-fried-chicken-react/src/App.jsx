import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading Screen Component
  const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-dark z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-3xl shadow-2xl shadow-primary/25"
        >
          🍗
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-black gradient-text mb-4"
        >
          Mr. Fried Chicken
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg"
        >
          Preparing something delicious...
        </motion.p>

        {/* Loading Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-64 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-8"
        />
      </div>
    </motion.div>
  );

  // Scroll to Top Button
  const ScrollToTop = () => (
    <AnimatePresence>
      {scrollY > 300 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-2xl shadow-primary/25 flex items-center justify-center hover:shadow-3xl transition-all duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );

  return (
    <div className="layout-fix">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {/* Header */}
            <Header />

            {/* Main Sections */}
            <main className="w-full">
              <Hero />
              <About />
              <Menu />
              <Features />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Scroll to Top Button */}
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent/5 to-primary/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}

export default App;