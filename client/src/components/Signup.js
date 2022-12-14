import React, { useState } from "react";
import { useNavigate,  Link as RouterLink } from 'react-router-dom'
import { Grid, Paper, TextField, Button, Typography, Box, AppBar, Toolbar, IconButton, InputAdornment, Alert, Icon  } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import icon from '../images/mediumfantasyicon.png';

// MUI styling:
const paperStyle={padding :20, height:'70vh', width:320, margin:"20px auto", textAlign: "center", boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "25px"}
const btnstyle={margin:'20px 0'}
const txtfieldstyle = { marginTop: "2.5%", marginBottom: "2.5%" }

const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

const Signup = ({setCurrentUser}) => {
    const [formValues, setFormValues] = useState(defaultValues);
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState([]);

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
    
    function handleSubmit(e){
    e.preventDefault()
    fetch('/users', {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({ ...formValues }),
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
                // set current user here
                setCurrentUser(user)
                // need to route user to their newsfeed page/home page
                navigate("/home")
            })
        } else {
            res.json().then(json => setErrors(Object.entries(json.errors)))
        }
    })
    setFormValues(defaultValues)
    }

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
                        <img src="https://i.imgur.com/lbM7ksJ.png" alt="medium_icon"/>
                        <h2>Sign up and start reading!</h2>
                    </Grid>
                    <TextField 
                        style={txtfieldstyle}
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        )}}
                        id="name"
                        placeholder='Your Name' 
                        name="name"
                        type="text"
                        value={formValues.name}
                        onChange={handleChange} 
                        fullWidth 
                        required
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
                        placeholder='Email Address' 
                        name="email"
                        type="text"
                        value={formValues.email}
                        onChange={handleChange} 
                        fullWidth 
                        required
                        />
                    <TextField 
                        style={txtfieldstyle}
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
                    { errors.length === 0 ? null: <Alert severity="error">{errors[0][1]}</Alert> }
                    <Button 
                        type='submit' 
                        color='primary' 
                        variant="contained" 
                        style={btnstyle} 
                        fullWidth
                        >
                        SIGN UP
                    </Button>
                    <Typography component={RouterLink} to="/login"> Already have an account?</Typography>
            
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup