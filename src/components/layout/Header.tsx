import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Marquee from '../ui/Marquee';
import { SOCIAL_LINKS, MARQUEE_TOP_TEXT } from '../../utils/constants';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT $AGI', href: '#about' },
    { label: 'MISSION', href: '#mission' },
    { label: '$AGI ECOSYSTEM', href: '#ecosystem' },
    { label: 'SWAP', href: '#why-follow' },
    { label: 'JOIN COMMUNITY', href: '#connect' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -200 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Top Marquee Ticker */}
        <Marquee
          bgColor="bg-cute-blue"
          textColor="text-white"
          speed="fast"
        >
          {MARQUEE_TOP_TEXT}
        </Marquee>

        {/* Navigation Bar */}
        <nav className="bg-transparent">
          <div className="container-custom py-6 flex items-center justify-between">
            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="font-display text-pudgy-navy uppercase tracking-wider text-sm sm:text-base md:text-xl px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 border-2 sm:border-3 md:border-4 border-pudgy-navy rounded-xl bg-white hover:bg-pudgy-navy hover:text-white transition-all duration-300"
            >
              MENU
            </button>

            {/* Logo Center */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-pudgy-navy uppercase tracking-tight">
                $AGI
              </span>
            </motion.div>

            {/* BUY $AGI Button */}
            <a
              href={SOCIAL_LINKS.twitter}
              className="font-display text-pudgy-navy uppercase tracking-wider text-sm sm:text-base md:text-xl px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 border-2 sm:border-3 md:border-4 border-pudgy-navy rounded-xl bg-white hover:bg-pudgy-navy hover:text-white transition-all duration-300"
            >
              BUY $AGI
            </a>
          </div>
        </nav>
      </motion.header>

      {/* Full-Page Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-white overflow-y-auto relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Blue Ornaments */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              {/* Top Left */}
              <motion.div
                className="absolute -top-20 -left-20 w-96 h-96 bg-cute-blue/10 rounded-full blur-3xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              />
              {/* Top Right */}
              <motion.div
                className="absolute top-40 -right-40 w-[500px] h-[500px] bg-cute-lightblue/20 rounded-full blur-3xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              {/* Middle Left */}
              <motion.div
                className="absolute top-1/2 -left-32 w-80 h-80 bg-cute-paleblue/30 rounded-full blur-2xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
              {/* Bottom Right */}
              <motion.div
                className="absolute -bottom-32 right-20 w-[600px] h-[600px] bg-cute-blue/15 rounded-full blur-3xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              {/* Small accent top center */}
              <motion.div
                className="absolute top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-cute-lightblue/25 rounded-full blur-2xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </div>

            {/* Close Button */}
            <div className="fixed top-8 right-8 z-20">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-16 h-16 bg-white border-4 border-pudgy-navy rounded-xl hover:bg-pudgy-navy group transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-pudgy-navy group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Content */}
            <div className="container-custom h-full flex flex-col justify-between py-20 relative">
              {/* Top Section */}
              <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
                {/* Left: Navigation Links */}
                <motion.div
                  className="flex flex-col md:flex-row gap-8 md:gap-16"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  {/* Column 1 */}
                  <div className="flex flex-col gap-6">
                    {menuItems.slice(0, 3).map((item, index) => (
                      <motion.button
                        key={item.label}
                        onClick={() => handleMenuClick(item.href)}
                        className="text-4xl md:text-5xl lg:text-6xl font-display text-pudgy-navy uppercase tracking-tight hover:text-cute-blue transition-colors duration-300 text-left"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col gap-6">
                    {menuItems.slice(3).map((item, index) => (
                      <motion.button
                        key={item.label}
                        onClick={() => handleMenuClick(item.href)}
                        className="text-4xl md:text-5xl lg:text-6xl font-display text-pudgy-navy uppercase tracking-tight hover:text-cute-blue transition-colors duration-300 text-left"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Right: Social Links */}
                <motion.div
                  className="flex flex-row lg:flex-col gap-6 flex-wrap"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pudgy-navy rounded-lg flex items-center justify-center hover:bg-cute-blue transition-colors group"
                    title="X"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={SOCIAL_LINKS.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pudgy-navy rounded-lg flex items-center justify-center hover:bg-cute-blue transition-colors group"
                    title="Telegram"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.03-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.943.11.78.89z" />
                    </svg>
                  </a>
                  <a
                    href="https://dexscreener.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pudgy-navy rounded-lg flex items-center justify-center hover:bg-cute-blue transition-colors group"
                    title="DexScreener"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
