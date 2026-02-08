import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Mission from './components/sections/Mission';
import Personality from './components/sections/Personality';
import WhyFollow from './components/sections/WhyFollow';
import Connect from './components/sections/Connect';
import LoadingScreen from './components/ui/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading duration - 2 seconds for a nice entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <motion.div
        className="min-h-screen text-pudgy-navy overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Mission />
          <Personality />
          <WhyFollow />
          <Connect />
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
