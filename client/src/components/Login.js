import React, { useState } from "react";
import { useNavigate,  Link as RouterLink } from 'react-router-dom'
import { Grid, Paper, TextField, Button, Typography, Box, AppBar, Toolbar, IconButton, InputAdornment, Alert, Link, Icon } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import icon from '../images/mediumfantasyicon.png';

// MUI styling:
const paperStyle={padding :20, height:'70vh', width:320, margin:"20px auto", textAlign: "center", boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "25px"}
const btnstyle={margin:'20px 0'}
const txtfieldstyle = { marginTop: "2.5%", marginBottom: "2.5%" }

const defaultValues = {
    email: "",
    password: "",
  };

const Login = ({setCurrentUser}) => {
    const [formValues, setFormValues] = useState(defaultValues);
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState(false)

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
        .then(res => res.json())
        .then((user) => {
            // set the state of the user
            setCurrentUser(user)
            // route user to their home page
            navigate("/home")
        })
        .catch((error) => {
            setError(true)
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
                        <Icon component={RouterLink} to="/" sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
                            <img src={icon} alt="icon"/>
                        </Icon>
                        <Link underline="none">
                            <Typography variant="h6" color='white'>
                            Book Club Cafe
                            </Typography>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <Paper elevation={10} style={paperStyle}>
                <form onSubmit={handleSubmit}>
                    <Grid align='center'>
                        <img src="https://i.imgur.com/lbM7ksJ.png" alt="medium_icon"/>
                        <h2>Welcome Back!</h2>
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

                    {error && <Alert severity="error">'Incorrect Email or Password. Try Again!'</Alert>}
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