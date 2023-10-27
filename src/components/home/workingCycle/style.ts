import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '4rem',
    paddingBottom: '6rem',
    width: '98dvw',
    backgroundColor: '#f7f7f7',
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
  number: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '14px',
    color: '#fff',
    position: 'absolute',
    right: 0,
    top: 0,
    width: 40,
    height: 40,
    borderRadius: '100px',
    background: '#4FB0E3',
    border: '5px solid #fff',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 600,

    '@media (max-width: 1000px)': {
      fontSize: 'xx-large',
    },
  },
  title: {
    fontSize: '20px !important',
    textAlign: 'center',
    fontWeight: 600,

    '@media (max-width: 600px)': {
      fontSize: 'x-large',
    },
  },
  tagline: {
    textAlign: 'center',

    '@media (max-width: 600px)': {
      fontSize: 'large',
    },
  },
  arrowUp: {
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

  arrowDown: {
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
