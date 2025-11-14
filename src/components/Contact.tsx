import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use consistent credentials
    console.log('Form Data:', formData);
    console.log('EmailJS Config:', {
      serviceId: 'service_c10ekwq',
      templateId: 'template_w5nccg8',
      publicKey: 'oCY8-5xnSC-dJYpd8',
    });

    try {
      const result = await emailjs.send(
        'service_z2bp30g',      // Your correct Service ID
        'template_jvoqoz7',     // Your correct Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'prajapati1912118128saurabh@gmail.com',
        },
        'ibeqitlqm9Sipd9-v'       // Your correct Public Key
      );

      console.log('SUCCESS!', result.status, result.text);
      
      toast({
        title: "Message Sent Successfully! ✅",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('FAILED...', error);
      console.error('Error Status:', error.status);
      console.error('Error Text:', error.text);
      
      toast({
        title: "Failed to send message ❌",
        description: error.text || "Please try again or email me directly at prajapati1912118128saurabh@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email',
      text: 'saurabhprajapati7756@gmail.com',
      subtext: 'Best way to reach me',
      href: 'mailto:saurabhprajapati7756@gmail.com' 
    },
    { 
      icon: Phone, 
      label: 'Phone',
      text: '+91 7709442247',
      subtext: '9 AM - 6 PM IST',
      href: 'tel:+917709442247' 
    },
    { 
      icon: MapPin, 
      label: 'Location',
      text: 'Mumbai',
      subtext: 'UTC +5:30',
      href: '#' 
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Saurabh-24-SP', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/saurabh-prajapati-73a6912b8/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/saurabh_24_dnd/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:saurabhprajapati7756@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
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
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <MessageCircle className="h-8 w-8 text-primary animate-pulse" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Let's <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Connect</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground italic"
            >
              Ready to bring your ideas to life? Let's discuss your project.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Get in Touch Card */}
              <div className="glass-card p-8 rounded-2xl border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 group cursor-pointer p-4 rounded-lg hover:bg-primary/5 transition-all"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground mb-1">{info.label}</p>
                        <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                          {info.text}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{info.subtext}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Connect on Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
                className="glass-card p-6 rounded-2xl border border-secondary/20"
              >
                <h4 className="text-lg font-bold text-foreground mb-4">Connect on Social</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5 text-primary" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Response Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
                className="glass-card p-6 rounded-2xl border border-accent/20"
              >
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-1">Quick Response</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      I typically respond within 24 hours. For urgent matters, feel free to reach out on WhatsApp directly.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8 rounded-2xl border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <Send className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Send Message</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6">
                  Share your project details and let's start the conversation.
                </p>

                <p className="text-xs text-muted-foreground mb-6">
                  Progress: 0%
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project inquiry or question"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <span className="text-xs text-muted-foreground">
                        {formData.message.length}/500
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      required
                      maxLength={500}
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none transition-all"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
