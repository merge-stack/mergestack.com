import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ServicesBox from './services';
import { WebDevIcon } from 'src/components/svg/webDevIcon';
import servicesData from './services.json';

const useStyles = makeStyles({
  heading: {
    fontSize: '60px',
    fontWeight: '600',
    lineHeight: 1,
    textAlign: 'center',
  },
  container: {
    paddingBlock: '4rem',
  },
  gridContainer: {
    marginBlock: '2rem',
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
      <Grid
        className={classes.gridContainer}
        container
        columnSpacing={2}
        rowSpacing={6}
      >
        {servicesData.map((service) => (
          <Grid item xs={12} sm={4} key={service.id}>
            <ServicesBox
              icon={<WebDevIcon />}
              heading={service.heading}
              content={service.content}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
