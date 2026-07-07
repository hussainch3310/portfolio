import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionWrapper, { SectionTitle, fadeIn } from '../components/SectionWrapper';
import { STATS } from '../data/constants';

const AnimatedCounter = ({ value, inView }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2500
  });
  
  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
      springValue.set(value);
    }
  }, [inView, value, hasStarted, springValue]);

  const displayValue = useTransform(springValue, (current) => Math.round(current));

  return <motion.span>{displayValue}</motion.span>;
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionWrapper id="about" className="bg-[#020617]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto border border-white/10">
             <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Muhammad Hussain Workspace" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-poppins font-bold text-white mb-2">Muhammad Hussain</h3>
                <p className="text-primary font-inter font-medium">WordPress & Front-End Specialist</p>
              </div>
          </div>
        </motion.div>

        <div>
          <SectionTitle 
            title="About Me" 
            subtitle="Get to know me" 
            alignment="left"
          />
          
          <motion.p 
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className="text-text-body font-inter text-lg mb-6 leading-relaxed"
          >
            With over 5 years of professional experience, I specialize in transforming ideas into high-quality, responsive websites. My expertise lies in WordPress, Elementor, WooCommerce, and modern Front-End technologies.
          </motion.p>
          <motion.p 
            variants={fadeIn('up', 'tween', 0.4, 1)}
            className="text-text-body font-inter text-lg mb-10 leading-relaxed"
          >
            I have successfully developed and delivered over 100+ websites for clients across 15+ countries. Whether it's a corporate site, an e-commerce platform, or a custom web application, I focus on performance, SEO, and creating pixel-perfect user experiences that drive results.
          </motion.p>

          <div ref={ref} className="grid grid-cols-2 gap-6 md:gap-8">
            {STATS.map((stat, index) => (
              <motion.div 
                key={stat.label}
                variants={fadeIn('up', 'tween', 0.5 + index * 0.1, 0.8)}
                className="glass-card bg-[#0B1120] p-6 rounded-2xl border border-white/5 hover:shadow-lg hover:shadow-primary/5 transition-shadow"
              >
                <div className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-2 flex items-baseline">
                  <AnimatedCounter value={stat.value} inView={inView} />
                  <span className="text-3xl">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base font-inter font-medium text-text-body uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default About;
