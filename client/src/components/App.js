import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import MyBookClubs from "./MyBookClubs"
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
  const [currentUser, setCurrentUser] = useState(false) 
  //state for book clubs of current user
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
  console.log(currentUser)
  console.log(userBookClubs)

  console.log("App Mounted")
  
  return (

      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login setCurrentUser={setCurrentUser} setUserBookClubs={setUserBookClubs}/>} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home currentUser={currentUser}/>} />
          <Route path="mybookclubs" element={<MyBookClubs userBookClubs={userBookClubs}/>} />
        </Routes>
      </ThemeProvider>

  );
}

export default App;
