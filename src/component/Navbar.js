import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      color="primary"
      sx={{
        backgroundColor: "#1c1c1c",
        zIndex: 1100, // Ensure it's above other elements
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            height: "80px", // Increase height of the navbar
            display: "flex",
            justifyContent: "space-between", // Space out elements correctly
            alignItems: "center", // Align items vertically in the center
          }}
        >
          {/* Home Icon with hover effect */}
          <IconButton
            edge="start"
            sx={{
              mr: 2,
              color: "#fff",
              fontSize: "2rem", // Increase icon size
              transition: "transform 0.3s ease, color 0.3s ease",
              "&:hover": { transform: "scale(1.2)", color: "#f0f0f0" },
            }}
          >
            <HomeIcon fontSize="large" />
          </IconButton>

          {/* Title with bold and larger font */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold", // Make it bold
              color: "#fff",
              cursor: "pointer", // Add pointer on hover for better UX
              transition: "color 0.3s ease",
              "&:hover": { color: "#f39c12" }, // Hover effect only on the text
              display: "inline-block", // Ensure the title occupies only the space it needs
              marginRight: "auto", // Push title to the left side
            }}
          >
            PitchVision
          </Typography>

          {/* Button Group */}
          <div
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Features Link */}
            <ScrollLink
              to="features-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  mr: 3, // Spacing between the buttons
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#f39c12",
                    transform: "scale(1.1)",
                    boxShadow: "0 4px 15px rgba(243,156,18,0.4)",
                  },
                }}
              >
                Features
              </Button>
            </ScrollLink>

            {/* Pricing Link */}
            <ScrollLink
              to="pricing-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  mr: 3, // Spacing between the buttons
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#f39c12",
                    transform: "scale(1.1)",
                    boxShadow: "0 4px 15px rgba(243,156,18,0.4)",
                  },
                }}
              >
                Pricing
              </Button>
            </ScrollLink>

            {/* Sign Up Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f39c12",
                color: "#fff",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  color: "#4f4f4f",
                  transform: "scale(1.1)",
                  boxShadow: "0 4px 15px rgba(243,156,18,0.4)",
                },
              }}
            >
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
