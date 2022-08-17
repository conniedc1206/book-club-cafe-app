import React, { useState } from 'react'
import NavBar from './NavBar';
import { Grid, Paper, TextField, Button, Typography, Box, AppBar, Toolbar, IconButton, InputAdornment  } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';

// MUI styling:
const paperStyle = { padding :20, height:'70vh', width:320, margin:"20px auto", textAlign: "center" }
const btnstyle = { margin:'20px 0', borderRadius: 25 }
const txtfieldstyle = { marginTop: "2.5%", marginBottom: "2.5%" }


const MyAccount = ({ currentUser }) => {
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    //     bio: "",
    //     avatar: ""
    // })
    // const [errors, setErrors] = useState([])

    // const { name, password, email, bio, avatar } = currentUser

    // async function updateUser(){
    //     const updateData = {
    //         name: formData.name,
    //         email: formData.email,
    //         password: formData.password,
    //         bio: formData.bio,
    //         avatar: formData.avatar
    //     }
    //     const config = {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(updateData)
    //     }
    //     const res = await fetch(`/users/${currentUser.id}`, config)
    //     if (res.ok) {
    //         setFormData({
    //             name: '',
    //             field_of_study: '',
    //             avatar: ''
    //         })
    //         setErrors([])
    //     } else {
    //         const messages = await res.json()
    //         setErrors(messages.errors)
    //     }
    // }

    // function handleChange(e){
    //     setFormData({
    //         ...formData,
    //         [e.target.id]: e.target.value
    //     })
    // }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     updateUser()
    // }


    return (
    <>
        <NavBar currentUser={currentUser}/>
        <Paper elevation={10} style={paperStyle} >
            <form onSubmit={e => console.log('clicked')} >
                <Grid align='center'>
                    <h2> Edit Profile</h2>
                </Grid>
                <TextField 
                style={txtfieldstyle}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <EmailIcon />
                    </InputAdornment>
                )}}
                id="email"
                placeholder='Your Email' 
                name="email"
                type="text"
                // value={formValues.email}
                // onChange={handleChange} 
                fullWidth 
                />

                <TextField 
                style={txtfieldstyle}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <EmailIcon />
                    </InputAdornment>
                )}}
                id="email"
                placeholder='Your Email' 
                name="email"
                type="text"
                // value={formValues.email}
                // onChange={handleChange} 
                fullWidth 
                />

                <Button 
                    type='submit' 
                    color='primary' 
                    variant="contained" 
                    style={btnstyle} 
                    fullWidth
                    >
                    Update
                </Button>
            </form>
        </Paper>
    </>
  )
}

export default MyAccount