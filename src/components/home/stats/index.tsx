import React, { Fragment } from 'react';
import { Grid, Box, Paper, Typography, Container } from '@mui/material';
import data from 'src/components/home/stats/stats.json';
import { ReviewIcon } from 'src/components/svg/review-icon';
import { CompletedIcon } from 'src/components/svg/completed-icon';
import { TrackIcon } from 'src/components/svg/track-icon';
import { CustomerService } from 'src/components/svg/customer-service-icon';
import useStyles from 'src/components/home/stats/style';

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
      <Paper elevation={2} className={classes.statsContainerroot}>
        <Container maxWidth="lg">
          <Grid container spacing={0} className={classes.statsContainer}>
            {data.map((item, index) => (
              <Fragment key={index}>
                <Grid item xs={12} sm={12} md={2}>
                  <Box component="div" className={classes.statsWrapper}>
                    {iconComponents[item.icon]}

                    <Box className={classes.statsTextWrapper}>
                      <Box component="div" className={classes.statsTitleWrapper}>
                        <Typography className={classes.statsTitle} variant="h4">
                          {item.title}
                        </Typography>
                        <Typography className={classes.statSubtitle} variant="h6">
                          {item.subtitle}
                        </Typography>
                      </Box>
                      <Typography className={classes.statsTagline} variant="body1">
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
              </Fragment>
            ))}
          </Grid>
        </Container>
      </Paper>
      <Box height="50vh"></Box>
    </>
  );
};

export default Stats;
