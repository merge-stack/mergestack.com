import React from 'react';
import { Grid, Typography, Button, Paper, Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import HomeBanner from 'public/assets/images/homeBanner.webp';


const useStyles = makeStyles((theme : Theme) => ({
  bannerContainer: {
    backgroundImage: `url(${HomeBanner.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingBlock: '2rem !important',
    marginBlock: '1rem',
    '@media (max-width: 600px)': {
      backgroundImage: 'none',
    },
  },
  bannerGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '3rem',
    '@media (max-width: 600px)': {
      alignItems: 'normal',
      gap: '2rem'
    },
  },
  bannerTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  bannerHeading: {
    fontSize: '60px',
    fontWeight: '700',
    lineHeight: 1,
    '@media (max-width: 1000px)': {
      textAlign: 'left',
      fontSize: '2.5rem',
      textTransform: 'Capitalize',
      lineHeight: 'normal',
    },
  },
  bannerTagline: {
    fontSize: '30px',
    fontWeight: '400',
    lineHeight: 'normal',
    '@media (max-width: 600px)': {
      textAlign: 'left',
      fontSize: '1.5rem',
    },
  },
  bannerBtn: {
    fontSize: '12px',
    fontWeight: '600',
    borderRadius: '44px !important',
    border: `1px solid ${theme.palette.primary.main}`,
    paddingInline: '2rem',
    color: theme.palette.background.default,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.main,
      boxShadow: 'none',
    },
  },
}));

const HomepageBanner = () => {
  const classes = useStyles();
  
  return (
    <Paper elevation={0} className={classes.bannerContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className={classes.bannerGrid}>
          <Box className={classes.bannerTextContainer} component="div">
            <Typography variant='h1' className={classes.bannerHeading}>
              We manage your IT, so you can manage your business.
            </Typography>
            <Typography className={classes.bannerTagline}>
              Take charge of your business continuity with innovative IT
              solutions
            </Typography>
          </Box>
          <Button variant="contained" disableElevation className={classes.bannerBtn}>
            Schedule a Free Consultation
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomepageBanner;
