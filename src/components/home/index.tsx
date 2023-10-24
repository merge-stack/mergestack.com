import React from 'react';
import HomepageBanner from './banner';
import Services from './services';
import ContactSection from './contact';

const HomePage = () => {
  return (
    <>
      <HomepageBanner />
      <Services/>
      <ContactSection/>
    </>
  );
};

export default HomePage;
