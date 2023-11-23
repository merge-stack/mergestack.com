import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Box,
  Paper,
  Select,
  MenuItem,
  Input,
} from '@mui/material';
import { useStyles } from 'src/components/career/style';
import TextBadge from 'src/components/common/TextBadge';

const ApplyJobForm: React.FC = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <Container maxWidth="md" className={classes.applyJobContainer}>
      <Box component="div">
        <TextBadge size="small" text="apply now" />
        <Box component="div">
          <Typography variant="h2" fontWeight='600'>Send us Your Resume</Typography>
          <Typography variant="body1">
            Send your resume if you are interested in a vacancy. We will
            definitely contact you.
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="md">
        <Paper elevation={3} className={classes.FormPaper}>
          <form className={classes.applyFormWrapper}>
            <Grid container rowGap="1rem" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  placeholder="Full Name*"
                  fullWidth
                  className={classes.textfields}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Email Address*"
                  fullWidth
                  className={classes.textfields}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  placeholder="Phone Number*"
                  fullWidth
                  className={classes.textfields}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  placeholder="City*"
                  fullWidth
                  className={classes.textfields}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Address*"
                  fullWidth
                  className={classes.textfields}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Education*"
                  fullWidth
                  className={classes.textfields}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  renderValue={(selected: string) => {
                    if (!selected) {
                      return <span>Position Applied*</span>;
                    }

                    return selected.toString();
                  }}
                  variant="standard"
                  className={classes.textfields}
                  required
                  fullWidth
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Senior PHP Developer'}>
                    Senior PHP Developer
                  </MenuItem>
                  <MenuItem value={'Senior Project Manager'}>
                    Senior Project Manager
                  </MenuItem>
                  <MenuItem value={'Junior MERN Developer'}>
                    Junior MERN Developer
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  placeholder="Current Salary*"
                  fullWidth
                  className={classes.textfields}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  placeholder="Expected Salary*"
                  fullWidth
                  className={classes.textfields}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.uploadBtnLabel}>
                  Upload Resume*
                </Typography>
                <Input
                  type="file"
                  id="fileInput"
                  className={classes.inputFile}
                  disableUnderline
                  onChange={handleFileChange}
                />
                <label htmlFor="fileInput" className={classes.fileLabel}>
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    className={classes.uploadButton}
                    disableElevation
                  >
                    Select Resume
                  </Button>
                  <Typography variant="caption">
                    {selectedFile
                      ? `File Chosen: ${selectedFile.name}`
                      : 'No File Chosen'}
                  </Typography>
                </label>
                <hr className={classes.divider} />
              </Grid>
              <Grid item xs={4}>
                <Button
                  className={classes.submitBtn}
                  variant="contained"
                  type="submit"
                  disableElevation
                >
                  Send Application
                </Button>
              </Grid>
              <Grid item xs={8} className={classes.privacyLabel}>
                <Typography variant="body2">
                  By clicking <b>Send application</b>, you agree to our <b>User Agreement</b>, <b>Privacy Policy</b>, and <b>Cookie Policy</b>.
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Container>
  );
};

export default ApplyJobForm;
