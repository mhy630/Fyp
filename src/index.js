import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const DemoVideo = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#f9f9f9',
        padding: '60px 0',
        overflow: 'hidden',
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.8), rgba(33, 150, 243, 0.8))',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
            borderRadius: '20px',
            padding: '30px',
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 3,
          }}
        >
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              border: 'none',
              borderRadius: '10px',
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
            }}
          ></iframe>
          <Typography
            variant="h5"
            align="center"
            sx={{
              marginTop: '25px',
              fontWeight: 600,
              color: '#333',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Explore Our Demo
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              marginTop: '10px',
              color: '#555',
              fontSize: '16px',
            }}
          >
            See how our product works in action. This demo highlights the core features and functionality!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default DemoVideo;