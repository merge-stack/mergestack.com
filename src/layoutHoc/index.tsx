import React from 'react';
import Container from '@mui/material/Container';

// Components imports
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';

const LayoutHoc = (Component: React.ComponentType<object>) =>
  function Hoc({ ...props }) {
    return (
      <Container maxWidth="lg">
        <Header />
        <Component {...props} />
        <Footer />
      </Container>
    );
  };

export default LayoutHoc;
