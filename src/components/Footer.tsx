import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const Footer = () => {
  return (
    <footer className="py-8 bg-dark">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2025 RankSync
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-electric-cyan transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-electric-cyan transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-electric-cyan transition-colors">Contact</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;