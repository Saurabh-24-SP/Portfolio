import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Server, Database, Wrench } from "lucide-react";
import { Button } from "./ui/button";

/* ------------------------------------
    Skill Card Component
------------------------------------ */
interface SkillCardProps {
  name: string;
  icon: string;
  index: number;
  link?: string;
}

function SkillCard({ name, icon, index, link }: SkillCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const CardContent = () => (
    <>
      <span className="text-base">{icon}</span>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </>
  );

  const animation = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: isInView
      ? { opacity: 1, scale: 1, y: 0 }
      : { opacity: 0, scale: 0.8, y: 20 },
  };

  if (link) {
    return (
      <motion.a
        ref={ref}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={animation.initial}
        animate={animation.animate}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        whileHover={{ scale: 1.05, y: -4 }}
        className="px-3 py-2 glass-card rounded-full border border-border/30 hover:border-primary/50 transition-all flex items-center gap-2 cursor-pointer"
      >
        <CardContent />
      </motion.a>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={animation.animate}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="px-3 py-2 glass-card rounded-full border border-border/30 hover:border-primary/50 transition-all flex items-center gap-2 cursor-pointer"
    >
      <CardContent />
    </motion.div>
  );
}

/* ------------------------------------
    Category Component
------------------------------------ */
interface SkillCategoryProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  skills: { name: string; icon: string; link?: string }[];
  index: number;
}

function SkillCategory({
  title,
  description,
  icon: Icon,
  color,
  bgColor,
  skills,
  index,
}: SkillCategoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card p-6 rounded-2xl border border-border/30 hover:border-primary/30 transition-all"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-16 h-16 rounded-2xl ${bgColor} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`h-8 w-8 ${color}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground italic">{description}</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-3">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Technologies:
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            link={skill.link}
            index={idx}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ------------------------------------
    Main Skills Section
------------------------------------ */
export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"overview" | "technical">(
    "overview"
  );

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive UI with modern frameworks",
      icon: Code2,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "React", icon: "⚛️", link: "https://react.dev/" },
        { name: "TypeScript", icon: "📘", link: "https://www.typescriptlang.org/" },
        { name: "Tailwind CSS", icon: "🎨", link: "https://tailwindcss.com/" },
        { name: "JavaScript", icon: "🟨", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      ],
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs",
      icon: Server,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: [
        { name: "Node.js", icon: "🟢", link: "https://nodejs.org/" },
        { name: "Express", icon: "🚂", link: "https://expressjs.com/" },
        { name: "Python", icon: "🐍", link: "https://www.python.org/" },
        { name: "Java", icon: "☕", link: "https://www.java.com/" },
        { name: "C", icon: "⚙️", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
        { name: "REST APIs", icon: "🔌", link: "https://restfulapi.net/" },
      ],
    },
    {
      title: "Web Technologies",
      description: "Implementing core web technologies and best practices",
      icon: Database,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: [
        { name: "HTML5", icon: "📄", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS3", icon: "🎨", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "Responsive Design", icon: "📱", link: "https://web.dev/responsive-web-design-basics/" },
        { name: "PWA", icon: "⚡", link: "https://web.dev/progressive-web-apps/" },
      ],
    },
    {
      title: "Database & Tools",
      description: "Designing and managing database systems & deployment tools",
      icon: Wrench,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      skills: [
        { name: "MongoDB", icon: "🍃", link: "https://www.mongodb.com/" },
        { name: "MySQL", icon: "🐬", link: "https://www.mysql.com/" },
        { name: "Git", icon: "📚", link: "https://git-scm.com/" },
        { name: "GitHub", icon: "🐙", link: "https://github.com/" },
        { name: "VS Code", icon: "💻", link: "https://code.visualstudio.com/" },
        { name: "Vercel", icon: "▲", link: "https://vercel.com/" },
        { name: "Netlify", icon: "🌐", link: "https://www.netlify.com/" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
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
              <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base text-muted-foreground max-w-2xl mx-auto"
            >
              A comprehensive overview of my technical skills and expertise
            </motion.p>
          </div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-2 mb-12"
          >
            <Button
              variant={activeTab === "overview" ? "default" : "outline"}
              onClick={() => setActiveTab("overview")}
              className="rounded-full px-8"
            >
              Skills Overview
            </Button>

            <Button
              variant={activeTab === "technical" ? "default" : "outline"}
              onClick={() => setActiveTab("technical")}
              className="rounded-full px-8"
            >
              Technical
            </Button>
          </motion.div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {skillCategories.map((category, index) => (
                <SkillCategory
                  key={category.title}
                  {...category}
                  index={index}
                />
              ))}
            </motion.div>
          )}

          {/* Technical Tab */}
          {activeTab === "technical" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card p-8 rounded-2xl border border-border/30">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  All Technologies
                </h3>

                <div className="flex flex-wrap gap-2">

                  {/* FINAL FIXED flatMap */}
                  {skillCategories.flatMap((cat) =>
                    cat.skills.map((skill, index) => (
                      <SkillCard
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        link={skill.link}
                        index={index}
                      />
                    ))
                  )}

                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
