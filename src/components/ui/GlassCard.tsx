import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
  hover?: boolean;
  onClick?: () => void;
}

const GlassCard = ({
  children,
  className = '',
  bgColor = '',
  hover = true,
  onClick
}: GlassCardProps) => {
  return (
    <motion.div
      className={`card-solid ${bgColor} ${className}`}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
