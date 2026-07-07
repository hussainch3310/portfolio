import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import SectionWrapper, { SectionTitle, fadeIn } from '../components/SectionWrapper';

const Education = () => {
  return (
    <SectionWrapper id="education" className="bg-[#020617]">
      <SectionTitle 
        title="Education" 
        subtitle="My academic background" 
      />

      <div className="max-w-3xl mx-auto">
        <motion.div 
          variants={fadeIn('up', 'tween', 0.2, 0.8)}
          className="glass-card bg-[#0B1120] p-8 md:p-10 rounded-3xl shadow-lg border border-white/5 flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-4xl flex-shrink-0">
            <FaGraduationCap />
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-poppins font-bold text-dark mb-2">Bachelor of Computer Science</h3>
            <h4 className="text-lg font-inter font-semibold text-text-body mb-4">Islamia University Bahawalpur</h4>
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-inter font-medium text-sm">
              Graduated October 2020
            </span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
