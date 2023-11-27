import * as React from 'react';
import { makeStyles } from '@mui/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  Box,
  Container,
  Typography,
  Link,
  Theme,
  Drawer,
} from '@mui/material';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

import Logo from 'src/components/svg/Logo';
import useStyles from 'public/assets/styles/FooterStyle';
import { FbFooterIcon } from 'src/components/svg/FbIcon';
import { InstagramFooterIcon } from 'src/components/svg/InstagramIcon';
import { LinkedInFooterIcon } from 'src/components/svg/LinkedinIcon';
import { TwitterFooterIcon } from 'src/components/svg/TwitterIcon';
import { EmailIcon } from 'src/components/svg/EmailIcon';
import { PhoneIcon } from 'src/components/svg/PhoneIcon';
import { LocationPinIcon } from 'src/components/svg/LocationPinIcon';

interface CompanyInfoDrawerProps {
  onClose: () => void;
  isOpen: boolean;
}

const infoUseStyles = makeStyles((theme: Theme) => ({
  infoDrawerRoot: {
    padding: '2rem 2.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    '& button > svg': {
      fill: theme.palette.secondary.main,
    },
    '& *': {
      color: 'black !important',
    },
    '& li': {
      gap: '0.5rem',
    },
  },
  CompanyInfoDrawerHeader: {
    display: 'flex',
    width: '100%',
    alignItems: 'start',
    justifyContent: 'space-between',
    '& > svg': {
      maxWidth: 200,
    },
  },
  infoIcons: {
    borderRadius: '50px',
    minWidth: 'auto',
    backgroundColor: theme.palette.secondary.main,
    padding: '4px',
    '& path': {
      fill: `white !important`,
    },
    '& > svg': {
      width: 10,
      height: 10,
    },
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
    '& > svg > circle': {
      fill: `${theme.palette.secondary.main} !important`,
    },
    '& > svg > path': {
      fill: `white !important`,
    },
  },
  InfoDrawerWidth: {
    '& > :nth-child(3)': {
      width: '360px',
    },
  },
}));

const CompanyInfoDrawer: React.FC<CompanyInfoDrawerProps> = ({ onClose, isOpen }) => {
  const classes = infoUseStyles();
  const exportedClass = useStyles();

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      className={classes.InfoDrawerWidth}
    >
      <Container className={classes.infoDrawerRoot}>
        <Box component="div" className={classes.CompanyInfoDrawerHeader}>
          <Logo />
          <IconButton edge="end" onClick={onClose}>
            <CancelSharpIcon />
          </IconButton>
        </Box>

        <Box component="div">
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1">
            Mergestack is a tech consulting organization that builds, designs
            and delivers top services to enterprises along with in-house 1300+
            developers.
          </Typography>
        </Box>

        <Box component="div">
          <Typography variant="h6" gutterBottom>
            Contact Info
          </Typography>
          <List disablePadding className={exportedClass.footerList}>
            <ListItem className={exportedClass.footerListItem}>
              <ListItemIcon className={classes.infoIcons}>
                <PhoneIcon />
              </ListItemIcon>
              <Link
                target="_blank"
                href="tel:+(323) 750-1234"
                className={exportedClass.footerListLink}
              >
                +(323) 750-1234
              </Link>
            </ListItem>
            <ListItem className={exportedClass.footerListItem}>
              <ListItemIcon className={classes.infoIcons}>
                <EmailIcon />
              </ListItemIcon>
              <Link
                target="_blank"
                href="mailto:info@mergestack.com"
                className={exportedClass.footerListLink}
              >
                info@mergestack.com
              </Link>
            </ListItem>
            <ListItem className={exportedClass.footerListItem}>
              <ListItemIcon className={classes.infoIcons}>
                <LocationPinIcon />
              </ListItemIcon>
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/M3W3BDjLCZmX29gn7"
                className={exportedClass.footerListLink}
              >
                80-C, opposite to bank square market, Block C Model Town,
                Lahore, 54700
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box className={classes.socialIcons}>
          <FbFooterIcon />
          <InstagramFooterIcon />
          <TwitterFooterIcon />
          <LinkedInFooterIcon />
        </Box>
      </Container>
    </Drawer>
  );
};

export default CompanyInfoDrawer;
