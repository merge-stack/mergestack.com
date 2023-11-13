import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme : Theme) => ({
  workingCycleRoot: {
    paddingTop: '4rem',
    paddingBottom: '6rem',
    width: '98dvw',
    backgroundColor: theme.palette.custom.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
  },
  stepContainer: {
    paddingBlock: '2rem',
    '& > :nth-child(even)': {
      marginTop: '4rem',
      '@media (max-width: 600px)': {
        marginTop: '0',
      },
    },
  },
  stepWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    position: 'relative',
  },
  iconWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '100px',

    '& > svg': {
      width: 63,
      height: 63,
    },
  },
  stepNumber: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '14px',
    color: theme.palette.background.default,
    fontWeight: 600,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 40,
    height: 40,
    borderRadius: '100px',
    background: theme.palette.primary.main,
    border: `5px solid ${theme.palette.background.default}`,
  },
  workingCycleTitle: {
    textAlign: 'center',
    fontWeight: 600,

    '@media (max-width: 1000px)': {
      fontSize: 'xx-large',
    },
  },
  stepHeading: {
    fontSize: '20px !important',
    textAlign: 'center',
    fontWeight: 600,

    '@media (max-width: 600px)': {
      fontSize: 'x-large',
    },
  },
  stepTagline: {
    textAlign: 'center',

    '@media (max-width: 600px)': {
      fontSize: 'large',
    },
  },
  stepArrowUp: {
    position: 'absolute',
    top: '0',
    left: '105%',
    transform: 'translateX(-50%)',
    '@media (max-width: 1080px)': {
      top: '-10%',
      left: '107%',
    },
    '@media (max-width: 1000px)': {
      display: 'none',
    },
  },

  stepArrowDown: {
    position: 'absolute',
    bottom: '7rem',
    left: '100%',
    transform: 'translateX(-50%)',
    '@media (max-width: 1080px)': {
      top: '-10%',
      left: '107%',
    },
    '@media (max-width: 1000px)': {
      display: 'none',
    },
  },
}));

export default useStyles;
