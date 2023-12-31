import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AppBar,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  Theme,
} from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

import MuiLink from 'src/Link';
import Logo from 'src/components/svg/Logo';
import CompanyInfoDrawer from './Header/InfoDrawerBox';

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
    textTransform: 'capitalize',
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
  desktopHamburger: {
    backgroundColor: '#EFF1F5',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& > svg': {
        fill: '#EFF1F5',
      },
    },
    '& > svg': {
      fill: theme.palette.primary.main,
    },
    '@media (max-width: 600px)': {
      display: 'none',
    },
    '@media (min-width: 601px)': {
      display: 'inline-flex',
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

  const handleMobileMenuOpen = () => {
    setIsDrawerOpen(true);
  };

  const infoDrawerOpen = () => {
    setIsInfoDrawerOpen(true);
  };

  const handleMobileMenuClose = () => {
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
              <Button
                variant="contained"
                className={classes.menubtn}
                onClick={() => router.push('/contact')}
              >
                Contact Us
              </Button>
              <IconButton
                className={classes.desktopHamburger}
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
                onClick={handleMobileMenuOpen}
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
        onClose={handleMobileMenuClose}
        className={classes.drawerWidth}
      >
        <Box className={classes.menuLinks}>
          <IconButton edge="end" onClick={handleMobileMenuClose}>
            <CancelOutlinedIcon />
          </IconButton>
          <MuiLink href="/about">About</MuiLink>
          <MuiLink href="/services">Services</MuiLink>
          <MuiLink href="/portfolio">Portfolio</MuiLink>
          <MuiLink href="/career">Careers</MuiLink>
          <MuiLink href="/blogs">Blogs</MuiLink>
        </Box>
      </Drawer>

      {/* INFORMATION DRAWER  */}
      <CompanyInfoDrawer
        onClose={handleInfoDrawerClose}
        isOpen={isInfoDrawerOpen}
      />
    </AppBar>
  );
};

export default Header;
