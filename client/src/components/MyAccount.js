import React, {useState } from 'react'
import NavBar from './NavBar';
import { Grid, Paper, TextField, Button} from '@mui/material'

// MUI styling:
const paperStyle = { padding :20, height:'70vh', width:320, margin:"20px auto", textAlign: "center" }
const btnstyle = { margin:'20px 0', borderRadius: 25 }
const txtfieldstyle = { marginTop: "2.5%", marginBottom: "2.5%" }


const MyAccount = ({ currentUser }) => {
    const [formData, setFormData] = useState({
        name: currentUser.name,
        email: currentUser.email,
        bio: currentUser.bio,
        avatar: currentUser.avatar
    })
    const [errors, setErrors] = useState([])

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    async function updateUser(){
        const updateData = {
            name: formData.name,
            email: formData.email,
            bio: formData.bio,
            avatar: formData.avatar
        }
        const config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        }
        const res = await fetch(`/users/${currentUser.id}`, config)
        if (res.ok) {
            setFormData({
                name: currentUser.name,
                email: currentUser.email,
                bio: currentUser.bio,
                avatar: currentUser.avatar
            })
            setErrors([])
        } else {
            const messages = await res.json()
            setErrors(messages.errors)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        updateUser()
    }

    return (
    <>
        <NavBar currentUser={currentUser}/>
        <Paper elevation={10} style={paperStyle} >
            <form onSubmit={handleSubmit} >
                <Grid align='center'>
                    <h2> Edit Profile</h2>
                </Grid>
                <TextField 
                style={txtfieldstyle}
                id="name"
                placeholder='Your Full Name' 
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange} 
                fullWidth 
                />

                <TextField 
                style={txtfieldstyle}
                id="email"
                placeholder='Your Email' 
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange} 
                fullWidth 
                />

                <TextField 
                style={txtfieldstyle}
                id="bio"
                placeholder='Your Bio' 
                name="bio"
                type="text"
                value={formData.bio}
                onChange={handleChange} 
                fullWidth 
                />

                <TextField 
                style={txtfieldstyle}
                id="avatar"
                placeholder='Your Profile Picture' 
                name="avatar"
                type="text"
                value={formData.avatar}
                onChange={handleChange} 
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