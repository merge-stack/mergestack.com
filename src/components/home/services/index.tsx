import React from 'react';
import { Grid, Typography, Button, Paper, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ServicesBox from './services';
import { WebDevIcon } from 'src/components/svg/webDevIcon';
const useStyles = makeStyles({
  heading: {
    fontSize: '60px',
    fontWeight: '600',
    lineHeight: 1,
    textAlign: 'center',
  },
  container: {
    paddingBlock: '2rem',
  },
  
});

const Services = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h2" component="h1">
        We Offer a Wide
        <br />
        Variety of IT Services
      </Typography>
      <Grid className={classes.container} container columnSpacing={2} rowSpacing={4}>
        <Grid item xs={12} sm={4}>
          <ServicesBox
            icon={<WebDevIcon />}
            heading="Web Development"
            content="We carry more than just good coding
        skills. Our experience makes us stand
        out from other web development."
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ServicesBox
            icon={<WebDevIcon />}
            heading="Web Development"
            content="We carry more than just good coding
        skills. Our experience makes us stand
        out from other web development."
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ServicesBox
            icon={<WebDevIcon />}
            heading="Web Development"
            content="We carry more than just good coding
        skills. Our experience makes us stand
        out from other web development."
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ServicesBox
            icon={<WebDevIcon />}
            heading="Web Development"
            content="We carry more than just good coding
        skills. Our experience makes us stand
        out from other web development."
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ServicesBox
            icon={<WebDevIcon />}
            heading="Web Development"
            content="We carry more than just good coding
        skills. Our experience makes us stand
        out from other web development."
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ServicesBox
            icon={<WebDevIcon />}
            heading="Web Development"
            content="We carry more than just good coding
        skills. Our experience makes us stand
        out from other web development."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
