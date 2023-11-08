import React from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  TextareaAutosize,
  Box,
  Paper,
} from '@mui/material';
import { useStyles } from '../style';

const ContactForm: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.FormPaper}>
      <form className={classes.contactFormWrapper}>
        <Box>
          <Typography variant="h6">Fill The Contact Form</Typography>
          <Typography variant="body1">
            Feel free to contact with us, we don’t spam your email
          </Typography>
        </Box>

        <Grid container rowGap="2.1rem" spacing={2}>
          <Grid item xs={6}>
            <TextField
              placeholder="First Name *"
              fullWidth
              className={classes.textfields}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder="Last Name *"
              fullWidth
              className={classes.textfields}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Company / Organization"
              fullWidth
              className={classes.textfields}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Email Address *"
              fullWidth
              className={classes.textfields}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Phone *"
              fullWidth
              className={classes.textfields}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="How can we help you? *"
              fullWidth
              className={classes.textfields}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              minRows={3}
              maxRows={3}
              placeholder="Message *"
              fullWidth
              className={classes.textfields}
              multiline
              required
            />
            <Button
              className={classes.submitBtn}
              variant="contained"
              type="submit"
              disableElevation
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ContactForm;
