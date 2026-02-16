import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedNumberProps {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  formatter?: (val: number) => string;
}

/**
 * AnimatedNumber component
 * Smoothly animates number changes with spring physics
 * Supports custom formatting and prefix/suffix
 */
export function AnimatedNumber({
  value,
  className = '',
  prefix = '',
  suffix = '',
  formatter,
}: AnimatedNumberProps) {
  // Use spring animation for smooth counting effect
  const spring = useSpring(value, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });

  // Update spring when value changes
  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  // Transform spring value to formatted string
  const display = useTransform(spring, (latest) => {
    if (formatter) {
      return formatter(latest);
    }
    return Math.round(latest).toString();
  });

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0.5, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.span>
  );
}
