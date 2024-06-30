import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  CardMedia,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import changeTitle from "../functions/changeTitle";
import Item from "./item";
import StyledCard from "../components/styled_card";
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

changeTitle("Joy Art Gallery | ProfilePage");

const images = [
  { id: 1, url: pic1, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe" },
  { id: 2, url: pic2,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe" },
  { id: 3, url: pic3,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe" },
  { id: 4, url: pic4,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe" },
  { id: 5, url: pic5,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe" },
  { id: 6, url: pic6,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe" },
  { id: 7, url: pic7,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe" },
  { id: 8, url: pic8,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe" },
  { id: 9, url: pic9,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe" },
  { id: 10, url: pic10,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe"  },
  { id: 11, url: pic11,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe"  },
  { id: 12, url: pic12,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe"  },
  { id: 13, url: pic13,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe"  },
  { id: 14, url: pic14,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe"  },
  { id: 15, url: pic16,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe"  },
  { id: 16, url: pic17,  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi eos consequuntur odio repudiandae mollitia quaerat, nihil aspernatur! Dolorum, facere.", name: "John Doe"  },
  // Add more images as needed
];

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  color: "white",
  opacity: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "opacity 0.3s ease-in-out",
});

const OverlayTop = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "8px",
});

const OverlayBottom = styled(Box)({
  padding: "8px",
});

const CenteredContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
});

export default function HomePage() {
  const navigate = useNavigate();
  changeTitle("JoyArt | Home ");
  return (
    <Box sx={{ height: "100%", overflow: "auto" }}>
      <CenteredContainer>
        <Typography variant="h5" align="center" gutterBottom sx={{}}>
          Browse JoyArt Gallery
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Search..."
          sx={{ width: "300px", mt: 2, mb: 4, '& .MuiOutlinedInput-root': {
                            borderRadius: '100px', padding: '-5px',
                        }, }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Masonry columns={4} spacing={2}>
          {images.map((image) => (
            <Item key={image.id} columnSpan={1}>
              <StyledCard className="hover-expand" onClick={() => navigate(`/art/${image.id}`)}>
                <CardMedia
                  component="img"
                  image={image.url}
                  alt={image.title}
                />
                <Overlay className="overlay">
                  <OverlayTop>
                    <IconButton sx={{ color: "white" }}>
                      <AccountCircleIcon sx={{fontSize: 40}} />
                    </IconButton>
                    <Box>
                    <Typography variant="body2" align="left">{image.name}</Typography>
                    <Typography variant="body2" align="left">{new Date().toLocaleDateString()}</Typography>
                    </Box>
                  </OverlayTop>
                  <OverlayBottom>
                    <Typography variant="body2">{image.title}</Typography>
                  </OverlayBottom>
                </Overlay>
              </StyledCard>
            </Item>
          ))}
        </Masonry>
      </CenteredContainer>
    </Box>
  );
}
