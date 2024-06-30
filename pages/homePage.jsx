import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia } from '@mui/material';
import { Masonry } from '@mui/lab';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { pic1, pic10, pic11, pic12, pic13, pic14, pic16, pic17, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9 } from '../assets';
import Item from './item';
import changeTitle from '../functions/changeTitle';

changeTitle("Joy Art Gallery | ProfilePage");

const path = './assets/temp_imgs/';
const images = [
    { id: 1, url: pic1, title: 'Image 1' },
    { id: 2, url: pic2, title: 'Image 2' },
    { id: 3, url: pic3, title: 'Image 3' },
    { id: 4, url: pic4, title: 'Image 4' },
    { id: 5, url: pic5, title: 'Image 5' },
    { id: 6, url: pic6, title: 'Image 6' },
    { id: 7, url: pic7, title: 'Image 7' },
    { id: 7, url: pic8, title: 'Image 8' },
    { id: 4, url: pic9, title: 'Image 9' },
    { id: 5, url: pic10, title: 'Image 10' },
    { id: 6, url: pic11, title: 'Image 11' },
    { id: 7, url: pic12, title: 'Image 12' },
    { id: 7, url: pic13, title: 'Image 13' },
    { id: 6, url: pic14, title: 'Image 14' },
    { id: 7, url: pic16, title: 'Image 16' },
    { id: 7, url: pic17, title: 'Image 17' },
    // Add more images as needed
];

export default function HomePage() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Image Gallery</Typography>
                    {/* Add navigation links here */}
                </Toolbar>
            </AppBar>
            <Container>
            <Typography variant="h4" gutterBottom style={{ marginBottom: 20 }}>Featured Collection</Typography>
                <Typography variant="h3" gutterBottom>Image Gallery</Typography>
                <Masonry>
                    {images.map((image) => (
                        <Item key={image.id} columnSpan={1}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={image.url}
                                    alt={image.title}
                                />
                            </Card>
                        </Item>
                    ))}
                </Masonry>
            </Container>
            <footer>
                <Typography variant="body2" align="center">
                    © {new Date().getFullYear()} Image Gallery. All rights reserved.
                </Typography>
            </footer>
        </div>
    );
}