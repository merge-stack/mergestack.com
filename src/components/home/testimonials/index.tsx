import React, { useState } from 'react';
import {
  Paper,
  Typography,
  IconButton,
  Box,
  Rating,
  Container,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import testimonialsData from './testimonials.json';
import { blue } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem',
    backgroundColor: '#f7f7f7',
    marginBlock: '2rem',
    width: '98.5vw',
  },
  containers: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
  title: {
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
    backgroundColor: 'transparent',
    gap: '1.625rem',
    border: '1px solid #e1e1e1',
    borderRadius: '15px',
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  testimonialContainer: {
    display: 'flex',
    gap: '2rem',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      flexWrap: 'nowrap',
    },
  },
  authorImage: {
    width: '100%',
    borderRadius: '50%',
  },
  navigationButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 16,
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
  
    // const handleNext = () => {
    //   setActiveSlide((prevSlide) => (prevSlide + 1) % totalCircles);
    // };
  
    // const handlePrev = () => {
    //   setActiveSlide(
    //     (prevSlide) => (prevSlide - 1 + totalCircles) % totalCircles,
    //   );
    // };
  
    const getVisibleTestimonials = () => {
      const start = activeSlide * itemsPerSlide;
      return testimonialsData.slice(start, start + itemsPerSlide);
    };

  return (
    <Box className={classes.root}>
      <Container className={classes.containers} maxWidth="lg">
        <Typography variant="h2" className={classes.title}>
          See what people
          <br />
          are saying about us
        </Typography>

        <Box className={classes.testimonialContainer}>
          {getVisibleTestimonials().map((testimonialsData) => (
            <Paper
              className={classes.testimonialWrapper}
              elevation={1}
              key={testimonialsData.id}
            >
              <Box display="flex" flexDirection="column" gap="0.25rem">
                <Rating name="size-medium" defaultValue={5} disabled />
                <Typography fontWeight="900" variant="h6">
                  {testimonialsData.title}
                </Typography>
                <Typography variant="body1">{testimonialsData.text}</Typography>
              </Box>
              <Box display="flex" gap="1rem">
                <Image
                  alt="Author"
                  src={testimonialsData.img}
                  width={55}
                  height={55}
                />
                <Box>
                  <Typography fontWeight="900" variant="body1">
                    {testimonialsData.author}
                  </Typography>
                  <Typography variant="body2">
                    {testimonialsData.designation}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

        <div className={classes.circlesContainer}>
          <>
            {Array.from({ length: totalCircles }, (_, index) => (
              <IconButton
                key={index}
                onClick={() => setActiveSlide(index)} // Set the active slide on circle click
              >
                <CircleIcon
                  fontSize="large"
                  color={index === activeSlide ? 'primary' : 'disabled'} // Set color based on the active slide
                  className={`${classes.circleIcon} ${
                    index === activeSlide ? 'active' : ''
                  }`}
                />
              </IconButton>
            ))}
          </>
        </div>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
