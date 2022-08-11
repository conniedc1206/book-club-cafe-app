// import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

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
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
