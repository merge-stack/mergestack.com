import React from 'react';
import Container from '@mui/material/Container';

// Components imports
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import { Box } from '@mui/material';
import HomePage from 'src/components/home';

const LayoutHoc = (Component: React.ComponentType<object>) =>
  function Hoc({ ...props }) {
    return (
      <Box component="div">
        <Header />

        <Component {...props} />

        <Footer />
      </Box>
    );
  };

export default LayoutHoc;
