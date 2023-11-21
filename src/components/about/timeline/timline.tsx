import React, { useEffect, useRef, useState } from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { Container, Typography, Box, Paper, Grow } from '@mui/material';
import timelineData from 'src/components/about/timeline/timeline.json';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import TripOriginTwoToneIcon from '@mui/icons-material/TripOriginTwoTone';
import { useStyles } from 'src/components/about/timeline/style';
import TextBadge from 'src/components/common/TextBadge';

export default function AboutTimeline() {
  const classes = useStyles();
  const timelineRefs = useRef<Array<HTMLElement | null>>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const visibleIndices = entries
        .filter(
          (entry) => entry.isIntersecting && entry.intersectionRatio === 1,
        )
        .map((entry) =>
          parseInt(entry.target.getAttribute('data-index') || '0', 10),
        );

        setVisibleItems((currentVisibleItems) => {
          const newVisibleItems = [...currentVisibleItems];
          visibleIndices.forEach((index) => {
            if (!newVisibleItems.includes(index)) {
              newVisibleItems.push(index);
            }
          });
          return newVisibleItems;
        });
      };

    const timelineItems = timelineRefs.current;

    if (timelineItems.length) {
      const observer = new IntersectionObserver(
        handleIntersection,
        observerOptions,
      );

      timelineItems.forEach((item) => {
        if (item instanceof Element) {
          observer.observe(item);
        }
      });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

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
          <TimelineItem
            className={classes.timelineItem}
            ref={(el) => {
              timelineRefs.current[index] = el as HTMLElement;
            }}
            key={index}
            data-index={index}
          >
            <TimelineOppositeContent color="text.secondary">
              <Grow in={visibleItems.includes(index)}>
                <Box>
                  <Box
                    component="img"
                    alt="Author"
                    src={event.img}
                    className={classes.timelineImg}
                  />
                </Box>
              </Grow>
            </TimelineOppositeContent>
            <TimelineSeparator ref={(el) => {
              timelineRefs.current[index] = el as HTMLElement;
            }}>
              <TimelineConnector className={classes.indicatorWrapper}>
                <RadioButtonCheckedOutlinedIcon
                  className={classes.largeRadioIcon}
                />
              </TimelineConnector>
            </TimelineSeparator>
            <TimelineContent className={classes.timlineTextWrapper}>
              <Grow in={visibleItems.includes(index)}>
                <Box>
                  <Typography
                    className={classes.timelineItemTitle}
                    component="h6"
                  >
                    {event.title}
                  </Typography>
                  <Typography className={classes.timelineTagline} component="p">
                    {event.content}
                  </Typography>
                </Box>
              </Grow>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <Container maxWidth="lg" className={classes.aboutTextBlock}>
        <TextBadge text="WHY US" size="large" />
        <Typography variant="body1" component="p">
          We understand that business can be chaotic.That’s where we come in.
          We’re focused on adding some much-needed balance to the mix. We
          accomplish that by forging real partnerships with our clients. When
          you work with us, you’re working with a teamwho understands your pain
          points and your goals. We’ll help you find order in the midst of the
          chaos.
        </Typography>
      </Container>
    </Container>
  );
}
