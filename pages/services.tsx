import * as React from 'react';
import { Box } from '@mui/material';

import LayoutHoc from 'src/layoutHoc';
import { ServicesBanner } from 'src/components/services/banner';
import { ServicesTextSection } from 'src/components/services/textSection';

function Services() {
  return (
    <Box component="div">
      <ServicesBanner />
      <ServicesTextSection />
    </Box>
  );
}

export default LayoutHoc(Services);
