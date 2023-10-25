import React from 'react';
import { Grid, Typography, Button, Paper, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HomeBanner from 'public/assets/images/homeBanner.png';

const useStyles = makeStyles({
  backgroundContainer: {
    backgroundImage: `url(${HomeBanner.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingBlock: '2rem !important',
    marginBlock: '1rem',
  },
  gridItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '3rem',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  heading: {
    fontSize: '60px',
    fontWeight: '700',
    lineHeight: 1,
  },
  tagline: {
    fontSize: '30px',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  btnClass: {
    fontSize: '12px',
    fontWeight: '600',
    borderRadius: '44px !important',
    backgroundColor: '#4FB0E3 !important',
  },
});

const HomepageBanner = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.backgroundContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className={classes.gridItems}>
          <Box className={classes.textContainer} component="div">
            <Typography className={classes.heading}>
              We manage your IT, so you can manage your business.
            </Typography>
            <Typography className={classes.tagline}>
              Take charge of your business continuity with innovative IT
              solutions
            </Typography>
          </Box>
          <Button variant="contained" className={classes.btnClass}>
            Schedule a Free Consultation
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomepageBanner;
