import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {Jumbotron, Container} from 'react-bootstrap'
import { Typography, Box, AppBar, Toolbar, Icon, Stack, Button  } from '@mui/material'

const Intro = () => {
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

        <Jumbotron fluid style={{ backgroundImage: `url(https://i.imgur.com/HJnlvq0.png)`, backgroundSize: 'cover' }}>
            <Container>         
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
            </Container>
        </Jumbotron>

        <br/> <br/>

        <Jumbotron fluid style={{ backgroundImage: `url(https://i.imgur.com/VJYdH14.png)`, backgroundSize: 'cover' }}>
            <Container>         
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
            </Container>
        </Jumbotron>

        <br/> <br/>

        <Jumbotron fluid style={{ backgroundImage: `url(https://i.imgur.com/atWUgvd.png)`, backgroundSize: 'cover' }}>
            <Container>         
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
            </Container>
        </Jumbotron>

    </>
  )
}

export default Intro