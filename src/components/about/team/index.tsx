import React from 'react';
import { Grid, Box, Typography, Container, Button } from '@mui/material';
import { useStyles } from 'src/components/about/team/style';
import TeamData from 'src/components/about/team/team.json';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const TeamSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.teamRoot}>
      <Container maxWidth="lg" className={classes.teamContainer}>
        <Typography variant="h2" className={classes.teamHeading}>
          Meet the
          <br />
          leadership team
        </Typography>
        <Grid container spacing={3}>
          {TeamData.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box component="div" className={classes.teamImageWrapper}>
                <img
                  className={classes.teamImage}
                  src={member.imageUrl}
                  alt={member.name}
                />
              </Box>
              <Box component="div" className={classes.teamTitleWrapper}>
                <Typography variant="h6" className={classes.teamTitle}>
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="p"
                  className={classes.teamDesignation}
                >
                  {member.designation}
                </Typography>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.teamViewMore}
                  startIcon={<AddCircleRoundedIcon />}
                >
                  View More
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
