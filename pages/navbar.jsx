// create a navigation for navigating to home, profile and about us page. Use NavLinks

import { AppBar, Toolbar, Typography, Grid, TextField } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

const styles = {
    navbar: {
        padding: '10px 20px',
    },
    navLinks: {
        display: 'flex',
        listStyleType: 'none',
        padding: 0,
    },
    linkHover: {
        color: '#ffeb3b', // Yellow color on hover
    },
    buttonHover: {
        backgroundColor: '#1976d2',
        color: '#fff',
    },
    navItem: {
        marginRight: 20,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: 18,
        fontWeight: 'bold',
    },
    searchBar: {
        marginLeft: 'auto',
        marginRight: 20,
        width: 300,
    },
    collectionItem: {
        marginBottom: 20,
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: 8,
    },
};

const collectionItems = [
    { id: 1, imageUrl: 'https://example.com/image1.jpg', title: 'Artwork 1' },
    { id: 2, imageUrl: 'https://example.com/image2.jpg', title: 'Artwork 2' },
    { id: 3, imageUrl: 'https://example.com/image3.jpg', title: 'Artwork 3' },
    { id: 4, imageUrl: 'https://example.com/image4.jpg', title: 'Artwork 4' },
    { id: 5, imageUrl: 'https://example.com/image5.jpg', title: 'Artwork 5' },
];

export default function Navbar() {
    return (
        <div>
            <AppBar position="static" style={styles.navbar}>
                <Toolbar>
                    <Typography variant="h6" style={{ marginRight: 20 }}>Art Gallery</Typography>
                    <ul style={styles.navLinks}>
                        <li style={styles.navItem}><NavLink to="/home" style={styles.link}>Home</NavLink></li>
                        <li style={styles.navItem}><NavLink to="/about-us" style={styles.link}>About Us</NavLink></li>
                        <li style={styles.navItem}><NavLink to="/collection" style={styles.link}>Collection</NavLink></li>
                    </ul>
                    <TextField placeholder="Search..." variant="outlined" size="small" style={styles.searchBar} />
                </Toolbar>
            </AppBar>
            
            <Outlet />
        </div>
    );
}
