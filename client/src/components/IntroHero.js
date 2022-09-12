import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Grid, Typography, Button, Box } from '@mui/material';
import club from '../images/club.png';
import useStyles from '../styles/styles';

const IntroHero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Discover the magic of book clubs!
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
          Book Club Cafe is an React/Rails book app that allows users to join book clubs, enjoy reading books together and attend discussion events with fellow book club members.
          </Typography>
          <Button
            type='submit'
            variant="contained"
            color="primary"
            component={RouterLink} to="/signup"
            sx={{ width: '200px', fontSize: '16px' }}

          >
            GET STARTED
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={club} alt="My Team" className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default IntroHero;