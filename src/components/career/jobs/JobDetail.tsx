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
  Paper,
} from '@mui/material';

import LayoutHoc from 'src/layoutHoc';
import JobsData from 'src/components/career/jobs/jobs.json';
import { useStyles } from 'src/components/career/style';
import ApplyJobBox from 'src/components/career/jobs/ApplyJobBox';
import InformationCard from 'src/components/career/jobs/InformationCard';

interface IJobDetailProps {
  jobId: string;
}

const JobDetail: React.FC<IJobDetailProps> = ({ jobId }) => {
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

      <Grid container spacing={5} className={classes.primaryInfo}>
        <Grid item xs={8} className={classes.cardsWrapper}>
          <Box>
            <Typography variant="h3" fontWeight="800" gutterBottom>
              {job.title}
            </Typography>
            {job.position ? (
              <Paper elevation={0} className={classes.openPositions}>
                <b>{job.position}</b> Positions
              </Paper>
            ) : (
              <Paper elevation={0} className={classes.openPositions}>
                <b>1</b> Positions
              </Paper>
            )}
          </Box>
          <InformationCard jobId={jobId} />
        </Grid>
        <Grid item xs={4}>
          <ApplyJobBox />
        </Grid>
      </Grid>

      <Box className={classes.companyDesc}>
        <Typography variant="h5" fontWeight="800" gutterBottom>
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
        <Typography variant="h5" fontWeight="800" gutterBottom>
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

        <Box>
          {job.responsibilities ? (
            <>
              <Typography variant="h6" fontWeight="800">
                Responsibilities
              </Typography>
              <Box paddingLeft="2rem">
                <List className={classes.listwrapper}>
                  {job.responsibilities.map((responsibility, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={responsibility} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </>
          ) : null}
        </Box>

        <Box>
          {job.qualifications ? (
            <>
              <Typography variant="h6" fontWeight="800">
                Qualifications
              </Typography>
              <Box paddingLeft="2rem">
                <List className={classes.listwrapper}>
                  {job.qualifications.map((responsibility, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={responsibility} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </>
          ) : null}
        </Box>
      </Box>
    </Container>
  );
};

export default LayoutHoc(JobDetail as React.FC<{ [key: string]: any }>);
