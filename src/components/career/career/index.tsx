import * as React from 'react';
import { Box, Container, Typography, Grid, Button, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import CareerSectionImage from 'public/assets/images/CareerSectionImage.webp';

const useStyles = makeStyles((theme : Theme) => ({
  careerTextRoot: {
    paddingBlock: '4rem',
    backgroundColor: '#f7f7f9',
  },
  LeftTextColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '1rem',
    paddingRight: '1rem',

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
        color: '#00000099',
      '@media (max-width: 600px)': {
        textAlign: 'center',
      },
    },
  },
  careerBtn: {
    borderRadius: '20px',
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: 'none',
    color: '#fff',
    fontSize: '1rem',
    '&:hover' : {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.background.default,
        border: `1px solid ${theme.palette.secondary.main}`,
    },
  },
}));

export function CareerTextSection() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.careerTextRoot}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5} className={classes.LeftTextColumn}>
            <Typography variant="h3" gutterBottom>
                Come on board! Learn more about Tecnologia
            </Typography>
            <Typography variant="body1" paragraph>
            Tecnologia is a global Digital Solutions Company for Fortune 500 and fast-growing organisations alike around the world. Learn who we are and why we are different.
            </Typography>
            <Button variant="contained" disableElevation className={classes.careerBtn}>
              Learn About Company
            </Button>
          </Grid>

          <Grid item xs={12} sm={7}>
            <Box
              component="img"
              src={`${CareerSectionImage.src}`}
              alt="Two Column Image"
              style={{ width: '100%', maxWidth: '100%', borderRadius: '15px' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
