import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Web as WebIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  CheckCircle as CheckIcon,
  ArrowForward as ArrowIcon,
  DesignServices as DesignIcon,
  Storage as StorageIcon,
  Code as CodeIcon,
  Memory as MemoryIcon,
  DeveloperBoard as BoardIcon,
  IntegrationInstructions as IntegrateIcon,
} from '@mui/icons-material';
import AnimatedSection from '../components/common/AnimatedSection';
import GradientText from '../components/common/GradientText';

const Services = () => {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: CodeIcon,
      title: 'Laravel & PHP',
      description: 'Modern PHP web applications with Laravel framework',
      features: ['Laravel 10/11', 'RESTful APIs', 'Blade Templates', 'Eloquent ORM', 'Laravel Livewire'],
      color: '#ff2d20',
    },
    {
      icon: IntegrateIcon,
      title: 'Node.js Development',
      description: 'Scalable backend with Node.js and Express',
      features: ['Node.js/Express', 'REST APIs', 'GraphQL', 'Microservices', 'WebSockets'],
      color: '#68A063',
    },
    {
      icon: WebIcon,
      title: 'React Development',
      description: 'Modern frontend with React and Next.js',
      features: ['React', 'Next.js', 'Tailwind CSS', 'SPA Development', 'SSR Solutions'],
      color: '#61dafb',
    },
    {
      icon: BoardIcon,
      title: 'Arduino & Robotics',
      description: 'IoT solutions and embedded systems',
      features: ['Arduino Programming', 'ESP8266/ESP32', 'Sensor Integration', 'Robotics', 'Firmware'],
      color: '#00979D',
    },
    {
      icon: MemoryIcon,
      title: 'IoT Solutions',
      description: 'Internet of Things and smart devices',
      features: ['Smart Home', 'Industrial IoT', 'Data Collection', 'Remote Monitoring', 'Automation'],
      color: '#4fc3f7',
    },
    {
      icon: DesignIcon,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing'],
      color: '#81d4fa',
    },
    {
      icon: StorageIcon,
      title: 'Database Solutions',
      description: 'Optimized database design and management',
      features: ['MariaDB', 'PostgreSQL', 'phpMyAdmin', 'Redis Cache', 'Database Optimization'],
      color: '#003545',
    },
    {
      icon: CloudIcon,
      title: 'Self-Hosted Solutions',
      description: 'Docker & CasaOS deployment and management',
      features: ['Docker Containers', 'CasaOS', 'Self-Hosted Apps', 'Server Management', 'Backup Solutions'],
      color: '#2496ed',
    },
    {
      icon: SecurityIcon,
      title: 'Security & Cloudflare',
      description: 'Enterprise-grade security with Cloudflare',
      features: ['Cloudflare WAF', 'DDoS Protection', 'SSL/TLS', 'DNS Management', 'CDN Optimization'],
      color: '#f38020',
    },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <GradientText variant="h1" align="center" sx={{ mb: 2 }}>
            Our Services
          </GradientText>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 6, color: 'text.secondary', maxWidth: 700, mx: 'auto' }}
          >
            From web development to robotics - comprehensive technology solutions.
          </Typography>
        </AnimatedSection>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    p: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    border: hoveredIndex === index ? `1px solid ${service.color}50` : '1px solid rgba(79,195,247,0.06)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: `0 20px 60px ${service.color}20`,
                    },
                  }}
                >
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: '2px solid transparent',
                      borderRadius: 16,
                    }}
                    animate={{
                      borderColor: hoveredIndex === index ? `${service.color}40` : 'transparent',
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: `${service.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      border: `1px solid ${service.color}20`,
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: hoveredIndex === index ? [0, -10, 10, -10, 0] : 0,
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon sx={{ color: service.color, fontSize: 28 }} />
                    </motion.div>
                  </Box>

                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>

                  <List dense>
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <motion.div
                            animate={{
                              scale: hoveredIndex === index ? 1.2 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckIcon sx={{ color: service.color, fontSize: 18 }} />
                          </motion.div>
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { color: 'text.secondary' },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Box sx={{ mt: 2 }}>
                    <motion.div
                      animate={{
                        x: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        variant="text"
                        endIcon={<ArrowIcon />}
                        sx={{
                          color: service.color,
                          '&:hover': {
                            background: `${service.color}15`,
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <AnimatedSection delay={0.3}>
          <Box
            sx={{
              mt: 6,
              p: 5,
              borderRadius: 4,
              background: 'linear-gradient(135deg, #0288d1 0%, #1a5276 50%, #0a1628 100%)',
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(79,195,247,0.1) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
                Need Custom Solutions?
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'white', opacity: 0.9 }}>
                From web apps to robotics - let's discuss your project.
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  component="a"
                  href="/contact"
                  sx={{
                    bgcolor: 'white',
                    color: '#0288d1',
                    px: 4,
                    '&:hover': {
                      bgcolor: 'white',
                    },
                  }}
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default Services;
