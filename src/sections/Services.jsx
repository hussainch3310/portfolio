import { motion } from 'framer-motion';
import { FaLaptopCode, FaWordpress, FaShoppingCart, FaMobileAlt, FaRocket, FaBug, FaTools, FaSearch } from 'react-icons/fa';
import SectionWrapper, { SectionTitle, fadeIn } from '../components/SectionWrapper';
import { SERVICES } from '../data/constants';

// Map icons to service titles conceptually
const getServiceIcon = (title) => {
  if (title.includes('WordPress')) return <FaWordpress />;
  if (title.includes('Elementor') || title.includes('Redesign')) return <FaLaptopCode />;
  if (title.includes('WooCommerce') || title.includes('Shopify')) return <FaShoppingCart />;
  if (title.includes('Landing') || title.includes('Responsive')) return <FaMobileAlt />;
  if (title.includes('Speed') || title.includes('Migration')) return <FaRocket />;
  if (title.includes('Bug')) return <FaBug />;
  if (title.includes('Maintenance')) return <FaTools />;
  if (title.includes('SEO')) return <FaSearch />;
  return <FaLaptopCode />;
};

const Services = () => {
  return (
    <SectionWrapper id="services" className="bg-[#0B1120] relative">
      <SectionTitle 
        title="What I Do Best" 
        subtitle="My Services" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeIn('up', 'spring', index * 0.1, 1)}
            className="glass-card bg-[#020617] p-8 rounded-2xl shadow-sm hover:shadow-xl border border-white/5 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Animated background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            <div className="w-14 h-14 bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white rounded-xl flex items-center justify-center text-2xl mb-6 transition-colors duration-300">
              {getServiceIcon(service.title)}
            </div>
            
            <h3 className="text-xl font-poppins font-bold text-dark group-hover:text-white mb-4 transition-colors duration-300">
              {service.title}
            </h3>
            
            <p className="text-text-body font-inter text-sm group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
