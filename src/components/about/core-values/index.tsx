import * as React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { useStyles } from 'src/components/about/core-values/style';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import data from 'src/components/about/core-values/core-values.json';
import { PassionateIcon } from 'src/components/svg/PassionateIcon';
import { RespectfulIcon } from 'src/components/svg/RespectfulIcon';
import { OwnershipIcon } from 'src/components/svg/OwnershipIcon';
import { UnifiedIcon } from 'src/components/svg/UnifiedIcon';

const iconComponents: { [key: string]: React.ReactElement } = {
  'passionate-icon': <PassionateIcon />,
  'respectful-icon': <RespectfulIcon />,
  'ownership-icon': <OwnershipIcon />,
  'unified-icon': <UnifiedIcon />,
};

function CoreValues() {
  const classes = useStyles();

  return (
    <Box>
      <Box component="div" className={classes.valuesRoot}>
        <Container maxWidth="lg" className={classes.valuesBannerContainer}>
          <Box className={classes.valuesTitleWrapper}>
            <SquareRoundedIcon className={classes.valuesIcon} />
            <Typography className={classes.valuesTitle}>
              OUR CORE VALUES
            </Typography>
          </Box>
          <Typography variant="h3" className={classes.valuesHeading}>
            Our culture is built around five key attributes that differentiate
            us from our competition.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.valuesIconBoxContainer}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Box className={classes.valuesIconBox}>
                {iconComponents[item.icon]}
                <Typography variant="h6" className={classes.IconBoxHeading}>
                  {item.title}
                </Typography>
                <Typography variant="body2" className={classes.IconBoxTagline}>
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CoreValues;
