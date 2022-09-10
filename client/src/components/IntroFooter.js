import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import useStyles from '../styles/styles';

const IntroFooter = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      <Typography className={classes.footerDate}>Buit with MUI</Typography>
      <a href="https://www.flaticon.com/free-icons/story" title="story icons">Story icons created by Freepik - Flaticon</a>
      <a href="https://www.freepik.com/vectors/school-equipment">School equipment vector created by stockgiu - www.freepik.com</a>
      <Typography className={classes.footerText}>
        Provided by{' '}
        <Link href="https://appseed.us" target="_blank" underline="none">
          AppSeed
        </Link>
      </Typography>
    </Box>
  );
};

export default IntroFooter;