import React from "react";
import { Container, Typography, Box } from "@mui/material";

const AboutPage = () => {
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero nec lorem interdum, et efficitur neque condimentum.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Fusce vel gravida ante, at convallis quam.
          Donec mollis vehicula ante, nec consequat elit scelerisque nec.
          Vestibulum hendrerit, ex at vestibulum scelerisque, ipsum lectus
          consequat ligula, vel tincidunt nisi lectus non lacus. Aliquam erat
          volutpat. Nunc imperdiet nulla at lorem volutpat, vel bibendum nisi
          elementum. Pellentesque suscipit dui sed ante volutpat, sed cursus
          sem dictum. In hac habitasse platea dictumst. Duis in est et leo
          porttitor auctor. Nam interdum varius dui, vitae pellentesque ante
          vehicula sed.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
