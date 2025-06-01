import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const Solution = () => {
  return (
    <section className="py-20 bg-dark">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            RankSync in One Line
          </h2>
          <p className="text-xl leading-relaxed text-gray-300">
            Fast, affordable bulk SEO that feels native to your CMS. No code, no plugin soup—just click once and watch pages get search-ready.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Solution;