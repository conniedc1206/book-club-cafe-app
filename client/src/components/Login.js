import React, { useState } from "react";
import { useNavigate,  Link as RouterLink } from 'react-router-dom'
import { Grid, Paper, TextField, Button, Typography, Box, AppBar, Toolbar, IconButton, InputAdornment  } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';

// MUI styling:
const paperStyle={padding :20, height:'70vh', width:320, margin:"20px auto", textAlign: "center", boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "25px"}
const btnstyle={margin:'20px 0'}

const defaultValues = {
    email: "",
    password: "",
  };

const Login = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const handleClickShowPassword = () => {
        setShowPassword((currentState) => !currentState);
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
        console.log(formValues)
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ ...formValues }),
        };
        fetch("/login", configObj)
        .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error('Incorrect Username or Pawssword. Try Again!');
        })
        .then((user) => {
            console.log(user)
        // set the state of the user
        // setCurrentUser(user)
        // route user to their homepage
        // navigate("/newsfeed")
        })
        setFormValues(defaultValues);
    };

    return(
        <Grid
            style={{ 
            display: "inline-block", 
            backgroundImage: "url(https://i.imgur.com/Y35Y6mf.jpg)",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            width: "100%",
            height: "100%",
            position: "absolute", 
            backgroundRepeat: "no-repeat", 
            }}>
            <Box sx={{ display: 'flex', margin:'40px 0' }}>
                <AppBar component="nav">
                    <Toolbar>
                        <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                        Book Club Cafe
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Paper elevation={10} style={paperStyle}>
                <form onSubmit={handleSubmit}>
                    <Grid align='center'>
                        <img src="/mediumfantasyicon.png" alt="icon" />
                        <h2>Welcome Back!</h2>
                    </Grid>
                    <TextField 
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
                        value={formValues.email}
                        onChange={handleChange} 
                        fullWidth 
                        required
                        />
                    <TextField 
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="start">
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                        ),
                        }}
                        id="password"
                        placeholder='Password' 
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formValues.password}
                        onChange={handleChange} 
                        fullWidth 
                        required
                        />
                    <Button 
                        type='submit' 
                        color='primary' 
                        variant="contained" 
                        style={btnstyle} 
                        fullWidth
                        >
                        Login
                    </Button>
                    <Typography> OR
                    </Typography>
                    <Button 
                        type='submit' 
                        color='primary' 
                        variant="contained" 
                        style={btnstyle} 
                        fullWidth
                        component={RouterLink} to="/signup"
                        >
                        Create a new account
                    </Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login