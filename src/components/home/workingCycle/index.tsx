import React from 'react';
import { Grid, Box, Paper, Typography, Container } from '@mui/material';
import data from 'src/components/home/workingCycle/steps.json';
import { BulbIcon } from 'src/components/svg/bulb-icon';
import { WorkerIcon } from 'src/components/svg/workers-icon';
import { ExecuteIcon } from 'src/components/svg/execute-icon';
import { BuildingIcon } from 'src/components/svg/building';
import { CurvedArrowUp } from 'src/components/svg/curved-arrow-up';
import { CurvedArrowDown } from 'src/components/svg/curved-arrow-down';
import useStyles from 'src/components/home/workingCycle/style';

const iconComponents: { [key: string]: React.ReactElement } = {
  'bulb-icon': <BulbIcon />,
  'testing-icon': <WorkerIcon />,
  'execute-icon': <ExecuteIcon />,
  'care-icon': <BuildingIcon />,
};

const WorkingCycle = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.workingCycleRoot}>
      <Typography className={classes.workingCycleTitle} variant="h2">
        Our Working Cycle
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={5} className={classes.stepContainer}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Box component="div" className={classes.stepWrapper}>
                <Paper elevation={1} className={classes.iconWrapper}>
                  <Paper elevation={0} className={classes.stepNumber}>
                    0{item.id}
                  </Paper>
                  {iconComponents[item.icon]}
                </Paper>
                <Box display="flex" flexDirection="column" gap="1rem">
                  <Typography className={classes.stepHeading} variant="h4">
                    {item.title}
                  </Typography>
                  <Typography className={classes.stepTagline} variant="body1">
                    {item.text}
                  </Typography>
                </Box>
                {index < data.length - 1 && (
                  <Box
                    component="div"
                    className={
                      index % 2 === 0
                        ? classes.stepArrowUp
                        : classes.stepArrowDown
                    }
                  >
                    {index % 2 === 0 ? <CurvedArrowUp /> : <CurvedArrowDown />}
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkingCycle;
