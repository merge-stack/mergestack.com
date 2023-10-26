import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '-4rem',
    paddingBlock: '0.5rem',
    backgroundColor: '#f7f7f7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    borderRadius: '15px',
  },
  stepContainer: {
    paddingBlock: '1rem',
  },
  stepWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
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

    '@media (max-width: 600px)': {
      fontSize: 'x-large',
    },
  },
  textWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.25rem',
  },
  title: {
    fontSize: '28px !important',
    textAlign: 'center',
    fontWeight: 600,

    '@media (max-width: 600px)': {
      fontSize: 'x-large',
    },
  },
  subtitle: {
    fontSize: '18px !important',
    textAlign: 'center',
    fontWeight: 600,

    '@media (max-width: 600px)': {
      fontSize: 'large',
    },
  },
  tagline: {
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
  },
}));

export default useStyles;
