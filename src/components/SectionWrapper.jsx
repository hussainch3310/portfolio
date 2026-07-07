import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = '', containerClassName = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className={`container mx-auto px-6 md:px-12 ${containerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
};

export const fadeIn = (direction = 'up', type = 'spring', delay = 0, duration = 0.75) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const SectionTitle = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <motion.div 
      variants={fadeIn('up', 'tween', 0, 0.5)}
      className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-inter font-medium text-sm mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-poppins font-bold text-dark relative inline-block">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionWrapper;
