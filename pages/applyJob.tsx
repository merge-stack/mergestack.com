import * as React from 'react';
import { Box, Container } from '@mui/material';

import LayoutHoc from 'src/layoutHoc';
import ApplyJobForm from 'src/components/career/jobs/ApplyJobForm';

function ApplyJob() {
  return (
    <Box component="div">
      <ApplyJobForm/>
    </Box>
  );
}

export default LayoutHoc(ApplyJob);
