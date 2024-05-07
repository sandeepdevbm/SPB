import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Hidden, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { lv } from '../assets';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
            {/* Logo */}
          <IconButton edge="start" color="inherit" aria-label="menu">
          <img src={lv} alt="Logo" style={{ height: '55px' }} />
          </IconButton>

          {/* <Typography variant="h6" noWrap sx={{ display: { xs: 'none', md: 'block' } }}>
            Your Website
          </Typography> */}

          {/* Hamburger Menu Icon */}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            edge="right"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { sm: 'none' } }} // Hide on screens larger than md (medium)
          >
            <MenuIcon />
          </IconButton>

          
          {/* Navigation Links (Visible on Medium and Larger Screens) */}
          <Hidden smDown>
            <Typography variant="h6" noWrap>
              {/* <Button color="inherit" sx={{color:'#03a9f4', textShadow: '0px 0px 4px #4dd0e1'}}>About Us</Button>
              <Button color="inherit" sx={{color:'#03a9f4', textShadow: '0px 0px 4px #4dd0e1'}}>About Us</Button> */}
              <Button color="inherit" >About Us</Button>
              <Button color="inherit">Help</Button>
            </Typography>
          </Hidden>

          {/* Login Button (Visible on Medium and Larger Screens) */}
          <Hidden smDown>
            {/* <Button color="inherit" sx={{color:'#03a9f4', textShadow: '0px 0px 4px #4dd0e1'}}>Login</Button> */}
            <Button color="inherit">Login</Button>
          </Hidden>
        </Toolbar>
      </AppBar>

      {/* Drawer (Hamburger Menu) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
            '& .MuiDrawer-paper': {
              height:'15rem',
              width:'8rem' 
            },
          }}
      >
        <List>
          <ListItem  onClick={toggleDrawer}>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem onClick={toggleDrawer}>
            <ListItemText primary="Help" />
          </ListItem>
          <ListItem  onClick={toggleDrawer}>
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default Navbar;
