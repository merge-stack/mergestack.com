import React, { useState } from 'react';
import {
  AppBar,
  Grid,
  Button,
  IconButton,
  Box,
  Link,
  Container,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

import Logo from 'src/components/svg/Logo';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import theme from 'src/theme';

const useStyles = makeStyles({
  menuContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
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
});

const Header = () => {
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
          <Box component="div" className={classes.logoWrapper}>
            <Link href="#">
              <Logo />
            </Link>
          </Box>

          <Box className={classes.menuLinkWrapper}>
            <Box className={classes.menuItems}>
              <Link href="#">About</Link>
              <Link href="#">Services</Link>
              <Link href="#">Portfolio</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Blogs</Link>
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
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Blogs</Link>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
