import * as React from 'react';
import { Box } from '@mui/material';

import LayoutHoc from 'src/layoutHoc';
import { ContactUs } from 'src/components/contact';

const Blog: React.FC = (): React.ReactNode => {
  return (
    <Box component="div">
      <ContactUs/>
    </Box>
  );
};

export default LayoutHoc(Blog);
