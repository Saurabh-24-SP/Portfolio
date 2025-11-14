import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
  image?: string;
  index: number;
  type: 'course' | 'certification' | 'achievement';
}

function CertificateCard({ title, issuer, date, description, link, image, index, type }: CertificateCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const typeColors = {
    course: 'from-primary/20 to-primary/5',
    certification: 'from-secondary/20 to-secondary/5',
    achievement: 'from-accent/20 to-accent/5',
  };

  const typeBorders = {
    course: 'group-hover:neon-border-purple',
    certification: 'group-hover:neon-border-cyan',
    achievement: 'group-hover:border-accent group-hover:shadow-accent/50',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -10 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`glass-card p-6 rounded-2xl group transition-all ${typeBorders[type]}`}
    >
      {/* Certificate Image or Icon Badge */}
      <div className="relative mb-4">
        {image ? (
          <div className="w-full h-48 rounded-xl overflow-hidden relative group/img">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover/img:opacity-80 transition-opacity duration-300" />
            
            {/* Type Badge on Image */}
            <div className="absolute top-2 right-2 px-3 py-1 glass-card rounded-full border border-primary/30 backdrop-blur-md z-10">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                {type}
              </span>
            </div>
          </div>
        ) : (
          <div className={`w-full h-32 bg-gradient-to-br ${typeColors[type]} rounded-xl flex items-center justify-center relative overflow-hidden`}>
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent"
            />
            <Award className="h-16 w-16 text-primary z-10 group-hover:text-secondary transition-colors" />
            
            {/* Type Badge */}
            <div className="absolute top-2 right-2 px-3 py-1 glass-card rounded-full border border-primary/30">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                {type}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-secondary">
          <CheckCircle2 className="h-4 w-4" />
          <span className="font-medium">{issuer}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {description}
        </p>

        {link && (
          <Button 
            size="sm" 
            variant="outline"
            className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground mt-4 group/btn"
            asChild
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <span>View Certificate</span>
              <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certificates = [
    {
      title: 'Data Analytics',
      issuer: 'Kreativan Technologies',
      date: 'November 2024',
      description: "Data Analytics Training (30 Hours). Completed hands-on training in Data Analytics from Kreativan Technologies",
      link: 'https://drive.google.com/file/d/1-MebE8hlVYv7fYXaBxA1vxBayuPPei1R/view?usp=sharing',
      image: '/public/assets/DataAnalytics.jpg',
      type: 'course' as const,
    },
    {
      title: 'Java Programming And DSA',
      issuer: 'Kreativan Technologies',
      date: 'September 2024',
      description: "Core Java, OOPs & DSA Training (27 Sept 2024). Successfully completed 50 hours of vocational training at Kreativan Technologies.",
      link: 'https://drive.google.com/file/d/1E565-aMM-abdkR3FDA4i4o3wTIuX_KQA/view?usp=sharing',
      image: '/public/assets/Java.jpg',
      type: 'certification' as const,
    },
    {
      title: 'Certificate of Appreciation',
      issuer: "St.Andrew's Institute of Technology and Management Gurgaon",
      date: 'April 2025',
      description: "Certificate of Appreciation – Innoviz 2025 (26 April 2025). Recognized for active participation from MCA department at St. Andrews Group of Institutions.",
      link: 'https://drive.google.com/file/d/1q9GTNnSNf6anPmFiaJVxe4dd6F8NuxRI/view?usp=sharing',
      image: '/public/assets/Appreciation.jpg',
      type: 'Certificate' as const,
    },
    {
      title: 'Web Development',
      issuer: 'IBM Skillbuild',
      date: 'July 2024',
      description: "Beginner's Guide to Web Development (IBM SkillsBuild). Successfully completed the 'Click, Code, Create' web development program for 2024–25.",
      link: 'https://drive.google.com/file/d/13r80nqIxFCSFhydW4VLVlZ3LuRyTaPR7/view?usp=sharing',
      image: '/public/assets/IBM.jpg',
      type: 'course' as const,
    },
   
  ];

  return (
    <section id="certificates" className="py-20 px-4">
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
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent"
            >
              Certificates & Achievements
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Continuous learning and professional development through courses, certifications, and competitions
            </motion.p>
          </div>

          {/* Certificate Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <CertificateCard key={cert.title} {...cert} index={index} />
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8 }}
            className="mt-12 glass-card p-8 rounded-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: 'Certifications', value: '2', color: 'text-primary' },
                { label: 'Courses', value: '2', color: 'text-secondary' },
                { label: 'Achievements', value: '0', color: 'text-accent' },
                { label: 'Learning Hours', value: '50+', color: 'text-primary' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  className="space-y-2"
                >
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
