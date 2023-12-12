import React from 'react';
import { Grid, Box, Paper, Typography, Container, Grow } from '@mui/material';
import data from 'src/components/home/workingCycle/steps.json';
import { BulbIcon } from 'src/components/svg/BulbIcon';
import { WorkerIcon } from 'src/components/svg/WorkersIcon';
import { ExecuteIcon } from 'src/components/svg/ExecuteIcon';
import { BuildingIcon } from 'src/components/svg/Building';
import { CurvedArrowUp } from 'src/components/svg/CurvedArrowUpIcon';
import { CurvedArrowDown } from 'src/components/svg/CurvedArrowDownIcon';
import useStyles from 'src/components/home/workingCycle/style';
import { useInView } from 'react-intersection-observer';

const iconComponents: { [key: string]: React.ReactElement } = {
  'BulbIcon': <BulbIcon />,
  'TestingIcon': <WorkerIcon />,
  'ExecuteIcon': <ExecuteIcon />,
  'CareIcon': <BuildingIcon />,
};

const WorkingCycle = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const classes = useStyles();

  return (
    <Grow in={inView} timeout={500}>
    <Box ref={ref} component="div" className={classes.workingCycleRoot}>
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
    </Grow>
  );
};

export default WorkingCycle;
