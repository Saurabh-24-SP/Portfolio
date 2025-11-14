import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Search, Filter, Sparkles, Code, Layers, Zap, Rocket, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  index: number;
  featured?: boolean;
  status?: string;
  category?: string;
}

function ProjectCard({ title, description, tech, github, live, index, featured, status, category }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`glass-card p-6 rounded-2xl group hover:border-primary/50 transition-all relative overflow-hidden ${featured ? 'border-2 border-primary/30' : 'border border-border/30'}`}
    >
      {/* Animated Background Gradient on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/50 flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-xs font-bold text-primary">Featured</span>
          </div>
        </div>
      )}

      {/* Status Badge */}
      {status && (
        <div className="absolute top-4 left-4 z-10">
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
            status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 
            status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' : 
            'bg-blue-500/20 text-blue-400 border border-blue-500/50'
          }`}>
            {status}
          </div>
        </div>
      )}

      {/* Project Icon/Image with Enhanced Animation */}
      <div className="mb-4 h-48 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:from-primary/20 group-hover:via-accent/20 group-hover:to-secondary/20 transition-all">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"
        />
        
        {/* Animated Icon Container */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="relative z-10 w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/50"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code className="h-10 w-10 text-primary group-hover:text-primary/80" />
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/60"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-accent/60"
        />
      </div>

      {/* Category */}
      {category && (
        <div className="mb-2">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {category}
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.slice(0, 4).map((t) => (
          <span 
            key={t}
            className="px-2 py-1 text-xs font-medium bg-muted/50 text-foreground rounded border border-border/50"
          >
            {t}
          </span>
        ))}
        {tech.length > 4 && (
          <span className="px-2 py-1 text-xs font-medium text-muted-foreground">
            +{tech.length - 4} more
          </span>
        )}
      </div>

      {/* Action Buttons with Enhanced Animations */}
      <div className="flex gap-2 pt-3 border-t border-border/30">
        {github && (
          <Button 
            size="sm" 
            variant="ghost"
            className="flex-1 hover:bg-primary/10 hover:text-primary group/btn"
            asChild
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Github className="mr-1 h-4 w-4" />
              </motion.div>
              Demo
            </a>
          </Button>
        )}
        {live && (
          <Button 
            size="sm" 
            variant="ghost"
            className="flex-1 hover:bg-secondary/10 hover:text-secondary group/btn"
            asChild
          >
            <a href={live} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ x: 5, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ExternalLink className="mr-1 h-4 w-4" />
              </motion.div>
              Code
            </a>
          </Button>
        )}
        <Button 
          size="sm" 
          variant="ghost"
          className="w-10 h-10 p-0 hover:bg-accent/10 hover:text-accent group/btn"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 180 }}
            transition={{ duration: 0.4 }}
          >
            <Layers className="h-4 w-4" />
          </motion.div>
        </Button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedTech, setSelectedTech] = useState('All Technologies');
  const [viewMode, setViewMode] = useState<'featured' | 'all'>('featured');

  const featuredProjects = [
    {
      title: 'Chatify - Full Stack Chat Application',
      description: 'A modern, full-stack real-time chat application using bleeding-edge technology stack and features such as authentication, real-time messaging, and cloud storage.',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Socket.io'],
      github: 'https://github.com/Saurabh-24-SP',
      live: '#',
      featured: true,
      status: 'Completed',
      category: 'Full Stack',
    },
    {
      title: 'Interviulo - Automate Your Followup',
      description: 'Streamline interview organization platform with AI-driven follow up notifications and calendar synchronization.',
      tech: ['Next', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Auth.js'],
      github: 'https://github.com/Saurabh-24-SP',
      live: '#',
      featured: true,
      status: 'Completed',
      category: 'Web App',
    },
    {
      title: 'Tesla App with Gemini API',
      description: 'Generate AI-powered conversational interfaces for Tesla car information and model comparisons.',
      tech: ['React', 'OpenAI API', 'Tailwind CSS', 'Local Storage'],
      github: 'https://github.com/Saurabh-24-SP',
      live: '#',
      featured: true,
      status: 'Completed',
      category: 'AI Integration',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, professional portfolio website with smooth animations, dark mode, and fully responsive design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Saurabh-24-SP',
      live: '#',
      featured: true,
      status: 'Completed',
      category: 'Frontend',
    },
  ];

  const allProjects = [
    ...featuredProjects,
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with product management, cart functionality, and secure payment gateway integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/Saurabh-24-SP',
      live: '#',
      status: 'Completed',
      category: 'Full Stack',
    },
    {
      title: 'Harmony Music School',
      description: 'Modern platform for learning music with local storage for managing student courses and progress.',
      tech: ['Next.js', 'TypeScript', 'Local Storage', 'Tailwind CSS'],
      github: 'https://github.com/Saurabh-24-SP',
      live: '#',
      status: 'Completed',
      category: 'Education',
    },
    {
      title: 'Finmantra Manager',
      description: 'Password generator and secure local storage manager with user-friendly interface.',
      tech: ['React', 'Local Storage', 'Encryption', 'Tailwind CSS'],
      github: 'https://github.com/Saurabh-24-SP',
      live: '#',
      status: 'Completed',
      category: 'Tools',
    },
  ];

  // Filter projects based on search query
  const filterProjects = (projects: typeof allProjects) => {
    if (!searchQuery.trim()) return projects;
    
    const query = searchQuery.toLowerCase();
    return projects.filter(project => 
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.category?.toLowerCase().includes(query) ||
      project.tech.some(t => t.toLowerCase().includes(query))
    );
  };

  const displayProjects = viewMode === 'featured' 
    ? filterProjects(featuredProjects) 
    : filterProjects(allProjects);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
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
              My <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base text-muted-foreground max-w-2xl mx-auto"
            >
              Showcasing 8 innovative projects crafted with precision and creativity
            </motion.p>
          </div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="mb-8 glass-card p-4 rounded-2xl border border-border/30"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects by name, tech, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Filters */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-border/50"
                >
                  <Filter className="h-4 w-4" />
                  {selectedCategory}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-border/50"
                >
                  <Layers className="h-4 w-4" />
                  {selectedTech}
                </Button>
                <Button
                  variant={viewMode === 'featured' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode(viewMode === 'featured' ? 'all' : 'featured')}
                  className="gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Show {viewMode === 'featured' ? 'All' : 'Featured'}
                </Button>
              </div>
            </div>

            {/* Search Results Info */}
            {searchQuery && (
              <div className="mt-3 text-sm text-muted-foreground">
                Found {displayProjects.length} project{displayProjects.length !== 1 ? 's' : ''} matching "{searchQuery}"
              </div>
            )}
          </motion.div>

          {/* Featured Projects Section */}
          {viewMode === 'featured' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Featured Projects</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Handpicked projects showcasing innovation
              </p>
              
              {displayProjects.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {displayProjects.map((project, index) => (
                    <ProjectCard key={project.title} {...project} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 glass-card rounded-2xl">
                  <p className="text-muted-foreground">No projects found matching your search.</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setSearchQuery('')}
                    className="mt-4"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </motion.div>
          )}

          {/* All Projects Section */}
          {viewMode === 'all' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    All Projects
                    <span className="text-sm font-normal text-muted-foreground">
                      ({displayProjects.length})
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Complete catalogue of all projects
                  </p>
                </div>
              </div>
              
              {displayProjects.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayProjects.map((project, index) => (
                    <ProjectCard key={project.title} {...project} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 glass-card rounded-2xl">
                  <p className="text-muted-foreground">No projects found matching your search.</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setSearchQuery('')}
                    className="mt-4"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
