import * as React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { useRouter } from 'next/router';

import { useStyles } from 'src/components/career/style';
import TextBadge from 'src/components/common/TextBadge';
import JobsData from 'src/components/career/jobs/jobs.json';
import { CalendarIcon } from 'src/components/svg/CalendarIcon';
import { TimeIcon } from 'src/components/svg/TimeIcon';
import { LocationIcon } from 'src/components/svg/LocationIcon';

export function ListedJobs() {
  const classes = useStyles();
  const router = useRouter();

  const handleJobClick = (jobId: string) => {
    router.push(`/${jobId}`);
  };

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
                <Link onClick={() => handleJobClick(job.id)}>
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
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
