import * as React from 'react';
import { Box } from '@mui/material';

import LayoutHoc from 'src/layoutHoc';
import { BlogBanner } from 'src/components/blog/banner';
import { BlogList } from 'src/components/blog/blogs';

function Blog() {
  return (
    <Box component="div">
      <BlogBanner/>
      <BlogList/>
    </Box>
  );
}

export default LayoutHoc(Blog);
