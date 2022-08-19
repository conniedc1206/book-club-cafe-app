import React, { useState, useEffect } from 'react'
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

const ClubEventCard = ({club, currentUser, deleteUserBookClub}) => {
  const [allMemberships, setAllMemberships] = useState([])

  // requesting all memberships
  useEffect(() => {
    fetch("/memberships")
    .then(res => res.json())
    .then(membership => setAllMemberships(membership))
  }, []);
  
  console.log(allMemberships)
  
  //DELETE
  function handleDeleteClick () {
    // backend: find the membership obj where clicked club's id=club id
    let membershipobj = allMemberships.find((obj) => obj.book_club.id === club.id && obj.user.id === currentUser.id)

    // frontend: deletebookclub from userbookclub state
    console.log(club.id)
    console.log(membershipobj.id)

    fetch(`/memberships/${membershipobj.id}`, {
      method: 'DELETE'
    })
    deleteUserBookClub(club.id)
    //delete the membership from state?
  };
  
  return (
    <Item variant="outlined">
        <img 
        src={club.image}
        style={{ maxHeight: "200px", maxWidth: '100%'}}
        />
        <Typography>Title</Typography>
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
        <Button size="medium" color="secondary" variant="contained" onClick={handleDeleteClick}>
              LEAVE THIS BOOK CLUB
        </Button>
    </Item>
  )
}

export default ClubEventCard