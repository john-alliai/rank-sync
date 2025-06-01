import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../utils/animations';

const metrics = [
  { label: 'sites optimised', value: '86' },
  { label: 'pages rewritten', value: '40K' },
  { label: 'hours saved', value: '320' },
];

const Proof = () => {
  return (
    <section className="py-20 bg-dark-surface">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.blockquote 
          className="max-w-3xl mx-auto text-center"
          variants={fadeIn}
        >
          <p className="text-2xl font-medium mb-6 text-white">
            "RankSync fixed 300 product titles in ten minutes and organic clicks jumped 27%."
          </p>
          <footer className="text-electric-cyan">
            — Olivia B., Shoplazza merchant
          </footer>
        </motion.blockquote>
        
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
        >
          {metrics.map((metric) => (
            <motion.div 
              key={metric.label} 
              className="text-center"
              variants={fadeIn}
            >
              <div className="text-3xl font-bold text-electric-cyan mb-2">
                {metric.value}
              </div>
              <div className="text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Proof;