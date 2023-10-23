import React from 'react';
import {
  Grid,
  Typography,
  Link,
  Container,
  Box,
  List,
  ListItemIcon,
} from '@mui/material';
import LogoWhiteIcon from 'public/assets/svg/Logo-white';
import {
  NoPaddingListItem,
  ContainerStyle,
  GridItemStyle,
  BoxTextStyle,
  SocialIconsStyle,
  LinkListStyle,
  ListItemStyle,
  ListItemIcons,
} from 'public/assets/styles/footer-style';
import { FbFooterIcon } from 'public/assets/svg/fb-icon';
import { InstagramFooterIcon } from 'public/assets/svg/instagram-icon';
import { LinkedInFooterIcon } from 'public/assets/svg/linkedin-icon';
import { EmailIcon } from 'public/assets/svg/email-icon';
import { TwitterFooterIcon } from 'public/assets/svg/twitter-icon';
import { RatingStarsIcon } from 'public/assets/svg/rating-stars-icon';
import { PhoneIcon } from 'public/assets/svg/phone-icon';
import { LocationPinIcon } from 'public/assets/svg/location-pin-icon';
import { ClutchIcon } from 'public/assets/svg/clutch-icon';

const Footer = () => {
  return (
    <Box component="div" style={ContainerStyle}>
      <Container maxWidth="lg">
        <Grid container columnSpacing={11}>
          <Grid item xs={12} sm={3} sx={GridItemStyle}>
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
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Services</Typography>
            <List disablePadding>
              <NoPaddingListItem>
                <Link href="#" sx={ListItemStyle}>
                  Web Development
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={ListItemStyle}>
                  Mobile Development
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={ListItemStyle}>
                  Product Design
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={ListItemStyle}>
                  UI/UX Design
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={ListItemStyle}>
                  DevOps
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={ListItemStyle}>
                  Quality Assurance (QA)
                </Link>
              </NoPaddingListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Quick Links</Typography>
            <List disablePadding>
              <NoPaddingListItem>
                <Link href="#" sx={ListItemStyle}>
                  About
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={ListItemStyle}>
                  Services
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={ListItemStyle}>
                  Portfolio
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={ListItemStyle}>
                  Careers
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={ListItemStyle}>
                  Blog
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={ListItemStyle}>
                  Contact Us
                </Link>
              </NoPaddingListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Get In Touch</Typography>
            <List disablePadding>
              <NoPaddingListItem>
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
              </NoPaddingListItem>
              <NoPaddingListItem>
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
              </NoPaddingListItem>
              <NoPaddingListItem>
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
              </NoPaddingListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
