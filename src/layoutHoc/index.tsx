import React from 'react';

// Components imports
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import { Box } from '@mui/material';

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
