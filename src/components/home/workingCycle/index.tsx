import React from 'react';
import { Grid, Box, Paper, Typography, Container } from '@mui/material';
import data from './steps.json';
import { BulbIcon } from 'src/components/svg/bulb-icon';
import { WorkerIcon } from 'src/components/svg/workers-icon';
import { ExecuteIcon } from 'src/components/svg/execute-icon';
import { BuildingIcon } from 'src/components/svg/building';
import { makeStyles } from '@mui/styles';
import { EllipseIcon } from 'src/components/svg/ellipse-icon';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBlock: '2rem',
    width: '98dvw',
    backgroundColor: '#f7f7f7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
  },
  stepContainer: {
    paddingBlock: '2rem',
    '& > :nth-child(even)': {
      marginTop: '4rem',
      '@media (max-width: 600px)': {
        marginTop: '0',
      },
    },
  },
  stepWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  iconWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '100px',

    '& > svg': {
      width: 63,
      height: 63,
    },
  },
  number: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '14px',
    color: '#fff',
    position: 'absolute',
    right: 0,
    top: 0,
    width: 40,
    height: 40,
    borderRadius: '100px',
    background: '#4FB0E3',
    border: '5px solid #fff',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 600,

    '@media (max-width: 600px)': {
      fontSize: 'x-large',
    },
  },
  title: {
    fontSize: '28px !important',
    textAlign: 'center',
    fontWeight: 600,

    '@media (max-width: 600px)': {
      fontSize: 'x-large',
    },
  },
  tagline: {
    textAlign: 'center',

    '@media (max-width: 600px)': {
      fontSize: 'large',
    },
  },
}));

const iconComponents: { [key: string]: React.ReactElement } = {
  'bulb-icon': <BulbIcon />,
  'testing-icon': <WorkerIcon />,
  'execute-icon': <ExecuteIcon />,
  'care-icon': <BuildingIcon />,
};

const WorkingCycle = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <Typography className={classes.heading} variant="h2">
        Our Working Cycle
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={5} className={classes.stepContainer}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Box component="div" className={classes.stepWrapper}>
                <Paper elevation={1} className={classes.iconWrapper}>
                  <Paper elevation={0} className={classes.number}>
                    0{item.id}
                  </Paper>
                  {iconComponents[item.icon]}
                </Paper>
                <Typography className={classes.title} variant="h4">
                  {item.title}
                </Typography>
                <Typography className={classes.tagline} variant="body1">
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkingCycle;
