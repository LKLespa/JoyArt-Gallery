import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, CardMedia, TextField } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import changeTitle from '../functions/changeTitle'; // Assuming changeTitle function is correctly implemented
import Item from './item';

const styles = {
    profileContainer: {
        padding: 20,
    },
    profileCard: {
        marginBottom: 20,
    },
    profileImage: {
        height: 200,
        objectFit: 'cover',
    },
    biography: {
        marginBottom: 20,
    },
    location: {
        marginBottom: 20,
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: 8,
    },
};

const profileImages = [
    { id: 1, imageUrl: 'https://example.com/profile-image1.jpg', title: 'Profile Image 1' },
    { id: 2, imageUrl: 'https://example.com/profile-image2.jpg', title: 'Profile Image 2' },
    { id: 3, imageUrl: 'https://example.com/profile-image3.jpg', title: 'Profile Image 3' },
];

function ProfilePage() {
    useEffect(() => {
        changeTitle("Joy Art Gallery | ProfilePage");
    }, []);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Profile Page</Typography>
                </Toolbar>
            </AppBar>

            <Grid container justify="center" style={styles.profileContainer}>
                <Grid item xs={12} md={6}>
                    <Card style={styles.profileCard}>
                        <CardMedia
                            component="img"
                            image="https://example.com/profile-picture.jpg" // Replace with actual profile picture URL
                            alt="Profile Picture"
                            style={styles.profileImage}
                        />
                        <CardContent>
                            <Typography variant="h5" gutterBottom>Artist Biography</Typography>
                            <Typography variant="body1" style={styles.biography}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                            </Typography>
                            <Typography variant="h6" gutterBottom>Location</Typography>
                            <Typography variant="body1" style={styles.location}>
                                New York, USA
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} style={{ marginTop: 20 }}>
                    <Typography variant="h4" gutterBottom>Gallery</Typography>
                    <Masonry>
                        {profileImages.map(item => (
                            <Item key={item.id} style={{ ...styles.image, marginBottom: 20 }} columnSpan={1}>
                                <img src={item.imageUrl} alt={item.title} style={styles.image} />
                            </Item>
                        ))}
                    </Masonry>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProfilePage;
