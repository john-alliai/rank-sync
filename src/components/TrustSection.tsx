import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../utils/animations';

const TrustSection = () => {
  return (
    <section className="py-12 bg-dark-surface">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className="flex flex-col items-center space-y-8">
          <motion.div 
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
            variants={fadeIn}
          >
            <span className="text-gray-400">Trusted by Small Businesses</span>
            {/* Placeholder for beta store logos */}
            <div className="flex space-x-6 opacity-50">
              {/* Add your store logos here */}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center text-lg"
            variants={fadeIn}
          >
            <span className="text-yellow-400 text-2xl mr-2">⭐</span>
            <span className="font-semibold text-white">Average +28% traffic lift in 30 days</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustSection;