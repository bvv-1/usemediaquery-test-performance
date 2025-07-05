"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const Hero = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Text Content */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Device-Optimized UI Testing
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Comparing different approaches to mobile and desktop UI optimization in Next.js App
            Router with Material-UI
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" size="large" sx={{ mr: 2, mb: { xs: 2, md: 0 } }}>
              Get Started
            </Button>
            <Button variant="outlined" size="large">
              Learn More
            </Button>
          </Box>
        </Box>

        {/* Image */}
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: 300, md: 400 },
              backgroundColor: "grey.100",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Hero Image Placeholder
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
