import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Stack,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  ArrowUpward as ArrowUpIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: FacebookIcon, color: '#1877f2', label: 'Facebook' },
    { icon: TwitterIcon, color: '#1da1f2', label: 'Twitter' },
    { icon: InstagramIcon, color: '#e4405f', label: 'Instagram' },
    { icon: LinkedInIcon, color: '#0a66c2', label: 'LinkedIn' },
    { icon: YouTubeIcon, color: '#ff0000', label: 'YouTube' },
    { icon: WhatsAppIcon, color: '#25d366', label: 'WhatsApp' },
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: ['About Us', 'Services', 'Portfolio', 'Contact'],
    },
    {
      title: 'Services',
      links: ['Web Development', 'UI/UX Design', 'Cloud Solutions', 'IT Security'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'Terms of Service', 'Privacy Policy', 'FAQ'],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#060d1a',
        color: 'text.primary',
        pt: 8,
        pb: 4,
        mt: 'auto',
        borderTop: '1px solid rgba(79,195,247,0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,195,247,0.03) 0%, transparent 70%)',
          animation: 'pulse 10s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,82,118,0.03) 0%, transparent 70%)',
          animation: 'pulse 10s ease-in-out infinite 5s',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                HypeNode
                <Typography component="span" sx={{ color: '#4fc3f7' }}>
                  Nusantara
                </Typography>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary', maxWidth: 400, lineHeight: 1.8 }}>
                Independent digital agency founded in 2026, crafting innovative solutions 
                for Indonesia's digital future.
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', mb: 3 }}>
                ⚡ Founded 2026
              </Typography>
              <Stack direction="row" spacing={1}>
                {socialIcons.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      y: -5,
                      scale: 1.1,
                      transition: { type: 'spring', stiffness: 300 }
                    }}
                  >
                    <IconButton
                      aria-label={social.label}
                      sx={{
                        color: 'text.secondary',
                        bgcolor: 'rgba(255,255,255,0.02)',
                        '&:hover': {
                          color: social.color,
                          bgcolor: 'rgba(255,255,255,0.05)',
                          boxShadow: `0 0 20px ${social.color}20`,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <social.icon />
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {footerLinks.map((section, index) => (
            <Grid item xs={6} md={2} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#4fc3f7' }}>
                  {section.title}
                </Typography>
                {section.links.map((link, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 1.5,
                        color: 'text.secondary',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#4fc3f7',
                        },
                      }}
                    >
                      {link}
                    </Typography>
                  </motion.div>
                ))}
              </motion.div>
            </Grid>
          ))}

          <Grid item xs={12} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#4fc3f7' }}>
                Contact
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <EmailIcon sx={{ fontSize: 18, color: '#4fc3f7' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  info@hypenode.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <PhoneIcon sx={{ fontSize: 18, color: '#4fc3f7' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  0823 8831 0607
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationIcon sx={{ fontSize: 18, color: '#4fc3f7' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Griya KPN Blok I8 No 18
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', mt: 0.5, ml: 4 }}>
                Kota Batam, Kepulauan Riau
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(79,195,247,0.06)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {currentYear} HypeNode Nusantara. All rights reserved. | Founded 2026
          </Typography>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              onClick={scrollToTop}
              sx={{
                bgcolor: 'rgba(79,195,247,0.1)',
                color: '#4fc3f7',
                '&:hover': {
                  bgcolor: 'rgba(79,195,247,0.2)',
                  boxShadow: '0 0 30px rgba(79,195,247,0.2)',
                },
              }}
            >
              <ArrowUpIcon />
            </IconButton>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
