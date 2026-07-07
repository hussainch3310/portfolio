import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Education from './sections/Education';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Muhammad Hussain | Senior WordPress & Front-End Developer</title>
        <meta name="description" content="Portfolio of Muhammad Hussain, a Senior WordPress, Elementor, WooCommerce, and Front-End Developer with 5+ years of experience." />
        <meta name="keywords" content="WordPress, Front-End, Developer, Elementor, WooCommerce, React, Tailwind CSS" />
      </Helmet>

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative overflow-hidden selection:bg-primary/30 selection:text-primary">
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Services />
            <Education />
            <Testimonials />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </HelmetProvider>
  );
}

export default App;
