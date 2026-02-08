import { motion } from 'framer-motion';
import agiImage from '../../assets/images/agi-character.webp';

const AGICharacter = () => {
  return (
    <motion.div
      className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* AGI Character Image with Float Animation */}
      <motion.img
        src={agiImage}
        alt="AGI Character - AgentPad AI Mascot"
        className="w-full h-full object-contain drop-shadow-2xl"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Sparkles around character */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2"
            style={{
              left: `${20 + i * 10}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.25,
              ease: 'easeInOut',
            }}
          >
            <svg viewBox="0 0 10 10" className="w-full h-full">
              <path d="M 5 0 L 6 4 L 10 5 L 6 6 L 5 10 L 4 6 L 0 5 L 4 4 Z" fill="#B3E5FC" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Soft glow background */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-cute-blue via-cute-lightblue to-cute-blue rounded-full" />
      </div>
    </motion.div>
  );
};

export default AGICharacter;
