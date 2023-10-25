import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Link from 'src/Link';
import ProTip from 'src/ProTip';
import Copyright from 'src/Copyright';
import LayoutHoc from 'src/layoutHoc';
import HomePage from 'src/components/home';

function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <HomePage/>
      </Box>
    </Container>
  );
}

export default LayoutHoc(Home);
