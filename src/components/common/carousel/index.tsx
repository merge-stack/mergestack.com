import React, { useState, useEffect } from 'react';
import { Container, Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface Image {
  img: string;
  alt: string;
}

interface ICarouselProps {
  images: Image[];
}

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  slideImgBox: {
    display: 'flex',
    justifyContent: 'space-between',
    maxHeight: '100%',
    overflow: 'hidden',
    '@media (max-width: 1000px)': {
      flexWrap: 'wrap',
      gap: '2rem',
      justifyContent: 'center',
      '& > img': {
        width: 'fit-content',
      },
    },
  },
  slideAnimation: {
    display: 'flex',
    transition: 'transform 1s ease-in-out',
  },
  slideOut: {
    transform: 'translateX(-100vw)',
  },
  slideIn: {
    transform: 'translateX(0%)',
  },
}));

const ImageCarousel: React.FC<ICarouselProps> = ({ images }) => {
  const classes = useStyles();
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [slideOut, setSlideOut] = useState(false);

  const imagesPerSet = 4;
  const totalSets = Math.ceil(images.length / imagesPerSet);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideOut(true);
      setTimeout(() => {
        setCurrentSetIndex((prevIndex) => (prevIndex + 1) % totalSets);
        setSlideOut(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSets]);

  const renderImages = () => {
    const start = currentSetIndex * imagesPerSet;
    const end = start + imagesPerSet;
    const visibleImages = images.slice(start, end);

    return visibleImages.map((image, index) => (
      <Box
        key={index}
        component="img"
        src={image.img}
        alt={image.alt}
        className={`${classes.slideAnimation} ${
          slideOut ? classes.slideOut : classes.slideIn
        }`}
      />
    ));
  };

  return (
    <Container maxWidth="md" className={classes.slideImgBox}>
      {renderImages()}
    </Container>
  );
};

export default ImageCarousel;
