import React from 'react';
import { AppBar, Toolbar, Typography, styled, Box } from '@mui/material';

const HeaderBar = styled(AppBar)({
    position: 'fixed',
    borderRadius: '50px', // Pill shape
    background: '#333', // Background color
    color: '#fff', // Text color
    marginLeft: 'auto',
    marginRight: 'auto',
    opacity: '80%',
    transition: 'width 0.2s ease-out',
    overflow: 'hidden',
    top: '1.1vh',
    left: '0'
});



export default function Header({ showHeader }) {
  return (
    <HeaderBar position="sticky" sx={{width: showHeader ? '80%' : '0px'}}>
        <Toolbar sx={{ width: '80%', overflow: 'hidden' }}>
            <Typography variant="h6" >
              Your Website Name
            </Typography>
            {/* Add other header content here */}
        </Toolbar>
    </HeaderBar>
  );
};
