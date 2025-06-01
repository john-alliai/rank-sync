import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../utils/animations';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            variants={slideIn}
          >
            <a href="/" className="text-electric-cyan font-bold text-2xl">RankSync</a>
          </motion.div>
          
          <motion.nav 
            className="hidden md:flex space-x-8"
            variants={slideIn}
          >
            <a href="#features" className="text-gray-300 hover:text-electric-cyan transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-electric-cyan transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-300 hover:text-electric-cyan transition-colors">FAQ</a>
          </motion.nav>
          
          <motion.div 
            className="hidden md:block"
            variants={slideIn}
          >
            <button className="px-4 py-2 bg-electric-cyan text-dark rounded-xl font-semibold hover:bg-electric-cyan/90 transition-all transform hover:scale-105">
              Start Free Trial
            </button>
          </motion.div>
          
          <motion.button 
            className="md:hidden text-white"
            variants={slideIn}
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;