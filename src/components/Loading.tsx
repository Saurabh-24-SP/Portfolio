import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code, Zap } from 'lucide-react';

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center"
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                  scale: 0,
                  opacity: 0
                }}
                animate={{
                  y: [null, -100],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute w-1 h-1 bg-primary/50 rounded-full"
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Animated Logo Circle */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="mb-8 mx-auto"
            >
              <div className="relative w-32 h-32 mx-auto">
                {/* Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-4 border-primary/30 border-t-primary"
                />
                
                {/* Inner Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"
                />

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity },
                    }}
                  >
                    <Code className="h-12 w-12 text-primary" />
                  </motion.div>
                </div>

                {/* Orbiting Icons */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <Sparkles className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-5 text-accent" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <Zap className="absolute bottom-0 left-1/2 -translate-x-1/2 h-5 w-5 text-secondary" />
                </motion.div>
              </div>
            </motion.div>

            {/* Animated Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-4"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-2">
                {['S', 'a', 'u', 'r', 'a', 'b', 'h'].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + i * 0.1,
                      duration: 0.4,
                      type: "spring",
                    }}
                    className="inline-block bg-gradient-to-r from-violet-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    {letter}
                  </motion.span>
                ))}{' '}
                {['P', 'r', 'a', 'j', 'a', 'p', 'a', 't', 'i'].map((letter, i) => (
                  <motion.span
                    key={i + 7}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.2 + i * 0.1,
                      duration: 0.4,
                      type: "spring",
                    }}
                    className="inline-block bg-gradient-to-r from-violet-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>

              {/* Animated Underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-violet-400 via-pink-400 to-purple-400 max-w-md mx-auto rounded-full"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-6"
            >
              Full Stack Developer
            </motion.p>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="flex items-center justify-center gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
              ))}
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7 }}
              className="text-sm text-muted-foreground mt-4"
            >
              Crafting excellence...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
