import * as React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import BlogsData from 'src/components/blog/blogs/blogs.json';
import BlogItem from './blog-item';

const useStyles = makeStyles({
  BlogBannerContainer: {
    padding: '3rem',
    borderRadius: '15px',
  },
});

export function BlogList() {
  const classes = useStyles();

  return (
    <Box component="div">
      <Container maxWidth="lg" className={classes.BlogBannerContainer}>
        <Grid container columnSpacing={4} rowSpacing={5}>
          {BlogsData.map((blog, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <BlogItem
                img={blog.img}
                category={blog.category}
                title={blog.title}
                content={blog.content}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
