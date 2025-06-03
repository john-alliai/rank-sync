import React from 'react';
import FAQ from './ui/FAQ';
import { dudaFAQs } from '../data/faqs/duda';

const DudaFAQ = () => {
  return <FAQ items={dudaFAQs} />;
};

export default DudaFAQ;
