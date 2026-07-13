import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  Avatar,
  Badge,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Work as WorkIcon,
  Folder as FolderIcon,
  Email as EmailIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import Logo from '../common/Logo';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { text: 'Home', path: '/', icon: HomeIcon },
    { text: 'About', path: '/about', icon: InfoIcon },
    { text: 'Services', path: '/services', icon: WorkIcon },
    { text: 'Portfolio', path: '/portfolio', icon: FolderIcon },
    { text: 'Contact', path: '/contact', icon: EmailIcon },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled
          ? 'rgba(10, 22, 40, 0.95)'
          : 'rgba(10, 22, 40, 0.7)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        transition: 'all 0.4s ease',
        borderBottom: `1px solid ${scrolled ? 'rgba(79,195,247,0.08)' : 'rgba(79,195,247,0.04)'}`,
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ 
          py: 1, 
          justifyContent: 'space-between', 
          minHeight: { xs: 64, md: 72 },
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Logo />
          </motion.div>

          {isMobile ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton 
                  onClick={() => setDrawerOpen(true)}
                  sx={{ 
                    color: 'text.primary',
                    '&:hover': {
                      background: 'rgba(79,195,247,0.08)',
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                  sx: {
                    width: 300,
                    background: 'rgba(10, 22, 40, 0.98)',
                    backdropFilter: 'blur(20px)',
                    borderLeft: '1px solid rgba(79,195,247,0.06)',
                  },
                }}
              >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Logo />
                  <IconButton 
                    onClick={() => setDrawerOpen(false)}
                    sx={{ 
                      color: 'text.primary',
                      '&:hover': {
                        background: 'rgba(79,195,247,0.08)',
                      },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List sx={{ p: 2 }}>
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ListItem
                        button
                        component={Link}
                        to={item.path}
                        onClick={() => setDrawerOpen(false)}
                        sx={{
                          borderRadius: 2,
                          mb: 0.5,
                          color: location.pathname === item.path ? '#4fc3f7' : 'text.primary',
                          '&:hover': {
                            bgcolor: 'rgba(79, 195, 247, 0.08)',
                            transform: 'translateX(8px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <item.icon sx={{ mr: 2, fontSize: 20 }} />
                        <ListItemText primary={item.text} />
                        {location.pathname === item.path && (
                          <Box 
                            sx={{ 
                              width: 6, 
                              height: 6, 
                              borderRadius: '50%', 
                              bgcolor: '#4fc3f7',
                              boxShadow: '0 0 10px rgba(79,195,247,0.5)',
                            }} 
                          />
                        )}
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <motion.div
              variants={navVariants}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              {menuItems.map((item) => (
                <motion.div key={item.text} variants={itemVariants}>
                  <Button
                    component={Link}
                    to={item.path}
                    onMouseEnter={() => setHoveredItem(item.text)}
                    onMouseLeave={() => setHoveredItem(null)}
                    sx={{
                      color: location.pathname === item.path ? '#4fc3f7' : 'text.secondary',
                      position: 'relative',
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        width: location.pathname === item.path ? '100%' : '0%',
                        height: '2px',
                        bgcolor: '#4fc3f7',
                        transform: 'translateX(-50%)',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 0 10px rgba(79,195,247,0.3)',
                      },
                      '&:hover': {
                        color: '#4fc3f7',
                        '&::after': {
                          width: '100%',
                        },
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/contact"
                  sx={{ ml: 2 }}
                >
                  Let's Talk
                </Button>
              </motion.div>
            </motion.div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
