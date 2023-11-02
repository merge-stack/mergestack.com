import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AppBar,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import Logo from 'src/components/svg/Logo';
import MuiLink from 'src/Link';

const useStyles = makeStyles(() => ({
  menuContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    '& :hover': {
      cursor: 'pointer',
    },
  },
  menuLinkWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  menuItems: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',

    '@media (max-width: 600px)': {
      '& > a': {
        display: 'none',
      },
    },
  },
  menubtn: {
    backgroundColor: 'primary',
    borderRadius: '25px',
    boxShadow: 'none',
    color: '#fff',
    '& > hover': {
      fill: 'dodgerblue',
    },

    '@media (max-width: 1000px)': {
      display: 'none',
    },
  },
  menuLinks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    height: '60%',
  },
  hamburger: {
    '@media (max-width: 600px)': {
      display: 'inine-block',
    },
    '@media (min-width: 601px)': {
      display: 'none',
    },
  },
  drawerWidth: {
    '& > :nth-child(3)': {
      width: '100%',
    },
  },
}));

const Header: React.FC = () => {
  const router = useRouter();
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Box component="div" className={classes.menuContainer}>
          <Box className={classes.logoWrapper}>
            <MuiLink href="/">
              <Logo />
            </MuiLink>
          </Box>

          <Box className={classes.menuLinkWrapper}>
            <Box className={classes.menuItems}>
              <MuiLink href="/about">About</MuiLink>
              <MuiLink href="/services">Services</MuiLink>
              <MuiLink href="/portfolio">Portfolio</MuiLink>
              <MuiLink href="/career">Careers</MuiLink>
              <MuiLink href="/blogs">Blogs</MuiLink>
            </Box>
            <Box className={classes.menuItems}>
              <Button variant="contained" className={classes.menubtn}>
                Contact Us
              </Button>

              <IconButton
                className={classes.hamburger}
                color="default"
                edge="end"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        className={classes.drawerWidth}
      >
        <Box className={classes.menuLinks}>
          <IconButton edge="end" onClick={handleDrawerClose}>
            <CloseOutlinedIcon />
          </IconButton>
          <MuiLink href="/about">About</MuiLink>
          <MuiLink href="/services">Services</MuiLink>
          <MuiLink href="/portfolio">Portfolio</MuiLink>
          <MuiLink href="/career">Careers</MuiLink>
          <MuiLink href="/blogs">Blogs</MuiLink>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
