import * as React from 'react';
import { Box, Container, Typography, Grid, Button, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import ServicesIntroBanner from 'public/assets/images/servicesIntroBanner.png';

const useStyles = makeStyles((theme : Theme) => ({
  servicesTextRoot: {
    paddingBlock: '4rem',
    backgroundColor: theme.palette.custom.main,
  },
  LeftTextColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '1rem',

    '@media (max-width: 600px)': {
      alignItems: 'normal',
    },

    '& > h3': {
      fontWeight: 600,
      margin: 0,

      '@media (max-width: 600px)': {
        fontSize: '2rem',
        textAlign: 'center',
      },
    },

    '& > p': {
      '@media (max-width: 600px)': {
        textAlign: 'center',
      },
    },
  },
  servicesBtn: {
    borderRadius: '20px',
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
    color: theme.palette.background.default,
    fontSize: '1rem',
  },
}));

export function ServicesTextSection() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.servicesTextRoot}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5} className={classes.LeftTextColumn}>
            <Typography variant="h3" gutterBottom>
              Why choose services from Mergestack?
            </Typography>
            <Typography variant="body1" paragraph>
              Mergestack services provide businesses with an edge over the
              competition with a variety of benefits. Opting for outsourced IT
              services improve the efficiency of business and build trust with
              customers and clients. Our services can be tailored to meet
              specific needs to match your specific goals.
            </Typography>
            <Button variant="contained" className={classes.servicesBtn}>
              Get IN TOUCH
            </Button>
          </Grid>

          <Grid item xs={12} sm={7}>
            <Box
              component="img"
              src={`${ServicesIntroBanner.src}`}
              alt="Two Column Image"
              style={{ width: '100%', maxWidth: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
