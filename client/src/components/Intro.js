import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {Jumbotron, Container} from 'react-bootstrap'
import { Typography, Box, AppBar, Toolbar, Icon, Stack, Button, BottomNavigation, BottomNavigationAction  } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Intro = () => {
    const [value, setValue] = React.useState(0);

    return (
    <>
        <Box sx={{ display: 'flex', margin:'40px 0' }}>
            <AppBar component="nav">
                <Toolbar>
                    <Icon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
                        <img src="/smallfantasyicon.png" alt="icon"/>
                    </Icon>
                    <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                    Book Club Cafe
                    </Typography>
                    <Stack spacing={2} direction="row">
                        <Button 
                        type='submit' 
                        color='secondary' 
                        variant="contained" 
                        component={RouterLink} to="/login"
                        >
                        Login
                    </Button>
                    <Button 
                        type='submit' 
                        color='secondary' 
                        variant="contained" 
                        component={RouterLink} to="/signup"
                        >
                        Signup
                    </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>

        <Jumbotron fluid style={{ backgroundImage: `url(https://i.imgur.com/HJnlvq0.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <Container>         
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
            </Container>
        </Jumbotron>

        <Jumbotron fluid style={{ backgroundImage: `url(https://i.imgur.com/KdJbm1Q.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <Container>         
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
            </Container>
        </Jumbotron>
{/* 
        <Jumbotron fluid style={{ backgroundImage: `url(https://i.imgur.com/X8F8rgy.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <Container>         
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
            </Container>
        </Jumbotron> */}

        <Box 
        sx={{ justifyContent: 'space-between' }}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Github" icon={<GitHubIcon />} href="https://github.com/conniedc1206/book-club-cafe-app" target="_blank" rel="noopener noreferrer"/>
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} href="https://www.linkedin.com/in/conniepark2/" target="_blank" rel="noopener noreferrer"/>
        <BottomNavigationAction label="Contact" icon={<ContactMailIcon />} />
      </BottomNavigation>
    </Box>

    </>
  )
}

export default Intro