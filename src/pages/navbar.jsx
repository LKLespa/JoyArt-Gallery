// create a navigation for navigating to home, profile and about us page. Use NavLinks

import { Favorite, Nightlight, ShoppingBasket, ShoppingCart } from '@mui/icons-material';
import { Avatar, Toolbar, Typography, Grid, TextField, Stack, Box, Button, IconButton } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <Stack sx={{height: '100vh', width: '100%'}}>
                <Toolbar>
                <Stack direction='row' justifyContent={'space-between'} alignItems={'center'} sx={{width: '100%'}}>
                <Typography variant="h6" fontStyle='bold' style={{ marginRight: 20, width: 'fit-content' }}>JoyArt Gallery</Typography>
                    <Stack spacing={2} direction='row' justifyContent={'center'} sx={{width: '100%'}}>
                        <NavLink to="/"><Button>Home</Button></NavLink>
                        <NavLink to="/artists"><Button>Artist</Button></NavLink>
                        <NavLink to="/collections"><Button>Collections</Button></NavLink>
                        <NavLink to="/about-us"><Button>About Us</Button></NavLink>
                    </Stack>
                
                <Stack direction='row' justifyContent={'flex-end'} alignItems={'center'} sx={{width: 'fit-content'}}>
                    <IconButton>
                        <Nightlight />
                    </IconButton>
                    <IconButton>
                        <Favorite />
                    </IconButton>
                    <IconButton>
                        <ShoppingCart />
                    </IconButton>
                    <Avatar sx={{ width: 40, height: 40, cursor: 'pointer' }} onClick={() => navigate('/profile')} /> 
                </Stack>
                </Stack>
                </Toolbar>
            
            <Box sx={{
                overflow: 'auto',
                flexGrow: 1,
            }}>
                <Outlet />
            </Box>
            <footer>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    © {new Date().getFullYear()} JoyArt Image Gallery. All rights reserved.
                </Typography>
            </footer>
        </Stack>
    );
}
