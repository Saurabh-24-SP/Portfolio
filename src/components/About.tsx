import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, MapPin, Mail, Briefcase, Clock, Languages, Sparkles } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const personalDetails = [
    { icon: User, label: 'Name', value: 'Saurabh Prajapati', color: 'text-blue-400' },
    { icon: MapPin, label: 'Location', value: 'India', color: 'text-pink-400' },
    { icon: Mail, label: 'Email', value: 'saurabhprajapati7756@gmail.com', color: 'text-cyan-400' },
    { icon: Briefcase, label: 'Experience', value: 'Fresher', color: 'text-red-400' },
    { icon: Clock, label: 'Availability', value: 'Full-time', color: 'text-rose-400' },
    { icon: Languages, label: 'Languages', value: 'Hindi, English', color: 'text-purple-400' },
  ];

  const badges = [
    'Problem Solver',
    'Clean Code',
    'Performance Focused',
    'User-Centric',
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              About <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Me</span>
            </motion.h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left Side - Main Content (3 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3 glass-card p-8 rounded-2xl border border-primary/20"
            >
              {/* Title with gradient line */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Passionate Full Stack Developer
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 mb-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  I am a passionate Full Stack Developer with expertise in cutting-edge web technologies. 
                  My journey began with curiosity and has evolved into a professional career building{' '}
                  <span className="text-primary font-semibold">robust, scalable, and beautiful applications</span>.
                </p>
                
                <p className="text-base text-muted-foreground leading-relaxed">
                  I specialize in creating{' '}
                  <span className="text-secondary font-semibold">responsive web applications</span>{' '}
                  using React, TypeScript, and Node.js, with a strong focus on{' '}
                  <span className="text-accent font-semibold">clean architecture and optimal user experience</span>. 
                  I'm constantly learning and adapting to new technologies to stay current in this ever-evolving field.
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, index) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-semibold text-primary"
                  >
                    {badge}
                  </motion.div>
                ))}
              </div>

              {/* Bottom Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
                className="mt-6 p-4 rounded-lg bg-accent/5 border border-accent/20"
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-accent font-semibold">Open to opportunities</span> — 
                    I'm actively seeking full-time positions and freelance projects where I can contribute 
                    my skills and continue growing as a developer.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Personal Details (2 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 glass-card p-8 rounded-2xl border border-secondary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-secondary to-primary rounded-full" />
                <h3 className="text-2xl font-bold text-secondary">Personal Details</h3>
              </div>

              <div className="space-y-4">
                {personalDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0`}>
                      <detail.icon className={`h-5 w-5 ${detail.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                        {detail.label}
                      </p>
                      <p className="text-sm font-medium text-foreground break-words">
                        {detail.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 1 }}
                className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    Open to opportunities
                  </span>
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
