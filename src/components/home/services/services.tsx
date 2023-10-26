import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  gridRoot: {
    '@media (max-width: 600px)': {
      gap: '1rem',
      boxShadow: '0 0 2px #ccc',
      borderRadius: '10px',
      padding: '1rem'
    },
  },
  iconsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  heading: {
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: 1,
    '@media (max-width: 600px)': {
      textAlign: 'center',
    },
  },
  tagline: {
    fontSize: '16px',
    color: '#6D6D6D',
    '@media (max-width: 600px)': {
      textAlign: 'center',
    },
  },
});

interface ServicesBoxProps {
  icon: React.ReactElement;
  heading: string;
  content: string;
}

const ServicesBox: React.FC<ServicesBoxProps> = ({
  icon,
  heading,
  content,
}) => {
  const classes = useStyles();

  return (
    <Paper elevation={0}>
      <Grid container className={classes.gridRoot}>
        <Grid item xs={12} sm={3}>
          <Box className={classes.iconsWrapper}>{icon}</Box>
        </Grid>
        <Grid item xs={12} sm={9} className={classes.textWrapper}>
          <Typography className={classes.heading} variant="h6">
            {heading}
          </Typography>
          <Typography className={classes.tagline} variant="body1">
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ServicesBox;
