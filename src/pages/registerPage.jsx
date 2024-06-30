import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Stack,
  InputLabel,
  TextField,
  Typography,
  Avatar,
  MenuItem,
  Select,
  Grid,
} from "@mui/material";
import { abstractBackground1 } from "../assets";
import { Link as ReactLink } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("client");
  const [profileImage, setProfileImage] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here
    console.log(`Email: ${email}, Password: ${password}, UserType: ${userType}`);
  };

  const textFieldStyles = {
    borderRadius: 20,
    marginBottom: 15,
  };

  return (
    <Box
      className="register-page"
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url("${abstractBackground1}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "20px",
        backgroundColor: 'green',
      }}
    >
        <Box sx={{
            width: {
                xs: "400px",
                md: "700px",
            },
            minWidth: "250px",
            border: "2px solid white",
            padding: 7,
            borderRadius: 3,
        }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ textAlign: "center" }}>
              {profileImage ? (
                <Avatar
                  alt="Profile Image"
                  src={profileImage}
                  sx={{ width: 150, height: 150, marginBottom: 2 }}
                />
              ) : (
                <Avatar
                  alt="Profile Placeholder"
                  sx={{ width: 150, height: 150, backgroundColor: "#757575", marginBottom: 2 }}
                >
                  <Typography variant="h4" sx={{ color: "#ffffff" }}>
                    Upload Photo
                  </Typography>
                </Avatar>
              )}
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="profile-image-upload"
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="profile-image-upload">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  fullWidth
                  sx={{ borderRadius: 20 }}
                >
                  Choose Photo
                </Button>
              </label>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2} alignItems="center" sx={{ mt: 3 }}>
                <Typography variant="h4" sx={{ color: "#333333", textAlign: "center" }}>
                  Register
                </Typography>
                <FormControl fullWidth sx={textFieldStyles}>
                  <InputLabel id="user-type-label">User Type</InputLabel>
                  <Select
                    labelId="user-type-label"
                    id="user-type"
                    value={userType}
                    onChange={handleUserTypeChange}
                    label="User Type"
                  >
                    <MenuItem value="client">Client</MenuItem>
                    <MenuItem value="buyer">Buyer</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  fullWidth
                  sx={textFieldStyles}
                />
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  fullWidth
                  sx={textFieldStyles}
                />
                <TextField
                  label="Retype Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  fullWidth
                  sx={textFieldStyles}
                />
                <Stack
                  direction="row"
                  sx={{ justifyContent: "space-between", alignItems: "center", width: "100%"}}
                >
                  <Checkbox />
                  <Typography sx={{flexGrow: 1, textAlign: 'left'}}>Remember Me</Typography>
                </Stack>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ borderRadius: 20, mt: 2 }}>
                  Create Account
                </Button>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Already have an account?{" "}
                  <ReactLink to="/login" style={{ textDecoration: "none", color: "#1976d2" }}>
                    Sign in here
                  </ReactLink>
                </Typography>
              </Stack>
            </form>
          </Grid>
        </Grid>
        </Box>
    </Box>
  );
}

export default RegisterPage;
