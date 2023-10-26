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
import {
  ContainerStyle,
  GridItemStyle,
  BoxTextStyle,
  SocialIconsStyle,
  LinkListStyle,
  ListItemStyle,
  ListItemIcons,
} from 'public/assets/styles/footer-style';
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

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="div" style={ContainerStyle}>
      <Container maxWidth="lg">
        <Grid container columnSpacing={11}>
          <Grid item xs={6} md={3} sx={GridItemStyle}>
            <LogoWhiteIcon />
            <Box sx={BoxTextStyle} component="p">
              Mergestack is a technology consulting organization that builds,
              designs, and delivers top services to enterprises along with
              in-house 1300+ developers.
            </Box>
            <Box sx={SocialIconsStyle}>
              <FbFooterIcon />
              <InstagramFooterIcon />
              <TwitterFooterIcon />
              <LinkedInFooterIcon />
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              columnGap="1rem"
              sx={LinkListStyle}
            >
              Reviewed on
              <RatingStarsIcon />
              <Box display="flex" alignItems="end" gap="0.5rem">
                <ClutchIcon />
                31 reviews
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} md={3} className={classes.columnList}>
            <Typography variant="h6">Services</Typography>
            <List disablePadding>
              <ListItem className={classes.listItem}>
                <Link href="#" sx={ListItemStyle}>
                  Web Development
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" sx={ListItemStyle}>
                  Mobile Development
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" sx={ListItemStyle}>
                  Product Design
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" sx={ListItemStyle}>
                  UI/UX Design
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" sx={ListItemStyle}>
                  DevOps
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" sx={ListItemStyle}>
                  Quality Assurance (QA)
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={6} md={3} className={classes.columnList}>
            <Typography variant="h6">Quick Links</Typography>
            <List disablePadding>
              <ListItem className={classes.listItem}>
                <Link href="#" sx={ListItemStyle}>
                  About
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" sx={ListItemStyle}>
                  Services
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" sx={ListItemStyle}>
                  Portfolio
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" sx={ListItemStyle}>
                  Careers
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" sx={ListItemStyle}>
                  Blog
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link href="#" sx={ListItemStyle}>
                  Contact Us
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="h6">Get In Touch</Typography>
            <List disablePadding>
              <ListItem className={classes.listItem}>
                <ListItemIcon sx={ListItemIcons}>
                  <PhoneIcon />
                </ListItemIcon>
                <Link
                  target="_blank"
                  href="tel:+(323) 750-1234"
                  sx={ListItemStyle}
                >
                  +(323) 750-1234
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon sx={ListItemIcons}>
                  <EmailIcon />
                </ListItemIcon>
                <Link
                  target="_blank"
                  href="mailto:info@mergestack.com"
                  sx={ListItemStyle}
                >
                  info@mergestack.com
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon sx={ListItemIcons}>
                  <LocationPinIcon />
                </ListItemIcon>
                <Link
                  target="_blank"
                  href="https://maps.app.goo.gl/M3W3BDjLCZmX29gn7"
                  sx={ListItemStyle}
                >
                  80-C, opposite to bank square market, Block C Model Town,
                  Lahore, 54700
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
