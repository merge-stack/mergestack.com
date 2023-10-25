import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LayoutHoc from 'src/layoutHoc';
import HomepageBanner from 'src/components/home/banner';
import Services from 'src/components/home/services';
import WorkingCycle from 'src/components/home/workingCycle';
import Stats from 'src/components/home/stats';
import TestimonialSection from 'src/components/home/testimonials';
import ContactSection from 'src/components/home/contact';

function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <HomepageBanner />
        <Services />
        <WorkingCycle />
        <Stats />
        <TestimonialSection />
        <ContactSection />
      </Box>
    </Container>
  );
}

export default LayoutHoc(Home);
