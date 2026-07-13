import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import { KeyboardArrowUp as ArrowUpIcon } from '@mui/icons-material';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={visible}>
      <Fab
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          background: 'linear-gradient(135deg, #0288d1 0%, #4fc3f7 100%)',
          color: 'white',
          boxShadow: '0 4px 20px rgba(79,195,247,0.4)',
          '&:hover': {
            boxShadow: '0 8px 40px rgba(79,195,247,0.6)',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
          zIndex: 1000,
        }}
      >
        <ArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
