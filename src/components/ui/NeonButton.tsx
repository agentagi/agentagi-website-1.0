import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface NeonButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

const NeonButton = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  showArrow = false,
}: NeonButtonProps) => {
  const baseClasses = 'px-8 py-4 md:px-10 md:py-5 rounded-full font-display text-sm md:text-base uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2 border-3';

  const variantClasses = {
    primary: 'bg-pudgy-navy text-white border-pudgy-navy hover:bg-[#2a2a6e] shadow-chunky hover:shadow-chunky-lg',
    secondary: 'bg-cute-blue text-pudgy-navy border-pudgy-navy hover:bg-[#0091EA] hover:text-white shadow-chunky hover:shadow-chunky-lg',
    outline: 'bg-white text-pudgy-navy border-3 border-pudgy-navy hover:bg-pudgy-navy hover:text-white shadow-chunky hover:shadow-chunky-lg',
  };

  const buttonContent = (
    <motion.span
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      {showArrow && <FaArrowRight className="text-sm" />}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {buttonContent}
    </button>
  );
};

export default NeonButton;
