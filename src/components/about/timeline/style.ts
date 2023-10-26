import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  headingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 600,
  },
  tagline: {
    textAlign: 'center',
    fontSize: '20px',
  },
  timelineContainer: {
    maxWidth: '85%',
    margin: 'auto',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '1rem',
  },
  timelineHeading: {
    fontWeight: 600,
    fontSize: '25px',
  },
  timelineTagline: {
    fontSize: '18px',
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.60)',
    lineHeight: '25px',
  },
  indicatorWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  },
  largeRadioIcon: {
    fill: '#4FB0E3'
  },
  timelineItem: {
    gap: '5rem'
  },
}));
