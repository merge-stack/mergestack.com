import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import TextBadge from 'src/components/common/TextBadge';
import BannerImage from 'public/assets/images/ServicesBanner.png';

const useStyles = makeStyles((theme) => ({
  servicesRoot: {
    paddingBlock: '3rem',
  },
  servicesBannerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },
  servicesTitleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',

    '& > h2': {
      fontWeight: 600,
    },

    '& > p': {
      color: '#00000099',
      fontSize: '20px',
      textAlign: 'center',
      width: '95%',
    },
  },
  servicesDescription: {
    textAlign: 'center',
    fontSize: '20px',
    width: '71%',
    color: '#242627',
  },
}));

export function ServicesBanner() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.servicesRoot}>
      <Container maxWidth="lg" className={classes.servicesBannerContainer}>
        <Box component="div" className={classes.servicesTitleWrapper}>
          <TextBadge text="services" size="small" />
          <Typography variant="h2">Services & Solutions</Typography>
          <Typography variant="body1">
            Take your company to new heights by investing in our reliable and
            efficient technology solutions.
          </Typography>
        </Box>

        <Box component="img" src={`${BannerImage.src}`} />
        <Typography variant="body1" className={classes.servicesDescription}>
          Mergestack is your trusted partner for IT management, data security,
          and cloud technology with one goal in mind: to transform the way your
          business works in order to save you time and money.
        </Typography>
      </Container>
    </Box>
  );
}
