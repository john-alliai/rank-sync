import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, stagger } from '../utils/animations';

const faqs = [
  {
    question: 'Does RankSync slow my site?',
    answer: 'No. RankSync talks to your CMS via API—no extra scripts.'
  },
  {
    question: 'Do I need to know SEO?',
    answer: 'No jargon. We show plain-language scores and next steps.'
  },
  {
    question: 'What about site speed?',
    answer: 'Page-speed modules live in our flagship product, Alli AI.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-dark-surface">
      <motion.div 
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-white"
          variants={fadeIn}
        >
          FAQ
        </motion.h2>
        
        <motion.div 
          className="space-y-4"
          variants={stagger}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="border border-gray-800 rounded-xl overflow-hidden"
              variants={fadeIn}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-dark/50 transition-colors text-white"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-electric-cyan">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 text-gray-400 bg-dark/25"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQ;