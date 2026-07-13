import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <Box
        component={Link}
        to="/"
        sx={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'inherit',
          gap: 1.5,
        }}
      >
        {/* Logo Image */}
        <Box
          component="img"
          src="/images/logo/Ikon.png"
          alt="HypeNode Nusantara"
          sx={{
            height: 40,
            width: 40,
            objectFit: 'contain',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'rotate(5deg) scale(1.05)',
              filter: 'drop-shadow(0 0 20px rgba(79,195,247,0.3))',
            },
          }}
        />
        
        {/* Logo Text */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              background: 'linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            HypeNode
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              color: 'text.secondary',
              fontWeight: 300,
              letterSpacing: '0.1em',
              fontSize: '0.6rem',
              textTransform: 'uppercase',
            }}
          >
            Nusantara
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Logo;
