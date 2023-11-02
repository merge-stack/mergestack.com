import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme : Theme) => ({
  footerMidColumns: {
    '@media (max-width: 1000px)': {
      display: 'none'
    },
  },
  footerColumnHeading: {
    fontWeight: 'bold'
  },
  footerContainerStyle: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.background.default,
    padding: '2rem 0 3rem',
    position: 'relative'
  },
  footerGridItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  footerAboutText: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: 400,
    margin: 0,
  },
  footerSocialIcons: {
    display: 'flex',
    gap: '1rem',
  },
  footerList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.875rem',
    marginBlock: '1rem',
  },
  footerReview: {
    textTransform: 'uppercase',
    fontSize: '10px',
    letterSpacing: '0.5px',
    fontWeight: '600',
  },
  footerListItem: {
    alignItems: 'baseline',
    padding: 0,
  },
  footerListLink: {
    color: 'white',
  },
  footerListIcon: {
    paddingRight: '0.625rem',
    minWidth: 'auto',
  }

}));

export default useStyles;
