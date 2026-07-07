import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { fadeIn } from '../components/SectionWrapper';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const jobTitles = [
  "Senior WordPress Developer",
  "Elementor Expert",
  "WooCommerce Developer",
  "Front-End Developer",
  "WordPress Theme Customization Expert",
  "Responsive Website Specialist",
  "Shopify Developer",
  "UI / UX Focused Web Developer"
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3400); // 0.6s in + 2.2s wait + 0.6s out
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-[#020617]">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <motion.div variants={fadeIn('down', 'spring', 0.1, 1)}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-inter font-medium text-sm mb-6">
              Hello, I am
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeIn('up', 'spring', 0.2, 1)}
            className="text-5xl md:text-7xl font-poppins font-bold text-white leading-tight mb-4"
          >
            Muhammad Hussain
          </motion.h1>
          
          <motion.div variants={fadeIn('up', 'spring', 0.3, 1)} className="h-10 md:h-12 relative mb-6">
            <AnimatePresence mode="wait">
              <motion.h2 
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-2xl md:text-3xl font-poppins font-semibold text-gradient absolute left-0 top-0 whitespace-nowrap"
              >
                {jobTitles[titleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>
          
          <motion.p 
            variants={fadeIn('up', 'spring', 0.4, 1)}
            className="text-gray-400 font-inter text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Experienced Front-End and WordPress Developer specializing in Elementor, WooCommerce, responsive web development, and custom website solutions. Passionate about building high-performance websites with exceptional user experience.
          </motion.p>
          
          <motion.div 
            variants={fadeIn('up', 'spring', 0.5, 1)}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary text-white rounded-full font-inter font-medium flex items-center gap-2 hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Portfolio <FaArrowRight />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-[#0B1120] text-white border border-white/10 rounded-full font-inter font-medium flex items-center gap-2 hover:bg-[#020617] transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Contact Me
            </a>
            <a 
              href="#" 
              className="px-8 py-4 bg-transparent text-primary hover:text-secondary rounded-full font-inter font-medium flex items-center gap-2 transition-all underline-offset-4 hover:underline"
            >
              Download CV <FaDownload />
            </a>
          </motion.div>
        </div>

        {/* Image/Illustration Content */}
        <motion.div 
          variants={fadeIn('left', 'spring', 0.3, 1)}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-lg aspect-square">
            {/* Using a placeholder for now, replace with actual photo or illustration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Developer Workspace" 
              className="absolute inset-4 object-cover rounded-full shadow-2xl border-4 border-white/50"
            />
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-10 glass-card px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg"
            >
              <div className="w-10 h-10 bg-[#21759B] text-white rounded-full flex items-center justify-center text-xl">W</div>
              <div className="font-poppins font-semibold text-white text-sm">WordPress<br/><span className="text-xs text-gray-400 font-normal">Expert</span></div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-0 glass-card px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg"
            >
              <div className="w-10 h-10 bg-[#E44D26] text-white rounded-full flex items-center justify-center text-xl">H5</div>
              <div className="font-poppins font-semibold text-white text-sm">Front-End<br/><span className="text-xs text-gray-400 font-normal">Developer</span></div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default Hero;
