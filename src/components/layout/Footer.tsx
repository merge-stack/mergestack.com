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
  styled,
} from '@mui/material';
import {
  FbFooterIcon,
  InstagramFooterIcon,
  TwitterFooterIcon,
  LinkedInFooterIcon,
  RatingStarsIcon,
  ClutchIcon,
  PhoneIcon,
  LocationPinIcon,
  EmailIcon,
} from 'src/assets/svg/footer-icons';
import logoWhite from '../../assets/images/logoWhite.png';

const NoPaddingListItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
  alignItems:'baseline'
}));

const Footer: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#106897', color: '#fff' }}>
      <Container sx={{ paddingBlock: '2rem' }} maxWidth={'lg'}>
        <Grid container columnSpacing={11}>
          <Grid
            display={'flex'}
            flexDirection={'column'}
            gap={'0.75rem'}
            item
            xs={12}
            sm={3}
          >
            <Box
              sx={{ display: 'block' }}
              component="img"
              alt="Logo Light"
              src={'../../assets/images/logoWhite.png'}
            />
            <Box
              sx={{
                color: 'white',
                fontSize: '1rem',
                fontWeight: 400,
                margin: 0,
              }}
              component={'p'}
            >
              Mergestack is a technology consulting organization that builds,
              designs and delivers top services to enterprises along with
              in-house 1300+ developers.
            </Box>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <FbFooterIcon />
              <InstagramFooterIcon />
              <TwitterFooterIcon />
              <LinkedInFooterIcon />
            </Box>

            <Box
              display={'flex'}
              flexWrap={'wrap'}
              columnGap={'1rem'}
              sx={{
                textTransform: 'uppercase',
                fontSize: '10px',
                letterSpacing: '0.5px',
                fontWeight: '600',
              }}
            >
              Reviewed on
              <RatingStarsIcon />
              <Box display={'flex'} alignItems={'end'} gap={'0.5rem'}>
                <ClutchIcon />
                31 reviews
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Services</Typography>
            <List disablePadding>
              <NoPaddingListItem>
                <Link href="#" sx={{ color: '#fff' }}>
                  Web Development
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={{ color: '#fff' }}>
                  Mobile Development
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={{ color: '#fff' }}>
                  Product Design
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={{ color: '#fff' }}>
                  UI/UX Design
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={{ color: '#fff' }}>
                  DevOps
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={{ color: '#fff' }}>
                  Quality Assurance (QA)
                </Link>
              </NoPaddingListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Quick Links</Typography>
            <List disablePadding>
              <NoPaddingListItem>
                <Link href="#" sx={{ color: '#fff' }}>
                  About
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={{ color: '#fff' }}>
                  Services
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={{ color: '#fff' }}>
                  Portfolio
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={{ color: '#fff' }}>
                  Careers
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={{ color: '#fff' }}>
                  Blog
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <Link href="#" sx={{ color: '#fff' }}>
                  Contact Us
                </Link>
              </NoPaddingListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Get In Touch</Typography>
            <List disablePadding>
              <NoPaddingListItem>
                <ListItemIcon sx={{paddingRight:'0.625rem', minWidth:'auto'}}>
                  <PhoneIcon />
                </ListItemIcon>
                <Link href="#" sx={{ color: '#fff' }}>
                  +(323) 750-1234
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <ListItemIcon sx={{paddingRight:'0.625rem', minWidth:'auto'}}>
                  <EmailIcon />
                </ListItemIcon>
                <Link href="#" sx={{ color: '#fff' }}>
                  info@mergestack.com
                </Link>
              </NoPaddingListItem>
              <NoPaddingListItem>
                <ListItemIcon sx={{paddingRight:'0.625rem', minWidth:'auto'}}>
                  <LocationPinIcon />
                </ListItemIcon>
                <Link href="#" sx={{ color: '#fff' }}>
                  80-C, opposite to bank square market, Block C Model Town,
                  Lahore, 54700
                </Link>
              </NoPaddingListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
