import React from 'react';
import FAQ from './ui/FAQ';
import { homeFAQs } from '../data/faqs/home';

const HomeFAQ = () => {
  return <FAQ items={homeFAQs} />;
};

export default HomeFAQ;
