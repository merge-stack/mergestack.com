import * as React from 'react';
import { Box, Container } from '@mui/material';

import LayoutHoc from 'src/layoutHoc';
import { Portfolio } from 'src/components/portfolio';
import ContactSection from 'src/components/common/contact';

const Blog: React.FC = (): React.ReactNode => {
  return (
    <Box component="div">
      <Portfolio />
      <Container>
        <ContactSection />
      </Container>
    </Box>
  );
};

export default LayoutHoc(Blog);
