import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  careerRoot: {
    paddingBlock: '3rem',
  },
  careerBannerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },
  careerTitleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',

    '& > h2': {
      fontWeight: 600,

      '@media (max-width: 600px)': {
        textAlign: 'center',
        fontSize: '2.5rem',
      },
    },

    '& > p': {
      color: '#00000099',
      fontSize: '20px',
      textAlign: 'center',
      '& > a': {
        color: '#7141B1',
        fontWeight: 400,
      },

      '@media (max-width: 600px)': {
        width: '100%',
        fontSize: '1rem',
      },
    },
  },

  jobItemContainer: {
    height: '100%',
    paddingBlock: '2rem',
    paddingInline: '1.5rem',
    border: '1px solid #D1E0E5',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    '& > hr': {
      width: '100%',
    },
    '& > h6': {
      paddingRight: '2rem',
      flex: 1
    },
    '& p': {
      color: '#6d6d6d'
    },
  },
  additonalInfo: {
    '& > p': {
      display: 'flex',
      gap: '1.25rem',
    },
  },
}));
