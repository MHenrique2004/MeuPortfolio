// TextReveal.js
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TextReveal = ({ children }) => {
  const controls = useAnimation();
  const elementRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const handleReveal = async () => {
    await controls.start('visible');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = elementRef.current;

      if (element) {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;

        if (scrollY > elementTop - window.innerHeight / 2 && scrollY < elementTop + elementHeight) {
          handleReveal();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleReveal]);

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      transition={{duration: 0.5, delay: 0.05}}
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;
