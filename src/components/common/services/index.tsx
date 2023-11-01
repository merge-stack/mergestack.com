import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ServicesBox from 'src/components/common/services/services';
import { WebDevIcon } from 'src/components/svg/webDevIcon';
import servicesData from 'src/components/common/services/services.json';

const useStyles = makeStyles({
  servicesTitle: {
    fontSize: '60px',
    fontWeight: '600',
    lineHeight: 1,
    textAlign: 'center',
    '@media (max-width: 1000px)': {
      textAlign: 'center',
      fontSize: '2rem',
      textTransform: 'Capitalize',
      lineHeight: 'normal',
    },
  },
  servicesContainer: {
    paddingBlock: '4rem',
  },
  servicesGridContainer: {
    marginBlock: '2rem',
    '@media (max-width: 600px)': {},
  },
});

const Services = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.servicesContainer}>
      <Typography className={classes.servicesTitle} variant="h2" component="h1">
        We Offer a Wide
        <br />
        Variety of IT Services
      </Typography>
      <Grid
        className={classes.servicesGridContainer}
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