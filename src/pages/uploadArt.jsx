import React, { useState } from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Grid,
  CardMedia,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import changeTitle from "../functions/changeTitle";

changeTitle("Joy Art Gallery | Upload Art");

const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
});

const UploadCard = styled(Card)({
  maxWidth: 800,
  margin: "20px",
  padding: "20px",
});

const ImageGrid = styled(Grid)({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "10px",
});

export default function UploadArtPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files).slice(0, 3);

    setSelectedImages(fileArray);

    const previews = fileArray.map((file) =>
      URL.createObjectURL(file)
    );
    setImagePreviews(previews);
  };

  const handleSubmit = () => {
    // Handle the submission logic here
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Selected Images:", selectedImages);
  };

  return (
    <Container>
      <FormContainer>
        <UploadCard>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Upload New Art
            </Typography>
            <TextField
              label="Art Title"
              fullWidth
              margin="normal"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="Description"
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              variant="contained"
              component="label"
              sx={{ mt: 2 }}
            >
              Select Images
              <input
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
            <ImageGrid container spacing={2}>
              {imagePreviews.map((image, index) => (
                <Grid item xs={4} key={index}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={`selected-image-${index}`}
                    sx={{ borderRadius: "8px", mt: 2 }}
                  />
                </Grid>
              ))}
            </ImageGrid>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
              onClick={handleSubmit}
            >
              Upload Art
            </Button>
          </CardContent>
        </UploadCard>
      </FormContainer>
    </Container>
  );
}
