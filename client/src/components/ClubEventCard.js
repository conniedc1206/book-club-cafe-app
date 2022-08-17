import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Box, Container, Paper, Button } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const ClubEventCard = ({club}) => {
  return (
    <Item variant="outlined">
        <img 
        src={club.image} 
        style={{ maxHeight: "200px", maxWidth: '100%'}}
        />
        <Box
        sx={{ display: 'block', p: 1, margin: 'auto', border: 2 }}
        variant="outlined"
        >
        Event 1
        </Box>
        <Box
        sx={{ display: { xs: 'block', md: 'block' }, ml: 2, p: 1, margin: 'auto', border: 2 }}
        variant="outlined"
        >
        Event 2
        </Box>
        <Button size="medium" color="secondary" variant="contained" onClick={e => console.log("clicked")}>
              DELETE THIS BOOK CLUB
        </Button>
    </Item>
  )
}

export default ClubEventCard