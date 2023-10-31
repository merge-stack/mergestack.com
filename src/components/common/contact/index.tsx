import React from 'react';
import { Typography, Button, Paper, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

const useStyles = makeStyles({
  contactBannerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    borderRadius: '20px',
    backgroundColor: '#F7F7F9',
    paddingBlock: '2.5rem',
    marginBlock: '4rem',
    width: '100%',
  },
  contactTitleWrapper: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: '14px',
    fontWeight: 600,
    textTransfor: 'uppercase',
  },
  contactHeading: {
    fontWeight: 600,
    width: '50%',
    textAlign: 'center',
    lineHeight: 1,
  },
  contactIcon: {
    fill: '#4FB0E3',
    width: '12px',
    height: '12px',
  },
  contactBtnClass: {
    fontWeight: '600',
    borderRadius: '20px !important',
    backgroundColor: '#4FB0E3 !important',
    marginTop: '1rem',
  },

  '@media (max-width: 600px)': {
    contactBannerWrapper: {
      paddingBlock: '1.5rem',
    },
    contactTitle: {
      fontSize: '12px',
    },
    contactHeading: {
      width: '100%',
      fontSize: 'xx-large',
    },
  },
});

const ContactSection = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.contactBannerWrapper}>
      <Box className={classes.contactTitleWrapper}>
        <SquareRoundedIcon className={classes.contactIcon} />
        <Typography className={classes.contactTitle}>Have Any Question?</Typography>
      </Box>
      <Typography component="h1" variant="h3" className={classes.contactHeading}>
        Let’s Discuss About Something
      </Typography>

      <Button variant="contained" className={classes.contactBtnClass}>
        Contact Us
      </Button>
    </Paper>
  );
};

export default ContactSection;
