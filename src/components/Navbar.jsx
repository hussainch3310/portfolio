import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../data/constants';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="text-2xl font-poppins font-bold text-dark flex items-center gap-1 cursor-pointer">
          <span className="text-primary">M</span>H.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.path); }}
              className="text-text-body hover:text-primary font-inter font-medium transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => scrollToSection('#contact')}
            className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-secondary transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-gray-100"
          >
            <div className="flex flex-col items-center py-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.path}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.path); }}
                  className="text-text-body hover:text-primary font-inter font-medium transition-colors text-lg"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => scrollToSection('#contact')}
                className="mt-4 px-8 py-3 bg-primary text-white rounded-full font-medium shadow-md"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
