import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import VideoCameraBackSharpIcon from '@mui/icons-material/VideoCameraBackSharp';
import Link from 'next/link';

const pages = ['Products', 'Pricing', 'Blog'];

const Header: React.FC = () => {

    return(
        <AppBar className="sticky top-0 z-50">
            <Container maxWidth="xl">
                <Toolbar>
                    <VideoCameraBackSharpIcon />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                          mr: 2,
                          display: { xs: 'none', md: 'flex' },
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.3rem',
                          color: 'inherit',
                          textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography> 
                </Toolbar>
            </Container>
        </AppBar>
        
    )
}

export default Header