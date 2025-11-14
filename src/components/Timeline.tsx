import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Code, Zap } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'work' | 'internship' | 'freelance';
  index: number;
  isLast?: boolean;
}

function TimelineItem({ title, organization, period, description, type, index, isLast }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const typeConfig = {
    education: {
      icon: GraduationCap,
      color: 'primary',
      gradient: 'from-primary to-primary/50',
      borderColor: 'border-primary',
    },
    work: {
      icon: Briefcase,
      color: 'secondary',
      gradient: 'from-secondary to-secondary/50',
      borderColor: 'border-secondary',
    },
    internship: {
      icon: Code,
      color: 'accent',
      gradient: 'from-accent to-accent/50',
      borderColor: 'border-accent',
    },
    freelance: {
      icon: Zap,
      color: 'primary',
      gradient: 'from-primary via-accent to-secondary',
      borderColor: 'border-primary',
    },
  };

  const config = typeConfig[type];
  const Icon = config.icon;
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Connector Line */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
          className={`absolute left-1/2 top-20 w-1 h-full -translate-x-1/2 bg-gradient-to-b ${config.gradient} origin-top`}
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className={`absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-${config.color} to-transparent`}
          />
        </motion.div>
      )}

      {/* Timeline Item */}
      <div className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -100 : 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -100 : 100 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          className="flex-1 glass-card p-6 rounded-2xl group hover:scale-105 transition-all"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className={`text-xs font-bold text-${config.color} uppercase tracking-wider px-3 py-1 glass-card rounded-full ${config.borderColor} border`}>
                {type}
              </span>
            </div>
            <span className="text-sm text-muted-foreground font-mono">{period}</span>
          </div>

          <h3 className={`text-xl font-bold text-foreground group-hover:text-${config.color} transition-colors mb-2`}>
            {title}
          </h3>

          <p className={`text-${config.color} font-medium mb-3`}>
            {organization}
          </p>

          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Center Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
          className="relative z-10 flex-shrink-0"
        >
          <div className={`w-16 h-16 rounded-full glass-card flex items-center justify-center ${config.borderColor} border-2 shadow-lg shadow-${config.color}/50 group-hover:shadow-${config.color}/70 transition-all`}>
            <Icon className={`h-8 w-8 text-${config.color}`} />
          </div>
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className={`absolute inset-0 rounded-full bg-${config.color}/20 blur-xl`}
          />
        </motion.div>

        {/* Spacer for alignment */}
        <div className="flex-1 hidden md:block" />
      </div>
    </div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineData = [
    {
      title: 'Master of Computer Applications (MCA)',
      organization: 'St. Andrews Institute of Technology & Management, Gurugram | MDU',
      period: '2024 - 2026',
      description: 'Pursuing Master of Computer Applications from Maharshi Dayanand University (MDU). Focusing on advanced software development, database management, and modern web technologies.',
      type: 'education' as const,
    },
    {
      title: 'Bachelor of Computer Applications (BCA)',
      organization: 'Veer Bahadur Singh Purvanchal University (VBSPU), Jaunpur',
      period: '2021 - 2024',
      description: 'Graduated with 71% in Bachelor of Computer Applications. Developed strong foundation in programming, data structures, web development, and software engineering principles.',
      type: 'education' as const,
    },
    {
      title: 'Higher Secondary Certificate (HSC - 12th, Science Stream)',
      organization: 'R.P. Wagh Junior College, Maharashtra',
      period: '2021',
      description: 'Completed HSC from Maharashtra State Board with 76.33%. Specialized in Science stream with focus on Mathematics and Computer Science fundamentals.',
      type: 'education' as const,
    },
    {
      title: 'Secondary School Certificate (SSC - 10th)',
      organization: 'J.S.S. English High School, Maharashtra',
      period: '2019',
      description: 'Completed SSC from Maharashtra State Board with 60.80%. Built foundational knowledge in Mathematics, Science, and English.',
      type: 'education' as const,
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 relative overflow-hidden">
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

      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
            >
              Education & Learning
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              My academic background and continuous learning journey in computer science and technology
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="space-y-16 relative">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                index={index}
                isLast={index === timelineData.length - 1}
              />
            ))}
          </div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: timelineData.length * 0.2 + 0.5 }}
            className="mt-16 flex justify-center"
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary via-accent to-secondary animate-glow-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
