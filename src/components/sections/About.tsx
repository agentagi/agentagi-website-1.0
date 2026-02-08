import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '../../utils/constants';
import agiAbout from '../../assets/images/agi-about.webp';

const About = () => {
  return (
    <section className="section bg-cute-lightblue/30" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Character Illustration (Left) */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-72 md:w-80 lg:w-96 relative">
              <motion.img
                src={agiAbout}
                alt="AGI Explorer on Earth"
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
              {/* Soft glow background */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-cute-blue via-pink-300 to-cute-blue rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Welcome Text (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="font-display text-pudgy-navy uppercase tracking-tight mb-6
                         text-4xl md:text-5xl lg:text-6xl"
            >
              {ABOUT_CONTENT.title}
            </h2>

            <div className="space-y-4">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-pudgy-navy/70 leading-relaxed text-lg md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
