import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Slide, Fade } from '@mui/material';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import { useInView } from 'react-intersection-observer';

import { useStyles } from 'src/components/about/values/style';
import { PassionateIcon } from 'src/components/svg/PassionateIcon';
import { RespectfulIcon } from 'src/components/svg/RespectfulIcon';
import { OwnershipIcon } from 'src/components/svg/OwnershipIcon';
import { UnifiedIcon } from 'src/components/svg/UnifiedIcon';

import data from 'src/components/about/values/CoreValues.json';

const iconComponents: { [key: string]: React.ReactElement } = {
  PassionateIcon: <PassionateIcon />,
  RespectfulIcon: <RespectfulIcon />,
  OwnershipIcon: <OwnershipIcon />,
  UnifiedIcon: <UnifiedIcon />,
};

function CoreValues() {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <Box ref={ref}>
      <Box component="div" className={classes.valuesRoot}>
        <Fade in={isVisible} easing={'ease-in'} timeout={1000}>
        <Container maxWidth="lg" className={classes.valuesBannerContainer}>
          <Box className={classes.valuesTitleWrapper}>
            <SquareRoundedIcon className={classes.valuesIcon} />
            <Typography className={classes.valuesTitle}>OUR CORE VALUES</Typography>
          </Box>
          <Typography variant="h3" className={classes.valuesHeading}>
            Our culture is built around five key attributes that differentiate us from our competition.
          </Typography>
        </Container>
        </Fade>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.valuesIconBoxContainer}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Slide direction="right" in={isVisible} easing={'ease-in'} timeout={2000}>
                <Box className={classes.valuesIconBox}>
                  {iconComponents[item.icon]}
                  <Typography variant="h6" className={classes.IconBoxHeading}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" className={classes.IconBoxTagline}>
                    {item.text}
                  </Typography>
                </Box>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CoreValues;
