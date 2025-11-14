import { useEffect, useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize theme to light mode on first load
    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Ensure loading screen shows for minimum 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <div className="stars"></div>
        <div className="min-h-screen bg-background text-foreground">
          <Hero />
          <About />
          <Skills />
          <Timeline />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
