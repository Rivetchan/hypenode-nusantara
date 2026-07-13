import React from 'react';
import { motion } from 'framer-motion';
import {
  EmojiEmotions as EmojiIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Star as StarIcon,
  Shield as ShieldIcon,
  CheckCircle as CheckIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  CalendarMonth as CalendarIcon,
} from '@mui/icons-material';

const About = () => {
  const values = [
    { icon: EmojiIcon, title: 'Innovation', desc: 'Pushing boundaries with creative solutions' },
    { icon: SchoolIcon, title: 'Learning', desc: 'Continuous growth and adaptation' },
    { icon: WorkIcon, title: 'Quality', desc: 'Excellence in every deliverable' },
    { icon: StarIcon, title: 'Excellence', desc: 'Striving for the best outcomes' },
  ];

  const journey = [
    { year: '2026', title: 'Founded', desc: 'HypeNode Nusantara was established as an independent digital agency' },
    { year: '2026', title: 'First Project', desc: 'Delivered first web development project with Node.js & React' },
    { year: '2026', title: 'Robotics Division', desc: 'Started Arduino and robotics development' },
    { year: '2026', title: 'Innovation', desc: 'Expanding services in IoT and embedded systems' },
  ];

  const skills = [
    { category: 'Web Development', items: ['Node.js', 'React', 'Tailwind CSS', 'JavaScript'] },
    { category: 'Robotics & IoT', items: ['Arduino', 'ESP8266', 'ESP32', 'Sensors'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MariaDB', 'Redis'] },
    { category: 'DevOps', items: ['Docker', 'CasaOS', 'Cloudflare', 'Self-Hosted'] },
  ];

  return (
    <div className="min-h-screen bg-dark-blue py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500 mb-4">
            About Us
          </h1>
          <p className="text-cyan-light/60 text-lg max-w-2xl mx-auto">
            HypeNode Nusantara is a newly established independent digital agency (2026) 
            specializing in web development, robotics, and IoT solutions.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 glass-effect-light rounded-full border border-cyan/10">
            <CalendarIcon className="text-cyan text-sm" />
            <span className="text-cyan text-sm font-semibold">Founded 2026</span>
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { 
              title: 'Our Vision', 
              desc: 'To become Indonesia\'s leading independent digital agency, driving innovation in web development and robotics technology.',
              color: '#4fc3f7'
            },
            { 
              title: 'Our Mission', 
              desc: 'To deliver innovative, accessible, and high-quality solutions from web applications to robotics and IoT systems.',
              color: '#0288d1'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 3,
                boxShadow: '0 20px 60px rgba(79,195,247,0.1)',
                borderColor: 'rgba(79,195,247,0.2)'
              }}
              className="glass-effect rounded-2xl p-8 border-t-4 border-cyan/10 hover:border-cyan/30 transition-all duration-300"
              style={{ borderTopColor: item.color }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-cyan-light/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">Our Journey</h2>
          <p className="text-cyan-light/60 text-center mb-8">The story of HypeNode Nusantara</p>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan to-cyan-dark opacity-30 transform -translate-x-1/2"></div>
            
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8 relative`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div 
                    className="glass-effect rounded-2xl p-6 border-l-4 border-cyan/30 hover:border-cyan transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 60px rgba(79,195,247,0.1)',
                      borderColor: '#4fc3f7'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-cyan/10 rounded-full text-cyan text-sm font-semibold">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    </div>
                    <p className="text-cyan-light/60 text-sm">{item.desc}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">Our Values</h2>
          <p className="text-cyan-light/60 text-center mb-8">Core values that guide everything we do</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08, 
                  rotateX: 5,
                  boxShadow: '0 20px 60px rgba(79,195,247,0.1)',
                  borderColor: 'rgba(79,195,247,0.2)'
                }}
                className="glass-effect rounded-2xl p-6 text-center border border-cyan/5 hover:border-cyan/20 transition-all duration-300"
              >
                <motion.div 
                  className="w-14 h-14 rounded-full bg-cyan/10 mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    boxShadow: '0 0 40px rgba(79,195,247,0.2)'
                  }}
                >
                  <value.icon className="text-2xl text-cyan" />
                </motion.div>
                <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                <p className="text-cyan-light/60 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">Our Expertise</h2>
          <p className="text-cyan-light/60 text-center mb-8">Technologies we work with</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: '0 20px 60px rgba(79,195,247,0.1)',
                  borderColor: 'rgba(79,195,247,0.2)'
                }}
                className="glass-effect rounded-2xl p-6 border border-cyan/5 hover:border-cyan/20 transition-all duration-300"
              >
                <h4 className="text-cyan font-semibold mb-3">{skill.category}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center gap-2 text-cyan-light/60 text-sm"
                      whileHover={{ x: 5, color: '#4fc3f7' }}
                    >
                      <CheckIcon className="text-cyan text-sm" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Independence Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 20px 60px rgba(79,195,247,0.1)',
            borderColor: 'rgba(79,195,247,0.2)'
          }}
          className="glass-effect rounded-2xl p-8 text-center border border-cyan/10 hover:border-cyan/20 transition-all duration-300 mb-16"
        >
          <span className="inline-block px-6 py-2 bg-cyan/10 rounded-full text-cyan font-semibold border border-cyan/20 mb-4">
            <ShieldIcon className="inline mr-2 text-sm" />
            Independent Digital Agency
          </span>
          <p className="text-cyan-light/60 max-w-2xl mx-auto">
            Operating as an independent agency allows us to provide unbiased, 
            client-focused solutions without any external partnerships or 
            conflicting interests.
          </p>
        </motion.div>

        {/* Founder Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">Meet Our Founder</h2>
          <p className="text-cyan-light/60 text-center mb-8">Passionate professional dedicated to excellence</p>
          
          <motion.div
            whileHover={{ 
              scale: 1.02, 
              rotateX: 3, 
              rotateY: 3,
              boxShadow: '0 30px 80px rgba(79,195,247,0.15)',
              borderColor: 'rgba(79,195,247,0.2)'
            }}
            className="glass-effect rounded-2xl p-8 border border-cyan/10 hover:border-cyan/20 transition-all duration-300"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-40 h-40 rounded-full border-4 border-cyan mx-auto overflow-hidden shadow-lg shadow-cyan/20">
                    <img
                      src="/images/team/enno.jpeg"
                      alt="Enno Nurwansyah Rasyidi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <div className="flex justify-center gap-2 mt-3">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, color: '#4fc3f7' }}
                    className="text-cyan/50 hover:text-cyan transition-all duration-300"
                  >
                    <GitHubIcon className="text-sm" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, color: '#4fc3f7' }}
                    className="text-cyan/50 hover:text-cyan transition-all duration-300"
                  >
                    <LinkedInIcon className="text-sm" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, color: '#4fc3f7' }}
                    className="text-cyan/50 hover:text-cyan transition-all duration-300"
                  >
                    <TwitterIcon className="text-sm" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, color: '#4fc3f7' }}
                    className="text-cyan/50 hover:text-cyan transition-all duration-300"
                  >
                    <InstagramIcon className="text-sm" />
                  </motion.a>
                </div>
              </div>
              
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-white">Enno Nurwansyah Rasyidi</h3>
                <p className="text-cyan font-medium mb-3">Founder & Lead Developer</p>
                <p className="text-cyan-light/60 text-sm leading-relaxed mb-3">
                  Full-stack developer and robotics enthusiast with 5+ years of experience 
                  in web development, IoT, and embedded systems. Passionate about Node.js, 
                  React, and Arduino technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'React', 'Tailwind CSS', 'Arduino', 'Docker', 'Cloudflare'].map((skill, i) => (
                    <motion.span 
                      key={i} 
                      className="px-3 py-1 bg-cyan/5 border border-cyan/10 rounded-full text-cyan-light/60 text-xs"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(79,195,247,0.1)',
                        borderColor: 'rgba(79,195,247,0.2)',
                        color: '#4fc3f7'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
