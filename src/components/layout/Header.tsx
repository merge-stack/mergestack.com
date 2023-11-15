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
  Theme,
} from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

import Logo from 'src/components/svg/Logo';
import InfoDrawerBox from './Header/InfoDrawerBox';

const useStyles = makeStyles((theme: Theme) => ({
  menuContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
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
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '25px',
    boxShadow: 'none',
    color: theme.palette.background.default,
    '&:hover': {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.main,
      boxShadow: 'none',
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
  mobileMenuBtn: {
    '@media (max-width: 600px)': {
      display: 'inine-block',
    },
    '@media (min-width: 601px)': {
      display: 'none',
    },
  },
  InfoDrawerBtn: {
    backgroundColor: '#EFF1F5',
    '& > svg': {
      fill: theme.palette.primary.main
    },
    '@media (max-width: 600px)': {
      display: 'none',
    },
    '@media (min-width: 601px)': {
      display: 'inline-flex',
    },
  },
  
  InfoDrawerWidth: {
    '& > :nth-child(3)': {
      width: '360px',
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
  const [isInfoDrawerOpen, setIsInfoDrawerOpen] = useState(false);

  const mobileMenuOpen = () => {
    setIsDrawerOpen(true);
  };

  const infoDrawerOpen = () => {
    setIsInfoDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleInfoDrawerClose = () => {
    setIsInfoDrawerOpen(false);
  };

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Box component="div" className={classes.menuContainer}>
          <Box className={classes.logoWrapper}>
            <Link href="/">
              <Logo />
            </Link>
          </Box>

          <Box className={classes.menuLinkWrapper}>
            <Box className={classes.menuItems}>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/career">Careers</Link>
              <Link href="/blogs">Blogs</Link>
            </Box>
            <Box className={classes.menuItems}>
              <Button
                href="/contact"
                variant="contained"
                className={classes.menubtn}
              >
                Contact Us
              </Button>
              <IconButton
                className={classes.InfoDrawerBtn}
                color="default"
                edge="end"
                onClick={infoDrawerOpen}
              >
                <MenuIcon />
              </IconButton>

              <IconButton
                className={classes.mobileMenuBtn}
                color="default"
                edge="end"
                onClick={mobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
      {/* MOBILE MENU DRAWER */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        className={classes.drawerWidth}
      >
        <Box className={classes.menuLinks}>
          <IconButton edge="end" onClick={handleDrawerClose}>
            <CancelOutlinedIcon />
          </IconButton>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/career">Careers</Link>
          <Link href="/blogs">Blogs</Link>
        </Box>
      </Drawer>
      
      {/* INFORMATION DRAWER  */}
      <Drawer
        anchor="right"
        open={isInfoDrawerOpen}
        onClose={handleInfoDrawerClose}
        className={classes.InfoDrawerWidth}
      >
        <InfoDrawerBox onClose={handleInfoDrawerClose} />
      </Drawer>
    </AppBar>
  );
};

export default Header;
