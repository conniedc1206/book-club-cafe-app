import React, { useState, useEffect } from 'react'
import CarouselContainer from './CarouselContainer';
import NavBar from './NavBar';
import BookClubCard from './BookClubCard';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Box } from '@mui/material';


const Home = ({currentUser, addUserBookClub, userBookClubs}) => {
  const [allBookClubs, setAllBookClubs] = useState([])

  // requesting all book_clubs
  useEffect(() => {
    fetch("/book_clubs")
    .then(res => res.json())
    .then(clubs => setAllBookClubs(clubs))
  }, []);

  // Removing multiple items: filter through allBookClubs where bookclub.id !== currentUser's bookclubs (to exclude ones that already joined)
  let bookClubIds = []
  const pluck = (arr, key) => arr.map(i => i[key]);
  bookClubIds = pluck(userBookClubs, 'id')

  let filteredClubs = []
  filteredClubs = allBookClubs.filter((item) => !bookClubIds.includes(item.id))

  return (
    <>
      <NavBar currentUser={currentUser}/>
      <CarouselContainer />
      <Box sx={{ flexGrow: 1 }}>
        <Typography aria-role='heading' m={2} sx={{ textAlign: 'center', fontSize: 24 }}>Join A New Book Club!</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
          {filteredClubs?.map((club) => (
            <Grid xs={2} sm={4} md={4} key={club.id}>
              <BookClubCard club={club} currentUser={currentUser} addUserBookClub={addUserBookClub}/>
            </Grid>
          ))}
        </Grid>
      </Box>
  </>
  )
}

export default Home