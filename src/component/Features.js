import React from 'react';
import { Grid, Box, Typography, Card, CardContent } from '@mui/material';

const features = [
  {
    title: 'Real-Time Tracking',
    description: 'Monitor players and the ball with precision in real time.',
  },
  {
    title: 'Tactical Analysis',
    description: 'Get actionable insights to improve strategies and performance.',
  },
  {
    title: 'Offside Detection',
    description: 'Experience highly accurate detection of offside events.',
  },
  {
    title: 'Event Detection',
    description: 'Automatically identify and categorize match events.',
  },
  {
    title: 'Performance Monitoring',
    description: 'Track key metrics to analyze player and team performance.',
  },
];

export default function Features() {
  return (
    <Box
      id="features-section"  // Add this id for smooth scrolling
      sx={{
        py: 8,
        px: 4,
        backgroundColor: '#1e1e1e',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold', mb: 4, color: '#f39c12' }}
      >
        Key Features
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ mb: 6, color: '#b0b0b0' }}
      >
        Explore the powerful features designed to elevate your analysis.
      </Typography>

      {/* Features Grid */}
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: '#212121',
                color: '#fff',
                border: '1px solid #333',
                borderRadius: '8px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 15px rgba(0,0,0,0.5)',
                },
              }}
            >
              <CardContent>
                {/* Feature Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: '#f39c12',
                  }}
                >
                  {feature.title}
                </Typography>
                {/* Feature Description */}
                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
