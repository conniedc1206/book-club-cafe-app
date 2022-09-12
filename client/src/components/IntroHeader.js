import {
    AppBar,
    Typography,
    Link,
    Box,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Drawer,
    Button,
  } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from '../styles/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
  
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
  
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
  
const IntroHeader = (props) => {
  const classes = useStyles();
  const links = [
    { id: 1, route: 'Login', url: '/login' },
    { id: 2, route: 'Signup', url: '/signup' },
  ];

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((link) => (
          <ListItem button key={link.id}>
            <ListItemText primary={link.route} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ marginBottom: '70px' }}>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolBar}>
            <Link underline="none">
              <Typography variant="h6" className={classes.logo}>
              Book Club Cafe
              </Typography>
            </Link>

            {matches ? (
              <Box>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer('right', true)}
              >
                <MenuIcon className={classes.menuIcon} fontSize="" />
              </IconButton>

              <Drawer
                anchor="right"
                open={state['right']}
                onClose={toggleDrawer('right', false)}
              >
                {list('right')}
              </Drawer>
            </Box>
            ): <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexGrow: '0.02',
              }}
            >
              {links.map((link) => (
                <Button type='submit' color='secondary' variant="contained" component={RouterLink} to={link.url} key={link.id}>
                  <Typography className={classes.link}>{link.route}</Typography>
                </Button>
              ))}
            </Box>}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};
  
  export default IntroHeader;