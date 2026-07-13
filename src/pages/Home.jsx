import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  Code as CodeIcon,
  DesignServices as DesignIcon,
  Storage as StorageIcon,
  Memory as MemoryIcon,
  IntegrationInstructions as IntegrateIcon,
  Shield as ShieldIcon,
  Launch as LaunchIcon,
  Science as ScienceIcon,
} from '@mui/icons-material';

const Home = () => {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), {
    stiffness: 50,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      if (isMobile) return;
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
      }
    };
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, mouseX, mouseY]);

  const features = [
    { icon: CodeIcon, title: 'Web Development', desc: 'Node.js, React, Tailwind CSS', color: '#4fc3f7' },
    { icon: MemoryIcon, title: 'Robotics & IoT', desc: 'Arduino, sensors, automation', color: '#00979D' },
    { icon: ScienceIcon, title: 'Robot Control', desc: 'Streamlit, Python, WebSocket', color: '#ff6b6b' },
    { icon: DesignIcon, title: 'UI/UX Design', desc: 'Beautiful & intuitive', color: '#81d4fa' },
    { icon: StorageIcon, title: 'Database Solutions', desc: 'MongoDB, PostgreSQL, Redis', color: '#003545' },
    { icon: ShieldIcon, title: 'Security & Cloudflare', desc: 'WAF, DDoS, SSL/TLS', color: '#f38020' },
  ];

  const techStack = [
    { name: 'Node.js', icon: '🟢', color: '#68A063' },
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'Tailwind CSS', icon: '🎨', color: '#38bdf8' },
    { name: 'Arduino', icon: '🔌', color: '#00979D' },
    { name: 'Streamlit', icon: '📊', color: '#ff6b6b' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'MongoDB', icon: '🍃', color: '#4DB33D' },
    { name: 'Docker', icon: '🐳', color: '#2496ed' },
    { name: 'MariaDB', icon: '🐬', color: '#003545' },
    { name: 'Cloudflare', icon: '☁️', color: '#f38020' },
  ];

  const stats = [
    { value: '2026', label: 'Founded', icon: '🚀' },
    { value: '5+', label: 'Projects', icon: '💻' },
    { value: '3+', label: 'Clients', icon: '😊' },
    { value: '100%', label: 'Satisfaction', icon: '⭐' },
  ];

  return (
    <div className="min-h-screen bg-dark-blue">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/cover/Banner_Cover.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-dark-blue/70 z-0"></div>
        
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-cyan/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-dark/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            style={{
              rotateX: isMobile ? 0 : rotateX,
              rotateY: isMobile ? 0 : rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-2 bg-cyan/10 rounded-full text-cyan text-sm font-semibold border border-cyan/20">
                  ✦ Founded 2026
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              >
                <span className="text-white">Building Digital</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">
                  <TypeAnimation
                    sequence={[
                      'Excellence',
                      2000,
                      'Innovation',
                      2000,
                      'Solutions',
                      2000,
                      'the Future',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-cyan-light/70 text-base md:text-lg max-w-lg leading-relaxed"
              >
                Web development, robotics, and IoT solutions with Node.js, React, Arduino & Streamlit.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="/portfolio"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-dark to-cyan rounded-full text-white font-semibold shadow-lg shadow-cyan/30 hover:shadow-cyan/50 transition-all duration-300 hover:scale-105"
                >
                  View Our Work
                </a>
                <a
                  href="https://www.rivetchan.qzz.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-cyan/30 rounded-full text-cyan font-semibold hover:bg-cyan/10 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  Visit Enno.dev <LaunchIcon className="text-sm" />
                </a>
              </motion.div>
            </div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative glass-effect rounded-2xl p-6 md:p-8 border border-cyan/10">
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img
                      src="/images/logo/Ikon.png"
                      alt="HypeNode Nusantara"
                      className="w-20 h-20 mx-auto mb-3 drop-shadow-[0_0_20px_rgba(79,195,247,0.2)]"
                      loading="lazy"
                    />
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">
                      HypeNode
                    </h2>
                  </motion.div>
                  <p className="text-xl text-white/80 mt-1 font-light">Nusantara</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {['Node.js', 'React', 'Arduino', 'Tailwind CSS', 'Streamlit'].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-white/30 text-xs mt-3">Founded 2026</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-xl p-4 text-center border border-cyan/5"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-cyan">{stat.value}</h3>
              <p className="text-cyan-light/50 text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-white">Our Tech Stack</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="glass-effect px-4 py-2 rounded-xl border border-cyan/10 text-sm"
            >
              <span className="mr-1">{tech.icon}</span>
              <span className="text-white/70">{tech.name}</span>
            </motion.span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">Core Services</h2>
          <p className="text-cyan-light/50 text-sm mt-2">Web · Robotics · IoT · Control</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, borderColor: feature.color }}
              className="glass-effect rounded-xl p-4 text-center border border-cyan/5 transition-all duration-300"
            >
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center"
                style={{ background: `${feature.color}15` }}
              >
                <feature.icon className="text-xl" style={{ color: feature.color }} />
              </div>
              <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
              <p className="text-cyan-light/50 text-xs">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-12"
      >
        <div className="relative overflow-hidden rounded-2xl p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, #0288d1 0%, #1a5276 50%, #0a1628 100%)',
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Ready to Build?
          </h3>
          <p className="text-white/60 text-sm mb-4">
            Let's collaborate on your next project.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-cyan-dark rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
