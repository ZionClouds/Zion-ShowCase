import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem, TextField, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import zionLogo from '../assets/icons/zion ai black-01.png'; // Replace with actual path to logo

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ background: 'white' }}>
      <Toolbar>
        {/* Mobile Burger Menu */}
        <IconButton
          color="black"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleMobileMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu Items */}
        <Menu
          anchorEl={mobileMenuAnchorEl}
          open={Boolean(mobileMenuAnchorEl)}
          onClose={handleMobileMenuClose}
        >
          <MenuItem onClick={handleMobileMenuClose}>
            <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>
            <Link to="/help" style={{ textDecoration: 'none', color: 'black' }}>Help</Link>
          </MenuItem>
        </Menu>

        {/* Logo and App Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={zionLogo} alt="ZionAI Logo" style={{ width: '120px', marginRight: '10px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              UI Project
            </Link>
          </Typography>
        </Box>

        {/* Desktop Navigation Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Button color="inherit" sx={{ mx: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
          </Button>
          <Button color="inherit" sx={{ mx: 1 }} onClick={handleMenuOpen} style={{ textDecoration: 'none', color: 'black' }}>Projects</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ 'aria-labelledby': 'projects-button' }}
          >
            <MenuItem onClick={handleMenuClose}><Link to="https://knowledge-base-app-848342910896.us-central1.run.app/" target='_blank' style={{ textDecoration: 'none', color: 'black' }}>Knowledge Base</Link></MenuItem>
            <MenuItem onClick={handleMenuClose}><Link to="https://zionai-knowledge-assistant.kindpond-7b48492d.eastus.azurecontainerapps.io/" target='_blank' style={{ textDecoration: 'none', color: 'black' }}>Knowledge Assistant</Link></MenuItem>
            <MenuItem onClick={handleMenuClose}><Link to="https://document-summarizer-app-848342910896.us-central1.run.app/" target='_blank' style={{ textDecoration: 'none', color: 'black' }}>Document Summarizer</Link></MenuItem>
          </Menu>
          <Button color="inherit" sx={{ mx: 1 }}>
            <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About Us</Link>
          </Button>
          <Button color="inherit" sx={{ mx: 1 }}>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact Us</Link>
          </Button>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            sx={{ ml: 2, backgroundColor: 'white', borderRadius: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
