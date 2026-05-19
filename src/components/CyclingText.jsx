import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CyclingText = memo(function CyclingText({
  texts = [],
  interval = 3000,
  className = '',
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  if (texts.length === 0) return null;

  return (
    <span className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
});

export default CyclingText;
