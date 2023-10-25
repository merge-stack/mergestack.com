import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBlock: '2rem',
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
  title: {
    fontSize: '28px !important',
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
}));

export default useStyles;
