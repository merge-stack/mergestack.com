import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

import JobsData from 'src/components/career/jobs/jobs.json';
import { useStyles } from 'src/components/career/style';
import { TimeIcon } from 'src/components/svg/TimeIcon';
import { LocationIcon } from 'src/components/svg/LocationIcon';
import { ExperienceIcon } from 'src/components/svg/ExperienceIcon';
import { EmploymentIcon } from 'src/components/svg/EmploymentIcon';

interface InformationCardProps {
  jobId: string;
}

const InformationCard: React.FC<InformationCardProps> = ({ jobId }) => {
  const classes = useStyles();
  const selectedJob = JobsData.find((job) => job.id === jobId);

  return (
    <Box>
    <Grid container spacing={3} className={classes.additionalInfo}>
      <Grid item xs={4}>
        <Paper elevation={0} className={classes.additionalInfoCard}>
            <EmploymentIcon/>
          <Typography variant="body1">Employment</Typography>
          <Typography variant="h6">
            {selectedJob ? selectedJob.status : 'N/A'}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper elevation={0} className={classes.additionalInfoCard}>
          <LocationIcon/>
          <Typography variant="body1">City:</Typography>
          <Typography variant="h6">
            {selectedJob ? selectedJob.location : 'N/A'}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper elevation={0} className={classes.additionalInfoCard}>
          <LocationIcon/>
          <Typography variant="body1">City:</Typography>
          <Typography variant="h6">
            {selectedJob ? selectedJob.location : 'N/A'}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper elevation={0} className={classes.additionalInfoCard}>
          <TimeIcon/>
          <Typography variant="body1">Schedule</Typography>
          <Typography variant="h6">
            {selectedJob ? selectedJob.status : 'N/A'}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper elevation={0} className={classes.additionalInfoCard}>
          <ExperienceIcon/>
          <Typography variant="body1">Experience:</Typography>
          <Typography variant="h6">
            {selectedJob ? selectedJob.experience : 'N/A'}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper elevation={0} className={classes.additionalInfoCard}>
          <ExperienceIcon/>
          <Typography variant="body1">Experience:</Typography>
          <Typography variant="h6">
            {selectedJob ? selectedJob.experience : 'N/A'}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    </Box>
  );
};

export default InformationCard;
