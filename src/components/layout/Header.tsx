import React from 'react';
import {
  AppBar,
  Grid,
  Button,
  IconButton,
  Box,
  Link,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from 'public/assets/svg/Logo';

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor:'white', position:'relative' }}>
      <Container maxWidth='lg'>
        <Grid container maxWidth='lg' justifyContent='space-between' alignItems="center">
          <Box display='flex' alignItems='center' gap='1rem'>
            <Logo />
          </Box>

          <Box display="flex" alignItems="center" gap="2rem">
            <Box display="flex" alignItems="center" gap="1rem">
              <Link underline="none" fontWeight='500' color="#000">
                About
              </Link>
              <Link underline="none" fontWeight='500' color="#000">
                Services
              </Link>
              <Link underline="none" fontWeight='500' color="#000">
                Portfolio
              </Link>
              <Link underline="none" fontWeight='500' color="#000">
                Careers
              </Link>
              <Link underline="none" fontWeight='500' color="#000">
                Blogs
              </Link>
            </Box>
            <Box display="flex" alignItems="center" gap="1rem">
              <Button  sx={{backgroundColor:'#4FB0E3', borderRadius:'25px'}} color="secondary" variant="contained">
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
  );
};

export default Header;
