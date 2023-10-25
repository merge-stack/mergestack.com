import React from 'react';
import { Grid, Box, Paper, Typography, Container } from '@mui/material';
import data from './steps.json';
import { BulbIcon } from 'src/components/svg/bulb-icon';
import { WorkerIcon } from 'src/components/svg/workers-icon';
import { ExecuteIcon } from 'src/components/svg/execute-icon';
import { BuildingIcon } from 'src/components/svg/building';
import useStyles from './style';

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
