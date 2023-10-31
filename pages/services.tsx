import * as React from 'react';
import { Box } from '@mui/material';

import LayoutHoc from 'src/layoutHoc';
import { ServicesBanner } from 'src/components/services/banner';

function Services() {
  return (
    <Box component="div">
      <ServicesBanner />
    </Box>
  );
}

export default LayoutHoc(Services);
