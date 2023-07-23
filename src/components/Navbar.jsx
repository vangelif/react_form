import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6" component={Link} to="/" sx={{ mr: 8 }}>
          Home
        </Typography>
        <Typography variant="h6" component={Link} to="/register" sx={{ mr: 8 }}>
          Register
        </Typography>
        <Typography variant="h6" component={Link} to="/user-settings" sx={{ mr: 8 }}>
          Profile
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
