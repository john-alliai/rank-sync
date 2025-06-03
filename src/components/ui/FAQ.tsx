import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

const FAQ = ({ 
  items, 
  title = 'FAQ',
  className = '',
  theme = 'dark'
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const baseStyles = {
    light: {
      bg: 'bg-gray-50',
      border: 'border-gray-200',
      text: 'text-gray-900',
      answer: 'text-gray-600',
      hover: 'hover:bg-gray-100'
    },
    dark: {
      bg: 'bg-dark-surface',
      border: 'border-gray-800',
      text: 'text-white',
      answer: 'text-gray-400',
      hover: 'hover:bg-dark/50'
    }
  }[theme];
  
  return (
    <section className={`py-20 ${baseStyles.bg} ${className}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-12 ${baseStyles.text}`}>
          {title}
        </h2>
        
        <div className="space-y-4">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`border ${baseStyles.border} rounded-xl overflow-hidden`}
              >
                <button
                  className={`w-full px-6 py-4 text-left flex justify-between items-center ${baseStyles.hover} transition-colors duration-200 ${baseStyles.text}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-electric-cyan transition-transform duration-200 ease-in-out">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                <div 
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className={`px-6 py-4 ${baseStyles.answer} bg-dark/25`}>
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
