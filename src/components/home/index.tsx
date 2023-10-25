import React from 'react';
import HomepageBanner from './banner';
import Services from './services';
import ContactSection from './contact';
import TestimonialSlider from './testimonials';
import WorkingCycle from './workingCycle';

const HomePage = () => {
  return (
    <>
      <HomepageBanner />
      <Services/>
      <WorkingCycle/>
      <TestimonialSlider/>
      <ContactSection/>
    </>
  );
};

export default HomePage;
