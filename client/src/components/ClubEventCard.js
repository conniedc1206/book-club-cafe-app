import React, { useState, useEffect } from 'react'
import EventCard from './EventCard';
import { Typography, Paper, Button } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const ClubEventCard = ({club, currentUser, deleteUserBookClub, addUserEvent, deleteUserEvent}) => {
  const [allMemberships, setAllMemberships] = useState([])

  let today = new Date().toLocaleDateString()

  // requesting all memberships
  useEffect(() => {
    fetch("/memberships")
    .then(res => res.json())
    .then(memberships => setAllMemberships(memberships))
  }, []);

  //DELETE
  function handleDeleteClick () {
    // find the membership obj where clicked club's id=club id
    // deletebookclub from userbookclub state
    let membershipobj = allMemberships.find((obj) => obj.book_club.id === club.id && obj.user.id === currentUser.id)
    // console.log(club.id)
    // console.log(membershipobj.id)
    fetch(`/memberships/${membershipobj.id}`, {
      method: 'DELETE'
    })
    deleteUserBookClub(club.id)
    //if the user has an events from this club.id, delete all attendences with matching club.id and events
  };
  //sort events by dates
  const sortedEvents = club.events.sort(function (x, y) {
    let a = new Date(x.date),
        b = new Date(y.date);
    return a - b;
  })
  // console.table(sortedEvents)

  return (
    <Item variant="outlined">
        <a href={club.url} target="_blank" rel="noopener noreferrer">
          <img 
          src={club.image}
          alt={club.title}
          style={{ maxHeight: "200px", maxWidth: '100%'}}
          />
        </a>
        <Typography>{club.club_name}: {club.title}</Typography>
        
        {/* render each book club's events in a stack with a RSVP button */}
        {/* once user rsvp to event, will appear in "your upcoming events" box on top */}
        {/* ONLY render events that are in the future compared to today, not in the past */}
        {sortedEvents.map((event) => ( (event.date) <= today ? <EventCard key={event.id} event={event} currentUser={currentUser} addUserEvent={addUserEvent} deleteUserEvent={deleteUserEvent}/> : null )) }
        <Button sx={{ mt:3 }} size="medium" color="secondary" variant="contained" onClick={handleDeleteClick}>
              LEAVE THIS BOOK CLUB
        </Button>
    </Item>
  )
}

export default ClubEventCard