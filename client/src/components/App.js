// import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
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
  // //set our logged in user with login or signup
  // const [currentUser, setCurrentUser] = useState(false) 
  // //keep track of our logged in user's catpanions during current session

  // // fetch the logged in user when app loads if there is a user
  // useEffect(() => {
  //   fetch("/me")
  //   .then(res => res.json())
  //   .then((user) => {
  //     setCurrentUser(user)
  //   })
  // }, []);

  return (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </ThemeProvider>
  );
}

export default App;
