import React from 'react';
import HomepageBanner from './banner';
import Services from './services';
import ContactSection from './contact';
import TestimonialSlider from './testimonials';
import WorkingCycle from './workingCycle';
import Stats from './stats';

const HomePage = () => {
  return (
    <>
      <HomepageBanner />
      <Services/>
      <WorkingCycle/>
      <Stats/>
      <TestimonialSlider/>
      <ContactSection/>
    </>
  );
};

export default HomePage;
