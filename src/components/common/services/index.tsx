import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import ServicesBox from 'src/components/common/services/services';
import servicesData from 'src/components/common/services/services.json';
import { MobDevIcon } from 'src/components/svg/MobDevIcon';
import { InterfaceIcon } from 'src/components/svg/UiUXIcon';
import { TestingIcon } from 'src/components/svg/TestingIcon';
import { TeamIcon } from 'src/components/svg/TeamIcon';
import { ConsultancyIcon } from 'src/components/svg/ConsultancyIcon';
import { WebDevIcon } from 'src/components/svg/WebDevIcon';

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

const iconComponents: { [key: string]: React.ReactElement } = {
  'webDev-icon': <WebDevIcon />,
  'mobDev-icon': <MobDevIcon />,
  'uiux-icon': <InterfaceIcon />,
  'qa-icon': <TestingIcon />,
  'it-icon': <ConsultancyIcon />,
  'team-icon': <TeamIcon />,
};

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
              icon={iconComponents[service.icon]}
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
