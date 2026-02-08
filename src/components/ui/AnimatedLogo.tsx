import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(64, 196, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(64, 196, 255, 1)"
    }
  };

  const transition = {
    pathLength: { duration: 2, ease: "easeInOut" as const },
    fill: { duration: 1, delay: 1.5 }
  };

  return (
    <motion.svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      {/* A */}
      <motion.path
        d="M 10 35 L 20 5 L 30 35 M 15 22 L 25 22"
        stroke="#40C4FF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={pathVariants}
        transition={transition}
      />

      {/* G */}
      <motion.path
        d="M 55 10 C 45 10 40 15 40 20 C 40 25 40 30 45 33 C 50 36 55 35 58 33 L 58 23 L 50 23"
        stroke="#40C4FF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={pathVariants}
        transition={transition}
      />

      {/* I */}
      <motion.path
        d="M 75 8 L 75 35 M 70 8 L 80 8 M 70 35 L 80 35"
        stroke="#40C4FF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={pathVariants}
        transition={transition}
      />
    </motion.svg>
  );
};

export default AnimatedLogo;
