import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-dark">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-8 text-white">
          Never lose traffic again due to unoptimised pages.
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-electric-cyan text-dark rounded-xl font-semibold hover:bg-electric-cyan/90 transition-all transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="px-8 py-3 border-2 border-electric-cyan text-electric-cyan rounded-xl font-semibold hover:bg-electric-cyan/10 transition-all">
            Talk to Us
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;