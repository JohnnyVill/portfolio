import { memo } from 'react';
import { motion } from 'framer-motion';

const FloatingBlob = memo(function FloatingBlob({
  className = '',
  size = 'w-72 h-72',
  duration = 25,
  delay = 0,
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${size} ${className}`}
      animate={{
        x: [0, 40, -25, 15, -10, 0],
        y: [0, -30, 15, -20, 10, 0],
        scale: [1, 1.06, 0.94, 1.03, 0.97, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
});

export default FloatingBlob;
