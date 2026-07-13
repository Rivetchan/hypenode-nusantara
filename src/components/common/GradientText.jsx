import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const GradientText = ({ children, variant = 'h1', ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography
        variant={variant}
        sx={{
          background: 'linear-gradient(135deg, #4fc3f7 0%, #0288d1 40%, #0a1628 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: 800,
          ...props.sx,
        }}
        {...props}
      >
        {children}
      </Typography>
    </motion.div>
  );
};

export default GradientText;
