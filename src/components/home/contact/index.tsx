import React from 'react';
import { Typography, Button, Paper, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

const useStyles = makeStyles({
  paperWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    borderRadius: '20px',
    backgroundColor: '#F7F7F9',
    paddingBlock: '2.5rem',
    width: '100%'
  },
  titleWrapper: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  title: {
    fontSize: '14px',
    fontWeight: 600,
    textTransfor: 'uppercase',
  },
  heading: {
    fontWeight: 600,
    width: '50%',
    textAlign: 'center',
    lineHeight: 1
  },
  icons: {
    fill: '#4FB0E3',
    width: '12px',
    height: '12px',
  },
  btnClass: {
    fontWeight: '600',
    borderRadius: '20px !important',
    backgroundColor: '#4FB0E3 !important',
    marginTop: '1rem'
  },

  '@media (max-width: 600px)': {
    paperWrapper: {
      paddingBlock: '1.5rem',
    },
    title: {
      fontSize: '12px',
    },
    heading: {
        width: '100%',
        fontSize: 'xx-large',
    },
  },

});

const ContactSection = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.paperWrapper}>
      <Box className={classes.titleWrapper}>
        <SquareRoundedIcon className={classes.icons} />
        <Typography className={classes.title}>Have Any Question?</Typography>
      </Box>
      <Typography component="h1" variant="h3" className={classes.heading}>
        Let’s Discuss About Something
      </Typography>

      <Button variant="contained" className={classes.btnClass}>
        Contact Us
      </Button>
    </Paper>
  );
};

export default ContactSection;
