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
import useStyles from 'public/assets/styles/FooterStyle';
import Copyright from 'src/Copyright';

const Footer = () => {
  const classes = useStyles();
  
  return (
    <Box component="div" className={classes.footerContainerStyle}>
      <Container maxWidth="lg">
        <Grid container columnSpacing={11}>
          <Grid item xs={12} sm={6} md={3} className={classes.footerGridItem}>
            <LogoWhiteIcon />
            <Box className={classes.footerAboutText} component="p">
              Mergestack is a technology consulting organization that builds,
              designs, and delivers top services to enterprises along with
              in-house 1300+ developers.
            </Box>
            <Box className={classes.footerSocialIcons}>
              <FbFooterIcon />
              <InstagramFooterIcon />
              <TwitterFooterIcon />
              <LinkedInFooterIcon />
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              columnGap="1rem"
              className={classes.footerReview}
            >
              Reviewed on
              <RatingStarsIcon />
              <Box display="flex" alignItems="end" gap="0.5rem">
                <ClutchIcon />
                31 reviews
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3} className={classes.footerMidColumns}>
            <Typography className={classes.footerColumnHeading} variant="h6">
              Services
            </Typography>
            <List disablePadding className={classes.footerList}>
              <ListItem className={classes.footerListItem}>
                <Link href="#" className={classes.footerListLink}>
                  Web Development
                </Link>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Link href="#" className={classes.footerListLink}>
                  Mobile Development
                </Link>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Link href="#" className={classes.footerListLink}>
                  Product Design
                </Link>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Link href="#" className={classes.footerListLink}>
                  UI/UX Design
                </Link>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Link href="#" className={classes.footerListLink}>
                  DevOps
                </Link>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Link href="#" className={classes.footerListLink}>
                  Quality Assurance (QA)
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={6} md={3} className={classes.footerMidColumns}>
            <Typography variant="h6" className={classes.footerColumnHeading}>
              Quick Links
            </Typography>
            <List disablePadding className={classes.footerList}>
              <ListItem className={classes.footerListItem}>
                <Link href="#" className={classes.footerListLink}>
                  About
                </Link>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Link href="#" className={classes.footerListLink}>
                  Services
                </Link>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Link href="#" className={classes.footerListLink}>
                  Portfolio
                </Link>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Link href="#" className={classes.footerListLink}>
                  Careers
                </Link>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Link href="#" className={classes.footerListLink}>
                  Blog
                </Link>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <Link href="#" className={classes.footerListLink}>
                  Contact Us
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="h6" className={classes.footerColumnHeading}>
              Get In Touch
            </Typography>
            <List disablePadding className={classes.footerList}>
              <ListItem className={classes.footerListItem}>
                <ListItemIcon className={classes.footerListIcon}>
                  <PhoneIcon />
                </ListItemIcon>
                <Link
                  target="_blank"
                  href="tel:+(323) 750-1234"
                  className={classes.footerListLink}
                >
                  +(323) 750-1234
                </Link>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <ListItemIcon className={classes.footerListIcon}>
                  <EmailIcon />
                </ListItemIcon>
                <Link
                  target="_blank"
                  href="mailto:info@mergestack.com"
                  className={classes.footerListLink}
                >
                  info@mergestack.com
                </Link>
              </ListItem>
              <ListItem className={classes.footerListItem}>
                <ListItemIcon className={classes.footerListIcon}>
                  <LocationPinIcon />
                </ListItemIcon>
                <Link
                  target="_blank"
                  href="https://maps.app.goo.gl/M3W3BDjLCZmX29gn7"
                  className={classes.footerListLink}
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
