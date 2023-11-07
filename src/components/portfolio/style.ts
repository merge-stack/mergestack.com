import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  portfolioRoot: {
    paddingTop: '4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  titleWrapper: {
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',

    '@media (max-width: 600px)': {
      '& > p': {
        fontSize: '1rem',
        paddingInline: '0 !important',
        textAlign: 'justify !important',
      },
      '& > h2': {
        fontSize: '3rem',
        textAlign: 'center',
      },
    },

    '& > p': {
      fontSize: '20px',
      color: '#00000099',
      textAlign: 'center',
      paddingInline: '4rem',
    },
  },
  portfolioContainer: {
    padding: '3rem',
    marginBlock: '2rem',
    backgroundColor: '#F5FCFF',
    borderRadius: '1rem',
    '@media (max-width: 600px)': {
      padding: '1rem',
    },
  },
  portfolioItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    '@media (max-width: 1000px)': {
      gap: '1rem',
    },
    '& p': {
      fontSize: '27px',
      color: '#00000099',
      fontWeight: 300,
      '@media (max-width: 600px)': {
        fontSize: '0.875rem',
      },
    },
    '&  h3': {
      fontWeight: 600,
      '@media (max-width: 600px)': {
        fontSize: '2rem',
      },
    },
    '& > button': {
      borderRadius: '25px',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
    },
  },
  portfolioTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    paddingRight: '2.4rem',
    '@media (max-width: 1000px)': {
      gap: '1rem',
    },
  },
}));
