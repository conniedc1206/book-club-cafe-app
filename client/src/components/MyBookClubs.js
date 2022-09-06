import React, { useState, useEffect } from 'react'
import Moment from 'react-moment';
import NavBar from './NavBar';
import ClubEventCard from './ClubEventCard';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Box, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#00838f',
    ...theme.typography.body2,
    padding: 8,
    textAlign: 'center',
    color: 'white',
    border: "4px solid white",
}));

const MyBookClubs = ({currentUser, userBookClubs, deleteUserBookClub}) => {
    //state for events of user
    const [userEvents, setUserEvents] = useState([])
    console.log(currentUser)

    // fetch the events of the user once
    useEffect(() => {
      fetch("/myevents")
      .then(res => res.json())
      .then(events => setUserEvents(events))
    }, []);

    // callback functions for events CRUD
    const addUserEvent = (newEvent) => setUserEvents(events => [...events, newEvent])
    const deleteUserEvent = (id) => setUserEvents(events => events.filter(event => event.id !== id)) 

    //only map through events from bookclubs in userBookClubs
    let userBookClubIds = []
    const pluck = (arr, key) => arr.map(i => i[key]);
    userBookClubIds = pluck(userBookClubs, 'id')
    // console.log(userBookClubIds)
    let userFilteredEvents = []
    userFilteredEvents = userEvents.filter((item) => userBookClubIds.includes(item.book_club.id))

    // sort userEvents before mapping
    const sortedUserEvents = userFilteredEvents.sort(function (x, y) {
      let a = new Date(x.date),
          b = new Date(y.date);
      return a - b;
    })
    // console.table(sortedUserEvents)
    
    return (
    <>
        <NavBar currentUser={currentUser}/>
        <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}>
          <Grid sx={{ flexGrow: 1, margin: 1 }}>
            {/* container for list events that user joined */}
            <Grid xs={6} md={4} sx={{ width: '100%'}}>  
              <Typography m={2} sx={{ textAlign: 'center', fontSize: 24 }}>My Upcoming Events</Typography>
              {sortedUserEvents?.map((event) => (
                <Item key={event.id}>
                  <Typography>{event.book_club.club_name}: {event.name}</Typography>
                  <Moment>{event.date}</Moment>
                </Item>
                
              ))}
            </Grid>
            
            {/* container for list of book clubs that user joined */}
            <Typography m={2} sx={{ textAlign: 'center', fontSize: 24 }}>My Book Clubs</Typography>
            {userBookClubs?.map((club) => (
              <Grid xs={6} md={8} key={club.id}>
                <ClubEventCard club={club} userEvents={userEvents} deleteUserBookClub={deleteUserBookClub} currentUser={currentUser} addUserEvent={addUserEvent} deleteUserEvent={deleteUserEvent}/>
              </Grid>
            ))}
          </Grid>
        </Box>
    </>
  )
}

export default MyBookClubs