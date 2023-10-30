import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  aboutRoot: {
    paddingBottom: '4rem',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
  },
  timlineHeadingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  timlineHeading: {
    textAlign: 'center',
    fontWeight: 600,
    '@media (max-width: 600px)': {
      fontSize: '3rem',
    },
  },
  timlineTagline: {
    textAlign: 'center',
    fontSize: '20px',
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
  timelineContainer: {
    margin: 'auto',
    paddingTop: '2rem',
    '@media (max-width: 600px)': {
      paddingTop: '0rem',
    },
  },
  timlineTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '1rem',
    justifyContent: 'center',
  },
  timelineItemTitle: {
    fontWeight: 600,
    fontSize: '25px',
    '@media (max-width: 600px)': {
      fontSize: '1.375rem',
    },
  },
  timelineTagline: {
    fontSize: '18px',
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.60)',
    lineHeight: '25px',
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
  indicatorWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  },
  largeRadioIcon: {
    fill: '#4FB0E3',
  },
  timelineItem: {
    gap: '5rem',
    '@media (max-width: 600px)': {
      gap: '0',
    },
  },
  timelineImg: {
    width: '100% !important',
    height: 'auto !important',
    marginBlock: '1.5rem',
  },
  aboutTextBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.25rem',
    paddingInline: '2rem',

    '& > p': {
      fontSize: '22px',
      fontWeight: 500,
      color: '#00000099',
      '@media (max-width: 600px)': {
        fontSize: '1rem',
        textAlign: 'justify',
      },
    },
  },
}));