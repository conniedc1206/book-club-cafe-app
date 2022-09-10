import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import MyBookClubs from "./MyBookClubs"
import MyAccount from './MyAccount';
import Intro from './Intro';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00838f',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  // set our logged in user with login or signup
  const [currentUser, setCurrentUser] = useState([]) 
  //state for bookclubs of current user
  const [userBookClubs, setUserBookClubs] = useState([])

  // fetch the logged in user when app loads if there is a user
  useEffect(() => {
    fetch("/me")
    .then(res => res.json())
    .then((user) => {
      setCurrentUser(user)
      setUserBookClubs(user.book_clubs)
    })
  }, []);

// callback functions for membership CRUD
  const addUserBookClub = (newBookClub) => setUserBookClubs(bookclubs => [...bookclubs, newBookClub])
  const deleteUserBookClub = (id) => setUserBookClubs(current => current.filter(p => p.id !== id)) 

  return (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="login" element={<Login setCurrentUser={setCurrentUser}/>} />
          <Route path="signup" element={<Signup setCurrentUser={setCurrentUser} />} />
          <Route path="home" element={
            <Home 
              currentUser={currentUser} 
              addUserBookClub={addUserBookClub}
              userBookClubs={userBookClubs}
              />
            } 
          />
          <Route path="mybookclubs" element={<MyBookClubs currentUser={currentUser} userBookClubs={userBookClubs} deleteUserBookClub={deleteUserBookClub}/>} />
          <Route path="myaccount" element={<MyAccount currentUser={currentUser}/>} />
        </Routes>
      </ThemeProvider>

  );
}

export default App;
