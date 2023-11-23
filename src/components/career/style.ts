import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
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
    cursor: 'pointer',
    '& > hr': {
      width: '100%',
    },
    '& > h6': {
      paddingRight: '2rem',
      flex: 1,
    },
    '& p': {
      color: '#6d6d6d',
    },
    '&:hover': {
      backgroundColor: '#F0FAFF',
    },
  },
  additonalInfo: {
    '& > p': {
      display: 'flex',
      gap: '1.25rem',
    },
  },
  listwrapper: {
    listStyleType: 'disc',
    '& > li': {
      display: 'list-item',
      padding: '0',
    },
    '& > li::marker': {
      textIndent: '1rem',
    },
  },

  jobDetailRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    paddingBlock: '3rem',
  },

  cardsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  primaryInfo: {
    '& h3': {
      fontSize: '40px',
    },
  },
  additionalInfo: {
    '& h3': {
      fontSize: '40px',
    },
  },
  additionalInfoCard: {
    border: '1px solid #e7e7e7',
    borderRadius: '15px',
    padding: '2.5rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    '& > svg': {
      width: 42,
      height: 42,
    },
    '& > svg > *': {
      fill: theme.palette.primary.main,
    },
    '& > h6': {
      fontWeight: 800,
    },
    '& > p': {
      color: '#6D6D6D',
    },
    '& > *': {
      lineHeight: '1',
    },
    '&:hover': {
      boxShadow: '0 0 8px 3px #00000017',
    },
  },
  companyDesc: {
    '& > p': {
      fontWeight: 500,
      fontSize: '1rem',
      color: '#6B7280',
    },
  },
  jobDesc: {
    '& > p': {
      fontWeight: 500,
      fontSize: '1rem',
    },
  },
  openPositions: {
    borderRadius: '20px',
    border: `2px solid ${theme.palette.primary.main}`,
    width: 'fit-content',
    padding: '0.25rem 1.5rem',
  },
  applyJob: {
    backgroundColor: '#f7f7f9',
    paddingBlock: '2.25rem',
    borderRadius: '1rem',
  },
  applyJobWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '1.5rem',

    '& > hr': {
      borderColor: '#707070',
      borderWidth: '1px',
      width: '60%',
      margin: 'auto',
    },

    '& > .MuiBox-root': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      textAlign: 'center',
      gap: '0.75rem',

      '& > h5': {
        fontWeight: 600,
        fontSize: '22px',
      },
      '& > h6': {
        fontWeight: 600,
        fontSize: '1rem',
      },
      '& > button': {
        borderRadius: '50px',
        color: 'white',
        width: '100%',
      },

      '& svg > circle': {
        fill: theme.palette.primary.main,
      },
      '& svg > path': {
        fill: 'white !important',
      },
    },
  },
  otherJobs: {
    '& > h5': {
      fontSize: '20px !important',
      color: theme.palette.primary.main,
    },
    '& h6': {
      fontSize: '16px !important',
      fontWeight: '500 !important',
      lineHeight: 'normal',
    },
    '& > button': {
      color: `${theme.palette.primary.main} !important`,
      textDecoration: 'underline',
      fontWeight: '400',
      width: 'fit-content !important',
      textTransform: 'capitalize',
      fontSize: '1rem',
      '&:hover': {
        backgroundColor: 'transparent',
        fontWeight: '500',
        textDecoration: 'underline',
      },
    },
  },
  applyJobContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    paddingBlock: '3rem',

    '& > .MuiBox-root': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    },
  },
  FormPaper: {
    backgroundColor: theme.palette.custom.main,
    borderRadius: '15px',
  },
  applyFormWrapper: {
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
    '&:before,:hover, fieldset': {
      border: 'none',
    },
    '&:hover:before': {
      borderBottom: 'none !important',
    },
    '& > div': {
      padding: 0,
    },
    '& .MuiSelect-standard > span': {
      fontSize: '14px',
      color: '#545454',
    },
    '& .MuiSelect-standard:focus': {
      backgroundColor: 'transparent !important',
    },
    '& .MuiSelect-standard': {
      fontSize: '14px',
      color: '#545454',
    },
  },
  uploadBtnLabel: {
    fontSize: '14px',
    color: '#545454',
    textTransform: 'capitalize',
  },
  inputFile: {
    display: 'none',
  },
  privacyLabel: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    '&  b': {
      textDecoration: 'underline'
    }
  },
  fileLabel: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'baseline'
  },
  divider:{
    borderTop: '1px solid black',
    opacity: '0.97'
    },
  uploadButton: {
    borderRadius: '50px',
    backgroundColor: theme.palette.background.default,
    border: `2px solid ${theme.palette.primary.main}`,
    fontSize: '14px',
    color: '#545454',
    textTransform: 'capitalize',
    lineHeight: 1,
    marginTop: '1rem',
    paddingBlock: '0.5rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
    },
  },
  submitBtn: {
    width: '100%',
    borderRadius: '50px',
    textTransform: 'capitalize',
    padding: '14px',
    fontWeight: 700,
    fontSize: '1rem',
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.background.default,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  },
}));
