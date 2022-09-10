import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import icon from '../images/fantasy.png';
import useStyles from '../styles/styles';

const IntroAboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutUsContainer}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={5}>
          <img src={icon} alt="My Team" className={classes.largeImage} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            We build, We revive
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
            Your business needs to be in safe hands at all times. We ensure you
            never run out of customers and not run at loss. We are trusted by
            over 500+ companies to deliver quality marketing campaigns using
            Digital marketing & Offline marketing channels.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px', marginRight: '20px' }}
          >
            Github
          </Button>
          
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            LinkedIn
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IntroAboutUs;