import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import SectionWrapper, { SectionTitle, fadeIn } from '../components/SectionWrapper';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // Replace with actual EmailJS credentials
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
    
    // Simulating API call for now
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      formRef.current.reset();
      
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" className="bg-[#020617]">
      <SectionTitle 
        title="Get In Touch" 
        subtitle="Let's work together" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
        
        {/* Contact Info */}
        <motion.div 
          variants={fadeIn('right', 'tween', 0.2, 0.8)}
          className="lg:col-span-2 space-y-8"
        >
          <div className="glass-card bg-[#0B1120] p-8 rounded-2xl shadow-sm border border-white/5 flex items-start gap-4 group hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="text-lg font-poppins font-semibold text-dark mb-1">Email</h4>
              <a href="mailto:hussainch3310@gmail.com" className="text-text-body font-inter hover:text-primary transition-colors">
                hussainch3310@gmail.com
              </a>
            </div>
          </div>

          <div className="glass-card bg-[#0B1120] p-8 rounded-2xl shadow-sm border border-white/5 flex items-start gap-4 group hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary text-xl flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
              <FaPhone />
            </div>
            <div>
              <h4 className="text-lg font-poppins font-semibold text-dark mb-1">Phone</h4>
              <a href="tel:03423483072" className="text-text-body font-inter hover:text-secondary transition-colors">
                0342 3483 072
              </a>
            </div>
          </div>

          <div className="glass-card bg-[#0B1120] p-8 rounded-2xl shadow-sm border border-white/5 flex items-start gap-4 group hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent text-xl flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="text-lg font-poppins font-semibold text-dark mb-1">Location</h4>
              <p className="text-text-body font-inter">
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          variants={fadeIn('left', 'tween', 0.4, 0.8)}
          className="lg:col-span-3 glass-card bg-[#0B1120] p-8 md:p-10 rounded-3xl shadow-lg border border-white/5"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-inter font-medium text-dark mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-inter text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-inter font-medium text-dark mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-inter text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-inter font-medium text-dark mb-2">Your Phone (Optional)</label>
              <input 
                type="tel" 
                id="phone" 
                name="user_phone" 
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-inter text-white"
                placeholder="+1 234 567 890"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-inter font-medium text-dark mb-2">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-inter text-white resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-primary text-white rounded-xl font-inter font-medium text-lg flex items-center justify-center gap-2 hover:bg-secondary transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>

            {success && (
              <p className="text-green-400 font-inter text-center mt-4 bg-green-900/30 border border-green-900 p-3 rounded-lg">
                Message sent successfully! I will get back to you soon.
              </p>
            )}
            {error && (
              <p className="text-red-400 font-inter text-center mt-4 bg-red-900/30 border border-red-900 p-3 rounded-lg">
                Failed to send message. Please try again later.
              </p>
            )}
          </form>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default Contact;
