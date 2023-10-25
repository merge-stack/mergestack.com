import React from 'react';
import { Grid, Box, Paper, Typography, Container } from '@mui/material';
import data from './stats.json';
import { ReviewIcon } from 'src/components/svg/review-icon';
import { CompletedIcon } from 'src/components/svg/completed-icon';
import { TrackIcon } from 'src/components/svg/track-icon';
import { CustomerService } from 'src/components/svg/customer-service-icon';
import useStyles from './style';

const iconComponents: { [key: string]: React.ReactElement } = {
  'track-icon': <TrackIcon />,
  'review-icon': <ReviewIcon />,
  'completed-icon': <CompletedIcon />,
  'customer-icon': <CustomerService />,
};

const Stats = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={2} className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={0} className={classes.stepContainer}>
            {data.map((item, index) => (
              <>
                <Grid item xs={12} sm={6} md={2} key={item.id}>
                  <Box component="div" className={classes.stepWrapper}>
                    {iconComponents[item.icon]}

                    <Box className={classes.textWrapper}>
                      <Box component="div" className={classes.titleWrapper}>
                        <Typography className={classes.title} variant="h4">
                          {item.title}
                        </Typography>
                        <Typography className={classes.subtitle} variant="h6">
                          {item.subtitle}
                        </Typography>
                      </Box>
                      <Typography className={classes.tagline} variant="body1">
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                {index < data.length - 1 && (
                  <Grid item xs={0} md={1} className={classes.lineWrapper}>
                    <div className={classes.verticalLine}></div>
                  </Grid>
                )}
              </>
            ))}
          </Grid>
        </Container>
      </Paper>
      <Box height="50vh"></Box>
    </>
  );
};

export default Stats;