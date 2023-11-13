import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme :Theme) => ({
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
    '&:hover': {
      backgroundColor: '#F0FAFF'
    }
  },
  additonalInfo: {
    '& > p': {
      display: 'flex',
      gap: '1.25rem',
    },
  },
  listwrapper: {
    listStyleType: 'disc',
    '& > li':{
      display: 'list-item',
      padding: '0'
    },
    '& > li::marker':{
      textIndent: '1rem'
    }
  },

  jobDetailRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    paddingBlock: '3rem'
  },

  primaryInfo: {
    '& h3': {
      fontSize: '40px'
    }
  },
  additionalInfo: {
    '& h3': {
      fontSize: '40px'
    }
  },
  companyDesc: {
    '& > p': {
      fontWeight: 500,
      fontSize: '1rem',
      color: '#6B7280',
    }
  },
  jobDesc: {
    '& > p': {
      fontWeight: 500,
      fontSize: '1rem',
    }
  },
  openPositions: {
    borderRadius: '20px',
    border: `2px solid ${theme.palette.primary.main}`,
    width: 'fit-content',
    padding: '0.25rem 1.5rem'
  },
  applyJob: {
    backgroundColor: '#f7f7f9',
    paddingBlock: '2.25rem',
    borderRadius: '1rem'
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
      margin: 'auto'
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
        fontSize: '1rem'
      },
      '& > button': {
        borderRadius: '50px',
        color: 'white',
        width: '100%'
      },

      '& svg > circle':{
        fill: theme.palette.primary.main,
      },
      '& svg > path':{
        fill: 'white !important',
      }
    }
  },
  otherJobs: {
    '& > h5': {
      fontSize: '20px !important',
      color: theme.palette.primary.main
    },
    '& h6': {
      fontSize: '16px !important',
      fontWeight: '500 !important',
      lineHeight: 'normal'
    },
    '& > button': {
      color: `${theme.palette.primary.main} !important`,
      textDecoration: 'underline',
      fontWeight: '400',
      width: 'fit-content !important',
      textTransform: 'capitalize',
      fontSize: '1rem',
      '&:hover':{
        backgroundColor: 'transparent',
        fontWeight: '500',
        textDecoration: 'underline',
      }
    }
  },
}));
