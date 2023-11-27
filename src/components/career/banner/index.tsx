import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useStyles } from 'src/components/career/style';

import TextBadge from 'src/components/common/TextBadge';
import CareersBannerImage from 'public/assets/images/CareersBannerImage.webp'


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

        <Box component="img" src={`${CareersBannerImage.src}`} maxWidth="100%" borderRadius="15px" />
      </Container>
    </Box>
  );
}
