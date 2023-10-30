import * as React from 'react';
import { Box } from '@mui/material';
import AboutTimeline from 'src/components/about/timeline/timline';
import TextBadge from 'src/components/layout/TextBadge';
import LayoutHoc from 'src/layoutHoc';
import CoreValues from 'src/components/about/core-values';

function About() {
  return (
    <Box component="div">
      <Box component="div" textAlign="center" paddingTop="3rem">
        <TextBadge text="ABOUT" size="small" />
      </Box>
      <AboutTimeline />
      <CoreValues/>
    </Box>
  );
}

export default LayoutHoc(About);
