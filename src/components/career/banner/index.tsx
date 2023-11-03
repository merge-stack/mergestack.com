import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import TextBadge from 'src/components/common/TextBadge';
import CareersBannerImage from 'public/assets/images/CareersBannerImage.png'

const useStyles = makeStyles((theme) => ({
  careerRoot: {
    paddingBlock: '3rem',
  },
  careerBannerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },
  careerTitleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',

    '& > h2': {
      fontWeight: 600,

      '@media (max-width: 600px)': {
        textAlign: 'center',
        fontSize: '2.5rem',
      },
    },

    '& > p': {
      color: '#00000099',
      fontSize: '20px',
      textAlign: 'center',

      '@media (max-width: 600px)': {
        width: '100%',
        fontSize: '1rem',
      },
    },
  },
}));

export function CareersBanner() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.careerRoot}>
      <Container maxWidth="lg" className={classes.careerBannerContainer}>
        <Box component="div" className={classes.careerTitleWrapper}>
          <TextBadge text="career" size="small" />
          <Typography variant="h2">Start your journey</Typography>
          <Typography variant="body1">
          Grow your career as we grow. Join the team that&apos;s changing IT services
          </Typography>
        </Box>

        <Box component="img" src={`${CareersBannerImage.src}`} maxWidth="100%" />
      </Container>
    </Box>
  );
}
