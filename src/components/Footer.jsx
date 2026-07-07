import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { NAV_LINKS } from '../data/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const SOCIAL_LINKS = [
    { icon: <FaGithub size={20} />, url: 'https://github.com', name: 'GitHub' },
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: <FaFacebook size={20} />, url: 'https://facebook.com', name: 'Facebook' },
    { icon: <FaWhatsapp size={20} />, url: 'https://whatsapp.com', name: 'WhatsApp' },
  ];

  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand & Intro */}
          <div className="col-span-1 md:col-span-1">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="text-3xl font-poppins font-bold text-white flex items-center gap-1 mb-6 cursor-pointer">
              <span className="text-primary">M</span>H.
            </a>
            <p className="text-gray-400 font-inter mb-6">
              A passionate Front-End & WordPress Developer building premium, high-performance websites and digital experiences.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-poppins font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.path); }}
                    className="text-gray-400 hover:text-primary transition-colors font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-poppins font-semibold mb-6">Get In Touch</h4>
            <div className="flex flex-col gap-4 text-gray-400 font-inter">
              <p>Email: <a href="mailto:hussainch3310@gmail.com" className="hover:text-primary transition-colors">hussainch3310@gmail.com</a></p>
              <p>Phone: <a href="tel:03423483072" className="hover:text-primary transition-colors">0342 3483 072</a></p>
              <p>Location: Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 font-inter text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Muhammad Hussain. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
