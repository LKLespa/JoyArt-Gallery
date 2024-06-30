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
  IconButton,
  Button,
  Grid,
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShareIcon from "@mui/icons-material/Share";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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

changeTitle("Joy Art Gallery | Art Details");

const arts = [
  {
    id: 1,
    images: [pic1, pic2, pic3],
    title: "Beautiful Sunset",
    description: "A beautiful sunset over the mountains.",
    artist: {
      name: "John Doe",
      bio: "John Doe is a renowned landscape artist.",
      avatar: pic2,
    },
    price: "$100",
  },
  // Add more art objects as needed
];

const ArtDetailsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
});

const ArtCard = styled(Card)({
  maxWidth: 800,
  margin: "20px",
  position: "relative",
});

const ArtistInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
  cursor: "pointer",
});

const ArtActions = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "20px",
});

const StyledIconButton = styled(IconButton)({
  color: "primary.main",
});

const ImageGrid = styled(Grid)({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "10px",
});

export default function ArtsPage() {
  const art = arts[0]; // In a real application, this would be dynamically set
  changeTitle('Joy Art | Art Details');
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handlePurchaseClick = () => {
    setPurchaseOpen(true);
  };

  const handlePurchaseClose = () => {
    setPurchaseOpen(false);
  };

  return (
    <Container>
      <ArtDetailsContainer>
        <Typography variant="h4" align="center">
          {art.title}
        </Typography>
        <ArtCard>
        <ArtistInfo onClick={() => navigate('/artist/892')}>
              <AccountCircleIcon sx={{ fontSize: 40, mr: 1 }} />
              <Box>
                <Typography variant="body2">{art.artist.name}</Typography>
                <Typography variant="caption">{art.artist.bio}</Typography>
              </Box>
            </ArtistInfo>
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
            <Typography variant="h5" color="secondary" sx={{ mt: 2 }}>
              {art.price}
            </Typography>
            <ArtActions>
              <StyledIconButton aria-label="like">
                <FavoriteIcon />
              </StyledIconButton>
              <StyledIconButton aria-label="add to cart">
                <ShoppingCartIcon />
              </StyledIconButton>
              <StyledIconButton aria-label="share">
                <ShareIcon />
              </StyledIconButton>
              <Button
                variant="contained"
                color="primary"
                startIcon={<MonetizationOnIcon />}
                onClick={handlePurchaseClick}
              >
                Purchase
              </Button>
            </ArtActions>
          </CardContent>
        </ArtCard>
      </ArtDetailsContainer>
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
      <Dialog open={purchaseOpen} onClose={handlePurchaseClose} maxWidth="sm">
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            Purchase Art
          </Typography>
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Credit Card Number"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePurchaseClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePurchaseClose} color="primary">
            Purchase
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
