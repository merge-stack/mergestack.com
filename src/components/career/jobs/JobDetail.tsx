// JobDetail.tsx

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

import LayoutHoc from 'src/layoutHoc';
import JobsData from 'src/components/career/jobs/jobs.json';
import { useStyles } from 'src/components/career/style';

interface JobDetailProps {
  jobId: string;
}

const JobDetail: React.FC<JobDetailProps> = ({ jobId }) => {
  const classes = useStyles();
  const job = JobsData.find((job) => job.id === jobId);

  if (!job) {
    return (
      <Container maxWidth="lg" className={classes.jobDetailRoot}>
        <Typography variant="h4" fontWeight="600">
          Job Not Found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className={classes.jobDetailRoot}>
      <Typography variant="h2" fontWeight="600">
        Open Positions
      </Typography>

      <Grid container className={classes.primaryInfo}>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h3" fontWeight="800">
              {job.title}
            </Typography>
            <Typography variant="body1">{job.desc}</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Typography variant="body1">
              Location: {job.location}, Status: {job.status}, Date: {job.date}
            </Typography>
            {/* Add other details here */}
          </Box>
        </Grid>
      </Grid>

      <Box className={classes.companyDesc}>
        <Typography variant="h5" fontWeight="600" gutterBottom>
          Company Description
        </Typography>
        <Typography variant="body1">
          Mergestack is a US based global web and mobile application service
          provider with the distinctive talent to give a unique and unmatched
          experience to our clients. Headquartered in California, while having
          our core team in Pakistan, our company is able to work around the
          clock to provide software and IT solutions to our clients around the
          globe.
        </Typography>
      </Box>

      <Box className={classes.jobDesc}>
        <Typography variant="h5" fontWeight="600" gutterBottom>
          Job Description
        </Typography>
        <Typography variant="body1" paragraph>
          Mergestack is looking to on-board a <b>{job.title}</b> to help us
          create products that users love, that integrate design, functionality,
          and business solutions, build an inclusive and interactive process
          from envisioning a product strategy to correctly portraying the
          product roadmap, and embrace modern product leadership to form and
          motivate product teams.
        </Typography>

        <List>
          {job.responsibilities ? (
            <>
              <Typography variant="h5" fontWeight="600" gutterBottom>
                Responsibilities
              </Typography>
              <List>
                {job.responsibilities.map((responsibility, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={responsibility} />
                  </ListItem>
                ))}
              </List>
            </>
          ) : null}
        </List>
      </Box>
    </Container>
  );
};

export default LayoutHoc(JobDetail as React.FC<{ [key: string]: any }>);
