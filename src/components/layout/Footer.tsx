import React from 'react';
import {
  Grid,
  Typography,
  Link,
  Container,
  Box,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material';
import LogoWhiteIcon from 'src/components/svg/Logo-white';
import { FbFooterIcon } from 'src/components/svg/fb-icon';
import { InstagramFooterIcon } from 'src/components/svg/instagram-icon';
import { LinkedInFooterIcon } from 'src/components/svg/linkedin-icon';
import { EmailIcon } from 'src/components/svg/email-icon';
import { TwitterFooterIcon } from 'src/components/svg/twitter-icon';
import { RatingStarsIcon } from 'src/components/svg/rating-stars-icon';
import { PhoneIcon } from 'src/components/svg/phone-icon';
import { LocationPinIcon } from 'src/components/svg/location-pin-icon';
import { ClutchIcon } from 'src/components/svg/clutch-icon';
import useStyles from 'public/assets/styles/footer-style';
import Copyright from 'src/Copyright';

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.ContainerStyle}>
      <Container maxWidth="lg">
        <Grid container columnSpacing={11}>
          <Grid item xs={12} sm={6} md={3} className={classes.GridItemStyle}>
            <LogoWhiteIcon />
            <Box className={classes.BoxTextStyle} component="p">
              Mergestack is a technology consulting organization that builds,
              designs, and delivers top services to enterprises along with
              in-house 1300+ developers.
            </Box>
            <Box className={classes.SocialIconsStyle}>
              <FbFooterIcon />
              <InstagramFooterIcon />
              <TwitterFooterIcon />
              <LinkedInFooterIcon />
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              columnGap="1rem"
              className={classes.LinkListStyle}
            >
              Reviewed on
              <RatingStarsIcon />
              <Box display="flex" alignItems="end" gap="0.5rem">
                <ClutchIcon />
                31 reviews
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3} className={classes.columnList}>
            <Typography className={classes.columnHeading} variant="h6">
              Services
            </Typography>
            <List disablePadding className={classes.listRoot}>
              <ListItem className={classes.listItem}>
                <Link href="#" className={classes.ListItemStyle}>
                  Web Development
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" className={classes.ListItemStyle}>
                  Mobile Development
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" className={classes.ListItemStyle}>
                  Product Design
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" className={classes.ListItemStyle}>
                  UI/UX Design
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" className={classes.ListItemStyle}>
                  DevOps
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" className={classes.ListItemStyle}>
                  Quality Assurance (QA)
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={6} md={3} className={classes.columnList}>
            <Typography variant="h6" className={classes.columnHeading}>
              Quick Links
            </Typography>
            <List disablePadding className={classes.listRoot}>
              <ListItem className={classes.listItem}>
                <Link href="#" className={classes.ListItemStyle}>
                  About
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" className={classes.ListItemStyle}>
                  Services
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" className={classes.ListItemStyle}>
                  Portfolio
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" className={classes.ListItemStyle}>
                  Careers
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" className={classes.ListItemStyle}>
                  Blog
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" className={classes.ListItemStyle}>
                  Contact Us
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="h6" className={classes.columnHeading}>
              Get In Touch
            </Typography>
            <List disablePadding className={classes.listRoot}>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.ListItemIcons}>
                  <PhoneIcon />
                </ListItemIcon>
                <Link
                  target="_blank"
                  href="tel:+(323) 750-1234"
                  className={classes.ListItemStyle}
                >
                  +(323) 750-1234
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.ListItemIcons}>
                  <EmailIcon />
                </ListItemIcon>
                <Link
                  target="_blank"
                  href="mailto:info@mergestack.com"
                  className={classes.ListItemStyle}
                >
                  info@mergestack.com
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.ListItemIcons}>
                  <LocationPinIcon />
                </ListItemIcon>
                <Link
                  target="_blank"
                  href="https://maps.app.goo.gl/M3W3BDjLCZmX29gn7"
                  className={classes.ListItemStyle}
                >
                  80-C, opposite to bank square market, Block C Model Town,
                  Lahore, 54700
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
      <Copyright />
    </Box>
  );
};

export default Footer;
