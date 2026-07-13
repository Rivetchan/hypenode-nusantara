import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Container,
  Stack,
  useTheme,
  Link,
  IconButton,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  WhatsApp as WhatsAppIcon,
  Map as MapIcon,
  OpenInNew as OpenInNewIcon,
} from '@mui/icons-material';
import toast from 'react-hot-toast';
import AnimatedSection from '../components/common/AnimatedSection';
import GradientText from '../components/common/GradientText';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = [
    { 
      icon: EmailIcon, 
      title: 'Email', 
      value: 'info@hypenode.com',
      description: 'We respond within 24 hours',
      color: '#4fc3f7',
      action: 'mailto:info@hypenode.com',
    },
    { 
      icon: PhoneIcon, 
      title: 'Phone / WhatsApp', 
      value: '0823 8831 0607',
      description: 'Mon-Fri 9AM - 6PM',
      color: '#25d366',
      action: 'https://wa.me/6282388310607',
    },
    { 
      icon: LocationIcon, 
      title: 'Address', 
      value: 'Griya KPN Blok I8 No 18',
      description: 'Kota Batam, Kepulauan Riau',
      color: '#4fc3f7',
      action: 'https://www.google.com/maps/search/Griya+KPN+Blok+I8+No+18+Batam',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <GradientText variant="h1" align="center" sx={{ mb: 2 }}>
            Contact Us
          </GradientText>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 6, color: 'text.secondary', maxWidth: 700, mx: 'auto' }}
          >
            Let's start a conversation about your next project.
          </Typography>
        </AnimatedSection>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <AnimatedSection direction="left">
              <Typography variant="h4" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                Have questions? We'd love to hear from you.
              </Typography>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <Card 
                    sx={{ 
                      p: 2, 
                      mb: 2, 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 2,
                      cursor: info.action ? 'pointer' : 'default',
                      '&:hover': {
                        borderColor: info.color,
                      },
                    }}
                    component={info.action ? 'a' : 'div'}
                    href={info.action}
                    target={info.action?.startsWith('http') ? '_blank' : undefined}
                    rel={info.action?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: `${info.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <info.icon sx={{ color: info.color }} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        {info.title}
                      </Typography>
                      <Typography variant="body1" fontWeight={600}>
                        {info.value}
                      </Typography>
                      <Typography variant="caption" color="text.disabled">
                        {info.description}
                      </Typography>
                    </Box>
                    {info.action && (
                      <OpenInNewIcon sx={{ color: 'text.disabled', fontSize: 18 }} />
                    )}
                  </Card>
                </motion.div>
              ))}

              {/* WhatsApp Floating Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  component="a"
                  href="https://wa.me/6282388310607"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    mt: 2,
                    background: '#25d366',
                    '&:hover': {
                      background: '#128C7E',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 30px rgba(37,211,102,0.3)',
                    },
                  }}
                >
                  Chat on WhatsApp
                </Button>
              </motion.div>
            </AnimatedSection>
          </Grid>

          <Grid item xs={12} md={7}>
            <AnimatedSection direction="right">
              <Card sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                  Send a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <motion.div
                        animate={{
                          scale: focusedField === 'name' ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          InputProps={{
                            sx: {
                              borderRadius: 2,
                            },
                          }}
                        />
                      </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <motion.div
                        animate={{
                          scale: focusedField === 'email' ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          InputProps={{
                            sx: {
                              borderRadius: 2,
                            },
                          }}
                        />
                      </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <motion.div
                        animate={{
                          scale: focusedField === 'phone' ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <TextField
                          fullWidth
                          label="Phone (Optional)"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          InputProps={{
                            sx: {
                              borderRadius: 2,
                            },
                          }}
                        />
                      </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <motion.div
                        animate={{
                          scale: focusedField === 'subject' ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          required
                          InputProps={{
                            sx: {
                              borderRadius: 2,
                            },
                          }}
                        />
                      </motion.div>
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div
                        animate={{
                          scale: focusedField === 'message' ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                          multiline
                          rows={6}
                          InputProps={{
                            sx: {
                              borderRadius: 2,
                            },
                          }}
                        />
                      </motion.div>
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          disabled={isSubmitting}
                          endIcon={<SendIcon />}
                          sx={{ 
                            py: 1.5,
                            borderRadius: 2,
                          }}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </AnimatedSection>
          </Grid>
        </Grid>

        {/* Google Maps Section */}
        <AnimatedSection delay={0.3}>
          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Our Location
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ mb: 3, color: 'text.secondary' }}
            >
              Griya KPN Blok I8 No 18, Kota Batam, Kepulauan Riau
            </Typography>
            <Paper
              sx={{
                overflow: 'hidden',
                borderRadius: 4,
                border: '1px solid rgba(79,195,247,0.1)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789012!2d104.12345678901234!3d1.1234567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDcnMjQuNSJOIDEwNMKwMDcnMjQuNSJF!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HypeNode Nusantara Location"
                />
              </motion.div>
            </Paper>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  component="a"
                  href="https://www.google.com/maps/search/Griya+KPN+Blok+I8+No+18+Batam"
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNewIcon />}
                  sx={{
                    borderColor: 'rgba(79,195,247,0.3)',
                    color: '#4fc3f7',
                    '&:hover': {
                      borderColor: '#4fc3f7',
                      background: 'rgba(79,195,247,0.05)',
                    },
                  }}
                >
                  Open in Google Maps
                </Button>
              </motion.div>
            </Box>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default Contact;
