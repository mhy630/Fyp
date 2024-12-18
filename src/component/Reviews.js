import React, { useState } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const reviewsData = [
  {
    name: 'John Doe',
    review: 'This product is amazing! It solved all my problems and works perfectly.',
  },
  {
    name: 'Jane Smith',
    review: 'A great experience! Highly recommend it to everyone looking for a solution.',
  },
  {
    name: 'Michael Brown',
    review: 'Excellent product, but there is room for improvement. Overall, great value.',
  },
];

const ReviewsSlider = () => {
  const [activeReview, setActiveReview] = useState(0);

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setActiveReview(
      (prev) => (prev - 1 + reviewsData.length) % reviewsData.length
    );
  };

  return (
    <Box sx={{ backgroundColor: '#f8f8f8', padding: '40px 0' }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
          What Our Customers Are Saying
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
            width: '80%',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <IconButton
            sx={{ position: 'absolute', left: '-40px' }}
            onClick={prevReview}
          >
            <ArrowBack />
          </IconButton>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {reviewsData[activeReview].name}
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', marginTop: '10px' }}>
              "{reviewsData[activeReview].review}"
            </Typography>
          </Box>
          <IconButton
            sx={{ position: 'absolute', right: '-40px' }}
            onClick={nextReview}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewsSlider;
