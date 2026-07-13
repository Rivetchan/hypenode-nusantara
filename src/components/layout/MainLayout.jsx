import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      bgcolor: '#0a1628',
    }}>
      <Navbar />
      <Box 
        component="main" 
        sx={{ 
          flex: 1, 
          pt: { xs: 8, md: 10 },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default MainLayout;
