import React, { Component, ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';

interface Props {
    window?: () => Window;
}
const drawerWidth = 240;
const navItems = ['ABOUT', 'QUALIFICATION', 'SKILLS', 'SERVICE', 'PORTFOLIO', 'CONTACT'];

export default function Header(props: Props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, cursor: 'pointer', color: '#20C5FA', fontWeight: 600, fontSize: '20px' }}>
                <Link onClick={handleDrawerToggle} to={"banner"} smooth={true}>
                    Sanchit
                </Link>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, idx) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton key={idx} sx={{ textAlign: 'center' }}>
                            <Link onClick={handleDrawerToggle} key={idx} to={item.toLowerCase()} smooth={true} duration={500}>
                                <ListItemText primary={item} >
                                    {item}
                                </ListItemText>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component='div' sx={{ backgroundColor: '#fff', boxShadow: '9', overflow: 'hidden' }}>
                    <Toolbar>
                        <IconButton
                            color='default'
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ color: { sm: '#20C5FA' }, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h1"
                            component="div"
                            // onClick={navigateToSkills}
                            sx={{ cursor: 'pointer', flexGrow: 1, mx: { lg: 22, md: 15, sm: 1 }, color: '#20C5FA', fontWeight: 600, fontSize: { lg: '28px', xs: '22px' }, display: { xs: 'none', sm: 'block' } }}
                        >
                            <Link to={"banner"} smooth={true}>
                                Sanchit
                            </Link>
                        </Typography>
                        <Box sx={{ mr: { lg: 15, md: 2, sm: 2, xs: 1 }, display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((title: any, idx: any) => (
                                <Link key={idx} spy={true} to={title.toLowerCase()} smooth={true} duration={500}>
                                    <Button key={idx} sx={{ mr: { lg: 1.7, xs: 0 }, color: 'black', fontWeight: '20px' }}>
                                        {title}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        anchor='right'
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </>
    );
}

