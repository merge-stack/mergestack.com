import React from 'react';
import Container from '@mui/material/Container';

// Components imports
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import { Box } from '@mui/material';

const LayoutHoc = (Component: React.ComponentType<object>) =>
  function Hoc({ ...props }) {
    return (
      <Box component='div'>
      {/* <Container sx={{padding:'0 !important'}} maxWidth="xl"> */}
        <Header />
        <Component {...props} />
        <Footer />
      {/* </Container> */}
      </Box>
    );
  };

export default LayoutHoc;
