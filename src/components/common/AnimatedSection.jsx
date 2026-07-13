import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  duration = 0.6,
  once = true,
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, amount: 0.15 }}
      variants={variants}
    >
      <Box>{children}</Box>
    </motion.div>
  );
};

export default AnimatedSection;
