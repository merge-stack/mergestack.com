// components/ImageCarousel.tsx
import React from 'react';
import { Box, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

interface ImageCarouselProps {
  className?: string;
  images: string[];
}

const useStyles = makeStyles((theme: Theme) => ({
  carouselRoot: {
    '& > div > div > div > div > div > div': {
      display: 'flex',
      justifyContent: 'space-evenly'
    },
  },
}));

const ImageCarousel: React.FC<ImageCarouselProps> = ({ className, images }) => {
  const classes = useStyles();
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 4) {
    groupedImages.push(images.slice(i, i + 4));
  }

  return (
    <Carousel
      className={`${classes.carouselRoot} ${className}`}
      autoPlay={true}
      height={50}
      interval={4000}
      duration={3000}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={false}
      navButtonsAlwaysInvisible={true}
      swipe={true}
      cycleNavigation={true}
    >
      {groupedImages.map((imageGroup, index) => (
        <Box component='div' key={index}>
          {imageGroup.map((image, subIndex) => (
            <Box component={'img'} key={subIndex} src={image} alt={`slide-${index}-${subIndex}`} />
          ))}
        </Box>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
