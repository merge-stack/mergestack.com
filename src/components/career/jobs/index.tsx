import * as React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

import { useStyles } from 'src/components/career/style';
import TextBadge from 'src/components/common/TextBadge';
import JobsData from 'src/components/career/jobs/jobs.json';
import { CalendarIcon } from 'src/components/svg/calendar-icon';
import { TimeIcon } from 'src/components/svg/time-icon';
import { LocationIcon } from 'src/components/svg/location-icon';

export function ListedJobs() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.careerRoot}>
      <Container maxWidth="lg" className={classes.careerBannerContainer}>
        <Box component="div" className={classes.careerTitleWrapper}>
          <TextBadge text="career" size="small" />
          <Typography variant="h2">Your Career Starts Here</Typography>
          <Typography variant="body1" width="75%">
            Can’t find the job you want? Send your resume to{' '}
            <Link href="mailto:email@example.com">email@example.com</Link> , and
            we’ll contact you when a new position opens.
          </Typography>
        </Box>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {JobsData.map((job, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box className={classes.jobItemContainer}>
                  <Typography variant="h6" gutterBottom>
                    {job.title}
                  </Typography>
                  <hr />
                  <Typography variant="body1" paragraph>
                    {job.desc}
                  </Typography>
                  <Box className={classes.additonalInfo}>
                    <Typography variant="body1" paragraph>
                      <LocationIcon />
                      {job.location}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <TimeIcon />
                      {job.status}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <CalendarIcon />
                      {job.date}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
