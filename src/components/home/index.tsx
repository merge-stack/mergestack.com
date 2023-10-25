import React from 'react';
import HomepageBanner from './banner';
import Services from './services';
import ContactSection from './contact';
import TestimonialSlider from './testimonials';

const HomePage = () => {
  return (
    <>
      <HomepageBanner />
      <Services/>
      <TestimonialSlider/>
      <ContactSection/>
    </>
  );
};

export default HomePage;
