import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  contactRoot: {
    paddingTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem'
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },
  contactTitleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',

    '& > h2': {
      fontWeight: 600,

      '@media (max-width: 600px)': {
        textAlign: 'center',
        fontSize: '3rem',
      },
    },

    '& > p': {
      color: '#00000099',
      textAlign: 'center',
      width: '95%',

      '@media (max-width: 600px)': {
        width: '100%',
      },
    },
  },
  contactTaglineWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },

  sectionHeadingWrapper: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'baseline',
  },
  sectionHeading: {
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },

  contactIcon: {
    fill: theme.palette.primary.main,
    width: '12px',
    height: '12px',
  },
  benefitsWrapper: {
    marginBottom: '1rem',
  },
  benefitItems: {
    '& > p': {
      display: 'flex',
      gap: '1rem',
    },
  },
  stepWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  steps: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    paddingInline: '10px',
    '& > h6': {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    '& > p': {
      fontSize: '14px',
    },
  },
  stepIcon: {
    flexBasis: '3%',
    width: '3%',
    '& svg': {
      width: '100%',
      height: '60px',
    },
  },

  FormPaper: {
    backgroundColor: theme.palette.custom.main,
    borderRadius: '15px',
  },
  contactFormWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '3rem',
  },
  textfields: {
    borderBottom: '1px solid black',
    '& input': {
      padding: '0.5rem 0',
      fontSize: '14px',
      color: '#545454',
      '&::placeholder': {
        opacity: 0.9,
        fontWeight: 500,
        fontSize: '14px',
        color: '#545454',
      },
    },
    '& textarea': {
      padding: '0.5rem 0',
      fontSize: '14px',
      color: '#545454',
      '&::placeholder': {
        opacity: 0.9,
        fontWeight: 500,
        fontSize: '14px',
        color: '#545454',
      },
    },
    '& fieldset': {
      border: 'none',
    },
    '& > div': {
      padding: 0,
    },
  },
  submitBtn: {
    marginTop: '1rem',
    width: '100%',
    borderRadius: '20px',
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.background.default,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  },
  contactJobSection: {
    backgroundColor: theme.palette.custom.main,
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    '& > h3': {
        fontSize: '40px',
        fontWeight: 500
    }
  },
  applyBtn: {
    borderRadius: '50px',
    textTransform: 'capitalize',
    fontSize: '18px',
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.background.default,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  },
}));
