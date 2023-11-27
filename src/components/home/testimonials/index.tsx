import React, { useState } from 'react';
import {
  Paper,
  Typography,
  IconButton,
  Box,
  Rating,
  Container,
  Theme,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import testimonialsData from 'src/components/home/testimonials/testimonials.json';
import TestimonialCarousel from './TestimonialCarousel';

const useStyles = makeStyles((theme: Theme) => ({
  testimonialRoot: {
    paddingBlock: '4rem',
    backgroundColor: theme.palette.custom.main,
    width: '98.5vw',
  },
  testimonialContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
  },
  testimonialTitle: {
    textAlign: 'center',
    fontWeight: 600,

    '@media (max-width: 600px)': {
      fontSize: 'x-large',
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
  circleIcon: {
    fontSize: '1rem',
    '& .active': {
      fill: 'blue',
      color: 'blue',
    },
  },
  circlesContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const itemsPerSlide = 3;

const TestimonialSection: React.FC = () => {
  const classes = useStyles();
  const [activeSlide, setActiveSlide] = useState(0);

  const totalCircles = Math.ceil(testimonialsData.length / itemsPerSlide);
  const getVisibleTestimonials = () => {
    const start = activeSlide * itemsPerSlide;

    return testimonialsData.slice(start, start + itemsPerSlide);
  };

  return (
    <Box className={classes.testimonialRoot}>
      <Container className={classes.testimonialContainer} maxWidth="lg">
        <Typography variant="h2" className={classes.testimonialTitle}>
          See what people
          <br />
          are saying about us
        </Typography>
        <TestimonialCarousel />
      </Container>
    </Box>
  );
};

export default TestimonialSection;
