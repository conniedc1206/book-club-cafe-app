import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import useStyles from '../styles/styles';

const IntroSection = () => {
  const classes = useStyles();

  const sectionItems = [
    {
      id: 1,
      icon: <LibraryBooksIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Explore book clubs',
      description:
        'Countless book clubs to check out',
    },
    {
      id: 2,
      icon: <GroupsIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Join a book club',
      description:
        'Start reading a new book as a member',
    },
    {
      id: 3,
      icon: <EventIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'Attend club events',
      description:
        'Engage in lively discussion',
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, minHeight: '400px' }}>
      <Grid container className={classes.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            className={classes.sectionGridItem}
          >
            {item.icon}
            <Typography>{item.sentence}</Typography>
            <Typography>{item.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IntroSection;