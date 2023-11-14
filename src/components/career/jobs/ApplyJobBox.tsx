import React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Divider,
} from '@mui/material';

import JobsData from 'src/components/career/jobs/jobs.json';
import { useStyles } from 'src/components/career/style';
import { FbFooterIcon } from 'src/components/svg/FbIcon';
import { InstagramFooterIcon } from 'src/components/svg/InstagramIcon';
import { LinkedInFooterIcon } from 'src/components/svg/LinkedinIcon';
import { TwitterFooterIcon } from 'src/components/svg/TwitterIcon';

const ApplyJobBox: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleApplyNowClick = () => {
    router.push('/applyJob');
  };

  return (
    <Paper elevation={2} className={classes.applyJob}>
      <Container className={classes.applyJobWrapper}>
        <Box>
          <Typography variant="h5">Interested in this job?</Typography>
          <Button
            onClick={handleApplyNowClick}
            disableElevation
            variant="contained"
          >
            Apply Now
          </Button>
        </Box>
        <Box>
          <Typography variant="h6">Share This Job</Typography>
          <Box component="div" display="flex" gap="0.5rem">
            <FbFooterIcon /> <TwitterFooterIcon /> <LinkedInFooterIcon />{' '}
            <InstagramFooterIcon />
          </Box>
        </Box>
        <Divider variant="middle" />
        <Box component="div" className={classes.otherJobs}>
          <Typography variant="h5">Other Jobs</Typography>
          <Box component="div">
            <Typography variant="h6">Senior Project Manager</Typography>
            <Typography variant="body2">(Lahore)</Typography>
          </Box>
          <Box component="div">
            <Typography variant="h6">Team-lead 1C-Bitrix</Typography>
            <Typography variant="body2">(Lahore)</Typography>
          </Box>
          <Box component="div">
            <Typography variant="h6">Senior PHP Developer</Typography>
            <Typography variant="body2">(Lahore)</Typography>
          </Box>
          <Button variant="text">Show All Jobs</Button>
        </Box>
      </Container>
    </Paper>
  );
};

export default ApplyJobBox;
