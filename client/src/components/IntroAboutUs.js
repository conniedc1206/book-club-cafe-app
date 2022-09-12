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
            About
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
            Book Club Cafe was built using React.js on the frontend and Ruby on Rails on the backend. Learn more about the features, challenges, and future improvements of this app by visiting the Github link below. 
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px', marginRight: '20px' }}
            href="https://github.com/conniedc1206/book-club-cafe-app"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Github
          </Button>
          
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
            href="https://www.linkedin.com/in/conniepark2/"
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IntroAboutUs;