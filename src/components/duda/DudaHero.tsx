import React from 'react';

const DudaHero = () => {
  return (
    <div className="py-24 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Optimise every Duda page in one click
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Titles, slugs, schema &amp; indexing—sorted while your coffee's still hot.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <button className="px-8 py-3 bg-electric-cyan text-dark rounded-xl font-semibold hover:bg-electric-cyan/90 transition-all transform hover:scale-105">
          Start free →
        </button>
        <a
          href="#tour"
          className="px-8 py-3 border-2 border-electric-cyan text-electric-cyan rounded-xl font-semibold hover:bg-electric-cyan/10 transition-all flex items-center justify-center"
        >
          Watch 2‑min tour
        </a>
      </div>
    </div>
  );
};

export default DudaHero;
