import * as React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

import { useStyles } from 'src/components/contact/style';
import { ChevronRightIcon } from 'src/components/svg/ChevronRightIcon';
import { VerifiedIcon } from 'src/components/svg/VerifiedIcon';
import ContactForm from 'src/components/contact/form/ContactForm';

export function ContactFormContainer() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.contactRoot}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={6} paddingRight="3rem">
            <Box className={classes.sectionHeadingWrapper}>
              <SquareRoundedIcon className={classes.contactIcon} />
              <Typography paragraph className={classes.sectionHeading}>
                Have Any Question?
              </Typography>
            </Box>
            <Typography variant="h3" gutterBottom>
              Let’s Discuss About Something
            </Typography>
            <Typography variant="body1" paragraph>
              At our IT solution company, we are committed to providing
              exceptional customer service and support. If you are experiencing
              technical difficulties or need assistance with one of our
              services,
            </Typography>

            <Box component="div" className={classes.benefitsWrapper}>
              <Typography
                variant="h6"
                fontWeight="600"
                fontSize="18px"
                gutterBottom
                paragraph
              >
                Your benefits:
              </Typography>
              <Grid container>
                <Grid item xs={4} className={classes.benefitItems}>
                  <Typography variant="body1" paragraph>
                    <VerifiedIcon />
                    Client-oriented
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <VerifiedIcon />
                    Independent
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <VerifiedIcon />
                    Competent
                  </Typography>
                </Grid>
                <Grid item xs={4} className={classes.benefitItems}>
                  <Typography variant="body1" paragraph>
                    <VerifiedIcon />
                    Results-driven
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <VerifiedIcon />
                    Problem-solving
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <VerifiedIcon />
                    Transparent
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Box component="div">
              <Typography
                variant="h6"
                fontWeight="600"
                fontSize="18px"
                gutterBottom
                paragraph
              >
                What happens next?
              </Typography>
              <Grid container className={classes.stepWrapper}>
                <Grid item xs={4} className={classes.steps}>
                  <Typography variant="h6">1</Typography>
                  <Typography>
                    We Schedule a call at your convenience
                  </Typography>
                </Grid>
                <Grid item xs={0} md={1} className={classes.stepIcon}>
                  <ChevronRightIcon />
                </Grid>
                <Grid item xs={4} className={classes.steps}>
                  {' '}
                  <Typography variant="h6">2</Typography>
                  <Typography>
                    We do a discovery and consulting meting
                  </Typography>
                </Grid>
                <Grid item xs={0} md={1} className={classes.stepIcon}>
                  <ChevronRightIcon />
                </Grid>
                <Grid item xs={3} className={classes.steps}>
                  <Typography variant="h6">3</Typography>
                  <Typography>We prepare a proposal</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
