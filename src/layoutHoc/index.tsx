import React from 'react';

// Components imports
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import { Box, Container } from '@mui/material';
import HomePage from 'src/components/home';

const LayoutHoc = (Component: React.ComponentType<object>) =>
  function Hoc({ ...props }) {
    return (
      <Box component="div">
        <Header />
        <Container maxWidth="lg">
          <HomePage/>
        </Container>
        <Footer />
      </Box>
    );
  };

export default LayoutHoc;
