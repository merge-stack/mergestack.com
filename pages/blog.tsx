import * as React from 'react';
import { Box } from '@mui/material';

import LayoutHoc from 'src/layoutHoc';
import { BlogBanner } from 'src/components/blog/banner';

function Blog() {
  return (
    <Box component="div">
      <BlogBanner/>
    </Box>
  );
}

export default LayoutHoc(Blog);
