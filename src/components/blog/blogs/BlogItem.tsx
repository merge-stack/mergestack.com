import React from 'react';
import { Typography, Paper, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  blogItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    height: '100%',
    border: '1px solid #00000026',
    borderRadius: '15px',
    gap: '1rem',
    '@media (max-width: 600px)': {},
  },
  blogContentWrapper: {
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    gap: '0.75rem',
    '@media (max-width: 600px)': {},
  },
  blogItemTextWrapper: {
    flex: 1,
    maxHeight: '100%',
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    gap: '0.75rem',
    '@media (max-width: 600px)': {},
  },
  blogCategory: {
    fontSize: '12px',
    letterSpacing: '1px',
    color: '#ADADAD',
    lineHeight: 'normal',
    fontWeight: 600,
    '@media (max-width: 600px)': {},
  },
  blogTitle: {
    // fontSize: '18px',
    lineHeight: 'normal',
    fontWeight: 600,
    '@media (max-width: 600px)': {},
  },
  blogContent: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
    '@media (max-width: 600px)': {},
  },
  blogItemBtn: {
    padding: 0,
    color: '#000',
    fontSize: '12px',
    textTransform: 'none',
    '@media (max-width: 600px)': {},
  },
});

interface BlogItemProps {
  img: string;
  category: string;
  title: string;
  content: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  img,
  category,
  title,
  content,
}) => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.blogItemContainer}>
      <Box component="img" src={`${img}`} maxWidth={'100%'} />
      <Box component="div" className={classes.blogItemTextWrapper}>
        <Box component="div" className={classes.blogContentWrapper}>
          <Typography variant="overline" className={classes.blogCategory}>
            {category}
          </Typography>
          <Typography variant="h6" className={classes.blogTitle} gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.blogContent}>
            {content}
          </Typography>
        </Box>
        <Button className={classes.blogItemBtn}>Read more</Button>
      </Box>
    </Box>
  );
};

export default BlogItem;
