import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../utils/animations';

const features = [
  {
    title: 'Bulk Meta Rewrite',
    description: 'AI crafts compelling titles & descriptions site-wide.',
    icon: '📝',
  },
  {
    title: 'Smart Slug Cleaner',
    description: 'Goodbye ?ref=123, hello keyword-rich URLs.',
    icon: '🔗',
  },
  {
    title: 'Schema Injection',
    description: 'Product, article & local schema added automatically.',
    icon: '📊',
  },
  {
    title: 'Instant Indexing',
    description: 'IndexNow + sitemap ping gets changes picked up fast.',
    icon: '⚡',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-dark">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={stagger}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.title} 
              className="bg-dark-surface p-6 rounded-xl shadow-lg"
              variants={fadeIn}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;