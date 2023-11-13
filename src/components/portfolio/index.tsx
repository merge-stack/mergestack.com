import * as React from 'react';
import { Box, Container, Typography, Theme, Grid, Button } from '@mui/material';

import TextBadge from 'src/components/common/TextBadge';
import portfolioData from 'src/components/portfolio/portfolio.json';
import { useStyles } from 'src/components/portfolio/style';

export function Portfolio() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.portfolioRoot}>
      <TextBadge size="small" text="portfolio" />
      <Box component="div" className={classes.titleWrapper}>
        <Typography variant="h2" fontWeight="600">
          Projects We’ve Delivered
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          Over the past 10 years, we have designed and built a wide range of
          high-quality products from scratch. Our team has finished various web
          and mobile apps related to various spheres including e-learning,
          healthcare, e-commerce, advertising, augmented reality, action sports,
          finance and sharing economy. See out Portfolio below.
        </Typography>
      </Box>

      <Container>
        {portfolioData.map((item, index) => (
          <Grid container key={index} className={classes.portfolioContainer}>
            <Grid item xs={12} sm={6} className={classes.portfolioItem}>
              <Typography variant="body1"> {item.id}. </Typography>
              <Box component="div" className={classes.portfolioTextWrapper}>
                <Typography variant="h3"> {item.title} </Typography>
                <Typography variant="body1"> {item.content} </Typography>
              </Box>
              <Button variant="contained" disableElevation>
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box component="img" src={item.img} maxWidth="100%" />
            </Grid>
          </Grid>
        ))}
      </Container>
    </Container>
  );
}
