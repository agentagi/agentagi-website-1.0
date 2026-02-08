import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import agiCharacter from '../../assets/images/agi-character.webp';
import agiPinkHoodie from '../../assets/images/agi-pink-hoodie.webp';
import agiGreenOveralls from '../../assets/images/agi-green-overalls.webp';
import agiWinter from '../../assets/images/agi-winter.webp';
import agiPanda from '../../assets/images/agi-panda.webp';

const ParallaxCharacters = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Different parallax speeds for each character
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y5 = useTransform(scrollYProgress, [0, 1], [90, -90]);

  // Background clouds parallax
  const yBackground = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const characters = [
    { src: agiCharacter, alt: 'AGI Blue', y: y1, delay: 0 },
    { src: agiPinkHoodie, alt: 'AGI Pink Hoodie', y: y2, delay: 0.1 },
    { src: agiGreenOveralls, alt: 'AGI Green Overalls', y: y3, delay: 0.2 },
    { src: agiWinter, alt: 'AGI Winter', y: y4, delay: 0.3 },
    { src: agiPanda, alt: 'AGI Panda', y: y5, delay: 0.4 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-b from-cute-lightblue/40 via-cute-paleblue/50 to-white"
    >
      {/* Animated Background Clouds/Shapes */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-3xl" />
        <div className="absolute top-32 right-20 w-60 h-60 bg-cute-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-cute-lightblue/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Characters Row */}
      <div className="container-custom h-full flex items-center justify-center">
        <div className="flex items-end justify-center gap-4 md:gap-8 lg:gap-12 w-full max-w-6xl px-4">
          {characters.map((character) => (
            <motion.div
              key={character.alt}
              style={{ y: character.y }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: character.delay, duration: 0.6 }}
              className="flex-shrink-0"
            >
              <motion.img
                src={character.src}
                alt={character.alt}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-2xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2"
            style={{
              left: `${(i * 8) + 10}%`,
              top: `${(i % 3) * 30 + 10}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          >
            <svg viewBox="0 0 10 10" className="w-full h-full">
              <path d="M 5 0 L 6 4 L 10 5 L 6 6 L 5 10 L 4 6 L 0 5 L 4 4 Z" fill="#40C4FF" opacity="0.6" />
            </svg>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ParallaxCharacters;
