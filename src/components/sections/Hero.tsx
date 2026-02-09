import { motion } from 'framer-motion';
import NeonButton from '../ui/NeonButton';
import { HERO_CONTENT } from '../../utils/constants';
import agiWaveLeft from '../../assets/images/agi-wave-left.webp';
import agiWaveRight from '../../assets/images/agi-wave-right.webp';
import heroBg from '../../assets/images/hero-bg.webp';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center pt-28">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="AGI Futuristic City"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Waving Character */}
      <motion.img
        src={agiWaveLeft}
        alt="AGI Waving Left"
        className="absolute
                   w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80 2xl:w-[600px]
                   h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 2xl:h-[600px]
                   opacity-80 sm:opacity-40 md:opacity-50 lg:opacity-70 xl:opacity-90 2xl:opacity-100
                   left-[20%] top-[18%] sm:left-0 sm:top-[45%] sm:-translate-y-1/2
                   object-contain pointer-events-none z-[1]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Right Waving Character */}
      <motion.img
        src={agiWaveRight}
        alt="AGI Waving Right"
        className="absolute
                   w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80 2xl:w-[600px]
                   h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 2xl:h-[600px]
                   opacity-80 sm:opacity-40 md:opacity-50 lg:opacity-70 xl:opacity-90 2xl:opacity-100
                   right-[20%] top-[18%] sm:right-0 sm:top-[45%] sm:-translate-y-1/2
                   object-contain pointer-events-none z-[1]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Content */}
      <div className="container-custom py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Bold Uppercase Heading */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1
              className="font-display text-cute-blue uppercase tracking-tight leading-tight text-center px-4
                         text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              style={{
                WebkitTextStroke: '2px #2a2a6e',
                textShadow: '4px 4px 0px #2a2a6e, 8px 8px 0px rgba(42, 42, 110, 0.3)'
              }}
            >
              AGENT AGI
            </h1>

            <motion.p
              className="text-pudgy-navy max-w-2xl mx-auto font-display uppercase tracking-wider px-4
                         text-lg sm:text-xl md:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {HERO_CONTENT.subheadline}
            </motion.p>

            <motion.p
              className="text-pudgy-navy max-w-xl mx-auto font-bold px-4
                         text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {HERO_CONTENT.description}
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <NeonButton variant="primary" href={HERO_CONTENT.ctaPrimary.link} showArrow>
              {HERO_CONTENT.ctaPrimary.text}
            </NeonButton>
            <NeonButton variant="outline" href={HERO_CONTENT.ctaSecondary.link} showArrow>
              {HERO_CONTENT.ctaSecondary.text}
            </NeonButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
