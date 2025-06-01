import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../utils/animations';

const Hero = () => {
  return (
    <section className="bg-dark text-white py-20">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
            variants={fadeIn}
          >
            Rank higher on search. No plugins. No headaches.
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
            variants={fadeIn}
          >
            One‑click AI SEO for Duda, Shoplazza & PrestaShop. Bulk‑optimize every page in minutes—starting at just $29.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            variants={fadeIn}
          >
            <button className="px-8 py-3 bg-electric-cyan text-dark rounded-xl font-semibold hover:bg-electric-cyan/90 transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border-2 border-electric-cyan text-electric-cyan rounded-xl font-semibold hover:bg-electric-cyan/10 transition-all">
              Watch 2‑min Demo
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;