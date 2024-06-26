import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Dialog,
  DialogContent,
  Avatar,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import changeTitle from "../functions/changeTitle";
import {
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic16,
  pic17,
} from "../assets";
import { useNavigate } from "react-router-dom";

changeTitle("Joy Art Gallery | Artist Profile");

const artist = {
  name: "John Doe",
  bio: "John Doe is a renowned landscape artist known for his vibrant and captivating paintings.",
  avatar: pic2,
  location: "New York, USA",
  arts: [
    {
      id: 1,
      images: [pic1, pic2, pic3],
      title: "Beautiful Sunset",
      description: "A beautiful sunset over the mountains.",
    },
    // Add more art objects as needed
  ],
};

const ProfileContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
});

const ProfileCard = styled(Card)({
  maxWidth: 800,
  margin: "20px",
  position: "relative",
});

const ArtistInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
});

const ImageGrid = styled(Grid)({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "10px",
});

const ArtDetailsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
});

export default function ProfilePage() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Container>
      <ProfileContainer>
        <ProfileCard>
          <CardContent>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Avatar
                src={artist.avatar}
                alt={artist.name}
                sx={{ width: 150, height: 150, mb: 2 }}
              />
              <Typography variant="h5">{artist.name}</Typography>
              <Typography variant="body1" align="center">
                {artist.bio}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 1 }}>
                Location: {artist.location}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => navigate('/add-art')}
              >
                Add New Art
              </Button>
            </Box>
          </CardContent>
        </ProfileCard>

        <Typography variant="h4" align="center" sx={{ mt: 4 }}>
          {artist.name}'s Art Collection
        </Typography>
        {artist.arts.map((art) => (
          <ArtDetailsContainer key={art.id}>
            <Typography variant="h4" align="center">
              {art.title}
            </Typography>
            <ProfileCard>
              <CardContent>
                <Typography variant="h6">Description</Typography>
                <Typography variant="body1">{art.description}</Typography>
                <ImageGrid container spacing={2}>
                  {art.images.map((image, index) => (
                    <Grid item xs={4} key={index}>
                      <CardMedia
                        component="img"
                        image={image}
                        alt={`art-image-${index}`}
                        sx={{ borderRadius: "8px", cursor: "pointer" }}
                        onClick={() => handleClickOpen(image)}
                      />
                    </Grid>
                  ))}
                </ImageGrid>
              </CardContent>
            </ProfileCard>
          </ArtDetailsContainer>
        ))}
      </ProfileContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected Art"
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
}
