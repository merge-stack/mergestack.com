import * as React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import BlogBannerImage from 'public/assets/images/BlogBanner.png';
import TextBadge from 'src/components/common/TextBadge';

const useStyles = makeStyles({
  BlogRoot: {
    padding: '4rem 0 2rem',
  },
  BlogBannerTitle: {
    textAlign: 'center',
    marginBottom: '2rem',
    '& > h2': {
      fontWeight: 600,
      lineHeight: 1.2,
      '@media (max-width: 600px)': {
        fontSize: '1.875rem',
        marginBlock: '1rem'
      },
    },

    '& > h6': {
      color: '#00000099',
      '@media (max-width: 600px)': {
        fontSize: '1.2rem'
      },
    },
  },
  BlogBannerContainer: {
    padding: '3rem',
    backgroundColor: '#f5f5f5',
    borderRadius: '15px',
  },
  LeftTextColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',

    '@media (max-width: 600px)': {
      alignItems: 'normal',
    },

    '& > h4': {
      fontWeight: 600,

      '@media (max-width: 600px)': {
        fontSize: '1.5rem',
        textAlign: 'center',
      },
    },

    '& > p': {
      color: '#00000099',
      '@media (max-width: 600px)': {
        textAlign: 'center',
      },
    },
  },
  readMoreBtn: {
    padding: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: '#242627',
    fontWeight: 600,
    fontSize: '0.75rem',
    textTransform: 'none',
  },
});

export function BlogBanner() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.BlogRoot}>
      <Container maxWidth='lg' className={classes.BlogBannerTitle}>
        <TextBadge size="small" text="Blog" />
        <Typography variant="h2">The Mergestack Blog</Typography>
        <Typography variant="h6" fontWeight={400} gutterBottom>
          Our official blog with news, technology advice, and business culture.
        </Typography>
      </Container>

      <Container maxWidth="lg" className={classes.BlogBannerContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5} className={classes.LeftTextColumn}>
            <Typography variant="h4" gutterBottom>
              How startups are cutting cloud costs, renegotiating deals with
              service providers
            </Typography>
            <Typography variant="body1" gutterBottom>
              As global macroeconomic conditions worsen and funding slowdown
              continues, Indian startups are cutting their spends on an integral
              part of tech businesses.
            </Typography>
            <Button variant="contained" className={classes.readMoreBtn}>
              Read Full Story
            </Button>
          </Grid>

          <Grid item xs={12} sm={7}>
            <Box
              component="img"
              src={`${BlogBannerImage.src}`}
              alt="Two Column Image"
              style={{ width: '100%', maxWidth: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
