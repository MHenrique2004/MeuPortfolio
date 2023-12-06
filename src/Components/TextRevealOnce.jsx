// TextReveal.js
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TextRevealOnce = ({ children }) => {
  const controls = useAnimation();
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const handleReveal = async () => {
    await controls.start('visible');
    setHasAnimated(true);
  };

  useEffect(() => {
    const element = elementRef.current;

    if (element && !hasAnimated) {
      handleReveal();
    }
  }, [hasAnimated]);

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      transition={{duration: 0.5, delay: 0.20}}
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default TextRevealOnce;
