import * as React from 'react';
import { Box, Container } from '@mui/material';

import LayoutHoc from 'src/layoutHoc';
import { BlogBanner } from 'src/components/blog/banner';
import { BlogList } from 'src/components/blog/blogs';
import ContactSection from 'src/components/common/contact';

const Blog: React.FC = (): React.ReactNode => {
  return (
    <Box component="div">
      <BlogBanner/>
      <BlogList/>
      <ContactSection/>
    </Box>
  );
};

export default LayoutHoc(Blog);
