import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Stack,
  useTheme,
  Box,
  Checkbox,
  Link,
} from "@mui/material";
import { abstractBackground1 } from "../assets";
import { Link as ReactLink } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const theme = useTheme();
  console.log(`Theme`, theme);

  const textFieldStyles = {
    borderRadius: 50,
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
      }}
    >
      <Box
        sx={{
          width: "400px",
          minWidth: "250px",
          border: "2px solid white",
          padding: 7,
          borderRadius: 3,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} alignItems="center">
            <Typography variant="h4" sx={{ color: "white" }}>
              Register
            </Typography>
            <TextField
              label="Name"
              type="name"
              value={email}
              onChange={handleEmailChange}
              fullWidth
              sx={textFieldStyles}
            />
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Create Account
            </Button>
            <ReactLink to={"/login"}><Link>Already have an account, sign in</Link></ReactLink>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default RegisterPage;
