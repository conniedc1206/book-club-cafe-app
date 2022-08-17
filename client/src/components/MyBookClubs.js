import React from 'react'
import NavBar from './NavBar';
import ClubEventCard from './ClubEventCard';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Box, Paper} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const MyBookClubs = ({userBookClubs}) => {
    //state for events of user

    //fetch event of user

    console.log("My Book Clubs Mounted")
    console.log(userBookClubs)
  
    return (
    <>
        <NavBar />
        <Typography m={2} sx={{ textAlign: 'center', fontSize: 24 }}>My Book Clubs</Typography>
        <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}>
          <Grid sx={{ flexGrow: 1, margin: 1 }}>
            {/* container for list events that user joined */}
            <Grid xs={6} md={4} sx={{ width: '100%'}}>  
              <Item>Upcoming Events</Item>
              <Item>Upcoming Events</Item>
              <Item>Upcoming Events</Item>
            </Grid>
            
            {/* container for list of book clubs that user joined */}
            {userBookClubs.map((club) => (
              <Grid xs={6} md={8}>
                <ClubEventCard key={club.id} club={club}/>
              </Grid>
            ))}
          </Grid>
        </Box>
    </>
  )
}

export default MyBookClubs

{/* <div style={{ width: '100%' }}  >
        <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}>
          <Grid sx={{ flexGrow: 1, margin: 1 }} >
            {userBookClubs.map((club) => (
              <Grid xs={6} md={8}>
                <ClubEventCard key={club.id}club={club}/>
              </Grid>
            ))}
          </Grid>
          <Grid sx={{ display: 'flex', p: 1, bgcolor: 'red', borderRadius: 1 }}>
            <Typography>Upcoming Events</Typography>
          </Grid>
        </Box>
        </div> */}