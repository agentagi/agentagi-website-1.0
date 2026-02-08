import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: string;
  className?: string;
  light?: boolean;
}

const SectionTitle = ({ children, className = '', light = false }: SectionTitleProps) => {
  return (
    <motion.h2
      className={`text-center uppercase tracking-tight font-display ${
        light ? 'text-white' : 'text-pudgy-navy'
      } text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
