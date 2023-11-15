// components/ImageCarousel.tsx

import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface Image {
  img: string;
  alt: string;
}

interface ICarouselProps {
  images: Image[];
}

const useStyles = makeStyles((theme: Theme) => ({
    slideImgBox: {
        display: 'flex',
        justifyContent: 'space-between',
        maxHeight: '100%',
        '@media (max-width: 1000px)': {
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'center',
            '& > img': {
                width: 'fit-content'
            }
          },
    }
}));

const ImageCarousel: React.FC<ICarouselProps> = ({ images }) => {
    const classes = useStyles();
    const [currentSetIndex, setCurrentSetIndex] = useState(0);

    const imagesPerSet = 4;
    const totalSets = Math.ceil(images.length / imagesPerSet);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSetIndex((prevIndex) => (prevIndex + 1) % totalSets);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [totalSets]);
  
    const renderImages = () => {
      const start = currentSetIndex * imagesPerSet;
      const end = start + imagesPerSet;
      const visibleImages = images.slice(start, end);
  
      return visibleImages.map((image, index) => (
    <Box key={index} component="img" src={image.img} alt={image.alt} />
    ));
  };

  return <Container maxWidth="md" className={classes.slideImgBox}>{renderImages()}</Container>;
};

export default ImageCarousel;
