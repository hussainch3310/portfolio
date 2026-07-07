import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt';
import SectionWrapper, { SectionTitle, fadeIn } from '../components/SectionWrapper';
import { SKILLS } from '../data/constants';

const SkillCard = ({ category, skills, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.2, 1)}>
      <Tilt options={{ max: 15, scale: 1.02, speed: 400 }} className="h-full">
        <div className="glass-card bg-[#0B1120] p-8 rounded-2xl h-full shadow-lg border border-white/5 relative overflow-hidden group">
          {/* Decorative background element */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
          
          <h3 className="text-2xl font-poppins font-bold text-dark mb-8 relative z-10">{category}</h3>
          
          <div ref={ref} className="space-y-6 relative z-10">
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-inter font-medium text-text-body">{skill.name}</span>
                  <span className="font-inter font-semibold text-primary">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-light-bg relative">
      {/* Background elements */}
      <div className="absolute top-[20%] left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <SectionTitle 
        title="My Expertise" 
        subtitle="What I do best" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {SKILLS.map((skillGroup, index) => (
          <SkillCard 
            key={skillGroup.category} 
            category={skillGroup.category} 
            skills={skillGroup.skills} 
            index={index} 
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
