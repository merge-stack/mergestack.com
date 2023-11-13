// import React from 'react';
// import {
//     Box,
//     Grid,
//     Typography,
//     Paper,
//   } from '@mui/material';

// import JobsData from 'src/components/career/jobs/jobs.json';
// import { useStyles } from 'src/components/career/style';

// const ApplyJobPaper: React.FC = () => {
//     const classes = useStyles();
//   return (
//     <Grid container spacing={2} className={classes.additionalInfo}>
//     {/* 1st Card */}
//     <Grid item xs={4}>
//       <Paper elevation={3} className={classes.additionalInfoCard}>
//         <Typography variant="h6" fontWeight="800">
//           Employment
//         </Typography>
//         <Typography>{job.status === 'Full Time' ? 'Full-Time' : 'Part-Time'}</Typography>
//       </Paper>
//     </Grid>

//     {/* 2nd Card */}
//     <Grid item xs={4}>
//       <Paper elevation={3} className={classes.additionalInfoCard}>
//         <Typography variant="h6" fontWeight="800">
//           Location
//         </Typography>
//         <Typography>{job.location}</Typography>
//       </Paper>
//     </Grid>

//     {/* 3rd Card */}
//     <Grid item xs={4}>
//       <Paper elevation={3} className={classes.additionalInfoCard}>
//         <Typography variant="h6" fontWeight="800">
//           Schedule
//         </Typography>
//         <Typography>Full-Time</Typography>
//       </Paper>
//     </Grid>

//     {/* 4th Card */}
//     <Grid item xs={4}>
//       <Paper elevation={3} className={classes.additionalInfoCard}>
//         <Typography variant="h6" fontWeight="800">
//           Experience
//         </Typography>
//         <Typography>3 years</Typography>
//       </Paper>
//     </Grid>

//     {/* 5th Card */}
//     <Grid item xs={4}>
//       <Paper elevation={3} className={classes.additionalInfoCard}>
//         {/* Add relevant icon for this card */}
//         <Typography variant="h6" fontWeight="800">
//           Additional Heading 1
//         </Typography>
//         <Typography>Additional Info 1</Typography>
//       </Paper>
//     </Grid>

//     {/* 6th Card */}
//     <Grid item xs={4}>
//       <Paper elevation={3} className={classes.additionalInfoCard}>
//         {/* Add relevant icon for this card */}
//         <Typography variant="h6" fontWeight="800">
//           Additional Heading 2
//         </Typography>
//         <Typography>Additional Info 2</Typography>
//       </Paper>
//     </Grid>
//   </Grid>
//   );
// };

// export default ApplyJobPaper;
