/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import images from 'src/components/about/brands/images.json';

const useStyles = makeStyles((theme: Theme) => ({
  brandsRoot: {
    backgroundColor: theme.palette.background.default,
    padding: '3rem 0 0',
  },
  brandsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  imageList: {
    gap: '0 !important',
    overflow: 'hidden',
    border: '1px solid #E3E8F4',
    borderRadius: '1rem',
    '& :nth-child(5), & :nth-child(6), & :nth-child(7), & :nth-child(8)': {
      borderBottom: 'none',
    },
    '& :nth-child(4), & :nth-child(8)': {
      borderRight: 'none',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: 'repeat(1, 1fr) !important',
      maxHeight: 300,
      overflow: 'auto',
      '& li': {
        borderBottom: '1px solid #E3E8F4 !important',
        borderRight: '1px solid #E3E8F4 !important',
      },
    },
  },
  imageListitems: {
    borderBottom: '1px solid #E3E8F4',
    borderRight: '1px solid #E3E8F4',
    padding: '2rem',
    '& > img': {
      objectFit: 'none !important',
    },
  },
}));

export function Brands() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.brandsRoot}>
      <Container maxWidth="lg" className={classes.brandsContainer}>
        <Typography variant="h2" fontWeight="600" textAlign="center">
          Brands We Work With
        </Typography>
        <ImageList cols={4} className={classes.imageList}>
          {images.map((item) => (
            <ImageListItem key={item.img} className={classes.imageListitems}>
              <img src={item.img} alt={item.alt} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
}
