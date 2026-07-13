import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  Chip,
  Button,
  useTheme,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Launch as LaunchIcon,
  CheckCircle as CheckIcon,
  Star as StarIcon,
  Code as CodeIcon,
  Science as ScienceIcon,
} from '@mui/icons-material';
import GradientText from '../components/common/GradientText';
import AnimatedSection from '../components/common/AnimatedSection';

const Portfolio = () => {
  const theme = useTheme();

  const projects = [
    {
      id: 1,
      title: 'Enno Official Website',
      category: 'Web Development',
      image: '/images/projects/web-portfolio.png',
      coverImage: '/images/cover/Banner_Cover.png',
      link: 'https://www.rivetchan.qzz.io',
      tech: ['Node.js', 'React', 'Tailwind CSS', 'MongoDB'],
      description: 'Modern personal website built with Node.js, React, and Tailwind CSS with responsive design.',
      features: ['Node.js Backend', 'React Frontend', 'Tailwind CSS', 'Responsive Design', 'MongoDB Database'],
    },
    {
      id: 2,
      title: 'Robot Control Dashboard',
      category: 'Robotics & IoT',
      image: '/images/projects/robot-dashboard.jpg',
      coverImage: '/images/cover/Banner_Cover.png',
      link: 'https://robot.rivetchan.qzz.io',
      tech: ['Streamlit', 'Python', 'Arduino', 'WebSocket'],
      description: 'Interactive robot control dashboard using Streamlit and Python for real-time robotics monitoring and control.',
      features: ['Real-time Control', 'Dashboard Monitoring', 'Sensor Integration', 'WebSocket Communication'],
    },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <GradientText variant="h1" align="center" sx={{ mb: 2 }}>
            Our Portfolio
          </GradientText>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 6, color: 'text.secondary', maxWidth: 700, mx: 'auto' }}
          >
            Showcasing our work from web development to robotics.
          </Typography>
        </AnimatedSection>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.id}>
              <AnimatedSection delay={index * 0.2}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      overflow: 'hidden',
                      border: '1px solid rgba(79,195,247,0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(79,195,247,0.3)',
                        boxShadow: '0 20px 60px rgba(79,195,247,0.1)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="280"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: 'all 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                      onError={(e) => {
                        e.target.src = project.coverImage;
                      }}
                    />
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Chip
                          label={project.category}
                          sx={{
                            bgcolor: 'rgba(79,195,247,0.1)',
                            color: '#4fc3f7',
                            border: '1px solid rgba(79,195,247,0.15)',
                          }}
                        />
                        {project.category === 'Robotics & IoT' && (
                          <ScienceIcon sx={{ color: '#00979D' }} />
                        )}
                      </Box>
                      <Typography variant="h5" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
                        {project.tech.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            sx={{
                              borderColor: 'rgba(255,255,255,0.06)',
                              color: 'text.secondary',
                            }}
                          />
                        ))}
                      </Box>
                      <Button
                        variant={project.link !== '#' ? "contained" : "outlined"}
                        fullWidth
                        component="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<LaunchIcon />}
                        sx={{
                          ...(project.link !== '#' && {
                            background: 'linear-gradient(135deg, #0288d1 0%, #4fc3f7 100%)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #0277bd 0%, #29b6f6 100%)',
                              boxShadow: '0 8px 30px rgba(79,195,247,0.3)',
                            },
                          }),
                          ...(project.link === '#' && {
                            borderColor: 'rgba(79,195,247,0.2)',
                            color: '#4fc3f7',
                            '&:hover': {
                              borderColor: '#4fc3f7',
                              background: 'rgba(79,195,247,0.05)',
                            },
                          }),
                        }}
                      >
                        {project.link !== '#' ? 'Visit Project' : 'Coming Soon'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>

        {/* Stats Section */}
        <AnimatedSection delay={0.3}>
          <Box sx={{ mt: 6 }}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3}>
                <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'rgba(15,32,64,0.5)' }}>
                  <Typography variant="h3" sx={{ color: '#4fc3f7', fontWeight: 700 }}>
                    2
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Projects Completed
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'rgba(15,32,64,0.5)' }}>
                  <Typography variant="h3" sx={{ color: '#4fc3f7', fontWeight: 700 }}>
                    100%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Client Satisfaction
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'rgba(15,32,64,0.5)' }}>
                  <Typography variant="h3" sx={{ color: '#4fc3f7', fontWeight: 700 }}>
                    6+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Technologies Used
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'rgba(15,32,64,0.5)' }}>
                  <Typography variant="h3" sx={{ color: '#4fc3f7', fontWeight: 700 }}>
                    24/7
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Live Support
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.4}>
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
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
                Have a Project in Mind?
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'white', opacity: 0.9 }}>
                From web apps to robotics - we've got you covered.
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  component="a"
                  href="/contact"
                  sx={{
                    bgcolor: 'white',
                    color: '#0288d1',
                    px: 5,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      bgcolor: 'white',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  Contact Us
                </Button>
              </motion.div>
            </Box>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default Portfolio;
