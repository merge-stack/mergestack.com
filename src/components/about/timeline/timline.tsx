import * as React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Container, Box, Paper, Typography } from '@mui/material';
import timelineData from 'src/components/about/timeline/timeline.json';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import TripOriginTwoToneIcon from '@mui/icons-material/TripOriginTwoTone';
import { useStyles } from 'src/components/about/timeline/style';


export default function AboutTimeline() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Container maxWidth="md" className={classes.headingWrapper}>
        <Typography className={classes.heading} variant="h2">
          Dedicated to delivering excellence
        </Typography>
        <Typography className={classes.tagline} component="p">
          Everyone has a story. Here is ours.
        </Typography>
      </Container>

      <Timeline position="alternate-reverse" className={classes.timelineContainer}>
        <TimelineItem className={classes.timelineItem}>
            <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TripOriginTwoToneIcon className={classes.largeRadioIcon} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
        {timelineData.map((event, index) => (
          <TimelineItem className={classes.timelineItem} key={index}>
            <TimelineOppositeContent color="text.secondary">
              {event.img}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector className={classes.indicatorWrapper}>
                <RadioButtonCheckedOutlinedIcon className={classes.largeRadioIcon}/>
              </TimelineConnector>
            </TimelineSeparator>
            <TimelineContent className={classes.contentWrapper}>
              <Typography className={classes.timelineHeading} component="h6">
                {event.title}
              </Typography>
              <Typography className={classes.timelineTagline} component="p">
                {event.content}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}
