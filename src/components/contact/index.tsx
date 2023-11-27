import * as React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

import TextBadge from 'src/components/common/TextBadge';
import { useStyles } from 'src/components/contact/style';
import { ChevronRightIcon } from 'src/components/svg/ChevronRightIcon';
import { ContactFormContainer } from 'src/components/contact/form';

export function ContactUs() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.contactRoot}>
      <Container maxWidth="lg">
        <Box component="div" className={classes.contactTitleWrapper}>
          <TextBadge text="contact" size="small" />
          <Typography variant="h2">We’re here to help</Typography>
          <Box className={classes.contactTaglineWrapper}>
            <Typography variant="body2">
              Call us at:
              <br />
              0333-1234567
            </Typography>
            <ChevronRightIcon />
            <Typography variant="body2">
              Email us:
              <br />
              support@mergestack.com
            </Typography>
          </Box>
        </Box>
        <ContactFormContainer />
      </Container>

      <Box component="div" className={classes.contactJobSection}>
        <Typography variant="h3">Looking for a job?</Typography>
        <Button
          className={classes.applyBtn}
          variant="contained"
          type="submit"
          disableElevation
        >
          Apply Here
        </Button>
      </Box>
    </Box>
  );
}
