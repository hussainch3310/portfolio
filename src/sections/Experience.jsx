import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import SectionWrapper, { SectionTitle, fadeIn } from '../components/SectionWrapper';
import { EXPERIENCE } from '../data/constants';

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-[#020617]">
      <SectionTitle 
        title="Professional Experience" 
        subtitle="My journey" 
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2 rounded-full hidden md:block"></div>
        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-white/10 block md:hidden"></div>

        <div className="space-y-16">
          {EXPERIENCE.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center md:items-start w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white border-4 border-white shadow-lg transform -translate-x-1/2 z-10"
                >
                  <FaBriefcase />
                </motion.div>

                {/* Content Card */}
                <motion.div 
                  variants={fadeIn(isEven ? 'left' : 'right', 'tween', 0.2, 0.8)}
                  className={`w-full md:w-1/2 pl-20 md:pl-0 pt-2 md:pt-0 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}
                >
                  <div className="glass-card bg-[#0B1120] p-8 rounded-2xl shadow-lg border border-white/5 hover:shadow-xl transition-all group">
                    <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-inter font-medium text-sm mb-4">
                      {exp.date}
                    </span>
                    <h3 className="text-2xl font-poppins font-bold text-dark mb-1">{exp.role}</h3>
                    <h4 className="text-lg font-inter font-semibold text-primary mb-6">{exp.company}</h4>
                    
                    <ul className={`space-y-2 text-text-body font-inter ${isEven ? 'text-left' : 'text-left md:text-right'}`}>
                      {exp.responsibilities.map((task, i) => (
                        <li key={i} className={`flex items-start gap-2 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                          <span className="text-accent mt-1">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
