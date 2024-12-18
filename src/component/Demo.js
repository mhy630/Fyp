import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

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
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.8), rgba(0, 0, 0, 1))',
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
          
          {/* Gradient Card Overlay on Video */}
          <Card sx={{ minHeight: '280px', width: 320, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <CardCover>
              <img
                src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
              }}
            />
            <CardContent sx={{ justifyContent: 'flex-end' }}>
              <Typography level="title-lg" textColor="#fff">
                Demo Location
              </Typography>
              <Typography
                startDecorator={<LocationOnRoundedIcon />}
                textColor="neutral.300"
              >
                Location, Country
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default DemoVideo;
