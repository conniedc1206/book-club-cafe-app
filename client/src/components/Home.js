import React, { useState, useEffect } from 'react'
import CarouselContainer from './CarouselContainer';
import NavBar from './NavBar';
import BookClubCard from './BookClubCard';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Box } from '@mui/material';


const Home = () => {
  const [allBookClubs, setAllBookClubs] = useState([])

  console.log("Home mounted")

  // requesting all book_clubs
  useEffect(() => {
    fetch("/book_clubs")
    .then(res => res.json())
    .then(clubs => setAllBookClubs(clubs))
  }, []);

  console.log(allBookClubs)
  
  return (
    <>
      <NavBar />
      <CarouselContainer />
      <Box sx={{ flexGrow: 1 }}>
        <Typography m={2} sx={{ textAlign: 'center', fontSize: 24 }}>Join A New Book Club!</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
          {allBookClubs.map((club) => (
            <Grid xs={2} sm={4} md={4} key={club.id}>
              <BookClubCard club={club}/>
            </Grid>
          ))}
        </Grid>
      </Box>
  </>
  )
}

export default Home