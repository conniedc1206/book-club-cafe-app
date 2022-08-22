import React from 'react'
import Moment from 'react-moment';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const EventCard = ({event, currentUser, addUserEvent}) => {
  const [RSVP, setRSVP] = React.useState('');

  const handleChange = (event) => {
    setRSVP(event.target.value);
  };

  //current user rsvp YES to event
  const handleRSVPYes = (e) => {
    e.preventDefault();
    //find the book event's id that is being clicked on
    console.log(event.id)
    console.log(currentUser)
    
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
        console.log(newAttendance)
        // add to user's events state
        addUserEvent(newAttendance)
        // navigate("/mybookclubs")
      })
}

    return (
    <Box
    sx={{ display: 'block', p: 1, margin: 'auto', border: 2 }}
    variant="outlined"
    >
        Event Name: {event.name} 
        <br></br>
        Event Date: <Moment>{event.date}</Moment>
       
        <Box sx={{ minWidth: 120, mt:3 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">My RSVP</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={RSVP}
              label="RSVP"
              onChange={handleChange}
            >
              <MenuItem value="">
              <em>---</em>
              </MenuItem>
              <MenuItem onClick={handleRSVPYes}value='yes'>Yes</MenuItem>
              <MenuItem value='no'>No</MenuItem>
            </Select>
          </FormControl>
        </Box>
    </Box>
  )
}

export default EventCard
