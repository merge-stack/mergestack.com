import * as React from 'react';
import { Box } from '@mui/material';

import LayoutHoc from 'src/layoutHoc';
import { CareersBanner } from 'src/components/career/banner';
import { CareerTextSection } from 'src/components/career/career';
import { ListedJobs } from 'src/components/career/jobs';

const Career: React.FC = (): React.ReactNode => {
  return (
    <Box component="div">
      <CareersBanner/>
      <ListedJobs/>
      <CareerTextSection/>
    </Box>
  );
};

export default LayoutHoc(Career);
