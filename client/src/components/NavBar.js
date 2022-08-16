import React, { useState } from 'react';
import { useNavigate,  Link as RouterLink } from 'react-router-dom'
import { AppBar, Box, Toolbar, IconButton, Menu, Container, Avatar, Button, Tooltip, MenuItem, Typography, Icon, Link } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  {
    name: 'Explore',
    link: '/home'
  },
  {
    name: 'My Book Clubs',
    link: '/mybookclubs'
  },
];

const NavBar = ({currentUser}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // logout button
  const handleLogOut = () => {
  // DELETE `/logout`
  fetch('/logout', {
    method: 'DELETE'
  })
  // setCurrentUser(false)
  // navigate("/")
  };
  
  return (
    <AppBar position="static">
      <Container maxWidth="false">
        <Toolbar disableGutters >
          <Icon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
              <img src="/smallfantasyicon.png" alt="icon"/>
          </Icon>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link underline="none" color="inherit" textAlign="center" component={RouterLink} to={page.link}>{page.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link underline="none" color="inherit" textAlign="center" component={RouterLink} to={page.link}>{page.name}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="current user" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem component={RouterLink} to="/myaccount" onClick={() => {
              setAnchorElUser(null)}}>My account</MenuItem>
              <MenuItem component={RouterLink} to="/" onClick={handleLogOut}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
  </AppBar>
  );
}

export default NavBar