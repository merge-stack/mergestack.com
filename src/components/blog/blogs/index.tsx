import React, { useState } from 'react';
import { Box, Container, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LoadingButton } from '@mui/lab';

import BlogsData from 'src/components/blog/blogs/blogs.json';
import BlogItem from 'src/components/blog/blogs/BlogItem';
import TextBadge from 'src/components/common/TextBadge';

const useStyles = makeStyles({
  BlogBannerContainer: {
    padding: '3rem 0',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    '& > button:hover': {
      backgroundColor: 'transparent !important',
    },
  },
  loadMoreBtn: {
    color: 'black',
  },
});

export function BlogList() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [blogsToShow, setBlogsToShow] = useState(9);
  const handleLoadMore = () => {
    setLoading(true);
    const newBlogsToShow = blogsToShow + 9;
    setBlogsToShow(newBlogsToShow);
    setLoading(false);
  };

  return (
    <Box component="div">
      <Container maxWidth="lg" className={classes.BlogBannerContainer}>
        <Grid container columnSpacing={4} rowSpacing={5}>
          {BlogsData.slice(0, blogsToShow).map((blog, index) => (
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
        <LoadingButton
          onClick={handleLoadMore}
          loading={loading}
          loadingIndicator="Loading…"
          className={classes.loadMoreBtn}
        >
          <TextBadge text="load more" size="medium" />
        </LoadingButton>
      </Container>
    </Box>
  );
}
