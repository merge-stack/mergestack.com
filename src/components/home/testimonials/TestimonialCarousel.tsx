// components/ImageCarousel.tsx
import React from 'react';
import { Box, Grid, Paper, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import testimonialData from './testimonials.json';

interface ImageCarouselProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  carouselRoot: {
    '& > div > div > div > div > div > div': {
      display: 'flex',
      gap: '1.5rem',
    },
  },

  activeIndicator: {
    color: theme.palette.primary.main,
  },
  hoverIndicator: {
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },

  testimonialWrapper: {
    width: '33%',
    padding: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    backgroundColor: 'transparent',
    gap: '1.625rem',
    border: '1px solid #e1e1e1',
    borderRadius: '15px',
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  slideContainer: {
    display: 'flex',
    gap: '2rem',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      flexWrap: 'nowrap',
    },
  },
}));

const ImageCarousel: React.FC<ImageCarouselProps> = ({ className }) => {
  const classes = useStyles();
  const groupedImages = [];
  for (let i = 0; i < testimonialData.length; i += 3) {
    groupedImages.push(testimonialData.slice(i, i + 3));
  }

  return (
    <Carousel
      className={`${classes.carouselRoot} ${className}`}
      interval={4000}
      duration={500}
      animation="slide"
      indicators={true}
      navButtonsAlwaysVisible={false}
      swipe={true}
      activeIndicatorIconButtonProps={{
        className: classes.activeIndicator,
      }}
      indicatorIconButtonProps={{
        className: classes.hoverIndicator,
      }}
      cycleNavigation={true}
    >
      {groupedImages.map((testimonial, index) => (
        <Box component="div" key={index}>
          {testimonial.map((reviewData) => (
            <Paper
              className={classes.testimonialWrapper}
              elevation={1}
              key={reviewData.id}
            >
              <Box display="flex" flexDirection="column" gap="0.25rem">
                <Rating name="size-medium" defaultValue={5} disabled />
                <Typography fontWeight="900" variant="h6">
                  {reviewData.title}
                </Typography>
                <Typography variant="body1">
                  &quot;{reviewData.text}&quot;
                </Typography>
              </Box>
              <Box display="flex" gap="1rem">
                <Image
                  alt="Author"
                  src={reviewData.img}
                  width={55}
                  height={55}
                />
                <Box>
                  <Typography fontWeight="900" variant="body1">
                    {reviewData.author}
                  </Typography>
                  <Typography variant="body2">
                    {reviewData.designation}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
