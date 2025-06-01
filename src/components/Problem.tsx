import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../utils/animations';

const problems = [
  {
    title: "Slow fixes",
    description: "Google re-crawls stale pages.",
    icon: "🐌"
  },
  {
    title: "Plugin bloat",
    description: "Site maintenance headaches.",
    icon: "🔌"
  },
  {
    title: "Agency fees",
    description: ">$1k/mo for basic meta work.",
    icon: "💸"
  }
];

const Problem = () => {
  return (
    <section className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-white"
            variants={fadeIn}
          >
            Why DIY SEO Hurts Small Sites
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Inefficient manual edits, confusing plugins, and pricey consultants keep indie founders from ranking.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
          >
            {problems.map((problem) => (
              <motion.div 
                key={problem.title} 
                className="text-center"
                variants={fadeIn}
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{problem.title}</h3>
                <p className="text-gray-400">{problem.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;