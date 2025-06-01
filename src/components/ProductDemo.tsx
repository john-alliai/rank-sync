import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const ProductDemo = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-white">
            See RankSync work in 90 seconds
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Watch titles, slugs & schema update across an entire site with one click.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <video
            className="w-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/demo-placeholder.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDemo;