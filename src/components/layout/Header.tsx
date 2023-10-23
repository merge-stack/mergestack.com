import React from 'react';
import {
  AppBar,
  Grid,
  Button,
  IconButton,
  Box,
  Link,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from 'public/assets/svg/Logo';

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white !important',
          position: 'relative',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#000',
          fontWeight: 500,
          textDecoration: 'none',
        },
      },
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Container maxWidth="lg">
          <Grid
            container
            maxWidth="lg"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="center" gap="1rem">
              <Logo />
            </Box>

            <Box display="flex" alignItems="center" gap="2rem">
              <Box display="flex" alignItems="center" gap="1rem">
                <Link href='#'>About</Link>
                <Link href='#'>Services</Link>
                <Link href='#'>Portfolio</Link>
                <Link href='#'>Careers</Link>
                <Link href='#'>Blogs</Link>
              </Box>
              <Box display="flex" alignItems="center" gap="1rem">
                <Button
                  sx={{ backgroundColor: '#4FB0E3', borderRadius: '25px' }}
                  color="secondary"
                  variant="contained"
                >
                  Contact Us
                </Button>
                {/* 
              <IconButton color="#000" edge="end">
                <MenuIcon />
              </IconButton> */}
              </Box>
            </Box>
          </Grid>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
