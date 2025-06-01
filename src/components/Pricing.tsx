import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const Pricing = () => {
  return (
    <section className="py-20 bg-dark-surface">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-lg mx-auto rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-8 bg-dark sm:p-10 sm:pb-6">
            <div className="flex justify-center">
              <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-electric-cyan/10 text-electric-cyan">
                Starter
              </span>
            </div>
            <div className="mt-4 flex justify-center text-6xl font-extrabold text-white">
              $29
              <span className="ml-1 text-2xl font-medium text-gray-400">/mo</span>
            </div>
            <ul className="mt-8 space-y-4">
              {['1 site', '5k pages', 'All core features'].map((feature) => (
                <li key={feature} className="flex items-center text-gray-300">
                  <svg className="flex-shrink-0 h-6 w-6 text-electric-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-6 py-8 bg-dark-surface border-t border-gray-800 sm:px-10 sm:py-6">
            <button className="w-full px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium text-dark bg-electric-cyan hover:bg-electric-cyan/90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-cyan focus:ring-offset-dark">
              Start 7-day free trial
            </button>
            <p className="mt-4 text-sm text-center text-gray-500">
              No credit card required
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;