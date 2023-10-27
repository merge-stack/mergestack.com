import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: '4rem'
  },
  headingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    paddingBlock: '2rem'
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
  timelineImg: {
    width: 'auto !important',
    height: '255px !important',
    marginBlock: '1.5rem'
  },
}));
