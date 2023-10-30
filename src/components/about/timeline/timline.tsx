import * as React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { Container, Typography, Box, Paper } from '@mui/material';
import timelineData from 'src/components/about/timeline/timeline.json';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import TripOriginTwoToneIcon from '@mui/icons-material/TripOriginTwoTone';
import { useStyles } from 'src/components/about/timeline/style';
import TextBadge from 'src/components/layout/TextBadge';

export default function AboutTimeline() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.aboutRoot}>
      <Container maxWidth="md" className={classes.timlineHeadingWrapper}>
        <Typography className={classes.timlineHeading} variant="h2">
          Dedicated to delivering excellence
        </Typography>
        <Typography className={classes.timlineTagline} component="p">
          Everyone has a story. Here is ours.
        </Typography>
      </Container>

      <Timeline
        position="alternate-reverse"
        className={classes.timelineContainer}
      >
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
              <Box
                component="img"
                alt="Author"
                src={event.img}
                className={classes.timelineImg}
              />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector className={classes.indicatorWrapper}>
                <RadioButtonCheckedOutlinedIcon
                  className={classes.largeRadioIcon}
                />
              </TimelineConnector>
            </TimelineSeparator>
            <TimelineContent className={classes.timlineTextWrapper}>
              <Typography className={classes.timelineItemTitle} component="h6">
                {event.title}
              </Typography>
              <Typography className={classes.timelineTagline} component="p">
                {event.content}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      
      <Container maxWidth='lg' className={classes.aboutTextBlock}>
        <TextBadge text="WHY US" size="large" />
        <Typography variant='body1' component='p' >
          We understand that business can be chaotic.That’s where we come in.
          We’re focused on adding some much-needed balance to the mix. We
          accomplish that by forging real partnerships with our clients. When you
          work with us, you’re working with a teamwho understands your pain points
          and your goals. We’ll help you find order in the midst of the chaos.
        </Typography>
      </Container>
    </Container>
  );
}
