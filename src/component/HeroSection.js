import React, { useState, useEffect } from 'react'; 
import { Box, Typography, Button, Container } from '@mui/material';

const backgrounds = [
  'https://images.pexels.com/photos/18614278/pexels-photo-18614278.jpeg', // Football image 1
  'https://images.pexels.com/photos/3886235/pexels-photo-3886235.jpeg', // Football image 2
  'https://images.pexels.com/photos/1657328/pexels-photo-1657328.jpeg', // Football image 3
];

export default function HeroSection() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const preloadImages = () => {
      backgrounds.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        height: 'calc(100vh - 80px)', // Subtract Navbar height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingX: { xs: 2, md: 4 },
        backgroundImage: `url(${backgrounds[currentBgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <Container>
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '3rem' },
              color: '#fff',
            }}
          >
            Revolutionize Football Analytics
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{
              color: '#fff',
              mb: 3,
            }}
          >
            Real-time player tracking, tactical analysis, and actionable insights powered by AI.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              backgroundColor: '#ff9800',
              ':hover': { backgroundColor: '#f57c00' },
              fontWeight: 'bold',
              paddingX: 4,
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
    
  );
}
 
