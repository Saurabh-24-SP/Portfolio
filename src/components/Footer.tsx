import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  const moreLinks = [
    { label: 'Certifications', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Saurabh-24-SP', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/saurabh-prajapati-73a6912b8/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/saurabh_24_dnd/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:saurabhprajapati7756@gmail.com', label: 'Email' },
  ];

  const technologies = ['React', 'TypeScript', 'Node.js', 'Tailwind'];

  return (
    <footer className="relative py-12 px-4 border-t border-border/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated Name Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 relative"
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: 1 } : { scale: 0.9 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              {/* Animated glow background */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary blur-3xl -z-10"
              />
              
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap">
                Saurabh Prajapati
              </span>
            </motion.h2>
            
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 max-w-md mx-auto rounded-full origin-center"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm md:text-base text-muted-foreground mt-3 italic"
            >
              Transforming ideas into digital reality
            </motion.p>

            {/* Social Icons Below Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-3 mt-6"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-background/80 border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all relative group"
                  aria-label={link.label}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-md"
                  />
                  <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Portfolio Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50">
                  {/* Replace with your actual logo */}
                  <img 
                    src="/assets/Saurabh.jpg" 
                    alt="Logo" 
                    className="w-full h-full object-cover" 
                  />
                  {/* Alternative: Use profile image */}
                  {/* <img src="/assets/Saurabh.jpg" alt="Saurabh Prajapati" className="w-full h-full object-cover" /> */}
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Saurabh Prajapati
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A passionate Full Stack Developer focused on building beautiful interfaces & experiences that bring value to people's lives.
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-secondary">Contact</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="mailto:saurabhprajapati7756@gmail.com"
                    className="hover:text-secondary transition-colors"
                  >
                    saurabhprajapati7756@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917709442247" className="hover:text-secondary transition-colors">
                    +91 7709442247
                  </a>
                </li>
                <li className="text-muted-foreground">Mumbai, Maharashtra</li>
              </ul>
              <div className="pt-2">
                <p className="text-xs text-muted-foreground mb-2">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Available for freelance & full-time roles
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Connect Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-accent">Let's Connect</h3>
              <p className="text-sm text-muted-foreground">
                Interested in working together? Let's connect and discuss how I can help with your project.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 flex items-center justify-center transition-all"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-full mt-4"
              >
                Get in touch
              </Button>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8 origin-center"
          />

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025{' '}
              <span className="text-primary font-semibold">Saurabh Prajapati</span>. All rights reserved.
            </p>

            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Crafted with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by{' '}
              <span className="text-primary font-semibold">Saurabh Prajapati</span>
            </p>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
