import * as React from 'react';
import { Box } from '@mui/material';

import LayoutHoc from 'src/layoutHoc';
import { Portfolio } from 'src/components/portfolio';
import ContactSection from 'src/components/common/contact';

const Blog: React.FC = (): React.ReactNode => {
  return (
    <Box component="div">
      <Portfolio />
      <ContactSection />
    </Box>
  );
};

export default LayoutHoc(Blog);
