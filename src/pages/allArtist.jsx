import React, { useState } from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import changeTitle from "../functions/changeTitle";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  pic2,
  pic4,
  pic6,
  pic8,
  pic10,
} from "../assets"; // Import artist images or avatars

changeTitle("Joy Art Gallery | All Artists");

const artists = [
  {
    id: 1,
    name: "John Doe",
    avatar: pic2,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: pic4,
    rating: 4.0,
  },
  {
    id: 3,
    name: "Emily Johnson",
    avatar: pic6,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Michael Brown",
    avatar: pic8,
    rating: 4.2,
  },
  {
    id: 5,
    name: "Sarah Davis",
    avatar: pic10,
    rating: 4.6,
  },
  // Add more artists as needed
];

const ArtistsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
});

const ArtistCard = styled(Card)({
  width: 300,
  margin: "10px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer", // Add cursor pointer to indicate clickability
  "&:hover": {
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", // Add hover effect
  },
});

export default function ArtistsPage() {
  return (
    <Container>
      <ArtistsContainer>
        <Typography variant="h4" align="center" gutterBottom>
          All Artists
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {artists.map((artist) => (
            <Grid item key={artist.id}>
              <Link to={`/artist/${artist.id}`} style={{ textDecoration: 'none' }}>
                <ArtistCard>
                  <CardContent>
                    <Avatar
                      src={artist.avatar}
                      alt={artist.name}
                      sx={{ width: 100, height: 100, mb: 2 }}
                    />
                    <Typography variant="h6">{artist.name}</Typography>
                    <Rating name="artist-rating" value={artist.rating} precision={0.1} readOnly />
                  </CardContent>
                </ArtistCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </ArtistsContainer>
    </Container>
  );
}
