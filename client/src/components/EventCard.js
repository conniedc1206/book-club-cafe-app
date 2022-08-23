import React, { useState, useEffect } from 'react'
import Moment from 'react-moment';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const EventCard = ({event, currentUser, addUserEvent, deleteUserEvent}) => {
  const [RSVP, setRSVP] = useState('');
  const [allAttendances, setAllAttendances] = useState([])

  // requesting all attendances
  useEffect(() => {
    fetch("/attendances")
    .then(res => res.json())
    .then(attendances => setAllAttendances(attendances))
  }, []);
  // console.table(allAttendances)

  //requesting attendances of this specific event
  useEffect(() => {
    fetch(`/events/${event.id}`)
    .then(res => res.json())
    .then(event => {
      // if current user has an attendance to this event, setRSVP to 'yes'
      // if there is no attendance to this event from this user, setRSVP to ''??
      if (event.attendances.find((obj) => obj.user_id === currentUser.id)) {
        setRSVP('Yes')
      } else {
       setRSVP('')
      }
    })
  }, []);

  //current user rsvp YES to event
  const handleRSVPYes = (e) => {
    e.preventDefault();
    //find the book event's id that is being clicked on
    // console.log(event.id)
    // console.log(currentUser)

    // find the attendence obj where clicked event's id=event id
    let attendanceobj = allAttendances.find((obj) => obj.event.id === event.id && obj.user.id === currentUser.id)

    //check if current user is already attending (aka if attendanceobj doesn't have anything)
    if (!attendanceobj)  {
      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({user_id: currentUser.id, event_id: event.id}),
      };
      fetch("/attendances", configObj)
      .then(res => res.json())
      .then((newAttendance) => {
        // add to user's events state
        addUserEvent(newAttendance.event)
      })
    }
  }

  //user rsvp no to an event
  function handleRSVPNo () {
    // deleteUserEvent from userevent state
    // console.log(event.id)
    // console.log(attendanceobj)
    let attendanceobj = allAttendances.find((obj) => obj.event.id === event.id && obj.user.id === currentUser.id)
  
    if (attendanceobj) {
      fetch(`/attendances/${attendanceobj.id}`, {
        method: 'DELETE'
      })
      deleteUserEvent(event.id)
      setRSVP('No')
    }
  };

    return (
    <Box
    sx={{ display: 'flex', p: 1, margin: 'auto', border: 2, justifyContent: 'space-between', alignItems: 'center' }}
    variant="outlined"
    >
        <Box>
          Event Name: {event.name} 
          <br></br>
          Event Date: <Moment>{event.date}</Moment>
        </Box>
      
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth variant="filled">
            <InputLabel>My RSVP</InputLabel>
            <Select
              value={RSVP}
              label="RSVP"
              onChange={(event) => setRSVP(event.target.value)}
            >
              <MenuItem onClick={handleRSVPYes} value='Yes'>Yes</MenuItem>
              <MenuItem onClick={handleRSVPNo} value='No'>No</MenuItem>
            </Select>
          </FormControl>
        </Box>
    </Box>
  )
}

export default EventCard
