import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import { Paper} from "@mui/material"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Link from '@mui/material/Link';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BookClubCard = ({club}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Item variant="outlined" onClick={handleClickOpen}>
          <img 
          src={club.image} 
          alt="book cover"
          style={{ maxHeight: "200px", maxWidth: '90%', flexShrink: 1, display: { xs: 'flex', md: 'none' }}}
          />
      </Item>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {club.club_name} 
            </Typography>
            
          </Toolbar>
        </AppBar>
        <List >
          <ListItem>
            <img 
            src={club.image} 
            alt="books"
            style={{ maxHeight: "100px", flexShrink: 1, display: { xs: 'flex', md: 'none' }}}
            />
            <ListItemText sx={{ ml: 2 }}
              primary={club.title}  
              secondary={club.author}  
            />
            <Button color="primary" variant="contained" href={club.url} target="_blank" rel="noopener noreferrer">BUY THIS BOOK</Button>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Description"
              secondary={club.desc} 
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Genre"
              secondary={club.genre} 
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="F&P Reading Level"
              secondary={club.reading_level} 
            />
          </ListItem>
        </List>
        <Button size="medium" color="secondary" variant="contained" onClick={handleClose}>
              JOIN THIS BOOK CLUB
        </Button>
    </Dialog>
  </div>
  )
}

export default BookClubCard