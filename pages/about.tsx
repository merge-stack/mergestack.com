import * as React from 'react';
import { Container, Box } from '@mui/material';
import AboutTimeline from 'src/components/about/timeline/timline';
import TextBadge from 'src/components/layout/TextBadge';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box component='div' textAlign='center'>
        <TextBadge text='ABOUT' size='small' />
      </Box>
      <AboutTimeline/>
    </Container>
  );
}
