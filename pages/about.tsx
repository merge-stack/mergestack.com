import * as React from 'react';
import { Box, Container } from '@mui/material';

import AboutTimeline from 'src/components/about/timeline/timline';
import TextBadge from 'src/components/common/TextBadge';
import LayoutHoc from 'src/layoutHoc';
import CoreValues from 'src/components/about/values';
import TeamSection from 'src/components/about/team';
import ContactSection from 'src/components/common/contact';
import { Brands } from 'src/components/about/brands';

function About() {
  return (
    <Box component="div">
      <Box component="div" textAlign="center" paddingTop="3rem">
        <TextBadge text="ABOUT" size="small" />
      </Box>
      <AboutTimeline />
      <CoreValues />
      <TeamSection />
      <Brands />
      <Container maxWidth="lg">
        <ContactSection />
      </Container>
    </Box>
  );
}

export default LayoutHoc(About);
