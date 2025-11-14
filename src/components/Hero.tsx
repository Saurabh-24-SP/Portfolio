import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Instagram, Code, Download, Sparkles, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

function FloatingTorus() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <torusGeometry args={[2, 0.6, 16, 100]} />
      <meshStandardMaterial 
        color="#A855F7" 
        emissive="#A855F7" 
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function FloatingBlobs() {
  return (
    <>
      <Sphere args={[0.4, 32, 32]} position={[-3, 2, -2]}>
        <meshStandardMaterial 
          color="#06B6D4" 
          emissive="#06B6D4" 
          emissiveIntensity={0.6}
          transparent
          opacity={0.8}
        />
      </Sphere>
      <Sphere args={[0.3, 32, 32]} position={[3, -1, -1]}>
        <meshStandardMaterial 
          color="#EC4899" 
          emissive="#EC4899" 
          emissiveIntensity={0.6}
          transparent
          opacity={0.8}
        />
      </Sphere>
      <Sphere args={[0.5, 32, 32]} position={[2, 2, -3]}>
        <meshStandardMaterial 
          color="#A855F7" 
          emissive="#A855F7" 
          emissiveIntensity={0.5}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </>
  );
}

export default function Hero() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default to light mode
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Handle scroll effects and active section
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href);
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Saurabh-24-SP', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/saurabh-prajapati-73a6912b8/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/saurabh_24_dnd/', label: 'Instagram' },
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'backdrop-blur-xl bg-background/95 border-b border-border/50 shadow-lg shadow-primary/5' 
            : 'backdrop-blur-md bg-background/80 border-b border-border/30'
        }`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Enhanced Animated Logo with Active Status */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection('#home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-all relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 bg-primary/30 blur-md"
                  />
                  {/* Logo - Use initials as placeholder */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white font-bold text-xl relative z-10">
                    <img 
                    src="/assets/Saurabh.jpg" 
                    alt="Admin" 
                    className="w-full h-full object-cover" 
                  />
                  </div>
                  {/* Alternative: Use image when you have a logo */}
                  {/* <img src="/assets/logo.png" alt="Logo" className="w-full h-full object-cover relative z-10" /> */}
                  {/* Alternative: Use profile photo */}
                  {/* <img src="/assets/Saurabh.jpg" alt="Saurabh Prajapati" className="w-full h-full object-cover relative z-10" /> */}
                </motion.div>
                
                {/* Active Now Green Dot */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-0.5 -right-0.5 z-20"
                >
                  <div className="relative">
                    <div className="w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background" />
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-green-500 rounded-full"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-violet-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                  Saurabh Prajapati
                </span>
                <motion.span 
                  className="text-xs text-muted-foreground flex items-center gap-1.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-1.5 h-1.5 bg-green-500 rounded-full"
                  />
                  Active now
                </motion.span>
              </div>
            </motion.div>

            {/* Enhanced Nav Links with Active Indicator */}
            <div className="hidden md:flex items-center gap-1 bg-muted/30 rounded-full p-1 backdrop-blur-sm">
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex items-center gap-1 bg-muted/30 rounded-full p-1 backdrop-blur-sm"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(link.href)}
                    className={`relative rounded-full px-4 transition-all ${
                      activeSection === link.href
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' 
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {link.label}
                    {activeSection === link.href && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Right Icons with Tooltips */}
            <div className="flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.1, rotate: 360 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="rounded-full relative group" asChild>
                  <a href="https://github.com/Saurabh-24-SP" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                      className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 blur-md"
                    />
                    <Github className="h-5 w-5 relative z-10" />
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1, rotate: 360 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="rounded-full relative group" asChild>
                  <a href="https://www.linkedin.com/in/saurabh-prajapati-73a6912b8/" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      className="absolute inset-0 bg-secondary/20 rounded-full opacity-0 group-hover:opacity-100 blur-md"
                    />
                    <Linkedin className="h-5 w-5 relative z-10" />
                  </a>
                </Button>
              </motion.div>

              {/* Enhanced Theme Toggle Button */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 180 }} 
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full relative group"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  <motion.div
                    animate={{ 
                      rotate: theme === 'dark' ? 360 : 0,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 0.6 },
                      scale: { duration: 2, repeat: Infinity }
                    }} 
                    className="absolute inset-0 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 blur-md"
                  />
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-primary relative z-10" />
                  ) : (
                    <Moon className="h-5 w-5 text-primary relative z-10" />
                  )}
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.div 
                className="md:hidden"
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <motion.div
                    animate={{ rotate: [0, 180, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ☰
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Animated Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary"
            style={{
              width: scrolled ? '100%' : '0%',
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </motion.nav>

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-2xl"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10 mt-16">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-left"
        >
          {/* Hello Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Hello, I'm</span>
          </motion.div>

          {/* Name - Single Line */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent whitespace-nowrap">
              Saurabh Prajapati
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary"
          >
            Full Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            I'm a passionate Full Stack Developer with expertise in modern web technologies. I love creating intuitive, user-friendly applications that solve real-world problems. With a strong foundation in both frontend and backend development, I bring a holistic approach to every project I work on.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all"
              onClick={() => scrollToSection('#contact')}
            >
              Hire Me
            </Button>
            <Button
              size="lg" 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-lg shadow-secondary/30"
              onClick={() => scrollToSection('#projects')}
            >
              View Projects
            </Button>
            <Button
              size="lg" 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-lg shadow-accent/30"
              asChild
            >
              <a href="/assets/Saurabh_Resume (1).pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Icons with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-3 pt-4"
          >
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-full bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 flex items-center justify-center transition-all relative group"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.2,
                  }}
                  className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-md"
                />
                <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
              </motion.a>
            ))}
            <motion.a
              href="/assets/Saurabh_Resume (1).pdf"
              download="Saurabh_Prajapati_Resume.pdf"
              whileHover={{ scale: 1.2, y: -5, rotate: -360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-12 h-12 rounded-full bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 flex items-center justify-center transition-all relative group"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.6,
                }}
                className="absolute inset-0 rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 blur-md"
              />
              <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image with Enhanced Floating Icons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center items-center lg:justify-end"
        >
          {/* 3D Background */}
          <div className="absolute inset-0 w-full h-full -z-10 opacity-30">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#A855F7" />
              <FloatingTorus />
              <FloatingBlobs />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
            </Canvas>
          </div>

          <div className="relative group">
            {/* Profile Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 group-hover:border-primary/60 group-hover:shadow-primary/50 transition-all duration-500 cursor-pointer">
                <img
                  src="/public/assets/Saurabh.jpg"
                  alt="Saurabh Prajapati"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Enhanced Glow Effect on Hover */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 blur-2xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
            />

            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary blur-3xl -z-20 opacity-0 group-hover:opacity-50"
            />

            {/* Floating Icon 1 - Top Right with Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              whileHover={{ scale: 1.3, rotate: 360 }}
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center backdrop-blur-sm cursor-pointer group/icon"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover/icon:opacity-100 blur-lg"
              />
              <Code className="h-8 w-8 text-primary group-hover/icon:text-primary/60" />
            </motion.div>

            {/* Floating Icon 2 - Bottom Left with Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              whileHover={{ scale: 1.3, rotate: -360 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center backdrop-blur-sm cursor-pointer group/icon"
            >
              <motion.div
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-accent/20 opacity-0 group-hover/icon:opacity-100 blur-lg"
              />
              <Sparkles className="h-8 w-8 text-accent group-hover/icon:text-accent/60" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
