import * as React from 'react';
import { Box, Container } from '@mui/material';

import LayoutHoc from 'src/layoutHoc';
import { ServicesBanner } from 'src/components/services/banner';
import { ServicesTextSection } from 'src/components/services/textSection';
import ServicesSection from './../src/components/common/services/index';
import ContactSection from 'src/components/common/contact';

function Services() {
  return (
    <Box component="div">
      <ServicesBanner />
      <ServicesSection />
      <ServicesTextSection />
      <ContactSection />
    </Box>
  );
}

export default LayoutHoc(Services);
