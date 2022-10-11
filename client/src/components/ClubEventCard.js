import React, { useState, useEffect } from 'react'
import EventCard from './EventCard';
import { Typography, Paper, Button, Modal, Box } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ClubEventCard = ({club, currentUser, userEvents, deleteUserBookClub, addUserEvent, deleteUserEvent}) => {
  const [allMemberships, setAllMemberships] = useState([])
  const [allAttendances, setAllAttendances] = useState([])

  // requesting all attendances
  useEffect(() => {
    fetch("/attendances")
    .then(res => res.json())
    .then(attendances => setAllAttendances(attendances))
  }, []);
  // console.table(allAttendances)

  let associatedAttendances = allAttendances?.filter((obj) => obj.event.book_club.id === 11 && obj.user.id === 11)
  // console.log(associatedAttendances)

  // delete button
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let today = new Date().toLocaleDateString()

  // requesting all memberships
  useEffect(() => {
    fetch("/memberships")
    .then(res => res.json())
    .then(memberships => setAllMemberships(memberships))
  }, []);

  //Leave book club
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
    //map through the associatedAttendances and make a fetch request for each to delete in the backend
    associatedAttendances.map(attendanceToDelete => (
      fetch(`/attendances/${attendanceToDelete.id}`, {
            method: 'DELETE'
          })
    )) 
  };

  // console.log(allAttendances)

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
        {/* once user rsvp to event, will appear in "your upcoming events" box on top */}
        {/* ONLY render events that are in the future compared to today, not in the past */}
        {/* {sortedEvents.map((event) => ( (event.date) <= today ? <EventCard key={event.id} event={event} currentUser={currentUser} addUserEvent={addUserEvent} deleteUserEvent={deleteUserEvent} allAttendances={allAttendances}/> : null )) } */}
        {sortedEvents.map((event) => <EventCard key={event.id} event={event} currentUser={currentUser} addUserEvent={addUserEvent} deleteUserEvent={deleteUserEvent} allAttendances={allAttendances}/> )}
        <Button sx={{ mt:3 }} size="medium" color="secondary" variant="contained" onClick={handleOpen}>
          LEAVE THIS BOOK CLUB
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} textAlign='center' borderRadius={2} p={8}>
            <Typography id="modal-modal-title" variant="h7" component="h2">
              Are you sure you want to leave this book club?
            </Typography>
            <Button sx={{ margin: 2 }} variant="outlined" onClick={handleDeleteClick}>Yes</Button>
            <Button sx={{ margin: 2 }} variant="outlined" onClick={handleClose}>No</Button>
          </Box>
        </Modal>
    </Item>
  )
}

export default ClubEventCard