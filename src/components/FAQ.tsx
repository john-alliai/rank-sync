import React, { useState, useRef, useEffect } from 'react';

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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          FAQ
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className="border border-gray-800 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-dark/50 transition-colors duration-200 text-white"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-electric-cyan transition-transform duration-200 ease-in-out">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                <div 
                  className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 py-4 text-gray-400 bg-dark/25">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;