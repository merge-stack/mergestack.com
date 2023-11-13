import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  statsContainerroot: {
    width: '100%',
    marginTop: '-4rem',
    paddingBlock: '0.5rem',
    backgroundColor: theme.palette.custom.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    borderRadius: '15px',
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
  statsContainer: {
    paddingBlock: '1rem',
    '@media (min-width: 1001px)': {
      justifyContent: 'space-between'
    },
  },
  statsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  statsTextWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  statsTitleWrapper: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.25rem',
  },
  statsTitle: {
    fontSize: '28px !important',
    textAlign: 'center',
    fontWeight: 600,

    '@media (max-width: 600px)': {
      fontSize: 'x-large',
    },
  },
  statSubtitle: {
    fontSize: '18px !important',
    textAlign: 'center',
    fontWeight: 600,

    '@media (max-width: 600px)': {
      fontSize: 'large',
    },
  },
  statsTagline: {
    textAlign: 'center',

    '@media (max-width: 600px)': {
      fontSize: 'large',
    },
  },
  lineWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: '0.875rem',
    
  },
  verticalLine: {
    width: '2px',
    height: '37px',
    background: '#9e9e9e',
    '@media (max-width: 1000px)': {
      display: 'none',
    },
  },
}));

export default useStyles;
